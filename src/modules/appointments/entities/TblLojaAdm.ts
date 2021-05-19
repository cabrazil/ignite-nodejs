import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblBrother } from "./TblBrother";
import { TblGestao } from "./TblGestao";
import { TblLoja } from "./TblLoja";
import { TblCargo } from "./TblCargo";

@Index("tbl_loja_adm_brother_id", ["brotherId"], {})
@Index("tbl_loja_adm_periodo_id", ["gestaoId"], {})
@Index("tbl_loja_adm_pkey", ["id"], { unique: true })
@Index("tbl_loja_adm_loja_id", ["lojaId"], {})
@Entity("tbl_loja_adm", { schema: "arls" })
export class TblLojaAdm {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "loja_id" })
  lojaId: number;

  @Column("integer", { name: "gestao_id" })
  gestaoId: number;

  @Column("integer", { name: "brother_id" })
  brotherId: number;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblLojaAdms)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;

  @ManyToOne(() => TblGestao, (tblGestao) => tblGestao.tblLojaAdms)
  @JoinColumn([{ name: "gestao_id", referencedColumnName: "id" }])
  gestao: TblGestao;

  @ManyToOne(() => TblLoja, (tblLoja) => tblLoja.tblLojaAdms)
  @JoinColumn([{ name: "loja_id", referencedColumnName: "lojaId" }])
  loja: TblLoja;

  @ManyToMany(() => TblCargo, (tblCargo) => tblCargo.tblLojaAdms)
  tblCargos: TblCargo[];
}
