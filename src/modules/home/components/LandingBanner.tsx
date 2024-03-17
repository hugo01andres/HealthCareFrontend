import NavbarLink from "@/shared/components/NavbarLink";

export default function LandingBanner() {
  return (
    <div className="h-[50svh] relative px-6">
      <div className="absolute inset-0 -z-10 shadow-md">
        <img
          src="/src//assets/imgs/landing-banner-bg.jpg"
          alt="banner"
          className="w-full h-full absolute object-cover -z-10 rounded-md"
        />
        <div className="absolute bg-black inset-0 opacity-50 rounded-md" />
      </div>

      <div className="flex flex-col gap-4 items-start sm:items-center justify-center h-full text-white max-w-2xl sm:mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Welcome to the landing page
          </h1>
          <p className="text-lg sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non
            magnam eum nulla nostrum dolor odit sint vitae! Suscipit blanditiis
            vitae iusto eos.
          </p>
        </div>

        <NavbarLink to="/patient-analysis">
          <button className="text-xl">¡Ir al formulario!</button>
        </NavbarLink>
      </div>
    </div>
  );
}
