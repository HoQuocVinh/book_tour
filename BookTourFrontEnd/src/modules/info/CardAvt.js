import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperFlex } from "@/common";
import { IconCheck, IconPen } from "@/icon/IconProfilePage";

import axios from "~/api/axios";
import { getToken } from "~/utils/auth";

const CardAvt = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    handleSubmit,
    setValue,
    register,
    formState: { isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  const [disable, setDisable] = useState(true);
  const [baseImg, setBaseImg] = useState(user.avatar);
  const handleChangeAvt = () => {
    document.getElementById("inp-upload").click();
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImg(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const { access_token } = getToken();
  const onSubmit = async ({ avatar }) => {
    const response = await axios.put(`/user/avt/${user.email}`, avatar, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        Authorization: `Bearer ${access_token}`,
      },
    });

    setDisable(true);
    if (!response.data) return null;
    if (response.status !== 202) {
      toast.success(response.data.message, {
        autoClose: 500,
      });
      return new Promise((resolve) => {
        setTimeout(async () => {
          resolve();
          window.location.reload(true);
        }, 1000);
      });
    } else {
      toast.error(response.data.message, {
        autoClose: 500,
      });
    }
  };

  return (
    <div className="dark:bg-grayScale-c2 mx-auto mt-5 h-full max-h-[560px] w-full max-w-[350px] rounded-xl bg-white px-7 py-8 lg:mx-0">
      <div className="text-center font-DMSans">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative inline-block rounded-full">
            <img
              src={baseImg || "/none-avt.png"}
              alt="avt"
              className="object-cove mb-4 h-[170px] w-[170px] select-none rounded-full"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 flex -translate-y-1/3 -translate-x-1/3 cursor-pointer items-center justify-center rounded-full border-2 border-c6 bg-c7 p-3 text-c4 outline-none dark:border-c3 dark:bg-c2 dark:text-c5"
              onClick={handleChangeAvt}
            >
              <span>
                <IconPen />
              </span>
              <input type="text" className="hidden" {...register("avatar")} />
              <input
                id="inp-upload"
                type="file"
                className="hidden"
                onChange={(e) => {
                  uploadImage(e);
                  setDisable(false);
                }}
              />
            </button>
          </div>
          <p className="dark:text-grayScale-c6 mb-5 font-Roboto text-4xl">
            <b className="">{user.fullName}</b>
          </p>
          <div className="dark:bg-grayScale-c3 dark:text-grayScale-c5 mb-6 inline-block rounded-full bg-[#F4F5F6] py-2 px-7">
            <WrapperFlex items="center" spacing="2">
              <span className="text-c4">
                <IconCheck />
              </span>
              <p className="text-sm font-normal text-c4">Identity verified</p>
            </WrapperFlex>
          </div>
          <div className="dark:bg-grayScale-c3 mb-7 h-[2px] w-full bg-[#F5F6F7]"></div>
          <WrapperFlex
            className="mb-4 font-Roboto text-sm font-medium"
            justify="between"
          >
            <span className="text-grayScale-c3 dark:text-grayScale-c7">
              Form
            </span>
            <span className=" text-grayScale-c4">United State</span>
          </WrapperFlex>
          <WrapperFlex
            className="mb-10 font-Roboto text-sm font-medium"
            justify="between"
          >
            <span className="text-grayScale-c3 dark:text-grayScale-c7">
              Member Since
            </span>
            <span className=" text-grayScale-c4">05.06.1996</span>
          </WrapperFlex>
          <ButtonSubmitDefault
            disable={disable}
            background="purple"
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full py-2 text-center font-Roboto font-semibold text-white"
            onClick={() => {
              setValue("avatar", baseImg);
            }}
          >
            {isSubmitting ? (
              <div className="h-6 w-6 animate-spin rounded-full border-[3px]  border-t-2 border-white border-t-transparent bg-transparent" />
            ) : (
              <span>Upload Avatar</span>
            )}
          </ButtonSubmitDefault>
        </form>
      </div>
    </div>
  );
};

export default CardAvt;
