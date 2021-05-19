import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblEvento } from "./TblEvento";
import { TblGrau } from "./TblGrau";

@Index("tbl_evento_graus_evento_id_grau_id_key", ["eventoId", "grauId"], {
  unique: true,
})
@Index("tbl_evento_graus_pkey", ["id"], { unique: true })
@Entity("tbl_evento_graus", { schema: "arls" })
export class TblEventoGraus {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "evento_id", unique: true })
  eventoId: number;

  @Column("integer", { name: "grau_id", unique: true })
  grauId: number;

  @ManyToOne(() => TblEvento, (tblEvento) => tblEvento.tblEventoGraus)
  @JoinColumn([{ name: "evento_id", referencedColumnName: "id" }])
  evento: TblEvento;

  @ManyToOne(() => TblGrau, (tblGrau) => tblGrau.tblEventoGraus)
  @JoinColumn([{ name: "grau_id", referencedColumnName: "grauId" }])
  grau: TblGrau;
}
