import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_tbl_brother_est2", ["id"], { unique: true })
@Entity("tbl_brother_est2", { schema: "arls" })
export class TblBrotherEst2 {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "loja_id" })
  lojaId: number;

  @Column("integer", { name: "gestao_id" })
  gestaoId: number;

  @Column("smallint", { name: "grau_id" })
  grauId: number;

  @Column("integer", { name: "brother_id" })
  brotherId: number;

  @Column("integer", { name: "qtd_presencas", nullable: true })
  qtdPresencas: number | null;

  @Column("integer", { name: "qtd_faltas", nullable: true })
  qtdFaltas: number | null;

  @Column("integer", { name: "qtd_sessoes", nullable: true })
  qtdSessoes: number | null;

  @Column("numeric", {
    name: "pct_pres_tot",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  pctPresTot: string | null;
}
