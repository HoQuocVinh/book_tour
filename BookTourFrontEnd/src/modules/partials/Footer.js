import { IconPhone } from "~/components/icon";

const Footer = () => {
  return (
    <div className="mt-10 bg-[rgb(237,237,237,0.2)]">
      <div className="mt-1 px-5 py-10 font-DMSans lg:mx-auto lg:max-w-7xl">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-bold text-dark-blue">
              Du lịch trong nước
            </h3>
            <div className="flex flex-row">
              <ul className="w-[30%]">
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
              </ul>
              <ul className="w-[30%]">
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
                <li className="cursor-pointer leading-8 text-dark-blue">
                  Hà Nội
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-bold text-dark-blue">Liên hệ</h3>
            <div className="text-sx font-Roboto leading-8 text-dark-blue">
              47/5, đường số 2, khu phố 3, tổ 16, phường Linh Xuân, TP. Thủ Đức,
              TP. Hồ Chí Minh <br />
              (+84) 782883871 <br />
              (+84) 917977854 <br />
              19110318@student.hcmute.edu.vn
            </div>
          </div>
          <div className="mb-2 flex flex-col">
            <h3 className="mb-2 text-lg font-bold text-dark-blue">
              Mạng xã hội
            </h3>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/hoquocvinh0702/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="socical/zalo.png" alt="" className="h-10 w-10" />
              </a>
              <a
                href="https://www.facebook.com/hoquocvinh0702/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="socical/facebook.png" alt="" className="h-10 w-10" />
              </a>
              <a
                href="https://www.instagram.com/dien2508/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="socical/instagram.png" alt="" className="h-10 w-10" />
              </a>
              <a
                href="https://www.instagram.com/dien2508/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="socical/telegram.png" alt="" className="h-10 w-10" />
              </a>
              <a
                href="https://twitter.com/LosAnge46567629"
                target="_blank"
                rel="noreferrer"
              >
                <img src="socical/twitter.png" alt="" className="h-10 w-10" />
              </a>
            </div>
            <div className="mt-5">
              <div className="flex w-[50%] items-center justify-center gap-2 rounded-md bg-red-500 py-3 px-5 font-Roboto text-xl font-bold text-white">
                <span>
                  <IconPhone />
                </span>
                0782883871
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <hr />
          <p className="mt-4 font-Roboto text-sm leading-6 text-dark-blue ">
            Bản quyền của TripGuide ® 2022. Bảo lưu mọi quyền. <br />
            Ghi rõ nguồn "localhost:3000" ® khi sử dụng lại thông tin từ website
            này. <br />
            Số giấy phép kinh doanh lữ hành Quốc tế: 79-234/2014/TCDL-GP LHQT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
