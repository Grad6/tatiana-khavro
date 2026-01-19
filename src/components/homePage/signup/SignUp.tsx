import { useState } from "react";
import MainButton from "../../shared/buttons/MainButton";
import Container from "../../shared/container/Container";
import Modal from "../../shared/modals/Modal";

export default function SignUp() {
  const [isModalShown, setIsModalShown] = useState(false);
  const handleClick = () => {
    setIsModalShown(true);
  };
  const handleClose = () => {
    setIsModalShown(false);
  };
  return (
    <>
      <Container className="relative pb-[19px] overflow-hidden">
        <div className="absolute -z-10 left-1/2 -translate-x-1/2 bottom-[-505px] w-[771px] h-[565px] blur-[70.85px] bg-[#1F006F]" />
        <MainButton variant="white" className="w-full h-[52px] rounded-full" onClick={() => setIsOpen(true)}>Записаться на консультацию</MainButton>
      </Container >
      <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown}>
        <h2>Записаться на консультацию</h2>
      </Modal>
    </>
  );
}
