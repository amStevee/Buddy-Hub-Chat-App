import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import OnboardingPage from "@/pages/OnboardingPage";
import SignupPage from "@/pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <OnboardingPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
  },
]);

export default router;
