import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblLoja } from "./TblLoja";

@Index("tbl_loja_pranc_pkey", ["id"], { unique: true })
@Entity("tbl_loja_pranc", { schema: "arls" })
export class TblLojaPranc {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "seq_chanc" })
  seqChanc: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "seq_tesou" })
  seqTesou: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "seq_secr" })
  seqSecr: number;

  @ManyToOne(() => TblLoja, (tblLoja) => tblLoja.tblLojaPrancs)
  @JoinColumn([{ name: "loja_id", referencedColumnName: "lojaId" }])
  loja: TblLoja;
}
