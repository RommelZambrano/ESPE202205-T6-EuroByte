import axios from "axios";
import swal from "sweetalert2";
const URI = process.env.REACT_APP_BASE_URL;

export async function getClients() {
  try {
    const response = await axios({
      url: `${URI}/api/clients`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getClientById(idClient) {
  try {
    const response = await axios({
      url: `${URI}/api/clients/${idClient}`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function postClient(clientData, values, setValues) {
  try {
    await axios({
      url: `${URI}/api/clients`,
      method: "POST",
      data: clientData,
    });

    setValues({
      name_client: "",
      email: "",
      CI: "",
      address: "",
    });
  } catch (error) {
    console.log(error);
    setValues({
      name_client: "",
      email: "",
      CI: "",
      address: "",
    });
  }
}

export async function deleteClient(client) {
  await axios
    .delete(`${URI}/api/clients/${client}`)
    .then((response) => {
      swal.fire({
        title: "Se ha Eliminado el Cliente",
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

export async function putClient(values) {
  await axios
    .put(`${URI}/api/clients/${values.id}`, {
      name_client: values.name_client,
      email: values.email,
      CI: values.CI,
      address: values.address,
    })
    .then((response) => {
      window.alert("Cliente Actualizado");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}
