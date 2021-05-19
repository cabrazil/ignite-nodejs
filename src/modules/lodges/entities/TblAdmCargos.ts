import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblBrother } from "./TblBrother";
import { TblCargo } from "./TblCargo";
import { TblGestao } from "./TblGestao";
import { TblLoja } from "./TblLoja";

@Index("tbl_adm_cargos_pkey", ["id"], { unique: true })
@Entity("tbl_adm_cargos", { schema: "arls" })
export class TblAdmCargos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "adhoc_id", nullable: true })
  adhocId: number | null;

  @Column("character", { name: "ind_principal", nullable: true, length: 1 })
  indPrincipal: string | null;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblAdmCargos)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;

  @ManyToOne(() => TblCargo, (tblCargo) => tblCargo.tblAdmCargos)
  @JoinColumn([{ name: "cargo_id", referencedColumnName: "cargoId" }])
  cargo: TblCargo;

  @ManyToOne(() => TblGestao, (tblGestao) => tblGestao.tblAdmCargos)
  @JoinColumn([{ name: "gestao_id", referencedColumnName: "id" }])
  gestao: TblGestao;

  @ManyToOne(() => TblLoja, (tblLoja) => tblLoja.tblAdmCargos)
  @JoinColumn([{ name: "loja_id", referencedColumnName: "lojaId" }])
  loja: TblLoja;
}
