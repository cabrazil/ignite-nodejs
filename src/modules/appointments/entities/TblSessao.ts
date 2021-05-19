import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_tbl_sessao", ["id"], { unique: true })
@Entity("tbl_sessao", { schema: "arls" })
export class TblSessao {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 40 })
  nome: string;
}
