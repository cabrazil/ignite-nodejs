import { Column, Entity, Index } from "typeorm";

@Index("tbl_ccorrentes_pkey", ["agencod", "bancod", "contnumero"], {
  unique: true,
})
@Entity("tbl_conta_corrente", { schema: "arls" })
export class TblContaCorrente {
  @Column("integer", { primary: true, name: "bancod" })
  bancod: number;

  @Column("integer", { primary: true, name: "agencod" })
  agencod: number;

  @Column("character varying", {
    primary: true,
    name: "contnumero",
    length: 18,
  })
  contnumero: string;
}
