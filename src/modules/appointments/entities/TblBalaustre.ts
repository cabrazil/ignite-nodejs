import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblBrother } from "./TblBrother";
import { TblGestao } from "./TblGestao";
import { TblGrau } from "./TblGrau";
import { TblLoja } from "./TblLoja";

@Index("tbl_balaustre_pkey", ["id"], { unique: true })
@Entity("tbl_balaustre", { schema: "arls" })
export class TblBalaustre {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "num_balaustre" })
  numBalaustre: number;

  @Column("date", { name: "dt_sessao" })
  dtSessao: string;

  @Column("integer", { name: "num_balau_lido", nullable: true })
  numBalauLido: number | null;

  @Column("character varying", { name: "tp_sessao", length: 70 })
  tpSessao: string;

  @Column("integer", { name: "num_land_lido" })
  numLandLido: number;

  @Column("date", { name: "aprovado_em", nullable: true })
  aprovadoEm: string | null;

  @Column("integer", { name: "num_balau_lido2", nullable: true })
  numBalauLido2: number | null;

  @Column("text", { name: "obs_balaustre", nullable: true })
  obsBalaustre: string | null;

  @Column("numeric", {
    name: "vlr_bolsa",
    nullable: true,
    precision: 9,
    scale: 2,
  })
  vlrBolsa: string | null;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBalaustres)
  @JoinColumn([{ name: "cargo_1v", referencedColumnName: "brotherId" }])
  cargo_1v: TblBrother;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBalaustres2)
  @JoinColumn([{ name: "cargo_2v", referencedColumnName: "brotherId" }])
  cargo_2v: TblBrother;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBalaustres3)
  @JoinColumn([{ name: "cargo_chc", referencedColumnName: "brotherId" }])
  cargoChc: TblBrother;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBalaustres4)
  @JoinColumn([{ name: "cargo_gt", referencedColumnName: "brotherId" }])
  cargoGt: TblBrother;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBalaustres5)
  @JoinColumn([{ name: "cargo_mcc", referencedColumnName: "brotherId" }])
  cargoMcc: TblBrother;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBalaustres6)
  @JoinColumn([{ name: "cargo_ora", referencedColumnName: "brotherId" }])
  cargoOra: TblBrother;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBalaustres7)
  @JoinColumn([{ name: "cargo_sec", referencedColumnName: "brotherId" }])
  cargoSec: TblBrother;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBalaustres8)
  @JoinColumn([{ name: "cargo_vm", referencedColumnName: "brotherId" }])
  cargoVm: TblBrother;

  @ManyToOne(() => TblGestao, (tblGestao) => tblGestao.tblBalaustres)
  @JoinColumn([{ name: "gestao_id", referencedColumnName: "id" }])
  gestao: TblGestao;

  @ManyToOne(() => TblGrau, (tblGrau) => tblGrau.tblBalaustres)
  @JoinColumn([{ name: "grau_id", referencedColumnName: "grauId" }])
  grau: TblGrau;

  @ManyToOne(() => TblLoja, (tblLoja) => tblLoja.tblBalaustres)
  @JoinColumn([{ name: "loja_id", referencedColumnName: "lojaId" }])
  loja: TblLoja;
}
