import { IconPlus } from "../../Icons";

export const ButtonAdd = (props) => (
  <button className="inline-flex flex-col items-center gap-2 group" {...props}>
    <div className="bg-slate-200 w-10 h-10 rounded-full  flex items-center justify-center text-3xl leading-none group-hover:bg-slate-300">
      <IconPlus className="w-5 h-5" />
    </div>
    <span className="uppercase text-sm font-bold">Add a color</span>
  </button>
);
