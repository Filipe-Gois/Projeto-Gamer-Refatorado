// import { useForm } from "react-hook-form";
import { GridLayout, MainContent } from "../../Components/Container/Container";
import { FormLogin } from "../../Components/Form";
import { BannerLoginBlur, BannerLoginContent, BannerLoginStyle } from "./style";

const LoginPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const login = (data): void => {};

  return (
    <MainContent>
      <BannerLoginStyle>
        <BannerLoginBlur>
          <GridLayout>
            <BannerLoginContent>
              <FormLogin />
            </BannerLoginContent>
          </GridLayout>
        </BannerLoginBlur>
      </BannerLoginStyle>
    </MainContent>
  );
};

export default LoginPage;
