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
import { TblInstruc } from "./TblInstruc";

@Index("uk_tbl_brother_trab", ["brotherId", "grauId", "instrucId"], {
  unique: true,
})
@Index("tbl_brother_trab_brother_id", ["brotherId"], {})
@Index("tbl_brother_trab_grau_id", ["grauId"], {})
@Index("tbl_brother_trab_pkey", ["id"], { unique: true })
@Index("tbl_brother_trab_instruc_id", ["instrucId"], {})
@Entity("tbl_brother_trab", { schema: "arls" })
export class TblBrotherTrab {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "brother_id" })
  brotherId: number;

  @Column("integer", { name: "grau_id" })
  grauId: number;

  @Column("integer", { name: "instruc_id" })
  instrucId: number;

  @Column("date", { name: "dt_entrega", nullable: true })
  dtEntrega: string | null;

  @Column("date", { name: "dt_bpi", nullable: true })
  dtBpi: string | null;

  @Column("date", { name: "dt_leitura", nullable: true })
  dtLeitura: string | null;

  @Column("character varying", { name: "parecer_ct", length: 2000 })
  parecerCt: string;

  @Column("character varying", { name: "nm_docum", nullable: true, length: 30 })
  nmDocum: string | null;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblBrotherTrabs)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;

  @ManyToOne(() => TblGrau, (tblGrau) => tblGrau.tblBrotherTrabs)
  @JoinColumn([{ name: "grau_id", referencedColumnName: "grauId" }])
  grau: TblGrau;

  @ManyToOne(() => TblInstruc, (tblInstruc) => tblInstruc.tblBrotherTrabs)
  @JoinColumn([{ name: "instruc_id", referencedColumnName: "id" }])
  instruc: TblInstruc;
}
