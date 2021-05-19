import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblGrau } from "./TblGrau";

@Index("tbl_presenca_pkey", ["brotherId", "dtSessaoId", "gestaoId", "lojaId"], {
  unique: true,
})
@Entity("tbl_presenca", { schema: "arls" })
export class TblPresenca {
  @Column("integer", { primary: true, name: "loja_id" })
  lojaId: number;

  @Column("integer", { primary: true, name: "gestao_id" })
  gestaoId: number;

  @Column("date", { primary: true, name: "dt_sessao_id" })
  dtSessaoId: string;

  @Column("integer", { primary: true, name: "brother_id" })
  brotherId: number;

  @Column("integer", { name: "tp_sessao" })
  tpSessao: number;

  @Column("character", { name: "presente", length: 1 })
  presente: string;

  @ManyToOne(() => TblGrau, (tblGrau) => tblGrau.tblPresencas)
  @JoinColumn([{ name: "grau_id", referencedColumnName: "grauId" }])
  grau: TblGrau;
}
