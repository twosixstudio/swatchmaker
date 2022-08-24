import { IconTrash } from "../../Icons";
import { ButtonDeleteWrapper } from "./ui/ButtonDeleteWrapper";

export const ButtonDelete = (props) => (
  <ButtonDeleteWrapper {...props}>
    Delete
    <IconTrash className="w-5 h-5" />
  </ButtonDeleteWrapper>
);
