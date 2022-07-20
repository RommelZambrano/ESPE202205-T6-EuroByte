import FormUser from "../../components/users/User-Form";
import { postUser, getUsers } from "../../services/Users-Axios";
import { Box } from "@mui/material";
import NavBar from "../../components/Navigation";
import Cookies from "universal-cookie/es6";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  Box: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "130%",
    position: "absolute",
    backgroundImage:
      "url(https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1657692151~exp=1657692751~hmac=87633594cb6394ba39b3209ba38bf5823864a1b6966638ed483ed09983898696&w=740)",
  },
}));
const UserForm = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState({
    name_user: "",
    email: "",
    password: "",
    type: 0,
  });

  const handleSubmit = (data) => {
    postUser(data, values, setValues);
  };
  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();

      if (response.status === 200) {
        setUsers(response.data);
      }
    }

    loadUsers();
  }, []);

  useEffect(() => {
    if (
      typeof cookies.get("email") === "undefined" ||
      cookies.get("type", { path: "/" }) !== "1"
    ) {
      window.location.href = "./";
    }
  });
  return (
    <>
      <Box className={classes.Box}>
        <NavBar />
        <br />
        <br />
        <FormUser
          handleSubmit={handleSubmit}
          users={users}
          formUserValues={values}
          setFormUservalues={setValues}
        />
        <br />
      </Box>
    </>
  );
};
export default UserForm;
