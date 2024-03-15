

import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = "/reviews"

export async function getReviews() {

    const url = `${BASE_URL}${END_POINT}`

    const {data} = await axios.get(url);
    return data;
  
}
  
getReviews().then(arr => console.log(arr));


const gallery =document.querySelector('.js-reviews-list')

function createMarkup(arr){
    return arr.map(arr => {
const {
    author,
    avatar_url,
    review
} = arr;
return `
<li class="gallery-item">
   <img class="gallery-image"
   src = "${avatar_url}"
   alt = "${author}"/>
   <h4 class="review-author ">${author}</h4>
   <p class="review-text">${review}</p>
</li>
`
    }).join('');
}

async function renderPage(arr){
    try {
        const res = await getReviews();
        gallery.insertAdjacentHTML('beforeend', createMarkup(res));
    }catch (error){
        console.log(error);
    } 
}
renderPage()
