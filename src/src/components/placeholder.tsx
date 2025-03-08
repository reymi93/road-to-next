import { MessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<any>;
  button?: React.ReactElement<any>;
};

export default function Placeholder({
  label,
  icon = <MessageSquareWarning></MessageSquareWarning>,
  button = <div></div>,
}: PlaceholderProps) {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-py-2">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
}
