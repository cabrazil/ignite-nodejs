import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAgenda } from "./TblAgenda";

@Index("tbl_visitante_pkey", ["id"], { unique: true })
@Entity("tbl_visitante", { schema: "arls" })
export class TblVisitante {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 70 })
  nome: string;

  @Column("character varying", { name: "loja", length: 70 })
  loja: string;

  @Column("character varying", { name: "num_loja", length: 5 })
  numLoja: string;

  @Column("character varying", { name: "potencia", length: 12 })
  potencia: string;

  @ManyToOne(() => TblAgenda, (tblAgenda) => tblAgenda.tblVisitantes)
  @JoinColumn([{ name: "agenda_id", referencedColumnName: "id" }])
  agenda: TblAgenda;
}
