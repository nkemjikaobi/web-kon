import Icon from "../Icons";

interface BookProps {
  title: string;
  icon: string;
  content: string;
  containerClass?: string;
  customClass?: string;
  onChange: () => void;
  checked: boolean;
}

const LargeRadioButton = ({ title, icon, content, containerClass, customClass, onChange, checked }: BookProps) => {
  return (
    <div className={`flex  bg-white p-4 pb-6 ${containerClass}`}>
      <div className="flex">
        <div>
          <Icon name={icon} />
        </div>
        <div className="text-16 ml-5">
          <h1 className="font-bold">{title}</h1>
          <p className="mt-2 leading-5">{content}</p>
        </div>
      </div>
      <input checked={checked} className="cursor-pointer" id="book" name="book" onChange={onChange} type="radio" />
    </div>
  );
};

export default LargeRadioButton;
LargeRadioButton.defaultProps = {
  customClass: "",
  containerClass: "",
};
