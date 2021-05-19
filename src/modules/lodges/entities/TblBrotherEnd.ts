import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblBrother } from "./TblBrother";

@Index("tbl_brother_end_brother_id", ["brotherId"], {})
@Index("uk_tbl_brother_end", ["brotherId", "tipo"], { unique: true })
@Index("tbl_brother_end_pkey", ["id"], { unique: true })
@Entity("tbl_brother_end", { schema: "arls" })
export class TblBrotherEnd {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "brother_id", unique: true })
  brotherId: number;

  @Column("integer", { name: "tipo", unique: true })
  tipo: number;

  @Column("character varying", { name: "cep", length: 8 })
  cep: string;

  @Column("character varying", { name: "endereco", length: 70 })
  endereco: string;

  @Column("integer", { name: "numero" })
  numero: number;

  @Column("character varying", { name: "bairro", length: 50 })
  bairro: string;

  @Column("character varying", { name: "cidade", length: 50 })
  cidade: string;

  @Column("character varying", { name: "uf", length: 2 })
  uf: string;

  @Column("character varying", { name: "telef", nullable: true, length: 12 })
  telef: string | null;

  @Column("character varying", { name: "complem", nullable: true, length: 20 })
  complem: string | null;

  @Column("character varying", { name: "num_cel1", nullable: true, length: 11 })
  numCel1: string | null;

  @Column("character varying", { name: "num_cel2", nullable: true, length: 11 })
  numCel2: string | null;

  @Column("character varying", { name: "email1", nullable: true, length: 75 })
  email1: string | null;

  @Column("character varying", { name: "email2", nullable: true, length: 75 })
  email2: string | null;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBrotherEnds)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;
}
