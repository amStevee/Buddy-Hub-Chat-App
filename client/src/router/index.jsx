import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import OnboardingPage from "@/pages/OnboardingPage";
import SignupPage from "@/pages/SignupPage";
import NotFoundPage from "@/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage/>,
    children: [
      { index: true, element: <OnboardingPage /> },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);

export default router;
