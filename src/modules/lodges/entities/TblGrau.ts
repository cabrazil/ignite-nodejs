import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAgenda } from "./TblAgenda";
import { TblBalaustre } from "./TblBalaustre";
import { TblBrother } from "./TblBrother";
import { TblBrotherEvo } from "./TblBrotherEvo";
import { TblBrotherTrab } from "./TblBrotherTrab";
import { TblEventoGraus } from "./TblEventoGraus";
import { TblPresenca } from "./TblPresenca";

@Index("tbl_grau_pkey", ["grauId"], { unique: true })
@Entity("tbl_grau", { schema: "arls" })
export class TblGrau {
  @PrimaryGeneratedColumn({ type: "integer", name: "grau_id" })
  grauId: number;

  @Column("character varying", { name: "nome", length: 50 })
  nome: string;

  @Column("character varying", {
    name: "nom_evolucao",
    nullable: true,
    length: 20,
  })
  nomEvolucao: string | null;

  @Column("integer", { name: "num_balau_apr", nullable: true })
  numBalauApr: number | null;

  @Column("integer", { name: "num_balau_comp", nullable: true })
  numBalauComp: number | null;

  @Column("integer", { name: "num_balau_mestre", nullable: true })
  numBalauMestre: number | null;

  @Column("character varying", { name: "nom_res", nullable: true, length: 2 })
  nomRes: string | null;

  @OneToMany(() => TblAgenda, (tblAgenda) => tblAgenda.grau)
  tblAgenda: TblAgenda[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.grau)
  tblBalaustres: TblBalaustre[];

  @OneToMany(() => TblBrother, (tblBrother) => tblBrother.grau)
  tblBrothers: TblBrother[];

  @OneToMany(() => TblBrotherEvo, (tblBrotherEvo) => tblBrotherEvo.grau)
  tblBrotherEvos: TblBrotherEvo[];

  @OneToMany(() => TblBrotherTrab, (tblBrotherTrab) => tblBrotherTrab.grau)
  tblBrotherTrabs: TblBrotherTrab[];

  @OneToMany(() => TblEventoGraus, (tblEventoGraus) => tblEventoGraus.grau)
  tblEventoGraus: TblEventoGraus[];

  @OneToMany(() => TblPresenca, (tblPresenca) => tblPresenca.grau)
  tblPresencas: TblPresenca[];
}
