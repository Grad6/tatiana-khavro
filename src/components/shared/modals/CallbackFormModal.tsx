import { Dispatch, SetStateAction } from "react";
import CallBackForm from "../forms/CallBackForm";
import Modal from "./Modal";
import Image from "next/image";

interface CallbackFormModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
}

export default function CallbackFormModal({
  isPopUpShown,
  setIsPopUpShown,
  setIsError,
  setIsNotificationShown,
}: CallbackFormModalProps) {
  return (
    <Modal isModalShown={isPopUpShown} setIsModalShown={setIsPopUpShown}>
      <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full">
        <Image src="/images/fabric-form.webp" alt="fabric-form" fill sizes="100vw" className="object-cover object-top" />
      </div>
      <h3 className="mb-4.5 font-actay text-[24px] font-bold uppercase leading-[122%] text-center text-black">
        Оставьте свои контакты
      </h3>
      <p className="mb-[51px] text-[12px] font-light leading-[122%] text-center text-black">
        Заполните свои данные и я свяжусь с Вами в ближайшее время!
      </p>
      <CallBackForm
        setIsPopUpShown={setIsPopUpShown}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
    </Modal>
  );
}
