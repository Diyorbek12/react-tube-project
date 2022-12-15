import axios from 'axios';

const BASE_URL = 'youtube-v31.p.rapidapi.com';

const options = {
  params: {
     maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_PUBLIC_API_KEY}`,
    'X-RapidAPI-Host': BASE_URL,
  },
};
  

export const  ApiService = {
  async fetching(url) {
    const response = await axios.get(`https://${BASE_URL}/${url}`, options)
    return response.data
  }
}