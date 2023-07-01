import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': "5f28b265c3msha06d112f75f788bp1921bajsncb0fbad2f1c3",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`,options)
  return data;
};
