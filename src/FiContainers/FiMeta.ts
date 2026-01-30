import { FiNumber } from "../core/FiNumber";
import { FiString } from "../core/FiString";

export class FiMeta {

  fimTxKey?: string;
  fimTxValue?: string;
  fimLnKey?: number;

  // Static Methods
  static create(txKey: string): FiMeta {
    let fiMeta = new FiMeta();
    fiMeta.fimTxKey = txKey;
    return fiMeta;
  }

  // Getters

  public getTxKeyNtn(): string {
    return FiString.orEmpty(this.fimTxKey);
  }

  public getTxValueNtn(): string {
    return FiString.orEmpty(this.fimTxValue);
  }

  public getLnKeyOrMinusOne(): number {
    return FiNumber.orMinusOne(this.fimLnKey);
  }

}
