import axios from 'axios';

export const getUser = () => {
  return axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts')
}

