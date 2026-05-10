import { Button } from "@/components/ui/button";
import { useNavigate, useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <h1 className="font-extrabold text-primary">Opps!</h1>
      <p>{error.status === 404 ? "Page Not Found" : "Something went wrong"}</p>

      <h6>
        Click{" "}
        <Button onClick={() => navigate(-1)} variant="link">
          here
        </Button>
        back to
      </h6>
    </div>
  );
}
