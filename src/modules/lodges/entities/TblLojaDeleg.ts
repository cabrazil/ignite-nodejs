import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblLoja } from "./TblLoja";

@Index("tbl_delegado_pkey", ["id"], { unique: true })
@Index("tbl_delegado_loja_id", ["lojaId"], {})
@Entity("tbl_loja_deleg", { schema: "arls" })
export class TblLojaDeleg {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "loja_id" })
  lojaId: number;

  @Column("character varying", { name: "desc", length: 60 })
  desc: string;

  @Column("character varying", { name: "nome", length: 50 })
  nome: string;

  @Column("character varying", { name: "telef1", nullable: true, length: 16 })
  telef1: string | null;

  @Column("character varying", { name: "telef2", nullable: true, length: 16 })
  telef2: string | null;

  @Column("character varying", { name: "telef3", nullable: true, length: 16 })
  telef3: string | null;

  @ManyToOne(() => TblLoja, (tblLoja) => tblLoja.tblLojaDelegs)
  @JoinColumn([{ name: "loja_id", referencedColumnName: "lojaId" }])
  loja: TblLoja;
}
