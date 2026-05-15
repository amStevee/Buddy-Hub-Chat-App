import React from "react";
import { EyeOffIcon, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
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

export default function SigninPage() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    console.log({ ...values, password: null });

    navigate("/verify");
  }
  return (
    <div className="flex flex-col items-center gap-5 mt-20">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col items-center">
        <h1 className="text-primary font-bold text-[clamp(1.5rem,5vw,3rem)]">
          Sign in
        </h1>
        <small>Be a part of the Buddy hub community</small>
      </div>

      <FieldGroup onSubmit={handleSubmit} className="mx-10">
        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
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
        </Field>
        {/* Password */}
        <Field className="max-w-sm">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="password"
              name="password"
              type={visible ? "text" : "password"}
              placeholder="Enter password"
              onChange={handleFormData}
              value={formData.password}
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
          <Button asChild variant="link" className="self-end text-primary">
            <Link to="/forgot-details">forget password?</Link>
          </Button>
        </Field>

        <Field orientation="horizontal" className="justify-center">
          <Button size="lg" type="submit" className="px-20 py-5 rounded-4xl">
            Sign in
          </Button>
        </Field>
      </FieldGroup>

      <h4>or sign in with</h4>

      {/* 
        To-do
        replace sign-up options with their respective links
      */}

      <div className="flex justify-between gap-5 ">
        <div className="flex items-center rounded-4xl bg-muted-foreground p-5 disabled:opacity-50 disabled:pointer-events-none disabled:hover:bg-primary"></div>
        <div className="flex items-center rounded-4xl bg-muted-foreground p-5 disabled:opacity-50 disabled:pointer-events-none disabled:hover:bg-primary"></div>
        <div className="flex items-center rounded-4xl bg-muted-foreground p-5 disabled:opacity-50 disabled:pointer-events-none disabled:hover:bg-primary"></div>
      </div>

      <h5 className="font-bold">
        Already have an account?{" "}
        <Link to={"/signup"} className="text-primary ">
          Sign up
        </Link>
      </h5>
    </div>
  );
}
