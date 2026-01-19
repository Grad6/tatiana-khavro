import Container from "../../shared/container/Container";
import Image from "next/image";

const services = [
  {
    description:
      "Выявим глубинные сценарии, которые незаметно саботируют деньги, проявленность и рост",
  },
  {
    description:
      "Посмотрим, какие внутренние установки удерживают вас в повторяющихся ситуациях",
  },
  {
    description:
      "Найдём, где решения принимаются не из реальности, а из старых программ и страхов",
  },
  {
    description:
      "Поймём, что именно сейчас мешает выйти на новый уровень — в доходе и жизни",
  },
];

export default function Services() {
  return (
    <Container className="mb-[10px]">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5px] text-purple-light">
        {services.map((service, index) => (
          <li
            key={index}
            className="relative rounded-[8px] w-full h-[56px] px-[14px] flex items-center gap-[14px]
                    bg-gradient-to-r from-[rgba(12, 1, 31, 0.13)] to-[rgba(106, 47, 255, 0.13)]"
          >
            <div
              className="absolute z-10 inset-0 rounded-[8px] pointer-events-none"
              style={{
                background: "linear-gradient(90deg, var(--color-purple-dark) 0%, var(--color-purple-600) 100%)",
                padding: "1.5px",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <Image
              src="/images/star.svg"
              alt="service"
              width={28}
              height={28}
            />
            <p className="text-[10px] leading-[120%] text-purple-light max-w-[221px]">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
