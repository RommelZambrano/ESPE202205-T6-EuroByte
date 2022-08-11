import axios from "axios";
import swal from "sweetalert2";
const URI = process.env.REACT_APP_BASE_URL;

//GET
export async function getProviders() {
  try {
    const response = await axios({
      url: `${URI}/api/providers`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

//GET BY ID
export async function getProviderById(idProvider) {
  try {
    const response = await axios({
      url: `${URI}/api/providers/${idProvider}`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

//POST
export async function postProvider(providerData, values, setValues) {
  try {
    await axios({
      url: `${URI}/api/providers`,
      method: "POST",
      data: providerData,
    });
    setValues({
      name_provider: "",
      city: "",
    });
  } catch (error) {
    console.log(error);
    setValues({
      name_provider: "",
      city: "",
    });
  }
}

//DELETE
export async function deleteProvider(Provider) {
  await axios
    .delete(`${URI}/api/providers/${Provider}`)
    .then((response) => {
      swal.fire({
        title: "Se ha Eliminado el Proveedor",
        icon: "success", 
        showCancelButton: false,
        showConfirmButton: false
      },setTimeout(function(){
        window.location.reload(1);
     }, 1150));
    })
    .catch((error) => {
      console.log(error);
    });
}

//PUT
export async function putProvider(values) {
  await axios
    .put(`${URI}/api/providers/${values.id}`, {
      name_provider: values.name_provider,
      city: values.city,
    })
    .then((response) => {
      window.alert("Registro actualizado");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}
