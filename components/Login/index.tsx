import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaUser, FaLock } from "react-icons/fa";
import useFetch from "hooks/useFetch";
import Button from "components/Button";
import ErrorMessage from "components/ErrorMessage";
import Input from "components/Input";
import { LoginContainer } from "./styles";

const inputs = [
  {
    icon: <FaUser />,
    label: "Email",
    name: "email",
    placeholder: "user@rapptrlabs.com",
    type: "text",
  },
  {
    icon: <FaLock />,
    label: "Password",
    name: "password",
    placeholder: "Must be at least 4 characters",
    type: "password",
  },
];

const loginUrl = "http://dev.rapptrlabs.com/Tests/scripts/user-login.php";

const Login = () => {
  const [loginParams, setLoginParams] = useState({
    email: "",
    password: "",
  });

  const handleLoginParamsChange = (name: string, value: string) => {
    setLoginParams({ ...loginParams, [name]: value });
  };

  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);

  const handleDisableLoginButton = (value: string, validInput: boolean) => {
    if (value.length > 0 && validInput) {
      setLoginButtonDisabled(false);
    } else {
      setLoginButtonDisabled(true);
    }
  };

  const [fetchUrl, setFetchUrl] = useState("");
  const [fetchOptions, setFetchOptions] = useState({});

  const handleLoginButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setFetchUrl(loginUrl);
    setFetchOptions({
      method: "POST",
      body: new URLSearchParams(loginParams),
    });
  };

  const { data, loading, error } = useFetch<{
    fetchUrl: string;
    fetchOptions: RequestInit;
  }>(fetchUrl, fetchOptions);

  const router = useRouter();

  useEffect(() => {
    if (data && "user_id" in data) {
      router.push("/to-do-list");
    }
  }, [data, router]);

  return (
    <LoginContainer>
      <h1>Rapptr Labs</h1>

      <form>
        {inputs?.map((input) => (
          <Input
            key={input.name}
            disableFormButton={handleDisableLoginButton}
            value={loginParams[input.name as keyof typeof loginParams]}
            setValue={handleLoginParamsChange}
            {...input}
          />
        ))}

        <Button
          type="submit"
          disabled={loginButtonDisabled || loading}
          onClick={handleLoginButtonClick}
        >
          Login
        </Button>

        {error && (
          <ErrorMessage
            message="The server could not be reached. Please try again later."
            textAlign="center"
          />
        )}
      </form>
    </LoginContainer>
  );
};

export default Login;
