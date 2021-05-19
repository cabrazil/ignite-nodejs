import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tbl_aniver_cas_pkey", ["id"], { unique: true })
@Entity("tbl_aniver_cas", { schema: "arls" })
export class TblAniverCas {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 70 })
  nome: string | null;

  @Column("character varying", { name: "evento", nullable: true, length: 20 })
  evento: string | null;

  @Column("character varying", { name: "dep_nome", nullable: true, length: 20 })
  depNome: string | null;

  @Column("date", { name: "dt_evento", nullable: true })
  dtEvento: string | null;
}
