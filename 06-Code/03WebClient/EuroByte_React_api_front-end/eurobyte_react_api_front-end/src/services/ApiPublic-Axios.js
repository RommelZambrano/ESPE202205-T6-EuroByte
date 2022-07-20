import axios from "axios";

const URI = "https://api.plos.org";

export async function getTitle(title) {
  try {
    const response = await axios({
      url: `${URI}/search?q=title:${title}`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
