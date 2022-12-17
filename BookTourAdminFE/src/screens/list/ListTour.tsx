import { Modal, Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import tourApi from '~/api/tour.api';
import { IconAdd } from '~/components/icon/Icon';
import NewTour from '../new/NewTour';

const ListTour = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [tours, setTours] = useState<any>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [response, setResponse] = useState<any>();
  const [isModal, setIsModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [idDelete, setIdDelete] = useState('');

  const getData = async (page: number) => {
    await tourApi.getTours(page - 1).then((reponse) => {
      console.log('TCL: getData -> reponse', reponse);
      setResponse(reponse);
      setTours(reponse.data);
    });
  };

  const deleteClose = () => {
    setIsDelete(!isDelete);
  };
  const onPageChange = (page: number) => {
    tourApi.getTours(page - 1).then((reponse) => {
      setTours(reponse.data);
    });
    setCurrentPage(page);
  };
  if (response) {
    if (response.totalPages !== totalPages) {
      setTotalPages(response.totalPages);
    }
  }
  const handleDelete = (id: string) => {
    setIsDelete(!isDelete);
    setIdDelete(id);
  };
  const handleDeleteSuccess = async (id: string) => {
    await tourApi.deleteTour(id).then((response) => {
      if (response.status === 200)
        toast.success('Delete Success!', {
          autoClose: 500,
          delay: 50,
          draggable: true,
          pauseOnHover: false,
        });
    });
    setIsDelete(!isDelete);
    getData(currentPage);
  };

  const handleEdit = async (id: string) => {
    navigate(`${id}`);
    toast.success('Edit View!', {
      autoClose: 500,
      delay: 50,
      draggable: false,
      pauseOnHover: false,
    });
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className='p-2'>
        <div>
          <Link to='new'>
            <button
              className='flex items-center text-black bg-white p-1 mx-8 my-2 rounded-2xl border border-gray-c4'
              // onClick={() => {
              //   setIsModal(true);
              // }}
            >
              <IconAdd />
              <span className='flex items-center mr-2'>Add New</span>
            </button>
          </Link>
        </div>

        <Modal show={isDelete} size='lg' popup={true} onClose={deleteClose}>
          <Modal.Header />
          <Modal.Body>
            <div className='text-center'>
              <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                Are you sure you want to delete this tour?
              </h3>
              <div className='flex justify-center gap-4 text-warning'>
                <button
                  color='failure'
                  onClick={() => handleDeleteSuccess(idDelete)}
                >
                  Yes, I'm sure
                </button>
                <button color='gray' onClick={deleteClose}>
                  No, cancel
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <div className='overflow-x-auto rounded-2xl mx-8 border border-gray-c4'>
          <table className='bg-white  w-[100%] text-sm text-left text-gray-400 '>
            <thead className='text-xs uppercase bg-white text-gray-c6  border-b border-secondary'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  Image
                </th>
                <th scope='col' className='py-3 px-6 w-[300px]'>
                  Tour Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Price
                </th>
                <th scope='col' className='py-3 px-6'>
                  Beginning Location
                </th>
                <th scope='col' className='py-3 px-6'>
                  Destination Location
                </th>
                <th scope='col' className='py-3 px-6'>
                  Start Day
                </th>
                <th scope='col' className='py-3 px-6'>
                  End Day
                </th>
                <th scope='col' className='py-3 px-6'>
                  Tour Type
                </th>
                <th scope='col' className='py-3 px-6'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour: any, index: number) => (
                <tr
                  key={tour.id}
                  className='bg-white hover:bg-gray-c2 cursor-pointer'
                >
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                  >
                    <img
                      loading='lazy'
                      // src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                      src={
                        tour.tourDetail.images
                          ? tour.tourDetail.images[0]
                            ? tour.tourDetail.images[0]
                            : 'https://images.unsplash.com/photo-1669114656836-d5b9389a207e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
                          : 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                      }
                      alt=''
                    />
                  </th>
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-black whitespace-wrap w-[380px]'
                  >
                    {tour.tourDetail.tourName}
                  </th>
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                  >
                    {tour.tourDetail.price.toLocaleString('vi', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </th>
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                  >
                    {tour.tourDetail.beginningLocation.locationName ?? ''}
                  </th>
                  <td className='py-4 px-6 font-medium text-black'>
                    {tour.tourDetail.destinationLocation.locationName ?? ''}
                  </td>
                  <td className='py-4 px-6 text-gray-c8'>
                    {tour.tourDetail.startDay}
                  </td>
                  <td className='py-4 px-6 text-gray-c8'>
                    {tour.tourDetail.endDay}
                  </td>
                  <td className='py-4 px-6 text-gray-c8'>{tour.type}</td>
                  <td className='py-4 px-6 text-gray-c8'>
                    <div className='flex flex-col'>
                      <button
                        className='text-green-500 font-semibold uppercase my-2'
                        onClick={() => handleEdit(tour.id)}
                      >
                        <span>Edit</span>
                      </button>
                      <button
                        className='ml-2 text-red-500 font-semibold uppercase'
                        onClick={() => handleDelete(tour.id)}
                      >
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex items-center justify-center text-center'>
          <Pagination
            showIcons={true}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
};

export default ListTour;
