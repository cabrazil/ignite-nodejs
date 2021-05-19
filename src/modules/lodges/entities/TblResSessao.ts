import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tbl_res2_pkey", ["id"], { unique: true })
@Entity("tbl_res_sessao", { schema: "arls" })
export class TblResSessao {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "loja_id" })
  lojaId: number;

  @Column("integer", { name: "gestao_id" })
  gestaoId: number;

  @Column("integer", { name: "brother_id" })
  brotherId: number;

  @Column("smallint", { name: "mes_gestao" })
  mesGestao: number;

  @Column("smallint", { name: "ano_gestao" })
  anoGestao: number;

  @Column("smallint", { name: "qtd_1" })
  qtd_1: number;

  @Column("smallint", { name: "qtd_2" })
  qtd_2: number;

  @Column("smallint", { name: "qtd_3" })
  qtd_3: number;
}
