import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import BreadCrumbs from "@/breadcrumbs/BreadCrumbs";
import ButtonEdit from "@/button/ButtonEdit";
import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperFlex, WrapperGrid } from "@/common";
import FieldUpdateProfile from "@/field/FieldUpdateProfile";
import Heading from "@/heading/Heading";
import {
  IconCake,
  IconEmail,
  IconGender,
  IconHouse,
  IconName,
} from "@/icon/IconProfilePage";
import CardAvt from "~/modules/info/CardAvt";
import useAxiosPrivate from "~/hooks/useAxiosPrivate";
import { toast } from "react-toastify";
import DropdownList from "~/components/dropdown/DropdownList";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const { handleSubmit, control, setValue, watch, setFocus } = useForm({
    mode: "onChange",
  });
  const [disable, setDisable] = useState(true);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    document.title = "Profile";
    if (user.address) {
      setValue("street", user.address.street);
      setValue("district", user.address.district);
      setValue("city", user.address.city);
    }
    setValue("birthDay", user?.birthDay ? user.birthDay : "");
    setValue("fullName", user.fullName);
    setValue("email", user.email);
    setValue("gender", user?.gender ? user.gender : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   async function getUser() {
  //     try {
  //       const response = await axiosPrivate.get(`user/${user.email}`);
  //       console.log("getUser ~ response", response);
  //     } catch (error) {
  //       console.log("getUser ~ error", error);
  //     }
  //   }
  //   getUser();
  // }, []);

  const handleEditProfile = () => {
    setDisable(false);
    setFocus("street");
  };

  const handleCancelEdit = () => {
    // const watchFields = watch(["address", "email", "gender"]);
    // if (user?.address) {
    //   if (user.address !== watchFields[0]) alert("vinh");
    // }
    // if (user?.gender?.genderType) {
    //   if (user.gender.genderType !== watchFields[2]) alert("vinh");
    // }
    setDisable(true);
  };

  const handleUpdateInfo = async ({ street, district, city, ...values }) => {
    const request = {
      address: {
        street,
        district,
        city,
      },
      ...values,
    };

    console.log("address", request);
    const response = await axiosPrivate.put(`/user/${user.email}`, request);
    const responseUser = await axiosPrivate.get(`user/${user.email}`);
    console.log(responseUser);
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
    <div>
      <WrapperFlex className="my-10" items="center" spacing="3">
        <BreadCrumbs />
      </WrapperFlex>
      <WrapperFlex className="gap-[30px] lg:flex-row lg:gap-[33px]" col>
        <CardAvt />
        <div className="flex-1 px-5 lg:px-0">
          <Heading
            className="border-b-grayScale-c6 dark:border-b-grayScale-c6 mt-5 hidden border-b pb-8 lg:block"
            sx="xl-3"
          >
            My Profile
          </Heading>
          <div className="mt-20 font-DMSans">
            <WrapperFlex className="mb-12" justify="between">
              <p className="text-grayScale-c2 text-xl font-medium dark:text-white lg:text-2xl">
                Hi, I'm {user.fullName}
              </p>
              <ButtonEdit hasIconPen onClick={handleEditProfile}>
                Edit your profile
              </ButtonEdit>
            </WrapperFlex>
            <form onSubmit={handleSubmit(handleUpdateInfo)} className="mt-10">
              <WrapperGrid rows="3" spacing="8">
                <WrapperGrid cols="3" spacing="8">
                  <FieldUpdateProfile
                    name="street"
                    id="street"
                    placeholder="Enter your street"
                    control={control}
                    icon={<IconHouse />}
                    hasDisable={disable}
                  >
                    Street
                  </FieldUpdateProfile>
                  <FieldUpdateProfile
                    name="district"
                    id="district"
                    placeholder="Enter your district"
                    control={control}
                    icon={<IconHouse />}
                    hasDisable={disable}
                  >
                    District
                  </FieldUpdateProfile>
                  <FieldUpdateProfile
                    name="city"
                    id="city"
                    placeholder="Enter your city"
                    control={control}
                    icon={<IconHouse />}
                    hasDisable={disable}
                  >
                    City
                  </FieldUpdateProfile>
                </WrapperGrid>
                <WrapperGrid cols="2" spacing="8">
                  <FieldUpdateProfile
                    name="fullName"
                    id="fullName"
                    placeholder="Enter your full name"
                    control={control}
                    icon={<IconName />}
                    hasDisable={disable}
                  >
                    Full Name
                  </FieldUpdateProfile>
                  <FieldUpdateProfile
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    control={control}
                    icon={<IconEmail />}
                    tabIndex={-1}
                    hasDisable
                  >
                    Email
                  </FieldUpdateProfile>
                </WrapperGrid>
                <WrapperGrid cols="2" spacing="9">
                  <FieldUpdateProfile
                    type="text"
                    name="birthDay"
                    id="birthDay"
                    placeholder="dd/mm/yyyy"
                    control={control}
                    icon={<IconCake />}
                    hasDisable={disable}
                  >
                    Date Of Birth
                  </FieldUpdateProfile>
                  <WrapperFlex col spacing="4">
                    <label
                      htmlFor="genderType"
                      className="font-DMSans text-sm font-bold text-c4"
                    >
                      Gender
                    </label>
                    <DropdownList
                      setValue={setValue}
                      control={control}
                      id="gender"
                      name="gender"
                      disable={disable}
                      list={[
                        { type: "MALE" },
                        { type: "FEMALE" },
                        { type: "ANOTHER" },
                      ]}
                      icon={<IconGender />}
                      dropdownLabel={user.gender}
                    />
                  </WrapperFlex>
                </WrapperGrid>
              </WrapperGrid>
              <div className="mt-8 inline-block w-full text-right">
                <div className="inline-block">
                  <WrapperFlex items="center">
                    <ButtonEdit
                      hasIconTrash
                      radius="8"
                      onClick={handleCancelEdit}
                      className="mr-4 !py-2 !px-4"
                      colorIcon="text-c4"
                      hasDisable={disable}
                    >
                      Cancel
                    </ButtonEdit>
                    <ButtonSubmitDefault
                      disable={disable}
                      onClick={() => setDisable(true)}
                      type="submit"
                      radius="8"
                      className="bg-blue-500 py-2 px-4 font-semibold text-white"
                    >
                      Update Profile
                    </ButtonSubmitDefault>
                  </WrapperFlex>
                </div>
              </div>
            </form>
          </div>
        </div>
      </WrapperFlex>
    </div>
  );
};

export default ProfilePage;
