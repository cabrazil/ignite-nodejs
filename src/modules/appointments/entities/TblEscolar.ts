import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_tbl_escolar", ["escolarId"], { unique: true })
@Entity("tbl_escolar", { schema: "arls" })
export class TblEscolar {
  @PrimaryGeneratedColumn({ type: "integer", name: "escolar_id" })
  escolarId: number;

  @Column("character varying", { name: "desc", length: 50 })
  desc: string;
}
