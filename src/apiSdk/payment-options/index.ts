import axios from 'axios';
import queryString from 'query-string';
import { PaymentOptionInterface, PaymentOptionGetQueryInterface } from 'interfaces/payment-option';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPaymentOptions = async (
  query?: PaymentOptionGetQueryInterface,
): Promise<PaginatedInterface<PaymentOptionInterface>> => {
  const response = await axios.get('/api/payment-options', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPaymentOption = async (paymentOption: PaymentOptionInterface) => {
  const response = await axios.post('/api/payment-options', paymentOption);
  return response.data;
};

export const updatePaymentOptionById = async (id: string, paymentOption: PaymentOptionInterface) => {
  const response = await axios.put(`/api/payment-options/${id}`, paymentOption);
  return response.data;
};

export const getPaymentOptionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/payment-options/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePaymentOptionById = async (id: string) => {
  const response = await axios.delete(`/api/payment-options/${id}`);
  return response.data;
};
