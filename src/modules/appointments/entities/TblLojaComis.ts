import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblComiss } from "./TblComiss";
import { TblLoja } from "./TblLoja";
import { TblGestao } from "./TblGestao";
import { TblLojaComisBrothers } from "./TblLojaComisBrothers";

@Index("tbl_loja_comis_comis_id", ["comisId"], {})
@Index("tbl_loja_comis_pkey", ["id"], { unique: true })
@Index("tbl_loja_comis_loja_id", ["lojaId"], {})
@Index("tbl_loja_comis_periodo_id", ["periodoId"], {})
@Entity("tbl_loja_comis", { schema: "arls" })
export class TblLojaComis {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "loja_id" })
  lojaId: number;

  @Column("integer", { name: "periodo_id" })
  periodoId: number;

  @Column("integer", { name: "comis_id" })
  comisId: number;

  @ManyToOne(() => TblComiss, (tblComiss) => tblComiss.tblLojaComis)
  @JoinColumn([{ name: "comis_id", referencedColumnName: "id" }])
  comis: TblComiss;

  @ManyToOne(() => TblLoja, (tblLoja) => tblLoja.tblLojaComis)
  @JoinColumn([{ name: "loja_id", referencedColumnName: "lojaId" }])
  loja: TblLoja;

  @ManyToOne(() => TblGestao, (tblGestao) => tblGestao.tblLojaComis)
  @JoinColumn([{ name: "periodo_id", referencedColumnName: "id" }])
  periodo: TblGestao;

  @OneToMany(
    () => TblLojaComisBrothers,
    (tblLojaComisBrothers) => tblLojaComisBrothers.lojaComis
  )
  tblLojaComisBrothers: TblLojaComisBrothers[];
}
