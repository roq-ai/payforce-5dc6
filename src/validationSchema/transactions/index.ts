import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  amount: yup.number().required(),
  payment_option_id: yup.string().nullable().required(),
  currency_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
