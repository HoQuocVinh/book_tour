import AxiosClient from './axiosClient/AxiosClient';

const bookingApi = {
  getBookings: (pageNo: number) => {
    const url = `bookings?pageNo=${pageNo}&pageSize=4`;
    return AxiosClient.get(url);
  },
};
export default bookingApi;
