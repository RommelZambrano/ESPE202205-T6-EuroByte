import * as React from 'react';
import  SignUp  from '../components/Auth-signup';
import { postUser, getUsers} from "../services/Users-Axios";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  
  Box: {
    backgroundColor: "#1C2833",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "110vh",
  },
}));
function Signup() {
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

  return (
    <React.Fragment>
      <Box className={classes.Box}>
      <br /><br />
      <SignUp handleSubmit={handleSubmit}
          users={users}
          formUserValues={values}
          setFormUservalues={setValues} />
       <br /><br />
      </Box>
    </React.Fragment>
  );
}

export default Signup;