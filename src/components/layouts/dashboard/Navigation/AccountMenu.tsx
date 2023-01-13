import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import Icon from "@components/atoms/Icons";

import { useWindowSize } from "@hooks/useWindowSize";

const AccountMenu = () => {
  const { firstName, lastName, email } = useSelector((state: AppState) => state.auth.user || {});

  const router = useRouter();

  const [width] = useWindowSize();

  return (
    <div className="smallLaptop:h-auto smallLaptop:block smallLaptop:min-w-[274px] smallLaptop:ml-4">
      <Link href="/account/my-account">
        <div className="text-14 leading-5 px-2 smallLaptop:hidden cursor-pointer">
          <h1 className="font-bold">
            {firstName} {lastName}
          </h1>
          <h2>{email}</h2>
        </div>
      </Link>
      <div className="bg-white mt-4 text-16">
        {(width > 1024 ? AccountMenuData : AccountMenuData.slice(1)).map((data, index) => (
          <Fragment key={data.title}>
            <Link href={data.route}>
              <div className={`flex justify-between px-5 pt-5 pb-5 cursor-pointer ${data.route === router.pathname ? "bg-[#EDF9FF] bg-opacity-[42%]" : ""}`}>
                <div className="flex">
                  <Icon name={data.icon} />
                  <p className="ml-2 mt-1">{data.title}</p>
                </div>
                <div className="smallLaptop:hidden">
                  <Icon name="arrowRight" />
                </div>
              </div>
            </Link>
            <hr className="smallLaptop:hidden" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AccountMenu;

const AccountMenuData = [
  {
    icon: "userAccount",
    title: "My Citisquare Account",
    route: "/account/my-account",
  },
  {
    icon: "messageText",
    title: "Reviews",
    route: "#",
  },
  {
    icon: "shoppingCart",
    title: "Orders",
    route: "/account/orders",
  },
  {
    icon: "receipt",
    title: "Transactions",
    route: "#",
  },
  {
    icon: "directInbox",
    title: "Inbox",
    route: "#",
  },
  {
    icon: "headphone",
    title: "Customer Support",
    route: "#",
  },
];
