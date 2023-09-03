import { TransactionInterface } from 'interfaces/transaction';
import { GetQueryInterface } from 'interfaces';

export interface PaymentOptionInterface {
  id?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  transaction?: TransactionInterface[];

  _count?: {
    transaction?: number;
  };
}

export interface PaymentOptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
