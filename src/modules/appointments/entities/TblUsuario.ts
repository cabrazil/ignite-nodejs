import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblBrother } from "./TblBrother";

@Index("tbl_usuario_pkey", ["userId"], { unique: true })
@Entity("tbl_usuario", { schema: "arls" })
export class TblUsuario {
  @PrimaryGeneratedColumn({ type: "integer", name: "user_id" })
  userId: number;

  @Column("character varying", { name: "login", nullable: true, length: 12 })
  login: string | null;

  @Column("character varying", { name: "senha", nullable: true, length: 50 })
  senha: string | null;

  @Column("date", { name: "dt_cadastro", nullable: true })
  dtCadastro: string | null;

  @Column("date", { name: "dt_expira", nullable: true })
  dtExpira: string | null;

  @Column("integer", {
    name: "senha_padrao",
    nullable: true,
    default: () => "0",
  })
  senhaPadrao: number | null;

  @Column("character varying", {
    name: "semestral",
    nullable: true,
    length: 30,
  })
  semestral: string | null;

  @ManyToOne(() => TblBrother, (tblBrother) => tblBrother.tblUsuarios)
  @JoinColumn([{ name: "brother_id", referencedColumnName: "brotherId" }])
  brother: TblBrother;
}
