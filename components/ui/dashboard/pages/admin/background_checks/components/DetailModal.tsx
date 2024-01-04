import SvgAlert from "@/public/icons/Alert";

const statusBtnColor = ["text-forgotColor", "text-success", "text-[#EDBB2A]"];
const evaluationStatus = ["Processing", "Approved", "Attention"];

type DetailModalProps = {
  open: boolean;
  handleClose: () => void; // Assuming handleClose is a function with no parameters and no return value
  date: string;
  status: number;
  name: string;
  applicationID: number;
};

export default function DetailModal({
  open,
  handleClose,
  date,
  status,
  name,
  applicationID,
}: DetailModalProps) {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[2000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => handleClose()}
    >
      <div
        className="p-4 bg-white z-[2005] w-3/4 flex flex-col items-center gap-y-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="w-full flex">
          <p className="text-black text-xl font-bold">
            {name + " BACKGROUND CHECK"}
          </p>
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <div className="flex">
            <p className="text-black text-base">Status:</p>
            {status == 2 ? <SvgAlert /> : <></>}
            <p className={`text-bold pl-2 ${statusBtnColor[status]}`}>
              {evaluationStatus[status]}
            </p>
          </div>
          <div>
            <p className="text-textdarkColor">
              {status == 2 ? "Alert Found" : "No Alert found"}
            </p>
          </div>
        </div>
        <div className="text-primary bg-[#FFF2F5] w-full px-2 py-2">
          <p>Report Details</p>
        </div>
        <div className="w-full grid grid-cols-3 gap-y-4">
          <p className="text-base text-black font-bold">Date</p>
          <p className="col-span-2 text-base text-black">{date}</p>
          <p className="text-base text-black font-bold">Application ID</p>
          <p className="col-span-2 text-base text-black">{applicationID}</p>
          <p className="text-base text-black font-bold">Alert</p>
          <p className="col-span-2 text-base text-textdarkColor">
            {status == 0 ? "Non" : "Found"}
          </p>
        </div>
        <div className="w-full flex justify-end">
          <span
            className="bg-primary px-6 py-2 text-white cursor-pointer"
            onClick={() => handleClose()}
          >
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
