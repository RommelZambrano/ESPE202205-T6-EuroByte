import axios from "axios";

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
