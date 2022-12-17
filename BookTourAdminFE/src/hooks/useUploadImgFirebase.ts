import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import storage from '~/api/firebase';
export function useUploadImgFirebase(images: Array<string>) {
  const [disable, setDisable] = useState(false);
  const [percent, setPercent] = useState(0);
  const [urls, setUrls] = useState<Array<string>>([]);

  const uploadFireBase = () => {
    const promises: Array<any> = [];
    setDisable(true);
    images.map((image: any) => {
      const imageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);
      promises.push(uploadTask);
      uploadTask.on(
        'state_changed',
        (snaphot: any) => {
          const percent = 0;
          setPercent(percent);
        },
        (err: any) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
            setUrls((prev) => [...prev, url]);
          });
        },
      );
    });
    Promise.all(promises)
      .then(() => {
        toast.success('Upload success', {
          autoClose: 500,
        });
        setDisable(false);
      })
      .catch((err) => console.log(err));
  };

  return {
    uploadFireBase,
    disable,
    urls,
  };
}

function useChangeImg() {
  const [images, setImages] = useState<Array<string> | any>([]);
  const handleChange = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage['id'] = Math.random();
      newImage.preview = URL.createObjectURL(newImage);
      setImages((images: Array<string>) => [...images, newImage]);
    }
  };
  return {
    handleChange,
    images,
    setImages,
  };
}

export { useChangeImg };
