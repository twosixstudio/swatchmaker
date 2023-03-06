export const ControlPanelInput = ({ label, ...props }) => (
  <label>
    {label}
    <input
      className="border border-slate-300 h-10 rounded-md px-3 w-full"
      {...props}
    />
  </label>
);
