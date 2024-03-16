import stethoscopeIcon from "@assets/imgs/stethoscope.png";
import { cn } from "../utilities/cn";

export type HeartSafeLogoProps = {
  className?: string;
};

export default function HeartSafeLogo({ className }: HeartSafeLogoProps) {
  return (
    <img className={cn(className)} src={stethoscopeIcon} alt="HeartSafe" />
  );
}
