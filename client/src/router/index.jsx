import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ChatPage from "@/pages/ChatPage";
import OnboardingPage from "@/pages/OnboardingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <OnboardingPage /> },
      { path: "about", element: <ChatPage /> },
    ],
  },
]);

export default router;
