import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const UserDelete = (props) => {
  const index = props.index;
  const handleDelete = props.handleDelete;

  const handleDeleteClick = () => {
    const option = window.confirm("¿Deseas Elimnar este usuario?");

    if (option === true) {
      handleDelete(index);
    }
  };

  return (
    <IconButton
      color="primary"
      aria-label="add an alarm"
      onClick={handleDeleteClick}
    >
      <DeleteOutlineIcon
        style={{
          color: "black",
        }}
      />
    </IconButton>
  );
};
export default UserDelete;