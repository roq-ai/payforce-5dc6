import { TransactionInterface } from 'interfaces/transaction';
import { GetQueryInterface } from 'interfaces';

export interface CurrencyInterface {
  id?: string;
  name: string;
  exchange_rate: number;
  created_at?: any;
  updated_at?: any;
  transaction?: TransactionInterface[];

  _count?: {
    transaction?: number;
  };
}

export interface CurrencyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
