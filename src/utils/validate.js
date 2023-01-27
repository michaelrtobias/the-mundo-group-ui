import * as yup from "yup";

export const inventorySchema = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string(),
  model_number: yup.string().required(),
  dial: yup.string().required(),
  bezel: yup.string().required(),
  bracelet: yup.string(),
  size: yup.string(),
  description: yup.string(),
});

export const sendMessageSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  type: yup.string(),
  make: yup.string(),
  model: yup.string(),
  description: yup.string(),
  image_URL: yup.string(),
});
