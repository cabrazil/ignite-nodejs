import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_tbl_agencia", ["agencod"], { unique: true })
@Entity("tbl_agencia", { schema: "arls" })
export class TblAgencia {
  @PrimaryGeneratedColumn({ type: "integer", name: "agencod" })
  agencod: number;

  @Column("integer", { name: "bancod", nullable: true })
  bancod: number | null;

  @Column("character varying", { name: "agennome", nullable: true, length: 30 })
  agennome: string | null;

  @Column("character varying", {
    name: "agennumeroagencia",
    nullable: true,
    length: 18,
  })
  agennumeroagencia: string | null;
}
