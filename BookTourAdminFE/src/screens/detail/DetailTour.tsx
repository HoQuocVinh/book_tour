import { yupResolver } from '@hookform/resolvers/yup';
import $ from 'jquery';
import queryString from 'query-string';
import { memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import tourApi from '~/api/tour.api';
import ButtonSubmit from '~/components/button/ButtonSubmit';
import Dropdown from '~/components/dropdown/Dropdown';
import Field from '~/components/field/Field';
import UploadImg from '~/components/img/UploadImg';
import Label from '~/components/label/Label';
import {
  useChangeImg,
  useUploadImgFirebase,
} from '~/hooks/useUploadImgFirebase';

const schame = Yup.object({
  tourName: Yup.string().required('Tour name cannot be left blank'),
  tourDes: Yup.string().required('Tour des cannot be left blank'),
  startDay: Yup.string().required('Tour des cannot be left blank'),
  endDay: Yup.string().required('Tour des cannot be left blank'),
  price: Yup.string().required('Tour des cannot be left blank'),
  tourDetailDes: Yup.string().required('Tour des cannot be left blank'),
  beginningLocation: Yup.string().required('Tour des cannot be left blank'),
  destinationLocation: Yup.string().required('Tour des cannot be left blank'),
});

const DetailTour = () => {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schame),
    mode: 'onSubmit',
  });

  const { images, setImages, handleChange } = useChangeImg();
  const { uploadFireBase, disable, urls } = useUploadImgFirebase(images);
  const [tour, setTour] = useState<any>();

  const tourId = useParams();
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

  const onSubmit = ({
    beginningLocation,
    destinationLocation,
    type,
    ...values
  }: any) => {
    const tourUpdate = {
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
        images: urls.length > 0 ? urls : tour.tourDetail.images,
      },
      type,
    };

    tourApi
      .updateTour(
        tourUpdate,
        queryString.stringify(tourId).replace('tourId=', ''),
      )
      .then((response) => {
        toast.success('Update success', {
          autoClose: 500,
        });
        navigate('../');
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getData = async () => {
      await tourApi
        .getTourById(queryString.stringify(tourId).replace('tourId=', ''))
        .then((response: any) => {
          console.log('TCL: getData -> response', response);
          setTour(response);
          setValue('tourName', response.tourDetail.tourName);
          setValue('tourDes', response.tourDetail.tourDes);
          setValue('startDay', response.tourDetail.startDay);
          setValue('endDay', response.tourDetail.endDay);
          setValue('price', response.tourDetail.price);
          setValue('tourDetailDes', response.tourDetail.tourDetailDes);
          setValue('type', response.type);
          setValue(
            'beginningLocation',
            response.tourDetail.beginningLocation.locationName,
          );
          setValue(
            'destinationLocation',
            response.tourDetail.destinationLocation.locationName,
          );
        });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    $('#begin')
      .val(`${tour?.tourDetail?.beginningLocation?.locationName}`)
      .attr('selected');
    $('#des')
      .val(`${tour?.tourDetail?.destinationLocation?.locationName}`)
      .attr('selected');
    $('#tourType').val(`${tour?.type}`).attr('selected');
  }, [tour]);

  useEffect(() => {
    const arrErrors: any = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        autoClose: 2000,
        pauseOnHover: false,
        draggable: true,
        delay: 50,
      });
    }
  }, [errors]);

  return (
    <div className='max-w-5xl mx-auto h-full mb-10'>
      <div className='bg-white mt-10 rounded-md px-10 pt-10 pb-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='font-bold text-lg'>Tour Infomation</h1>
          <div className='text-right mt-5'>
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
              // name='tourDetailDes'
              {...register('tourDetailDes')}
            ></textarea>
            <div className='grid grid-cols-2 gap-10 mt-5'>
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
            <div className='grid grid-cols-3 gap-10 my-5'>
              <div className='flex flex-col gap-2 text-left'>
                <Label htmlFor='' className=''>
                  Beginning Location
                </Label>
                <Dropdown
                  type='BEGIN'
                  id='begin'
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
                  id='des'
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
                  id='tourType'
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
              tour={tour}
              state='edit'
              handleChange={handleChange}
              uploadFireBase={uploadFireBase}
              deletedImg={deletedImg}
              disable={disable}
              images={images}
            />
            <ButtonSubmit className='mt-10'>Update Product</ButtonSubmit>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(DetailTour);
