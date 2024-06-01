export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/60" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-4 m-2 sm:p-6 transition-all max-w-6xl sm:w-auto sm:py-2 ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="cursor-pointer absolute top-2 right-2 py-1 px-2 text-gray-400 bg-white hover:text-gray-600 group transition-colors ease-in duration-200"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x transform transition-transform duration-500 group-hover:rotate-180"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
}
