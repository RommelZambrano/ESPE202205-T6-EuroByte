import axios from "axios";
import Cookies from "universal-cookie/es6";
import swal from "sweetalert2";
const cookies = new Cookies();
const uri = process.env.REACT_APP_BASE_URL;

export function Login(loginValues) {
  axios
    .get(`${uri}/api/users`)
    .then((response) => {
      const data = response.data;
      var dataLogin = null;
      for (var i = 0; i < data.length; i++) {
        if (
          data[i].email === loginValues.email &&
          data[i].password === loginValues.password
        ) {
          dataLogin = data[i];
          break;
        }
      }
      if (dataLogin !== null) {
        cookies.set("email", dataLogin.email, { path: "/" });
        cookies.set("type", dataLogin.type, { path: "/" });
        switch (dataLogin.type) {
          case 1:
            window.location.href = "./homeAdmin";
            break;
          case 2:
            window.location.href = "./homeEmployee";
            break;
          case 3:
            window.location.href = "./homeClients";
            break;
        }
      } else {
        swal.fire({
          title: "Credenciales Incorrectas",
          text: "Ingrese un Email y contraseña validos",
          icon: "error",
          confirmButtonColor: "primary",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
