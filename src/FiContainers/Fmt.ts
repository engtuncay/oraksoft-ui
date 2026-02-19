import { FiNumber } from "../core/FiNumber";
import { FiString } from "../core/FiString";

/**
 * Fmt : FiMeta
 */
export class Fmt {

  ftTxKey?: string;
  ftTxValue?: string;
  ftLnKey?: number;

  // Static Methods
  static create(txKey: string): Fmt {
    let fiMeta = new Fmt();
    fiMeta.ftTxKey = txKey;
    return fiMeta;
  }

  // Getters

  public getTxKeyNtn(): string {
    return FiString.orEmpty(this.ftTxKey);
  }

  public getTxValueNtn(): string {
    return FiString.orEmpty(this.ftTxValue);
  }

  public getLnKeyOrMinusOne(): number {
    return FiNumber.orMinusOne(this.ftLnKey);
  }

}
