import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblLoja } from "./TblLoja";

@Index("tbl_potencia_pkey", ["id"], { unique: true })
@Entity("tbl_potencia", { schema: "arls" })
export class TblPotencia {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 70 })
  nome: string;

  @Column("character varying", { name: "abrev", nullable: true, length: 12 })
  abrev: string | null;

  @Column("character varying", {
    name: "semestral",
    nullable: true,
    length: 30,
  })
  semestral: string | null;

  @Column("character varying", {
    name: "semestral_ant",
    nullable: true,
    length: 30,
  })
  semestralAnt: string | null;

  @OneToMany(() => TblLoja, (tblLoja) => tblLoja.potencia)
  tblLojas: TblLoja[];
}
