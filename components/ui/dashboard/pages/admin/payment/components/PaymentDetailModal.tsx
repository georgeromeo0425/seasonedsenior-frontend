import SvgAlert from "@/public/icons/Alert";

const transactionStatus = ["Completed", "In progress", "Cancelled"];

const statusBtnColor = [
  "bg-badgeBgColor text-badgeTextColor",
  "bg-badgeBlueBgColor text-badgeBlueTextColor",
  "bg-badgeRedBgColor text-badgeRedTextColor",
];

type PaymentDetailModalProps = {
  open: boolean;
  handleClose: () => void; // Assuming handleClose is a function with no parameters and no return value
  sender: string;
  receiver: string;
  amount: number;
  dateTime: string;
  status: number;
};

export default function PaymentDetailModal({
  open,
  handleClose,
  sender,
  receiver,
  amount,
  dateTime,
  status,
}: PaymentDetailModalProps) {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[2000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => handleClose()}
    >
      <div
        className="p-16 bg-white z-[2005] flex flex-col items-center gap-y-16"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="flex justify-center">
            <p className="text-2xl font-bold text-black">Transaction Details</p>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4">
            <p className="text-2xl font-bold text-black">Sender:</p>
            <p className="text-2xl text-textdarkColor">{sender}</p>
            <p className="text-2xl font-bold text-black">Receiver:</p>
            <p className="text-2xl text-textdarkColor">{receiver}</p>
            <p className="text-2xl font-bold text-black">Transaction ID:</p>
            <p className="text-2xl text-textdarkColor">6471XTY2346VAY3287</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <p className="text-2xl font-bold text-black">Payment Details</p>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4">
            <p className="text-2xl font-bold text-black">Bank name:</p>
            <p className="text-2xl text-textdarkColor">Bank of America</p>
            <p className="text-2xl font-bold text-black">Amount:</p>
            <p className="text-2xl text-textdarkColor">{`$ ${amount}`}</p>
            <p className="text-2xl font-bold text-black">Date & Time:</p>
            <p className="text-2xl text-textdarkColor">{dateTime}</p>
            <p className="text-2xl font-bold text-black">Account number:</p>
            <p className="text-2xl text-textdarkColor">456732098761234</p>
            <p className="text-2xl font-bold text-black">Routing number:</p>
            <p className="text-2xl text-textdarkColor">000013451345621</p>
            <p className="text-2xl font-bold text-black">Status:</p>
            <div>
              <span
                className={`px-2.5 py-0.5 text-xs rounded-xl ${statusBtnColor[status]}`}
              >
                {transactionStatus[status]}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
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
