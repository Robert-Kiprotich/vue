import { ref } from 'vue';
import axiosInstance from '../axiosInstance';

export function useFetchSms() {
  const data = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await axiosInstance.get('/sms');
      data.value = response.data;
    } catch (err) {
      console.error('Error fetching SMS data:', err);
      error.value = err.message || 'An error occurred';
      data.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  return { data, fetchData, isLoading, error };
}
