import Image from "next/image";
import HeroDecorations from "./HeroDecorations";
import Container from "../../shared/container/Container";

export default function Hero() {
  return (
    <div className="relative mb-[27px]">
      <HeroDecorations />
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/marina.webp"
          alt="hero"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <Image
          src="/images/fabric.webp"
          alt="fabric"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-top"
        />
        <Image
          src="/images/noise.webp"
          alt="noise"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-top"
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-[192px] w-[771px] h-[565px] blur-[70.85px] bg-bg-primary pointer-events-none" />
      </div>
      <Container className="pt-[222px] z-10">
        <h1 className="mb-[10px] font-actay font-bold text-[27px] leading-[126%] text-center uppercase text-white">
          Диагностическая консультация
        </h1>
        <p className="text-[12px] leading-[125%] text-center text-white max-w-[228px] mx-auto">
          по психологии денег и жизненных сценариев
        </p>
      </Container>
    </div>
  );
}
