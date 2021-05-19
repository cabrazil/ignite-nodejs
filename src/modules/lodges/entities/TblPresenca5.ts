import { Column, Entity, Index } from "typeorm";

@Index("pk_presenca5", ["agendaId", "brotherId"], { unique: true })
@Entity("tbl_presenca5", { schema: "arls" })
export class TblPresenca5 {
  @Column("integer", { primary: true, name: "agenda_id" })
  agendaId: number;

  @Column("integer", { primary: true, name: "brother_id" })
  brotherId: number;

  @Column("character", { name: "ind_presenca", length: 1 })
  indPresenca: string;
}
