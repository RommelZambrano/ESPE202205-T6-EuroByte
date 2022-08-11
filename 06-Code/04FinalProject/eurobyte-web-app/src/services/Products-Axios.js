import axios from "axios";
import swal from "sweetalert2";
const URI = process.env.REACT_APP_BASE_URL;

//GET
export async function getProducts() {
  try {
    const response = await axios({
      url: `${URI}/api/products`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

//GET BY ID
export async function getProductById(idProduct) {
  try {
    const response = await axios({
      url: `${URI}/api/products/${idProduct}`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

//GET ID PROVIDERS FOR INNER JOIN ID PROVIDER
export async function getProductsByIdProvider(idProvider) {
  try {
    const response = await axios({
      url: `${URI}/api/products`,
      method: "GET",
    });

    const data = response.data;
    var dataProviders = [];
    var j = 0;

    for (var i = 0; i < data.length; i++) {
      if (data[i].provider === idProvider) {
        dataProviders[j] = data[i];
        j++;
      }
    }
    return dataProviders;
  } catch (error) {
    console.log(error);
  }
}

//POST
export async function postProducts(productsData, values, setValues) {
  try {
    await axios({
      url: `${URI}/api/products`,
      method: "POST",
      data: productsData,
    });

    setValues({
      name_product: "",
      descriptoon: "",
      provider_ID: "",
      quantity: "",
      price: "",
      total: "",
    });
  } catch (error) {
    console.log(error);
    setValues({
      name_product: "",
      descriptoon: "",
      provider_ID: "",
      quantity: "",
      price: "",
      total: "",
    });
  }
}

//DELETE
export async function deleteProduct(product) {
  await axios
    .delete(`${URI}/api/products/${product}`)
    .then((response) => {
      swal.fire({
        title: "Se ha Eliminado el Producto",
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
export async function putProduct(values) {
  await axios
    .put(`${URI}/api/products/${values.id}`, {
      name_product: values.name_product,
      description: values.description,
      provider_ID: values.provider_ID,
      quantity: values.quantity,
      price: values.price,
      total: values.total,
    })
    .then((response) => {
      window.alert("Registro actualizado");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}
