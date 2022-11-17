import { useRouter } from "next/router";
import Button from "components/Button";
import { LogoutButtonContainer } from "./styles";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogoutButtonClick = () => {
    router.push("/");
  };

  return (
    <LogoutButtonContainer>
      <Button onClick={handleLogoutButtonClick} type="button" variant={"white"}>
        Logout
      </Button>
    </LogoutButtonContainer>
  );
};

export default LogoutButton;
