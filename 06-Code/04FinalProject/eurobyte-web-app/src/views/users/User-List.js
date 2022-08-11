import UserList from "../.././components/users/User-List";
import { getUsers, deleteUser, putUser } from "../../services/Users-Axios";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navigation";
import Cookies from "universal-cookie/es6";
import { makeStyles } from "@material-ui/core/styles";

const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  Box: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 110%",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundImage:
      "url(https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1657692151~exp=1657692751~hmac=87633594cb6394ba39b3209ba38bf5823864a1b6966638ed483ed09983898696&w=740)",
  },
}));
const ListUser = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const deleteRegister = (idUser) => {
    deleteUser(idUser);
  };

  const updateRegister = (values) => {
    putUser(values);
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
        <br /><br /><br />
        <br /><br /><br />
        <UserList
          users={users}
          deleteRegister={deleteRegister}
          updateRegister={updateRegister}
        />
      </Box>
    </>
  );
};
export default ListUser;
