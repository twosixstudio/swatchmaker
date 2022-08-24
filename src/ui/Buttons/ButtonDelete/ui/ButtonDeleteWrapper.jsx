export const ButtonDeleteWrapper = ({ children, onClick }) => (
  <button
    className="bg-slate-200 py-2 px-4 flex items-center gap-1 rounded text-sm font-bold uppercase hover:bg-slate-300"
    {...{ onClick }}
  >
    {children}
  </button>
);
