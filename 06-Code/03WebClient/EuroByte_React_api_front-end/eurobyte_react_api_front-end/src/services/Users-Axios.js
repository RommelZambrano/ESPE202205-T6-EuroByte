import axios from "axios";
import swal from "sweetalert2";
const URI = process.env.REACT_APP_BASE_URL;

export async function getUsers() {
  try {
    const response = await axios({
      url: `${URI}/api/users`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(idUser) {
  try {
    const response = await axios({
      url: `${URI}/api/users/${idUser}`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function postUser(userData, values, setValues) {
  try {
    await axios({
      url: `${URI}/api/users`,
      method: "POST",
      data: userData,
    });

    setValues({
      name_user: "",
      email: "",
      password: "",
      type: 0,
    });
  } catch (error) {
    console.log(error);
    setValues({
      name_user: "",
      email: "",
      password: "",
      type: 0,
    });
  }
}

export async function deleteUser(user) {
  await axios
    .delete(`${URI}/api/users/${user}`)
    .then((response) => {
      swal.fire({
        title: "Se ha Eliminado el Usuario",
        icon: "success", 
        showCancelButton: false,
        showConfirmButton: false
      },setTimeout(function(){
        window.location.reload(1);
     }, 1250));
      
      }
    )
    .catch((error) => {
      console.log(error);
    });
}

export async function putUser(values) {
  await axios
    .put(`${URI}/api/users/${values.id}`, {
      name_user: values.name_user,
      email: values.email,
      password: values.password,
      type: values.type,
    })
    .then((response) => {
      window.alert("Usuario Actualizado");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}
