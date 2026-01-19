interface MainButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  variant?: "white" | "black";
}

export default function MainButton({
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  variant = "black",
}: MainButtonProps) {
  const variantClasses = {
    white: "bg-white text-black",
    black: "bg-black text-white",
  };

  return (
    <button
      className={`${variantClasses[variant]} ${className}
        flex items-center justify-center font-actay-wide font-bold text-[12px] leading-[15px] uppercase`}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      <span>{children}</span>
      {loading && <span>Loading...</span>}
    </button>
  );
}
