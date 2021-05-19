import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblEventoGraus } from "./TblEventoGraus";

@Index("tbl_evento_brother_id", ["brotherId"], {})
@Index("tbl_evento_pkey", ["id"], { unique: true })
@Entity("tbl_evento", { schema: "arls" })
export class TblEvento {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "brother_id" })
  brotherId: number;

  @Column("date", { name: "dt_evento", nullable: true })
  dtEvento: string | null;

  @Column("integer", { name: "place_evento", nullable: true })
  placeEvento: number | null;

  @OneToMany(() => TblEventoGraus, (tblEventoGraus) => tblEventoGraus.evento)
  tblEventoGraus: TblEventoGraus[];
}
