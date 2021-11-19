import axios from 'axios';

const ROOT_API = 'https://api.tvmaze.com';
const SEARCH_SHOWS_API = `${ROOT_API}/search/shows`;

export const searchShows = async (query: string) =>
  axios
    .get(`${SEARCH_SHOWS_API}?q=${query}`)
    .then(({data}) => {
      return data;
    })
    .catch(error => {
      console.log({error});
      return error;
    });
