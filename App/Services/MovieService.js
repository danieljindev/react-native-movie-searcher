import {ApiConfig} from '../ApiConfig';
import axios from 'axios';

export const getHomeMovies = async () => {
  const response = await axios.get(`${ApiConfig.movieUrl}shows`);
  return response.data;
};

export const getMoviesByTerm = async (term) => {
  const response = await axios.get(
    `${ApiConfig.movieUrl}search/shows?q=${term}`,
  );
  return response.data;
};

export const getMovie = async (id) => {
  const response = await axios.get(`${ApiConfig.movieUrl}shows/${id}`);
  return response.data;
};
