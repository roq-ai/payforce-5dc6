import { VerificationInterface } from 'interfaces/verification';
import { PaymentOptionInterface } from 'interfaces/payment-option';
import { CurrencyInterface } from 'interfaces/currency';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  amount: number;
  payment_option_id: string;
  currency_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  verification?: VerificationInterface[];
  payment_option?: PaymentOptionInterface;
  currency?: CurrencyInterface;
  user?: UserInterface;
  _count?: {
    verification?: number;
  };
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_option_id?: string;
  currency_id?: string;
  user_id?: string;
}
