import * as yup from 'yup';

export const paymentOptionValidationSchema = yup.object().shape({
  name: yup.string().required(),
});
