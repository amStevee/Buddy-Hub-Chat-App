import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function VerificationPage()  {
  const navigate = useNavigate();
  function verifyCode() {
    navigate("/chat-list");
  }

  function handleResend() {
    console.log("handle Resend");
  }

  return (
    <div className="flex flex-col gap-10 m-10 justify-center items-center p-10">
      <div>
        <h1 className="text-primary font-bold text-4xl">Verify Code</h1>
      </div>

      <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} id='0' />
          <InputOTPSlot index={1} id='1' />
          <InputOTPSlot index={2} id='2' />
          <InputOTPSlot index={3} id='3' />
        </InputOTPGroup>
      </InputOTP>

      <div className="flex flex-col">
        <span className="font-bold text-slate-500">Didn't receive Code?</span>
        <Button
          variant="link"
          className="font-bold text-slate-950"
          onClick={handleResend}
        >
          Resend Code
        </Button>
      </div>

      <Button className="px-28 py-7 text-2xl rounded-4xl" onClick={verifyCode}>
        Verify
      </Button>
    </div>
  );
};
