import { useState } from "react";

interface ExpandableTextProps {
  max: number;
  text?: string;
}
const ExpandableText: React.FC<ExpandableTextProps> = ({ max, text }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text && text.split(" ");

  const toggle = () => setIsExpanded((prev) => !prev);

  if (words && words.length > max) {
    return (
      <>
        {isExpanded ? text : words && words.slice(0, max).join(" ") + "..."}
        &nbsp;
        <span onClick={toggle} role="button">
          Read {isExpanded ? "less" : "more"}
        </span>
      </>
    );
  }
  return <> {text} </>;
};

ExpandableText.defaultProps = {
  text: "",
};

export default ExpandableText;
