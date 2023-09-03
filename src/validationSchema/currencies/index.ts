import * as yup from 'yup';

export const currencyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  exchange_rate: yup.number().required(),
});
