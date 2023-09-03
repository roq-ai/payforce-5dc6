import axios from 'axios';
import queryString from 'query-string';
import { CurrencyInterface, CurrencyGetQueryInterface } from 'interfaces/currency';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCurrencies = async (
  query?: CurrencyGetQueryInterface,
): Promise<PaginatedInterface<CurrencyInterface>> => {
  const response = await axios.get('/api/currencies', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCurrency = async (currency: CurrencyInterface) => {
  const response = await axios.post('/api/currencies', currency);
  return response.data;
};

export const updateCurrencyById = async (id: string, currency: CurrencyInterface) => {
  const response = await axios.put(`/api/currencies/${id}`, currency);
  return response.data;
};

export const getCurrencyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/currencies/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCurrencyById = async (id: string) => {
  const response = await axios.delete(`/api/currencies/${id}`);
  return response.data;
};
