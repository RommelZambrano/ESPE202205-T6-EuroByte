import axios from "axios";

const URI = "https://httpbin.org/get";

export async function getInformation() {
  try {
    const response = await axios(`${URI}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
