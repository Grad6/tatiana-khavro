"use client";
import { useState } from "react";
import MainButton from "../../shared/buttons/MainButton";
import Container from "../../shared/container/Container";
import CallbackFormModal from "../../shared/modals/CallbackFormModal";
import NotificationModal from "../../shared/modals/NotificationModal";

export default function SignUp() {
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  return (
    <>
      <Container className="relative pb-[19px] overflow-hidden">
        <div className="absolute -z-10 left-1/2 -translate-x-1/2 bottom-[-505px] w-[771px] h-[565px] blur-[70.85px] bg-bg-glow" />
        <MainButton variant="white" className="w-full h-[52px] rounded-full" onClick={() => setIsPopUpShown(true)}>Записаться на консультацию</MainButton>
      </Container >
      <CallbackFormModal
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
        setIsNotificationShown={setIsNotificationShown}
        setIsError={setIsError}
      />
      <NotificationModal
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      />
    </>
  );
}
