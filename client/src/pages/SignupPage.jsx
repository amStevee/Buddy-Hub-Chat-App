import { EyeOffIcon, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col items-center pt-5 gap-5 mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-primary font-bold text-[clamp(1.5rem,5vw,3rem)]">
          Create Account
        </h1>
        <small>Be a part of the Buddy hub community</small>
      </div>

      <FieldGroup>
        {/* Firstname */}
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Firstname</FieldLabel>
          <Input id="fieldgroup-name" placeholder="Jordan Lee" />
        </Field>
        {/* Lastname */}
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Lastname</FieldLabel>
          <Input id="fieldgroup-name" placeholder="Jordan Lee" />
        </Field>
        {/* Email */}
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            placeholder="name@example.com"
          />
          <FieldDescription>
            We&apos;ll send updates to this address.
          </FieldDescription>
        </Field>
        {/* Password */}
        <Field className="max-w-sm">
          <FieldLabel htmlFor="inline-end-input">Password</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="inline-end-input"
              type={visible ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputGroupAddon align="inline-end">
              {visible ? (
                <Eye onClick={() => setVisible(!visible)} />
              ) : (
                <EyeOffIcon onClick={() => setVisible(!visible)} />
              )}
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>Icon positioned at the end.</FieldDescription>
        </Field>

        {/* Confirm password */}
        <Field className="max-w-sm">
          <FieldLabel htmlFor="inline-end-input">Confirm Password</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="inline-end-input"
              type={visible ? "text" : "password"}
              placeholder="Comfirm password"
            />
            <InputGroupAddon align="inline-end">
              {visible ? (
                <Eye onClick={() => setVisible(!visible)} />
              ) : (
                <EyeOffIcon onClick={() => setVisible(!visible)} />
              )}
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <Field orientation="vertical">
          <Button type="submit">Sign up</Button>
        </Field>
      </FieldGroup>

      <h4>or sign up with</h4>

      <h5 className="font-bold">
        Already have an account?{" "}
        <Link to={"/signin"} className="text-primary ">
          Login
        </Link>
      </h5>
    </div>
  );
}
