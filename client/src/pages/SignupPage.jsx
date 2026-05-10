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
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleFormData(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("function ran");

    const values = formData;

    if (formData.password !== formData.confirmPassword) {
      toast.error(`password does not match`);
      return;
    }

    console.log({ ...values, password: null, confirmPassword: null });

    navigate("/chat-list");
  }

  return (
    <div className="flex flex-col items-center gap-5 mt-20">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col items-center">
        <h1 className="text-primary font-bold text-[clamp(1.5rem,5vw,3rem)]">
          Create Account
        </h1>
        <small>Be a part of the Buddy hub community</small>
      </div>

      <FieldGroup onSubmit={handleSubmit} className="px-14">
        {/* Firstname */}
        <Field>
          <FieldLabel htmlFor="firstname">
            Firstname <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="firstname"
            name="firstname"
            placeholder="Jordan"
            onChange={handleFormData}
            value={formData.firstname}
            autoComplete={"true"}
            required
          />
        </Field>
        {/* Lastname */}
        <Field>
          <FieldLabel htmlFor="lastname">
            Lastname <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="lastname"
            name="lastname"
            placeholder="Lee"
            onChange={handleFormData}
            value={formData.lastname}
            autoComplete={"true"}
            required
          />
        </Field>
        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email">
            Email <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            onChange={handleFormData}
            value={formData.email}
            autoComplete={"true"}
            required
          />
          <FieldDescription>
            We&apos;ll send updates to this address.
          </FieldDescription>
        </Field>
        {/* Password */}
        <Field className="max-w-sm">
          <FieldLabel htmlFor="password">
            Password <span className="text-destructive">*</span>
          </FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="password"
              name="password"
              type={visible ? "text" : "password"}
              placeholder="Enter password"
              onChange={handleFormData}
              value={formData.password}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$"
              required
            />
            <InputGroupAddon align="inline-end">
              {visible ? (
                <Eye onClick={() => setVisible(!visible)} />
              ) : (
                <EyeOffIcon onClick={() => setVisible(!visible)} />
              )}
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            Password should be 8-20 characters and include at least 1 letter, 1
            number and 1 special character
          </FieldDescription>
        </Field>

        {/* Confirm password */}
        <Field className="max-w-sm">
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="confirmPassword"
              name="confirmPassword"
              type={visible ? "text" : "password"}
              placeholder="Confirm password"
              onChange={handleFormData}
              value={formData.confirmPassword}
              required
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

        <Field orientation="horizontal" className="justify-center">
          <Button type="submit">Sign up</Button>
        </Field>
      </FieldGroup>

      <h4>or sign up with</h4>

      {/* 
        To-do
        replace sign-up options with their respective links
      */}

      <div className="flex justify-between gap-5">
        <div className="flex items-center rounded-4xl bg-muted-foreground p-5">
          G
        </div>
        <div className="flex items-center rounded-4xl bg-muted-foreground p-5">
          F
        </div>
        <div className="flex items-center rounded-4xl bg-muted-foreground p-5">
          L
        </div>
      </div>

      <h5 className="font-bold">
        Already have an account?{" "}
        <Link to={"/signin"} className="text-primary ">
          Login
        </Link>
      </h5>
    </div>
  );
}
