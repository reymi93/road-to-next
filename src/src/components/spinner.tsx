import { LoaderCircle } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center self-center">
      <LoaderCircle className="h-16 w-16 animate-spin"></LoaderCircle>
    </div>
  );
}
