import { useRouter } from "next/router";

import Icon from "@components/atoms/Icons";
// import { StatusBadge } from "@components/atoms/StatusBadge";

const AccountInfo = () => {
  const router = useRouter();

  return (
    <div className="bg-white smallLaptop:h-fit pb-60 pt-6 smallLaptop:mt-4 smallLaptop:w-full television:w-[1093px]  smallLaptop:mx-4">
      <div className="flex">
        <div className="smallLaptop:hidden cursor-pointer ml-4" onClick={() => router.push("/account")}>
          <Icon name="arrowBack" />
        </div>
        <h1 className="ml-4 smallLaptop:ml-3 text-16 pb-5 mt-[2px]">Account Information</h1>
      </div>
      <hr />
      {/* <div className="mt-5 ml-7">
        <div>
          <div className="flex items-center">
            <h1 className="mr-4 smallLaptop:text-24">KYC Verification</h1>
            <StatusBadge status="PENDING" />
          </div>
          <div className=" smallLaptop:flex justify-between">
            <p className="mt-2 smallLaptop:w-[26rem]">To be able to apply for loan on citisquare. It is mandatory to have completed your kyc process.</p>
            <p className="text-citiBlue-400 text-10 mt-4 font-bold smallLaptop:text-12 smallLaptop:mr-8">SUBMIT KYC VERIFICATION</p>
          </div>
        </div>
      </div> */}
      <div className="cursor-pointer text-16 flex justify-between py-5 pr-7 border-b" onClick={() => router.push("/account/profile-information")}>
        <h1 className="smallLaptop:text-24 ml-7">Profile Information</h1>
        <Icon name="arrowRight" />
      </div>
    </div>
  );
};

export default AccountInfo;
