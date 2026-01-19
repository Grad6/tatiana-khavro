import Image from "next/image";
import Container from "../../shared/container/Container";

export default function Bonus() {
  return (
    <Container className="mb-[16px]">
      <div
        className="relative flex items-center gap-4 h-[57px] rounded-[8px]
            bg-gradient-to-r from-purple-700 to-purple-800 px-[14px]"
      >
        <div
          className="absolute z-10 inset-0 rounded-[8px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, var(--color-purple-darker) 0%, var(--color-purple-500) 100%)",
            padding: "1.5px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <div className="absolute z-10 right-[-14px] -top-11 w-[67px] h-[67px]">
          <Image src="/images/giftbox.svg" alt="bonus" width={67} height={67} />
        </div>
        <h2
          className="font-actay font-bold text-[27px] leading-[34px] text-center uppercase"
          style={{
            background:
              "linear-gradient(94.78deg, #FFFFFF 3.86%, var(--color-purple-accent) 149%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Бонус
        </h2>
        <p className="text-[10px] leading-[120%] text-purple-light">
          мини-видео «Сценарии прошлого: как они управляют настоящим»
        </p>
      </div>
    </Container>
  );
}
