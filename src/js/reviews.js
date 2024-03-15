import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = "/reviews"

export async function getReviews() {

    const url = `${BASE_URL}${END_POINT}`

    const res = await axios.get(url);
    return res.data;
}
  
getReviews().then(arr => console.log(arr))