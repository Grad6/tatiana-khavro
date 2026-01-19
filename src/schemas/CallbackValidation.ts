import * as yup from "yup";
import { nameRegex, telegramRegex, instagramRegex } from "../regex/regex";

export const CallBackValidation = () => {

  const callBackFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Имя должно быть не менее 2 символов")
      .max(30, "Имя должно быть не более 30 символов")
      .matches(nameRegex, "Имя должно содержать только буквы")
      .required("Имя является обязательным"),
    telegram: yup.string().matches(telegramRegex, "Telegram должен быть в формате @username").required("Telegram является обязательным"),
    instagram: yup.string().matches(instagramRegex, "Instagram должен быть в формате @username").required("Instagram является обязательным"),
    message: yup.string().required("Сообщение является обязательным"),
  });

  return callBackFormValidationSchema;
};
