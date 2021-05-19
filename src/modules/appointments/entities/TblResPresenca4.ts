import { Column, Entity, Index } from "typeorm";

@Index("tbl_res4_pkey", ["brotherId"], { unique: true })
@Entity("tbl_res_presenca4", { schema: "arls" })
export class TblResPresenca4 {
  @Column("integer", { primary: true, name: "brother_id" })
  brotherId: number;

  @Column("character varying", { name: "nome", nullable: true, length: 70 })
  nome: string | null;

  @Column("date", { name: "m1", nullable: true })
  m1: string | null;

  @Column("smallint", { name: "p1", nullable: true })
  p1: number | null;

  @Column("smallint", { name: "f1", nullable: true })
  f1: number | null;

  @Column("date", { name: "m2", nullable: true })
  m2: string | null;

  @Column("smallint", { name: "p2", nullable: true })
  p2: number | null;

  @Column("smallint", { name: "f2", nullable: true })
  f2: number | null;

  @Column("date", { name: "m3", nullable: true })
  m3: string | null;

  @Column("smallint", { name: "p3", nullable: true })
  p3: number | null;

  @Column("smallint", { name: "f3", nullable: true })
  f3: number | null;

  @Column("date", { name: "m4", nullable: true })
  m4: string | null;

  @Column("smallint", { name: "p4", nullable: true })
  p4: number | null;

  @Column("smallint", { name: "f4", nullable: true })
  f4: number | null;

  @Column("date", { name: "m5", nullable: true })
  m5: string | null;

  @Column("smallint", { name: "p5", nullable: true })
  p5: number | null;

  @Column("smallint", { name: "f5", nullable: true })
  f5: number | null;

  @Column("date", { name: "m6", nullable: true })
  m6: string | null;

  @Column("smallint", { name: "p6", nullable: true })
  p6: number | null;

  @Column("smallint", { name: "f6", nullable: true })
  f6: number | null;

  @Column("date", { name: "m7", nullable: true })
  m7: string | null;

  @Column("smallint", { name: "p7", nullable: true })
  p7: number | null;

  @Column("smallint", { name: "f7", nullable: true })
  f7: number | null;

  @Column("date", { name: "m8", nullable: true })
  m8: string | null;

  @Column("smallint", { name: "p8", nullable: true })
  p8: number | null;

  @Column("smallint", { name: "f8", nullable: true })
  f8: number | null;

  @Column("date", { name: "m9", nullable: true })
  m9: string | null;

  @Column("smallint", { name: "p9", nullable: true })
  p9: number | null;

  @Column("smallint", { name: "f9", nullable: true })
  f9: number | null;

  @Column("date", { name: "m10", nullable: true })
  m10: string | null;

  @Column("smallint", { name: "p10", nullable: true })
  p10: number | null;

  @Column("smallint", { name: "f10", nullable: true })
  f10: number | null;

  @Column("date", { name: "m11", nullable: true })
  m11: string | null;

  @Column("smallint", { name: "p11", nullable: true })
  p11: number | null;

  @Column("smallint", { name: "f11", nullable: true })
  f11: number | null;

  @Column("date", { name: "m12", nullable: true })
  m12: string | null;

  @Column("smallint", { name: "p12", nullable: true })
  p12: number | null;

  @Column("smallint", { name: "f12", nullable: true })
  f12: number | null;

  @Column("smallint", { name: "tp", nullable: true })
  tp: number | null;

  @Column("smallint", { name: "tf", nullable: true })
  tf: number | null;
}
