import LoaderIcon from "../icons/LoaderIcon";

interface MainButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
  variant?: "white" | "black";
}

export default function MainButton({
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
  isLoading = false,
  variant = "black",
}: MainButtonProps) {
  const variantClasses = {
    white: "bg-white text-black",
    black: "bg-black text-white",
  };

  return (
    <button
      className={`${variantClasses[variant]} ${className} ${disabled ? "opacity-50" : ""}
        rounded-full flex items-center justify-center font-actay font-bold text-[12px] leading-[15px] uppercase cursor-pointer`}
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
    >
      <span>{children}</span>
      {isLoading && <LoaderIcon />}
    </button>
  );
}
