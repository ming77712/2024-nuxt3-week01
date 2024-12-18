export const useGetData = () => {
  const url = 'https://nuxr3.zeabur.app';
  const isLoading = ref(false);
  const newList = ref([]);
  const culinaryList = ref([]);

  const getNewList = async () => {
    try {
      isLoading.value = true;
      const { data } = await useFetch(`${url}/api/v1/home/news/`);
      if (data) newList.value = data.value?.result || [];
    } catch (error) {
      alert(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  const getCulinaryList = async () => {
    try {
      isLoading.value = true;
      const { data } = await useFetch(`${url}/api/v1/home/culinary/`);
      if (data) culinaryList.value = data.value?.result || [];
    } catch (error) {
      alert(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    newList,
    culinaryList,
    getNewList,
    getCulinaryList,
  };
};
