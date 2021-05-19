import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblLoja } from "./TblLoja";

@Index("tbl_rito_pkey", ["id"], { unique: true })
@Entity("tbl_rito", { schema: "arls" })
export class TblRito {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 70 })
  nome: string;

  @Column("character varying", {
    name: "nom_abrev",
    nullable: true,
    length: 20,
  })
  nomAbrev: string | null;

  @OneToMany(() => TblLoja, (tblLoja) => tblLoja.rito)
  tblLojas: TblLoja[];
}
