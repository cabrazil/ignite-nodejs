import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tbl_grau_filos_pkey", ["grauFilosId"], { unique: true })
@Entity("tbl_grau_filos", { schema: "arls" })
export class TblGrauFilos {
  @PrimaryGeneratedColumn({ type: "integer", name: "grau_filos_id" })
  grauFilosId: number;

  @Column("character varying", { name: "nome", length: 60 })
  nome: string;

  @Column("character varying", {
    name: "nom_evolucao",
    nullable: true,
    length: 40,
  })
  nomEvolucao: string | null;
}
