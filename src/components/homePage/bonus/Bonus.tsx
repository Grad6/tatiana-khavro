import Image from "next/image";
import Container from "../../shared/container/Container";

export default function Bonus() {
  return (
    <Container className="mb-[16px]">
      <div
        className="relative flex items-center gap-4 h-[57px] rounded-[8px]
            bg-gradient-to-r from-[#501FFF] to-[#7835FE] px-[14px]"
      >
        <div
          className="absolute z-10 inset-0 rounded-[8px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #160641 0%, #6640FF 100%)",
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
          className="font-actay-wide font-bold text-[27px] leading-[34px] text-center uppercase"
          style={{
            background:
              "linear-gradient(94.78deg, #FFFFFF 3.86%, #4000FF 149%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Бонус
        </h2>
        <p className="text-[10px] leading-[120%] text-[#DBC1FF]">
          мини-видео «Сценарии прошлого: как они управляют настоящим»
        </p>
      </div>
    </Container>
  );
}
