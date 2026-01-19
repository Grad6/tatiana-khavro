import Image from "next/image";
import * as motion from "motion/react-client";

export default function HeroDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-5 left-5 w-[100px] h-auto"
      >
        <Image
          src="/images/frame-top-left.svg"
          alt="decoration"
          width={100}
          height={111}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-5 right-5 w-[100px] h-auto"
      >
        <Image
          src="/images/frame-top-right.svg"
          alt="decoration"
          width={100}
          height={111}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-2 -z-10 left-[50%+27px] w-[192px] h-auto"
      >
        <Image
          src="/images/drops-purple.svg"
          alt="decoration"
          width={192}
          height={192}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute -z-20 left-1/2 -translate-x-1/2 top-[37px] w-[283px] h-[283px] rounded-full"
        style={{
          background:
            "linear-gradient(184.47deg, var(--color-purple-400) 3.63%, #000000 79.46%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute -z-20 left-1/2 -translate-x-1/2 top-[23.5px] w-[312px] h-[312px] blur-[20.1544px] rounded-full"
        style={{
          background:
            "linear-gradient(184.47deg, var(--color-purple-400) 3.63%, #000000 79.46%)",
        }}
      />
    </div>
  );
}
