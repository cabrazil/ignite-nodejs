import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAdmCargos } from "./TblAdmCargos";
import { TblAgenda } from "./TblAgenda";
import { TblBalaustre } from "./TblBalaustre";
import { TblBrother } from "./TblBrother";
import { TblLoja } from "./TblLoja";
import { TblLojaAdm } from "./TblLojaAdm";
import { TblLojaComis } from "./TblLojaComis";

@Index("tbl_periodo_pkey", ["id"], { unique: true })
@Entity("tbl_gestao", { schema: "arls" })
export class TblGestao {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 70 })
  nome: string;

  @Column("date", { name: "dt_inicio" })
  dtInicio: string;

  @Column("date", { name: "dt_final" })
  dtFinal: string;

  @Column("integer", { name: "loja_id" })
  lojaId: number;

  @Column("character", { name: "st_atual", length: 1 })
  stAtual: string;

  @Column("smallint", { name: "mes_inverno", nullable: true })
  mesInverno: number | null;

  @Column("smallint", { name: "mes_verao", nullable: true })
  mesVerao: number | null;

  @OneToMany(() => TblAdmCargos, (tblAdmCargos) => tblAdmCargos.gestao)
  tblAdmCargos: TblAdmCargos[];

  @OneToMany(() => TblAgenda, (tblAgenda) => tblAgenda.gestao)
  tblAgenda: TblAgenda[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.gestao)
  tblBalaustres: TblBalaustre[];

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblGestaos)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;

  @OneToMany(() => TblLoja, (tblLoja) => tblLoja.gestao)
  tblLojas: TblLoja[];

  @OneToMany(() => TblLojaAdm, (tblLojaAdm) => tblLojaAdm.gestao)
  tblLojaAdms: TblLojaAdm[];

  @OneToMany(() => TblLojaComis, (tblLojaComis) => tblLojaComis.periodo)
  tblLojaComis: TblLojaComis[];
}
