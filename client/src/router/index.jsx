import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import OnboardingPage from "@/pages/OnboardingPage";
import SignupPage from "@/pages/SignupPage";
import NotFoundPage from "@/pages/NotFoundPage";
import SigninPage from "@/pages/SigninPage";
import { VerificationPage } from "@/pages/VerificationPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <OnboardingPage /> },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/signin",
        element: <SigninPage />,
      },
      {
        path: "/verify",
        element: <VerificationPage />,
      },
      {
        path: "/forget-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);

export default router;
