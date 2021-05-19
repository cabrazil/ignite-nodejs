import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblCidade } from "./TblCidade";

@Index("pk_estado1", ["uf"], { unique: true })
@Entity("tbl_estado", { schema: "arls" })
export class TblEstado {
  @Column("character", { primary: true, name: "uf", length: 2 })
  uf: string;

  @Column("character varying", { name: "nome", length: 40 })
  nome: string;

  @OneToMany(() => TblCidade, (tblCidade) => tblCidade.uf)
  tblCidades: TblCidade[];
}
