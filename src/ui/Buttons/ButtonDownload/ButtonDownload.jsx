export const ButtonDownload = ({ label, ...props }) => (
  <button
    className="bg-slate-200 py-2 px-5 text-sm uppercase rounded hover:bg-slate-300 font-bold"
    {...props}
  >
    {label}
  </button>
);
