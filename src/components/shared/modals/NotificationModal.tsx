import { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";

interface NotificationModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationModal({
  isPopUpShown,
  setIsPopUpShown,
}: NotificationModalProps) {
  return (
    <Modal isModalShown={isPopUpShown} setIsModalShown={setIsPopUpShown}>
      <h3 className="mb-3 font-actay text-[24px] font-bold uppercase leading-[122%] text-center text-black">
        Спасибо, что оставили данные!
      </h3>
      <p
        className="text-[12px] font-light leading-[122%] text-center text-black"
      >Я свяжусь с Вами в ближайшее время!</p>
    </Modal>
  );
}
