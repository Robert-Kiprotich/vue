import axiosInstance from '../../../../../axiosInstance';

const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/');
    return response.data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchData;