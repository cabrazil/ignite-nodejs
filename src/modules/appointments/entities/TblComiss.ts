import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblLojaComis } from "./TblLojaComis";

@Index("tbl_comiss_pkey", ["id"], { unique: true })
@Entity("tbl_comiss", { schema: "arls" })
export class TblComiss {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 70 })
  nome: string;

  @OneToMany(() => TblLojaComis, (tblLojaComis) => tblLojaComis.comis)
  tblLojaComis: TblLojaComis[];
}
