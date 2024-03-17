import { cn } from "../utilities/cn";
import stethoscopeIcon from "@assets/imgs/stethoscope.png";
import { motion, Variants, MotionConfigProps } from "framer-motion";

export type HeartSafeLogoProps = {
  className?: string;
};

const variants: Record<string, Variants> = {
  title: {
    hidden: {
      opacity: 0,
      x: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  icon: {
    hidden: {
      opacity: 0,
      x: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
};

const motionConfig: MotionConfigProps = {
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

export default function HeartSafeLogo({ className }: HeartSafeLogoProps) {
  return (
    <figure className="inline-flex items-center gap-2">
      <motion.h1
        className="text-3xl font-bold"
        variants={variants.title}
        initial="hidden"
        animate="visible"
        {...motionConfig}
      >
        HeartSafe
      </motion.h1>

      <motion.img
        className={cn("w-12 h-12", className)}
        src={stethoscopeIcon}
        alt="HeartSafe"
        variants={variants.icon}
        initial="hidden"
        animate="visible"
        {...motionConfig}
      />
    </figure>
  );
}
