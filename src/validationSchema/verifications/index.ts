import * as yup from 'yup';

export const verificationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  transaction_id: yup.string().nullable().required(),
});
