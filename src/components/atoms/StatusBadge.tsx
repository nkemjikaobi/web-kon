import Icon from "./Icons";

interface StatusBadgeProps {
  status?: string;
  success?: boolean;
  customClass?: string;
  icon?: string;
}

export const StatusBadge = ({ status, success, customClass, icon }: StatusBadgeProps) => (
  <>
    {status && success === true ? (
      <div className="flex">
        <div className="mr-[9.25px] mt-2">{icon && <Icon name={icon} />}</div>
        <p className={`flex items-center capitalize text-citiBlue-50 bg-citiBlue-400 text-10 rounded-full py-1 px-2 w-fit h-fit mt-1 ${customClass}`}>{status}</p>
      </div>
    ) : (
      <p className={`flex items-center capitalize text-citiRed-50 bg-citiRed-600 text-10 rounded-full py-1 px-2 w-fit h-fit mt-1 ${customClass}`}>{status}</p>
    )}
  </>
);

StatusBadge.defaultProps = {
  status: "",
  success: false,
  customClass: "",
  icon: "",
};
