import { cn } from "../utilities/cn";
import { Link, LinkProps } from "react-router-dom";
import { motion, Variants, MotionConfigProps } from "framer-motion";

type NavbarLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

const motionConfig: MotionConfigProps = {
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  whileHover: {
    backgroundColor: "#A0153E",
    color: "#fff",
    borderColor: "#FF204E",
  },
  whileTap: {
    scale: 0.95,
  },
};

export default function NavbarLink({
  children,
  className,
  ...rest
}: NavbarLinkProps) {
  return (
    <Link {...rest}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        whileTap="whileTap"
        whileHover="whileHover"
        layout
        className={cn(
          "px-3 py-1 border-2 font-medium rounded-md text-sm",
          className
        )}
        {...motionConfig}
      >
        {children}
      </motion.div>
    </Link>
  );
}
