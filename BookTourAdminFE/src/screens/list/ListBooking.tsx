import { Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import bookingApi from '~/api/booking.api';

const ListBooking = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookings, setBookings] = useState<any>([]);
  const [response, setResponse] = useState<any>();
  const [totalPages, setTotalPages] = useState(1);
  const getData = async (page: number) => {
    await bookingApi.getBookings(page - 1).then((reponse) => {
      console.log('TCL: getData -> reponse', reponse);
      setResponse(reponse);
      setBookings(reponse.data);
    });
  };
  const onPageChange = (page: number) => {
    bookingApi.getBookings(page - 1).then((response) => {
      setBookings(response.data);
    });
    setCurrentPage(page);
  };
  if (response) {
    if (response.totalPages !== totalPages) {
      setTotalPages(response.totalPages);
    }
  }
  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className='p-2'>
        <div className='overflow-x-auto rounded-2xl mx-8 border border-gray-c4'>
          <table className='bg-white  w-[100%] text-sm text-left text-gray-400 '>
            <thead className='text-xs uppercase bg-white text-gray-c6  border-b border-secondary'>
              <tr>
                {/* <th scope='col' className='py-3 px-6'>
                  Full Name
                </th> */}
                <th scope='col' className='py-3 px-6'>
                  Tour ID
                </th>
                <th scope='col' className='py-3 px-6'>
                  Email
                </th>
                <th scope='col' className='py-3 px-6'>
                  Passenger
                </th>
                <th scope='col' className='py-3 px-6'>
                  Price
                </th>
                <th scope='col' className='py-3 px-6'>
                  Phone
                </th>
                <th scope='col' className='py-3 px-6'>
                  Address
                </th>
                <th scope='col' className='py-3 px-6'>
                  Active
                </th>
                <th scope='col' className='py-3 px-6'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking: any, index: number) => (
                <tr className='bg-white border-b border-gray-c4 hover:bg-gray-c2 cursor-pointer'>
                  {/* <th
                    scope='row'
                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                  >
                    {booking.fullName}
                  </th> */}
                  <th scope='row' className='py-4 px-6 font-medium text-black '>
                    {booking.tour.id}
                  </th>
                  <td className='py-4 px-6 text-gray-c8'>{booking.email}</td>
                  <td className='py-4 px-6 text-gray-c8'>
                    {booking.passenger}
                  </td>
                  <td className='py-4 px-6 text-gray-c8'>
                    {booking?.totalPrice?.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </td>
                  <td className='py-4 px-6 text-gray-c8'>
                    {booking.phoneNumber}
                  </td>
                  <td className='py-4 px-6 text-gray-c8'>{booking.address}</td>
                  {booking.enable ? (
                    <td className='py-4 px-6 font-semibold text-success uppercase'>
                      {booking.enable.toString()}
                    </td>
                  ) : (
                    <td className='py-4 px-6 font-semibold text-danger uppercase'>
                      {booking.enable.toString()}
                    </td>
                  )}
                  <td className='py-4 px-6 text-gray-c8'>
                    <button
                      className='ml-2 text-red-500 font-semibold uppercase'
                      // onClick={() => handleDelete()}
                    >
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className='ml-10 mt-2 text-center'>
            <Pagination
              showIcons={true}
              currentPage={1}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ListBooking;
