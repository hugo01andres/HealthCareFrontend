import { Outlet } from "react-router-dom";
import Header from "../shared/components/Header";
import Footer from "@/shared/components/Footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-[100svh] px-4 ">
      <Header />

      <main className="flex-1 my-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
