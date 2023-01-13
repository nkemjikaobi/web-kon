import { toast } from "react-toastify";

import { NotificationTypes } from "@shared/libs/helpers";

import WarnIcon from "/public/images/svg/errorToast.svg";
import SuccessIcon from "/public/images/svg/success.svg";

export const citiToast = (type: NotificationTypes, text: string, autoClose?: number) => {
  /**
   * Object is to be updated with icons for the different toast type when
   * we have toast of the different types e.g success, info e.t.c
   * **/
  const toastIcons: Record<NotificationTypes, any> = {
    error: WarnIcon,
    success: SuccessIcon,
    info: WarnIcon,
  };

  toast(
    <div className="flex justify-center w-full smallLaptop:w-[500px]">
      <img className="mr-2 smallLaptop:mr-4" src={toastIcons[type].src} />
      <span>{text}</span>
    </div>,
    {
      type,
      icon: false,
      position: "top-center",
      hideProgressBar: true,
      autoClose: autoClose || 5000,
    }
  );
};
