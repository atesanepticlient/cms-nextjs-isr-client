"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  boxShadow: 24,
};

export default function PaymentModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            title="Onramper Widget"
            src={`https://widget.onramper.com?apiKey=${process.env.NEXT_PUBLIC_ONRAMPER_API_KEY}&isAddressEditable=true&onlyCryptos=BTC,ETH,USDT&isAmountEditable=true`}
            height="430px"
            width="420px"
            allow="accelerometer; autoplay; camera; gyroscope; payment"
            frameBorder="0"
            className="rounded-xl shadow-lg"
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}

// function PaymentMethod() {
//   return (
//     <div className="flex-1">
//       <h2 className="mb-5 text-lg text-center text-neutral-400">Pay Using</h2>
//       <div className="flex justify-between items-center px-5 py-0 max-sm:flex-col max-sm:gap-5">
//         <div className="flex items-center text-lg text-white">
//           <Image src={googleIcon} className="w-8 h-8" />

//           <span>Google Pay</span>
//         </div>
//         <button
//           className="flex gap-2.5 items-center text-lg text-rose-400"
//           aria-label="Change payment method"
//         >
//           <span>Change</span>
//           <i className="ti ti-chevron-right" aria-hidden="true" />
//         </button>
//       </div>
//     </div>
//   );
// }
