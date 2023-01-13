import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "src/store/auth";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { useWindowSize } from "@hooks/useWindowSize";

import { ButtonProperties, LocalStorageKeys } from "@shared/libs/helpers";

export const ProfilePopUp = () => {
  const { firstName } = useSelector((state: AppState) => state.auth.user);

  const router = useRouter();
  const dispatch = useDispatch();
  const [width] = useWindowSize();

  const handleLogout = () => {
    localStorage.removeItem(LocalStorageKeys.TOKEN);
    localStorage.removeItem(LocalStorageKeys.EXPIRATION_TIME);

    dispatch(setCurrentUser({}));

    router.push("/auth/login");
  };

  const getRoute = (route: string, desktopRoute?: string): string => {
    let destination = route;
    if (desktopRoute && width > 1000) destination = desktopRoute;

    if (!firstName) return `/auth/login?rdr=${destination}`;
    else return destination;
  };

  return (
    <div className="bg-white shadow-lg pb-6 font-nunitoSans w-full">
      {!firstName && (
        <>
          <CustomButton
            customClass="my-6 mx-4 text-14"
            handleClick={() => router.push("/auth/login")}
            title="Login To Your Account"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
          <hr />
        </>
      )}
      {profilePopUpMenu.map(({ title, route, desktopRoute, icon }) => (
        <Link href={getRoute(route, desktopRoute)} key={title}>
          <div className="flex items-center py-3 px-4">
            <Icon name={icon} />
            <span className="block ml-[10px] text-12 font-normal">{title}</span>
          </div>
        </Link>
      ))}
      {firstName && (
        <>
          <hr />
          <CustomButton customClass="mt-2 mx-4 text-14 w-[150px]" handleClick={() => handleLogout()} title="Logout" variant={ButtonProperties.VARIANT.secondary.name} />
        </>
      )}
    </div>
  );
};

const profilePopUpMenu = [
  {
    title: "My Account",
    icon: "user",
    route: "/account",
    desktopRoute: "/account/my-account",
  },
  {
    title: "Need Help?",
    icon: "messageQuestion",
    route: "#",
  },
];
