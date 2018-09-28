import axios from "axios";

const getBookRepos = async (term, startIndex = 0, maxResults = 10) => {
  try {
    const requestURL = `https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${startIndex}&maxResults=${maxResults}`;
    const {
      data: { items }
    } = await axios.get(requestURL);
    return items;
  } catch (err) {
    console.log(err);
  }
};
export { getBookRepos };
