"use client";
import { Form, Formik, FormikHelpers } from "formik";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

import { CallBackValidation } from "../../../schemas/CallbackValidation";
import { trackFacebookPixel } from "../../../utils/facebookPixel";

import CustomizedInput from "../formComponents/CustomizedInput";
import SubmitButton from "../formComponents/SubmitButton";

export interface ValuesCallBackFormType {
  name: string;
  telegram: string;
  instagram: string;
  message: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsPopUpShown?: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  setIsPopUpShown,
  className = "",
}: CallBackFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    telegram: "",
    instagram: "",
    message: "",
  };

  const validationSchema = CallBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    formikHelpers: FormikHelpers<ValuesCallBackFormType>
  ) => {
    const { resetForm } = formikHelpers;
    const data =
      `<b>Форма "Оставьте свои контакты"</b>\n` +
      `<b>Имя:</b> ${values.name.trim()}\n` +
      `<b>Telegram:</b> ${values.telegram.trim()}\n` +
      `<b>Instagram:</b> ${values.instagram.trim()}\n` +
      `<b>Сообщение:</b> ${values.message.trim()}\n`;
    try {
      setIsLoading(true);
      setIsError(false);
      await axios({
        method: "post",
        url: "/api/telegram",
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Track successful form submission with Facebook Pixel
      trackFacebookPixel("Lead");
      if (setIsPopUpShown) {
        setIsPopUpShown(false);
      }
      resetForm();
      setIsNotificationShown(true);
    } catch (error) {
      setIsError(true);
      setIsNotificationShown(true);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className={`${className} flex flex-col gap-y-3.5`}>
          <CustomizedInput
            fieldName="name"
            placeholder="Имя"
            isRequired
            errors={errors}
            touched={touched}
          />
          <CustomizedInput
            fieldName="telegram"
            placeholder="Telegram"
            isRequired
            errors={errors}
            touched={touched}
          />
          <CustomizedInput
            fieldName="instagram"
            placeholder="Instagram"
            errors={errors}
            touched={touched}
          />
          <CustomizedInput
            fieldName="message"
            placeholder="Сообщение"
            as="textarea"
            isRequired
            errors={errors}
            touched={touched}
          />
          <SubmitButton
            dirty={dirty}
            isValid={isValid}
            isLoading={isLoading}
            text="Отправить"
            className="mt-2.5 lg:mt-4.5 h-[47px]"
          />
        </Form>
      )}
    </Formik>
  );
}
