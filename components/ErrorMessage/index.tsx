import { DefaultErrorMessage } from "./styles";

type TextAlign = "left" | "center" | "right";

interface IErrorMessage {
  message: string;
  textAlign?: TextAlign;
}

const ErrorMessage = ({ message, textAlign }: IErrorMessage) => {
  return (
    <DefaultErrorMessage textAlign={textAlign}>{message}</DefaultErrorMessage>
  );
};

export default ErrorMessage;
