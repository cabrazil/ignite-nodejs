import { Column, Entity, Index } from "typeorm";

@Index("pk_tbl_feriado", ["feriadoId"], { unique: true })
@Entity("tbl_feriado", { schema: "arls" })
export class TblFeriado {
  @Column("integer", { primary: true, name: "feriado_id" })
  feriadoId: number;

  @Column("date", { name: "dt_feriado" })
  dtFeriado: string;

  @Column("character varying", { name: "nm_feriado", length: 50 })
  nmFeriado: string;
}
