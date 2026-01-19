import MainButton from "../buttons/MainButton";

interface SubmitButtonProps {
  dirty: boolean;
  isValid: boolean;
  isLoading: boolean;
  text: string;
  className?: string;
}

export default function SubmitButton({
  dirty,
  isValid,
  isLoading,
  text,
  className = "",
}: SubmitButtonProps) {
  return (
    <MainButton
      type="submit"
      variant="black"
      disabled={!(dirty && isValid) || isLoading}
      isLoading={isLoading}
      className={className}
    >
      {isLoading ? "Отправка..." : text}
    </MainButton>
  );
}
