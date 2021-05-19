import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblBrotherTrab } from "./TblBrotherTrab";

@Index("tbl_instruc_pkey", ["id"], { unique: true })
@Entity("tbl_instruc", { schema: "arls" })
export class TblInstruc {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 70 })
  nome: string;

  @OneToMany(() => TblBrotherTrab, (tblBrotherTrab) => tblBrotherTrab.instruc)
  tblBrotherTrabs: TblBrotherTrab[];
}
