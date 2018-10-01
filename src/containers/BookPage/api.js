import axios from "axios";

const getBookRepos = async ({ term, startIndex = 0, maxResults = 10 }) => {
  try {
    const requestURL = `https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${startIndex}&maxResults=${maxResults}`;
    const { data } = await axios.get(requestURL);
    console.log("dsd", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
export { getBookRepos };
