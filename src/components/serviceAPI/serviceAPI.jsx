const URL = 'https://pixabay.com/api/';
const KEY = '32847344-7085d60a6553e128e93a9b9f1';

export default function fetchAPI(query, page = 1) {
  return fetch(
    `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    return response.json();
  });
}
