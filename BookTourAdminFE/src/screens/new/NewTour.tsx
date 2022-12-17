import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import tourApi from '~/api/tour.api';
import Dropdown from '~/components/dropdown/Dropdown';
import Field from '~/components/field/Field';
import UploadImg from '~/components/img/UploadImg';
import Label from '~/components/label/Label';
import {
  useChangeImg,
  useUploadImgFirebase,
} from '~/hooks/useUploadImgFirebase';

const NewTour = () => {
  const { handleSubmit, control, setValue, register } = useForm();
  const { images, setImages, handleChange } = useChangeImg();
  const { uploadFireBase, disable, urls } = useUploadImgFirebase(images);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      images && URL.revokeObjectURL(images.preview);
    };
  }, [images]);

  const deletedImg = (image: any, e: any) => {
    e.preventDefault();
    setImages(images.filter((e: any) => e !== image));
  };

  console.log(images);

  const onSubmit = ({
    beginningLocation,
    destinationLocation,
    type,
    ...values
  }: any) => {
    const tour = {
      tourDetail: {
        ...values,
        beginningLocation: {
          locationName: beginningLocation,
          locationType: 'BEGINNING',
        },
        destinationLocation: {
          locationName: destinationLocation,
          locationType: 'DESTINATION',
        },
        images: urls,
      },
      type,
    };
    console.log('TCL: NewTour -> tour', tour);
    tourApi
      .saveTour(tour)
      .then((response) => {
        console.log(response);
        toast.success('Add tour success!', { autoClose: 500 });
        navigate('../');
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };

  return (
    <div className='max-w-5xl mx-auto mb-14'>
      <div className='bg-white mt-10 rounded-md px-10 pt-10 pb-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='font-bold text-lg'>Tour Infomation</h1>
          <div className='text-right mt-10'>
            <div className='grid grid-cols-2 gap-10'>
              <Field
                control={control}
                name='tourName'
                id='tour-name'
                placeholder='Enter tour name...'
              >
                Tour Name
              </Field>
              <Field
                control={control}
                name='tourDes'
                id='tour-des'
                placeholder='Enter destination...'
              >
                Tour Description
              </Field>
            </div>
            <textarea
              className='w-full min-h-[200px] mt-5 border border-gray-c4 p-3 rounded-md'
              {...register('tourDetailDes')}
            />
            <div className='grid grid-cols-2 gap-10 mt-10'>
              <div className='grid grid-cols-2 gap-2'>
                <Field
                  control={control}
                  name='startDay'
                  id='start-date'
                  placeholder='dd/mm/yyyy'
                >
                  Start Day
                </Field>
                <Field
                  control={control}
                  name='endDay'
                  id='end-Date'
                  placeholder='dd/mm/yyyy'
                >
                  End Day
                </Field>
              </div>
              <Field
                control={control}
                name='price'
                id='price'
                placeholder='2200000'
              >
                Price
              </Field>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-10'>
              <div className='flex flex-col gap-2 text-left'>
                <Label htmlFor='' className=''>
                  Beginning Location
                </Label>
                <Dropdown
                  type='BEGIN'
                  className=''
                  control={control}
                  setValue={setValue}
                  dropdownLabel='Select location'
                  name='beginningLocation'
                />
              </div>
              <div className='flex flex-col gap-2 text-left'>
                <Label htmlFor='' className=''>
                  Destination Location
                </Label>
                <Dropdown
                  type='DES'
                  className=''
                  control={control}
                  setValue={setValue}
                  dropdownLabel='Select location'
                  name='destinationLocation'
                />
              </div>
              <div className='flex flex-col gap-2 text-left'>
                <Label htmlFor='' className=''>
                  Tour Type
                </Label>
                <Dropdown
                  className=''
                  control={control}
                  setValue={setValue}
                  dropdownLabel='Select type'
                  name='type'
                  list={['TOUR_BASIC', 'HOTEL', 'FLIGHT']}
                />
              </div>
            </div>
            <UploadImg
              state='new'
              handleChange={handleChange}
              uploadFireBase={uploadFireBase}
              deletedImg={deletedImg}
              disable={disable}
              images={images}
            />
            <button
              type='submit'
              className='mt-10 font-semibold text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-4 py-2 rounded-md inline-block transition-all'
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTour;
