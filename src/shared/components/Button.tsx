import { ButtonType } from "@/shared/types/button";
import { cn } from "@/shared/utilities/cn";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: ButtonType;
  children?: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({
  children,
  disabled,
  className,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "bg-blue-500 flex items-center gap-2 justify-center text-white px-4 py-2 rounded-md hover:opacity-70 transition-opacity ease-in-out duration-300",
        className,
        {
          "cursor-not-allowed": disabled,
          "opacity-50": disabled,
        }
      )}
    >
      {children}
      {isLoading && <div className="loading-spinner"></div>}
    </button>
  );
}
