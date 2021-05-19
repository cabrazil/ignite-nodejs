import { Column, Entity, Index } from "typeorm";

@Index("pk_pre4", ["agendaId", "brotherId"], { unique: true })
@Entity("tbl_presenca4", { schema: "arls" })
export class TblPresenca4 {
  @Column("integer", { primary: true, name: "agenda_id" })
  agendaId: number;

  @Column("integer", { primary: true, name: "brother_id" })
  brotherId: number;

  @Column("smallint", { name: "qtd_pres_dia", nullable: true })
  qtdPresDia: number | null;

  @Column("smallint", { name: "qtd_falta_dia", nullable: true })
  qtdFaltaDia: number | null;

  @Column("smallint", { name: "qtd_sessao", nullable: true })
  qtdSessao: number | null;

  @Column("smallint", { name: "qtd_presenca", nullable: true })
  qtdPresenca: number | null;

  @Column("numeric", {
    name: "pct_pres_dia",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  pctPresDia: string | null;

  @Column("numeric", {
    name: "pct_pres_tot",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  pctPresTot: string | null;

  @Column("character", { name: "ind_presenca", nullable: true, length: 1 })
  indPresenca: string | null;
}
