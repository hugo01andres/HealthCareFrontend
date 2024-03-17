import { motion, HTMLMotionProps, Variants } from "framer-motion";

type PageTransitionWrapperProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageTransitionWrapper({
  children,
  ...rest
}: PageTransitionWrapperProps) {
  return (
    <motion.div
      {...rest}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
