import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/router.tsx";

export function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
