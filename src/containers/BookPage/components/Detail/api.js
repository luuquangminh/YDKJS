import axios from "axios";

const getBookDetailRepos = async id => {
  try {
    const requestURL = `https://www.googleapis.com/books/v1/volumes/${id}`;
    const {
      data: { volumeInfo }
    } = await axios.get(requestURL);
    return volumeInfo;
  } catch (err) {
    console.log(err);
  }
};
export { getBookDetailRepos };
