import HeartSafeLogo from "./HeartSafeLogo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container mx-auto py-6 border-b border-gray-400 flex justify-between gap-4">
      <figure className="inline-flex items-center gap-2">
        <h1 className="text-3xl font-medium">HeartSafe</h1>
        <HeartSafeLogo className="w-12 h-12" />
      </figure>

      <nav>
        <ul className="flex gap-4 mt-4">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/patient-analysis">Obtener análisis</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
