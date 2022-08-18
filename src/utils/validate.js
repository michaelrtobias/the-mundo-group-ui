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
