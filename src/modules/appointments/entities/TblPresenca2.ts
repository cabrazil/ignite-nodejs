import { Entity, JoinColumn, ManyToOne, Index, Column } from "typeorm";
import { TblAgenda } from "./TblAgenda";
import { TblBrother } from "./TblBrother";

@Index("pk_presenca2", ["agenda", "brother"], { unique: true })
@Entity("tbl_presenca2", { schema: "arls" })
export class TblPresenca2 {
  @Column("integer", { primary: true, name: "agenda_id" })
  agendaId: number;

  @Column("integer", { primary: true, name: "brother_id" })
  brotherId: number;

  @ManyToOne(() => TblAgenda, (tblAgenda) => tblAgenda.tblPresencas)
  @JoinColumn([{ name: "agenda_id", referencedColumnName: "id" }])
  agenda: TblAgenda;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblPresencas)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;
}
