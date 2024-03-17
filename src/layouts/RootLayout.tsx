import Header from "../shared/components/Header";
import Footer from "@/shared/components/Footer";
import { AnimatePresence } from "framer-motion";
import AnimatedOutlet from "@/shared/components/animation/AnimatedOutlet";
import { useLocation } from "react-router-dom";

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-[100svh]">
      <Header />

      <main className="flex-1 my-8 px-4">
        <AnimatePresence mode="wait">
          <AnimatedOutlet key={location.key} />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
