import HeartSafeLogo from "./HeartSafeLogo";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 border-b border-gray-400">
      <figure className="inline-flex items-center gap-2">
        <h1 className="text-3xl font-medium">HeartSafe</h1>
        <HeartSafeLogo className="w-12 h-12" />
      </figure>
    </header>
  );
}
