import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblBrother } from "./TblBrother";
import { TblLojaComis } from "./TblLojaComis";

@Index(
  "tbl_loja_comis_brothers_loja_comis_id_brother_id_key",
  ["brotherId", "lojaComisId"],
  { unique: true }
)
@Index("tbl_loja_comis_brothers_pkey", ["id"], { unique: true })
@Entity("tbl_loja_comis_brothers", { schema: "arls" })
export class TblLojaComisBrothers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "loja_comis_id", unique: true })
  lojaComisId: number;

  @Column("integer", { name: "brother_id", unique: true })
  brotherId: number;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblLojaComisBrothers)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;

  @ManyToOne(
    () => TblLojaComis,
    (tblLojaComis) => tblLojaComis.tblLojaComisBrothers
  )
  @JoinColumn([{ name: "loja_comis_id", referencedColumnName: "id" }])
  lojaComis: TblLojaComis;
}
