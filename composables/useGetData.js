export const useGetData = () => {
  const url = 'https://nuxr3.zeabur.app';
  const isLoading = ref(false);
  const newList = ref([]);
  const culinaryList = ref([]);
  const roomList = ref([]);
  const roomImg = ref([]);

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

  const getRoomList = async () => {
    try {
      isLoading.value = true;
      const { data } = await useFetch(`${url}/api/v1/rooms/`);
      if (data) roomList.value = data.value?.result || [];
      const tempData = data.value.result;

      tempData.forEach((room) => {
        const ary = [];
        ary.push(room.imageUrl);

        room.imageUrlList.forEach((url) => {
          ary.push(url);
        });

        roomImg.value.push(ary);
      });
    } catch (error) {
      alert(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  const getRoom = async (id) => {
    try {
      isLoading.value = true;
      const { data } = await useFetch(`${url}/api/v1/rooms/${id}`);
      const { result } = data.value;

      return result;
    } catch (error) {
      alert(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    newList,
    culinaryList,
    roomList,
    roomImg,
    getNewList,
    getCulinaryList,
    getRoomList,
    getRoom,
  };
};
