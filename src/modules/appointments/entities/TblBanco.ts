import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_tbl_bancos", ["bancod"], { unique: true })
@Entity("tbl_banco", { schema: "arls" })
export class TblBanco {
  @PrimaryGeneratedColumn({ type: "integer", name: "bancod" })
  bancod: number;

  @Column("character varying", { name: "bannome", nullable: true, length: 50 })
  bannome: string | null;

  @Column("character varying", {
    name: "bannumerobanco",
    nullable: true,
    length: 10,
  })
  bannumerobanco: string | null;

  @Column("character varying", { name: "banlogo", nullable: true, length: 100 })
  banlogo: string | null;

  @Column("character varying", {
    name: "banseparador",
    nullable: true,
    length: 100,
  })
  banseparador: string | null;

  @Column("character varying", {
    name: "bancarteira",
    nullable: true,
    length: 10,
  })
  bancarteira: string | null;

  @Column("character varying", {
    name: "bancarteirades",
    nullable: true,
    length: 10,
  })
  bancarteirades: string | null;
}
