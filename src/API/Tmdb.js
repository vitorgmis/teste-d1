import axios from 'axios';

const API_KEY = '23d175ab939c40f12f7bfc2913c5b3c1';
const API_BASE = "https://api.themoviedb.org/3";

/*
- originais
- recomendados
- em alta
- ação 
- comédia 
- terror
- romance 
- documentários
*/

const basicFetch = async (endpoint) => {
  const req = await axios(`${API_BASE}${endpoint}`);
  return req.data
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch (`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch (`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch (`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch (`/discover/movie?with-genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch (`/discover/movie?with-genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch (`/discover/movie?with-genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch (`/discover/movie?with-genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch (`/discover/movie?with-genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ];
  },
      getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
          switch(type) {
            case 'movie':
              info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            case 'tv':
              info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            default:
              info = null;
            break;
          }
        }
        return info;
      } 
    }