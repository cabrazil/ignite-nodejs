import { Column, Entity, Index } from "typeorm";

@Index("tbl_res22_pkey", ["brotherId"], { unique: true })
@Entity("tbl_res_presenca3", { schema: "arls" })
export class TblResPresenca3 {
  @Column("integer", { primary: true, name: "brother_id" })
  brotherId: number;

  @Column("character varying", { name: "nome", nullable: true, length: 70 })
  nome: string | null;

  @Column("int4", { name: "ano", nullable: true, array: true })
  ano: number[] | null;

  @Column("varchar", { name: "mes", nullable: true, array: true })
  mes: string[] | null;

  @Column("int4", { name: "pres", nullable: true, array: true })
  pres: number[] | null;

  @Column("int4", { name: "fal", nullable: true, array: true })
  fal: number[] | null;
}
