import axios from "axios";
import swal from "sweetalert2";
const URI = process.env.REACT_APP_BASE_URL;

//GET
export async function getInvoices() {
  try {
    const response = await axios({
      url: `${URI}/api/invoices`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

//GET BY ID
export async function getInvoicesById(idInvoices) {
  try {
    const response = await axios({
      url: `${URI}/api/invoices/${idInvoices}`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

//GET ID PROVIDERS FOR INNER JOIN ID PROVIDER
export async function getInvoicesByIdClient(idClient) {
  try {
    const response = await axios({
      url: `${URI}/api/invoices`,
      method: "GET",
    });

    const data = response.data;
    var dataClients = [];
    var j = 0;

    for (var i = 0; i < data.length; i++) {
      if (data[i].client === idClient) {
        dataClients[j] = data[i];
        j++;
      }
    }
    return dataClients;
  } catch (error) {
    console.log(error);
  }
}

//GET ID PROVIDERS FOR INNER JOIN ID PROVIDER
export async function getInvoicesByIdProduct(idProduct) {
  try {
    const response = await axios({
      url: `${URI}/api/invoices`,
      method: "GET",
    });

    const data = response.data;
    var dataProducts = [];
    var j = 0;

    for (var i = 0; i < data.length; i++) {
      if (data[i].product === idProduct) {
        dataProducts[j] = data[i];
        j++;
      }
    }
    return dataProducts;
  } catch (error) {
    console.log(error);
  }
}
//POST
export async function postInvoices(invoicesData, values, setValues) {
  try {
    await axios({
      url: `${URI}/api/invoices`,
      method: "POST",
      data: invoicesData,
    });

    setValues({
      client_ID: "",
      product_ID: "",
      quantity: "",
      price: "",
      subtotal: "",
      IVA: "",
      total: "",
    });
  } catch (error) {
    console.log(error);
    setValues({
      client_ID: "",
      product_ID: "",
      quantity: "",
      price: "",
      subtotal: "",
      IVA: "",
      total: "",
    });
  }
}

//DELETE
export async function deleteInvoices(invoices) {
  await axios
    .delete(`${URI}/api/invoices/${invoices}`)
    .then((response) => {
      swal.fire(
        {
          title: "Se ha Eliminado la Factura",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
        },
        setTimeout(function () {
          window.location.reload(1);
        }, 1150)
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

//PUT
export async function putInvoices(values) {
  await axios
    .put(`${URI}/api/invoices/${values.id}`, {
      client_ID: values.client_ID,
      product_ID: values.product_ID,
      quantity: values.quantity,
      price: values.price,
      subtotal: values.subtotal,
      IVA: values.IVA,
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
