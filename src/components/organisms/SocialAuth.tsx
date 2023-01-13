import FacebookSignIn from "@components/molecules/Facebook";
import GoogleSignIn from "@components/molecules/Google";

interface SocialAuthProps {
  signUp: boolean;
}

const SocialAuth = ({ signUp }: SocialAuthProps) => {
  const onLoginSuccessDestination = "/vacations";

  return (
    <div className="flex flex-col smallLaptop:flex-row justify-center items-center mt-8">
      <GoogleSignIn signUp={signUp} successDestination={onLoginSuccessDestination} />
      <div className="ml-0 mt-4 smallLaptop:ml-4 smallLaptop:mt-0">
        <FacebookSignIn signUp={signUp} successDestination={onLoginSuccessDestination} />
      </div>
    </div>
  );
};

export default SocialAuth;
