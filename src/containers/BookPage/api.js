import axios from 'axios';

const getBookRepos = async (term) => {
  try {
    const requestURL = `https://www.googleapis.com/books/v1/volumes?q=${term}`;
    const {data:{items}} = await axios.get(requestURL);
    return items
  }catch (err) {
    console.error(err)
  }
}
export  { getBookRepos };
