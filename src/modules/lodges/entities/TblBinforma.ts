import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_binforma", ["id"], { unique: true })
@Entity("tbl_binforma", { schema: "arls" })
export class TblBinforma {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "nom_docum",
    nullable: true,
    length: 40,
  })
  nomDocum: string | null;

  @Column("character", { name: "ind_interes", length: 1 })
  indInteres: string;

  @Column("date", { name: "dt_binforma", nullable: true })
  dtBinforma: string | null;
}
