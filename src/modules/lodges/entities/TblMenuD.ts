import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tbl_menu_d_pkey", ["id"], { unique: true })
@Entity("tbl_menu_d", { schema: "arls" })
export class TblMenuD {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "item_mestre",
    nullable: true,
    length: 100,
  })
  itemMestre: string | null;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 200,
  })
  descricao: string | null;

  @Column("character varying", { name: "link", nullable: true, length: 200 })
  link: string | null;

  @Column("integer", { name: "nro_item", nullable: true })
  nroItem: number | null;
}
