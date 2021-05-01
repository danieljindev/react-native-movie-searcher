import Config from 'react-native-config';

const productionUrl = Config.API_URL;
const developmentUrl = Config.API_TEST_URL;

const prodMovieUrl = Config.API_TVMAZE_URL;
const devMovieUrl = Config.API_TVMAZE_TEST_URL;

const ENVIRONMENT = {
  PROD: 'PROD',
  DEV: 'DEV',
};

const currentEnv = ENVIRONMENT.DEV;

const baseUrl =
  (currentEnv === ENVIRONMENT.PROD && productionUrl) || developmentUrl;

const baseUrlApi = `${baseUrl}api/`;

const movieUrl =
  (currentEnv === ENVIRONMENT.PROD && prodMovieUrl) || devMovieUrl;

let ApiConfig = {
  baseUrl,
  baseUrlApi,
  movieUrl,
  token: null,
  login: `${baseUrlApi}login`,
  user: `${baseUrlApi}users`,
};

export {ApiConfig};
