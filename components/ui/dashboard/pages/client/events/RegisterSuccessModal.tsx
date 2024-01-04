import Image from "next/image";

import SvgClose from "@/public/icons/Close";
import { CalendarMonth } from "@mui/icons-material";
import SvgMoney from "@/public/icons/Money";
import SvgShare from "@/public/icons/Share";
import SvgPeople from "@/public/icons/People";
import SvgLocation from "@/public/icons/Location";

type RegisterSuccessModalProps = {
  open: boolean;
  handleClose: () => void; // Assuming handleClose is a function with no parameters and no return value
};

export default function RegisterSuccessModal({
  open,
  handleClose,
}: RegisterSuccessModalProps) {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[2000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => handleClose()}
    >
      <div
        className="px-6 py-[110px] bg-white z-[2005] w-[559px] flex flex-col items-center gap-y-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div>
          <p className="text-2xl font-bold text-primary">Congratulations</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-black text-center">
            You have successfully registered to Oldies Hangout
          </p>
        </div>
        <Image
          src="/images/register_avatar.png"
          alt={""}
          width={134}
          height={134}
        />
        <div
          className="p-4 bg-white border-2 border-primary flex items-center justify-center rounded-lg mt-4 cursor-pointer"
          onClick={() => handleClose()}
        >
          <p className="text-xl font-bold text-primary">Return to Events</p>
        </div>
      </div>
    </div>
  );
}
