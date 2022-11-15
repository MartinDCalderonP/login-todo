import { ChangeEvent, useCallback, useEffect, useState } from "react";
import ErrorMessage from "components/ErrorMessage";
import { DefaultInput, InputContainer, InputWrapper } from "./styles";

interface IInput {
  disableFormButton: (value: string, validInput: boolean) => void;
  icon: JSX.Element;
  label: string;
  name: string;
  placeholder: string;
  setValue: (name: string, value: string) => void;
  type: string;
  value: string;
}

const Input = ({
  disableFormButton,
  icon,
  label,
  name,
  placeholder,
  setValue,
  type,
  value,
}: IInput) => {
  const [validInput, setValidInput] = useState(true);

  const isAValidEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    const maxLength = 50;

    return regex.test(email) && email.length <= maxLength;
  };

  const isAValidPassword = (password: string) => {
    const minLength = 4;
    const maxLength = 16;

    return password.length >= minLength && password.length <= maxLength;
  };

  const changeInputColor = useCallback((name: string, value: string) => {
    if (name === "email" && value.length > 0) {
      setValidInput(isAValidEmail(value));
    }

    if (name === "password" && value.length > 0) {
      setValidInput(isAValidPassword(value));
    }

    if (value === "") {
      setValidInput(true);
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(name, value);
  };

  useEffect(() => {
    changeInputColor(name, value);
  }, [changeInputColor, name, value]);

  useEffect(() => {
    disableFormButton(value, validInput);
  }, [value, disableFormButton, validInput]);

  const currentErrorMessage = () => {
    const errorMessages = {
      email: "Not a valid email",
      password: "Not a valid password",
    };

    return errorMessages[name as keyof typeof errorMessages];
  };

  return (
    <InputContainer key={name}>
      <label htmlFor={name}>{label}</label>

      <InputWrapper validInput={validInput}>
        {icon}

        <DefaultInput
          id={name}
          name={name}
          onChange={handleInputChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </InputWrapper>

      {!validInput && <ErrorMessage message={currentErrorMessage()} />}
    </InputContainer>
  );
};

export default Input;
