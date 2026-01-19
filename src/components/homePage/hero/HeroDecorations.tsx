import Image from "next/image";

export default function HeroDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-5 left-5 w-[100px] h-auto">
        <Image
          src="/images/frame-top-left.svg"
          alt="decoration"
          width={100}
          height={111}
        />
      </div>
      <div className="absolute top-5 right-5 w-[100px] h-auto">
        <Image
          src="/images/frame-top-right.svg"
          alt="decoration"
          width={100}
          height={111}
        />
      </div>
      <div className="absolute top-2 -z-10 left-[50%+27px] w-[192px] h-auto">
        <Image
          src="/images/drops-purple.svg"
          alt="decoration"
          width={192}
          height={192}
        />
      </div>
      <div
        className="absolute -z-20 left-1/2 -translate-x-1/2 top-[37px] w-[283px] h-[283px] rounded-full"
        style={{
          background:
            "linear-gradient(184.47deg, var(--color-purple-400) 3.63%, #000000 79.46%)",
        }}
      />
      <div
        className="absolute -z-20 left-1/2 -translate-x-1/2 top-[23.5px] w-[312px] h-[312px] blur-[20.1544px] rounded-full"
        style={{
          background:
            "linear-gradient(184.47deg, var(--color-purple-400) 3.63%, #000000 79.46%)",
        }}
      />
    </div>
  );
}
