import { IconPencil } from "../../Icons";
import { ButtonEditWrapper } from "./ui/ButtonEditWrapper";

export const ButtonEdit = (props) => (
  <ButtonEditWrapper {...props}>
    Edit
    <IconPencil className="w-5 h-5" />
  </ButtonEditWrapper>
);
