import { Fragment } from 'react';
import classNames from '~/utils/classNames';
import { IconX } from '../icon/Icon';

type PropTypes = {
  handleChange: Function;
  deletedImg: Function;
  uploadFireBase: Function;
  tour?: any;
  state?: string;
  disable: boolean;
  images: Array<string> | any;
};

const UploadImg = ({
  handleChange,
  uploadFireBase,
  deletedImg,
  disable,
  images,
  state,
  tour,
}: PropTypes) => {
  return (
    <Fragment>
      <div className='mt-10 text-left flex items-center'>
        <input
          type='file'
          multiple
          onChange={(e) => handleChange(e)}
          className='w-2/4 px-4 py-2 rounded-lg border border-c6'
        />
        <button
          type='button'
          onClick={() => uploadFireBase()}
          className={classNames(
            'ml-4 h-12 w-[130px] rounded-md text-white font-semibold',
            !disable
              ? 'bg-gradient-to-br from-orange-500 to-pink-500'
              : 'bg-gradient-to-br from-orange-200 to-pink-200 cursor-no-drop pointer-events-none',
          )}
        >
          {!disable ? (
            'Upload'
          ) : (
            <div className='flex items-center justify-center'>
              <div className='w-7 h-7 bg-transparent border-[3px] border-t-[3px] border-t-transparent animate-spin border-white rounded-full'></div>
            </div>
          )}
        </button>
      </div>
      {state === 'new' && (
        <div className='flex mt-10'>
          {images.length !== 0 &&
            images.map((image: any, index: number) => (
              <div key={index} className='relative'>
                <img
                  loading='lazy'
                  className='object-cover w-[100px] h-[100px] mx-2 rounded-md'
                  src={image.preview}
                  alt=''
                />
                <button
                  className='absolute top-1 right-2 text-black hover:bg-gray-c3 bg-gray-c2 p-[2px] rounded-full'
                  onClick={(e) => deletedImg(image, e)}
                >
                  <IconX />
                </button>
              </div>
            ))}
        </div>
      )}
      {state === 'edit' && (
        <div className='flex mt-10'>
          {images.length !== 0
            ? images.map((image: any, index: number) => (
                <div key={index} className='relative'>
                  <img
                    loading='lazy'
                    className='object-cover w-[100px] h-[100px] mx-2 rounded-md'
                    src={image.preview}
                    alt=''
                  />
                  <button
                    className='absolute top-1 right-2 text-black hover:bg-gray-c3 bg-gray-c2 p-[2px] rounded-full'
                    onClick={(e) => deletedImg(image, e)}
                  >
                    <IconX />
                  </button>
                </div>
              ))
            : tour?.tourDetail?.images.map((image: string, index: number) => (
                <img
                  onClick={() => console.log('vinh')}
                  key={index}
                  loading='lazy'
                  className='object-cover w-[100px] h-[100px] mx-2 rounded-md'
                  src={image}
                  alt=''
                />
              ))}
        </div>
      )}
    </Fragment>
  );
};

export default UploadImg;
