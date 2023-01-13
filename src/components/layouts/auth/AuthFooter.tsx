import CustomLink from "@components/atoms/CustomLink/CustomLink";

const AuthFooter = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="hidden smallLaptop:block">
      <div className="flex justify-between font-nunitoSans text-16 pr-12 pl-12 pb-4 absolute w-full bottom-0 overflow-hidden">
        <p>© {year} CitiSquare. All rights reserved. </p>
        <div>
          <ul className="flex text-citiBlue-200">
            <li>
              <CustomLink destination="/privacy-policy">Terms</CustomLink>
            </li>
            <li className="ml-7">
              <CustomLink destination="/privacy-policy">Privacy</CustomLink>
            </li>
            <li className="ml-7">
              <CustomLink destination="#">Security</CustomLink>
            </li>
            <li className="ml-7">
              <CustomLink destination="#">Get in Touch</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthFooter;
