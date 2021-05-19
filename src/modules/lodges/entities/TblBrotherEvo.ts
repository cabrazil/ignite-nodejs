import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblBrother } from "./TblBrother";
import { TblGrau } from "./TblGrau";

@Index("pk_brother_evo", ["id"], { unique: true })
@Entity("tbl_brother_evo", { schema: "arls" })
export class TblBrotherEvo {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("date", { name: "dt_evol" })
  dtEvol: string;

  @Column("character", { name: "loja_atual", nullable: true, length: 1 })
  lojaAtual: string | null;

  @Column("character varying", { name: "nom_loja", nullable: true, length: 60 })
  nomLoja: string | null;

  @Column("integer", { name: "nro_placet", nullable: true })
  nroPlacet: number | null;

  @Column("date", { name: "dt_sessao", nullable: true })
  dtSessao: string | null;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBrotherEvos)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;

  @ManyToOne(() => TblGrau, (tblGrau) => tblGrau.tblBrotherEvos)
  @JoinColumn([{ name: "grau_id", referencedColumnName: "grauId" }])
  grau: TblGrau;
}
