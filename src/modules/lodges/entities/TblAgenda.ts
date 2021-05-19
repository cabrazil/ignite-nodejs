import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblGestao } from "./TblGestao";
import { TblGrau } from "./TblGrau";
import { TblPresenca2 } from "./TblPresenca2";
import { TblVisitante } from "./TblVisitante";

@Index("tbl_agenda2_pkey", ["id"], { unique: true })
@Entity("tbl_agenda", { schema: "arls" })
export class TblAgenda {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "loja_id" })
  lojaId: number;

  @Column("character varying", { name: "nome", nullable: true, length: 100 })
  nome: string | null;

  @Column("text", { name: "descri" })
  descri: string;

  @Column("date", { name: "dt_inicio", nullable: true })
  dtInicio: string | null;

  @Column("time without time zone", { name: "hr_inicio", nullable: true })
  hrInicio: string | null;

  @Column("date", { name: "dt_fim", nullable: true })
  dtFim: string | null;

  @Column("time without time zone", { name: "hr_fim", nullable: true })
  hrFim: string | null;

  @Column("character varying", { name: "recor", nullable: true, length: 100 })
  recor: string | null;

  @Column("character varying", { name: "periodo", nullable: true, length: 100 })
  periodo: string | null;

  @Column("character varying", { name: "login", nullable: true, length: 30 })
  login: string | null;

  @Column("smallint", { name: "nro_sessao", nullable: true })
  nroSessao: number | null;

  @ManyToOne(() => TblGestao, (tblGestao) => tblGestao.tblAgenda)
  @JoinColumn([{ name: "gestao_id", referencedColumnName: "id" }])
  gestao: TblGestao;

  @ManyToOne(() => TblGrau, (tblGrau) => tblGrau.tblAgenda)
  @JoinColumn([{ name: "grau_id", referencedColumnName: "grauId" }])
  grau: TblGrau;

  @OneToMany(() => TblPresenca2, (tblPresenca2) => tblPresenca2.agenda)
  tblPresencas: TblPresenca2[];

  @OneToMany(() => TblVisitante, (tblVisitante) => tblVisitante.agenda)
  tblVisitantes: TblVisitante[];
}
