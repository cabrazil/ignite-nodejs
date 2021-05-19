import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblEstado } from "./TblEstado";

@Index("pk_cidade", ["id"], { unique: true })
@Entity("tbl_cidade", { schema: "arls" })
export class TblCidade {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 120 })
  nome: string;

  @Column("integer", { name: "estado" })
  estado: number;

  @ManyToOne(() => TblEstado, (tblEstado) => tblEstado.tblCidades)
  @JoinColumn([{ name: "uf", referencedColumnName: "uf" }])
  uf: TblEstado;
}
