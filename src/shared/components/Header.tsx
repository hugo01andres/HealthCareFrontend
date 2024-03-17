import HeartSafeLogo from "./HeartSafeLogo";
import NavbarLink from "./NavbarLink";

export default function Header() {
  return (
    <header className="border-b border-gray-400">
      <div className="container mx-auto py-4 sm:py-6 flex items-center flex-wrap sm:justify-between gap-2 justify-center">
        <HeartSafeLogo />

        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <NavbarLink className="border-gray-600" to="/">
                Inicio
              </NavbarLink>
            </li>
            <li>
              <NavbarLink className="border-gray-600" to="/patient-analysis">
                Obtener análisis
              </NavbarLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
