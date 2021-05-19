import { Column, Entity, Index } from "typeorm";

@Index("tbl_grau_dep_pkey", ["grauDepId"], { unique: true })
@Entity("tbl_grau_dep", { schema: "arls" })
export class TblGrauDep {
  @Column("integer", { primary: true, name: "grau_dep_id" })
  grauDepId: number;

  @Column("character varying", { name: "nome", length: 60 })
  nome: string;

  @Column("character varying", {
    name: "nome_alias",
    nullable: true,
    length: 30,
  })
  nomeAlias: string | null;
}
