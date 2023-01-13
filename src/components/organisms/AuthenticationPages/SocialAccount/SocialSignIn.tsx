import React from "react";

import Icon from "@components/atoms/Icons";
import SocialButton from "@components/molecules/SocialButton";

const SocialSignIn = () => {
  return (
    <div className="font-nunitoSans mt-5">
      <SocialButton className="mb-2" icon={<Icon className="absolute left-5" name="googleLogo" />} text="Sign in with Google" />
      <SocialButton className="mb-2" icon={<Icon className="absolute left-5" name="facebookLogo" />} text="Sign in with Facebook" />
      <SocialButton className="mb-2" icon={<Icon className="absolute left-5" name="appleLogo" />} text="Sign in with Apple" />
    </div>
  );
};

export default SocialSignIn;
