import HashLoader from "react-spinners/HashLoader";

type LoadingOverlayProps = {
  isLoading: boolean;
};

export default function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  return (
    isLoading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col items-center gap-4 p-4 text-white font-semibold">
          <HashLoader color="#fff" loading={isLoading} />
          <p className="text-sm">Cargando...</p>
        </div>
      </div>
    )
  );
}
