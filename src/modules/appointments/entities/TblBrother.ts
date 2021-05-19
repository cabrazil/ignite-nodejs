import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAdmCargos } from "./TblAdmCargos";
import { TblBalaustre } from "./TblBalaustre";
import { TblGrau } from "./TblGrau";
import { TblLoja } from "./TblLoja";
import { TblBrotherDep } from "./TblBrotherDep";
import { TblBrotherEnd } from "./TblBrotherEnd";
import { TblBrotherEvo } from "./TblBrotherEvo";
import { TblBrotherTrab } from "./TblBrotherTrab";
import { TblGestao } from "./TblGestao";
import { TblLojaAdm } from "./TblLojaAdm";
import { TblLojaComisBrothers } from "./TblLojaComisBrothers";
import { TblPresenca2 } from "./TblPresenca2";
import { TblUsuario } from "./TblUsuario";

@Index("tbl_brother_pkey", ["brotherId"], { unique: true })
@Index("tbl_brother_grau_id", ["grauId"], {})
@Index("tbl_brother_loja_id", ["lojaId"], {})
@Entity("tbl_brother", { schema: "arls" })
export class TblBrother {
  @Column("integer", { primary: true, name: "brother_id" })
  brotherId: number;

  @Column("character varying", { name: "nome", length: 70 })
  nome: string;

  @Column("character", { name: "status", length: 1 })
  status: string;

  @Column("integer", { name: "loja_id" })
  lojaId: number;

  @Column("integer", { name: "grau_id" })
  grauId: number;

  @Column("integer", { name: "est_civil" })
  estCivil: number;

  @Column("integer", { name: "tipo_sang" })
  tipoSang: number;

  @Column("date", { name: "dt_nasc" })
  dtNasc: string;

  @Column("character varying", { name: "cid_nasc", length: 80 })
  cidNasc: string;

  @Column("character varying", { name: "uf_nasc", length: 2 })
  ufNasc: string;

  @Column("character varying", { name: "nacional", length: 40 })
  nacional: string;

  @Column("character varying", { name: "email", nullable: true, length: 75 })
  email: string | null;

  @Column("character varying", { name: "num_cpf", length: 14 })
  numCpf: string;

  @Column("character varying", { name: "num_rg", nullable: true, length: 12 })
  numRg: string | null;

  @Column("character varying", {
    name: "rg_emissor",
    nullable: true,
    length: 8,
  })
  rgEmissor: string | null;

  @Column("character varying", { name: "uf_rg", nullable: true, length: 2 })
  ufRg: string | null;

  @Column("character varying", { name: "num_cel", length: 11 })
  numCel: string;

  @Column("date", { name: "dt_form" })
  dtForm: string;

  @Column("date", { name: "dt_fundador", nullable: true })
  dtFundador: string | null;

  @Column("integer", { name: "peculio", nullable: true })
  peculio: number | null;

  @Column("date", { name: "dt_casam", nullable: true })
  dtCasam: string | null;

  @Column("character varying", { name: "nom_pai", nullable: true, length: 70 })
  nomPai: string | null;

  @Column("character varying", { name: "nom_mae", length: 70 })
  nomMae: string;

  @Column("character", { name: "pasmas", length: 1 })
  pasmas: string;

  @Column("character", { name: "ind_mensal", nullable: true, length: 1 })
  indMensal: string | null;

  @Column("character", { name: "ind_mutual", nullable: true, length: 1 })
  indMutual: string | null;

  @Column("character varying", {
    name: "nom_profiss",
    nullable: true,
    length: 60,
  })
  nomProfiss: string | null;

  @Column("smallint", { name: "escolar_id", nullable: true })
  escolarId: number | null;

  @Column("character varying", {
    name: "num_tit_eleitor",
    nullable: true,
    length: 16,
  })
  numTitEleitor: string | null;

  @Column("character", { name: "num_zona", nullable: true, length: 4 })
  numZona: string | null;

  @Column("character", { name: "num_secao", nullable: true, length: 4 })
  numSecao: string | null;

  @Column("timestamp without time zone", {
    name: "dt_ult_atual",
    nullable: true,
  })
  dtUltAtual: Date | null;

  @Column("character", { name: "ind_afast", nullable: true, length: 1 })
  indAfast: string | null;

  @Column("smallint", { name: "cargo_atual", nullable: true })
  cargoAtual: number | null;

  @Column("character", { name: "ind_fundador", nullable: true, length: 1 })
  indFundador: string | null;

  @Column("integer", { name: "grau_filos_id", nullable: true })
  grauFilosId: number | null;

  @Column("character varying", { name: "rne", nullable: true, length: 12 })
  rne: string | null;

  @Column("character varying", { name: "profiss", nullable: true, length: 50 })
  profiss: string | null;

  @Column("character varying", { name: "formacao", nullable: true, length: 50 })
  formacao: string | null;

  @OneToMany(() => TblAdmCargos, (tblAdmCargos) => tblAdmCargos.brother)
  tblAdmCargos: TblAdmCargos[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.cargo_1v)
  tblBalaustres: TblBalaustre[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.cargo_2v)
  tblBalaustres2: TblBalaustre[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.cargoChc)
  tblBalaustres3: TblBalaustre[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.cargoGt)
  tblBalaustres4: TblBalaustre[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.cargoMcc)
  tblBalaustres5: TblBalaustre[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.cargoOra)
  tblBalaustres6: TblBalaustre[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.cargoSec)
  tblBalaustres7: TblBalaustre[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.cargoVm)
  tblBalaustres8: TblBalaustre[];

  @ManyToOne(() => TblGrau, (tblGrau) => tblGrau.tblBrothers)
  @JoinColumn([{ name: "grau_id", referencedColumnName: "grauId" }])
  grau: TblGrau;

  @ManyToOne(() => TblLoja, (tblLoja) => tblLoja.tblBrothers)
  @JoinColumn([{ name: "loja_id", referencedColumnName: "lojaId" }])
  loja: TblLoja;

  @OneToMany(() => TblBrotherDep, (tblBrotherDep) => tblBrotherDep.brother)
  tblBrotherDeps: TblBrotherDep[];

  @OneToMany(() => TblBrotherEnd, (tblBrotherEnd) => tblBrotherEnd.brother)
  tblBrotherEnds: TblBrotherEnd[];

  @OneToMany(() => TblBrotherEvo, (tblBrotherEvo) => tblBrotherEvo.brother)
  tblBrotherEvos: TblBrotherEvo[];

  @OneToMany(() => TblBrotherTrab, (tblBrotherTrab) => tblBrotherTrab.brother)
  tblBrotherTrabs: TblBrotherTrab[];

  @OneToMany(() => TblGestao, (tblGestao) => tblGestao.brother)
  tblGestaos: TblGestao[];

  @OneToMany(() => TblLojaAdm, (tblLojaAdm) => tblLojaAdm.brother)
  tblLojaAdms: TblLojaAdm[];

  @OneToMany(
    () => TblLojaComisBrothers,
    (tblLojaComisBrothers) => tblLojaComisBrothers.brother
  )
  tblLojaComisBrothers: TblLojaComisBrothers[];

  @OneToMany(() => TblPresenca2, (tblPresenca2) => tblPresenca2.brother)
  tblPresencas: TblPresenca2[];

  @OneToMany(() => TblUsuario, (tblUsuario) => tblUsuario.brother)
  tblUsuarios: TblUsuario[];
}
