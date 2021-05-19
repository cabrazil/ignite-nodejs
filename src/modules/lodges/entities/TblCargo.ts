import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAdmCargos } from "./TblAdmCargos";
import { TblLojaAdm } from "./TblLojaAdm";

@Index("tbl_cargo_pkey", ["cargoId"], { unique: true })
@Entity("tbl_cargo", { schema: "arls" })
export class TblCargo {
  @PrimaryGeneratedColumn({ type: "integer", name: "cargo_id" })
  cargoId: number;

  @Column("character varying", { name: "nome", length: 70 })
  nome: string;

  @Column("character varying", { name: "joia2", nullable: true, length: 30 })
  joia2: string | null;

  @Column("character", { name: "acum", nullable: true, length: 1 })
  acum: string | null;

  @OneToMany(() => TblAdmCargos, (tblAdmCargos) => tblAdmCargos.cargo)
  tblAdmCargos: TblAdmCargos[];

  @ManyToMany(() => TblLojaAdm, (tblLojaAdm) => tblLojaAdm.tblCargos)
  @JoinTable({
    name: "tbl_loja_cargos",
    joinColumns: [{ name: "cargo_id", referencedColumnName: "cargoId" }],
    inverseJoinColumns: [{ name: "loja_adm_id", referencedColumnName: "id" }],
    schema: "arls",
  })
  tblLojaAdms: TblLojaAdm[];
}
