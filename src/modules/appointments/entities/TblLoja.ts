import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { TblAdmCargos } from './TblAdmCargos';
import { TblBalaustre } from './TblBalaustre';
import { TblBrother } from './TblBrother';
import { TblGestao } from './TblGestao';
import { TblLojaAdm } from './TblLojaAdm';
import { TblLojaComis } from './TblLojaComis';
import { TblLojaDeleg } from './TblLojaDeleg';
import { TblLojaPranc } from './TblLojaPranc';
import { TblPotencia } from './TblPotencia';
import { TblRito } from './TblRito';

@Index('tbl_loja_periodo_id', ['gestaoId'], {})
@Index('tbl_loja_pkey', ['lojaId'], { unique: true })
@Index('tbl_loja_potencia_id', ['potenciaId'], {})
@Index('tbl_loja_rito_id', ['ritoId'], {})
@Entity('tbl_loja', { schema: 'arls' })
export class TblLoja {
  @Column('integer', { primary: true, name: 'loja_id' })
  lojaId: number;

  @Column('character varying', { name: 'nome', length: 70 })
  nome: string;

  @Column('character varying', { name: 'cnpj', length: 14 })
  cnpj: string;

  @Column('date', { name: 'dt_funda' })
  dtFunda: string;

  @Column('character varying', { name: 'cep', length: 8 })
  cep: string;

  @Column('character varying', { name: 'endereco', length: 70 })
  endereco: string;

  @Column('integer', { name: 'num' })
  num: number;

  @Column('character varying', { name: 'bairro', length: 50 })
  bairro: string;

  @Column('character varying', { name: 'cidade', length: 50 })
  cidade: string;

  @Column('character varying', { name: 'uf_loja', length: 2 })
  ufLoja: string;

  @Column('character varying', { name: 'email', nullable: true, length: 75 })
  email: string | null;

  @Column('character varying', { name: 'website', nullable: true, length: 200 })
  website: string | null;

  @Column('integer', { name: 'gestao_id' })
  gestaoId: number;

  @Column('character varying', { name: 'reuniao', length: 20 })
  reuniao: string;

  @Column('integer', { name: 'rito_id' })
  ritoId: number;

  @Column('integer', { name: 'potencia_id' })
  potenciaId: number;

  @Column('integer', { name: 'nro_ult_sessao' })
  nroUltSessao: number;

  @Column('bytea', { name: 'logol' })
  logol: number;

  @OneToMany(() => TblAdmCargos, (tblAdmCargos) => tblAdmCargos.loja)
  tblAdmCargos: TblAdmCargos[];

  @OneToMany(() => TblBalaustre, (tblBalaustre) => tblBalaustre.loja)
  tblBalaustres: TblBalaustre[];

  @OneToMany(() => TblBrother, (tblBrother) => tblBrother.loja)
  tblBrothers: TblBrother[];

  @ManyToOne(() => TblGestao, (tblGestao) => tblGestao.tblLojas)
  @JoinColumn([{ name: 'gestao_id', referencedColumnName: 'id' }])
  gestao: TblGestao;

  @ManyToOne(() => TblPotencia, (tblPotencia) => tblPotencia.tblLojas)
  @JoinColumn([{ name: 'potencia_id', referencedColumnName: 'id' }])
  potencia: TblPotencia;

  @ManyToOne(() => TblRito, (tblRito) => tblRito.tblLojas)
  @JoinColumn([{ name: 'rito_id', referencedColumnName: 'id' }])
  rito: TblRito;

  @OneToMany(() => TblLojaAdm, (tblLojaAdm) => tblLojaAdm.loja)
  tblLojaAdms: TblLojaAdm[];

  @OneToMany(() => TblLojaComis, (tblLojaComis) => tblLojaComis.loja)
  tblLojaComis: TblLojaComis[];

  @OneToMany(() => TblLojaDeleg, (tblLojaDeleg) => tblLojaDeleg.loja)
  tblLojaDelegs: TblLojaDeleg[];

  @OneToMany(() => TblLojaPranc, (tblLojaPranc) => tblLojaPranc.loja)
  tblLojaPrancs: TblLojaPranc[];
}
