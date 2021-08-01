import axios from 'axios';
import { axiosGetCancellable } from './axios.helper';

const axiosConfig = {
    baseURL: 'https://api.github.com/'
    //   ,auth: {
    //     username: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    //     password: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
    //   }
};

function searchRepos(searchText, language) {
    const query = language ? `${searchText}+language:${language}` : searchText;

    if (isServer()) {
        return axios.get(
            `search/repositories?q=${query}&sort=stars&order=desc`,
            axiosConfig
        );
    }

    return axiosGetCancellable(`api/search?q=${query}&sort=stars&order=desc`);
}

function getRepo(id) {
    return axios.get(`repositories/${id}`, axiosConfig);
  }
  
  function getProfile(username) {
    return axios.get(`users/${username}`, axiosConfig);
  }

function isServer() {
    return typeof window === 'undefined';
}

export { searchRepos, getRepo, getProfile };