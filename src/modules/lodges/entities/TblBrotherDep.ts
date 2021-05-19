import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblBrother } from "./TblBrother";

@Index("tbl_brother_dep_brother_id", ["brotherId"], {})
@Index("tbl_brother_dep_pkey", ["id"], { unique: true })
@Entity("tbl_brother_dep", { schema: "arls" })
export class TblBrotherDep {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "brother_id" })
  brotherId: number;

  @Column("integer", { name: "grau_dep" })
  grauDep: number;

  @Column("character varying", { name: "nome", length: 70 })
  nome: string;

  @Column("date", { name: "dt_nasc" })
  dtNasc: string;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBrotherDeps)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;
}
