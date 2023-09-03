import { TransactionInterface } from 'interfaces/transaction';
import { GetQueryInterface } from 'interfaces';

export interface VerificationInterface {
  id?: string;
  transaction_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  transaction?: TransactionInterface;
  _count?: {};
}

export interface VerificationGetQueryInterface extends GetQueryInterface {
  id?: string;
  transaction_id?: string;
  status?: string;
}
