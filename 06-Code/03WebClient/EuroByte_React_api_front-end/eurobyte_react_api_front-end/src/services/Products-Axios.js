import axios from "axios";
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