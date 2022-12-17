import CardTourItem from "~/components/card/CardTourItem";
import { WrapperGrid } from "~/components/common";
import WrapperCardTour from "~/components/common/WrapperCardTour";
import { v4 as uuidv4 } from "uuid";
const TOUR_LIST = [
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2020/12/18/14/ivivu-ho-pa-khoang-bia-360x225.gif",
    ribbonText: "KH Mùng 1,2,3,4,6,7 Tết.",
    title:
      "Tour Miền Bắc 5N4Đ: HCM - Hòa Bình - Mộc Châu - Sơn La - Điện Biên - Sapa",
    listPros: [
      { value: "Khám Phá 36 Phố Phường Hà Nội" },
      { value: "Ngắm Mùa Mận Mộc Châu" },
      { value: "Chinh Phục Nóc Nhà Đông Dương" },
    ],
    price: 7788000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/10/18/11/ivivu-hoa-ba-be-4-360x225.gif",
    ribbonText: "KH Mồng 2, 3, 6 Tết",
    title:
      "Tour Miền Bắc 5N4Đ: HCM - Hòa Bình - Mộc Châu - Sơn La - Điện Biên - Sapa",
    point: 9.3,
    rate: 33,
    listPros: [
      { value: "Hồ Ba Bể" },
      { value: "Thác Bản Giốc" },
      { value: "Động Ngườm Ngao" },
    ],
    price: 2330000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/07/08/16/ivivu-thac-ban-gioc-1-360x225.gif",
    ribbonText: "KH Mùng 2 Tết.",
    title:
      "Tour Miền Bắc 5N4Đ: HCM - Hòa Bình - Mộc Châu - Sơn La - Điện Biên - Sapa",
    point: 9.5,
    rate: 12,
    listPros: [
      { value: "Thác Bản Giốc" },
      { value: "Cao Nguyên Đá Đồng Văn" },
      { value: "Cánh Đồng Hoa Tam Giác Mạch" },
      { value: "Khu Di Tích Pác Pó" },
    ],
    price: 7990000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2021/03/19/16/ivivu-thac-ban-gioc-bia-cao-bang-360x225.gif",
    ribbonText: "Tour mới.",
    title: "Tour Miền Bắc 5N4Đ: HCM - Vòng Cung Đông Bắc",
    listPros: [
      { value: "Khám Phá Tứ Đại Đỉnh Đèo Đông Bắc" },
      { value: "Đặc Sản Vùng Núi" },
      { value: "Văn Hóa Phong Tục Dân Tộc" },
    ],
    price: 7588000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2020/08/28/15/ivivu-song-nho-que-bia-360x225.gif",
    ribbonText: "Khu Du Lịch HMông Village",
    title:
      "Tour Đông Bắc 5N4Đ: Hà Nội - Hà Giang - Cao Bằng - Ba Bể - Con Đường Hạnh Phúc",
    listPros: [
      { value: "Trải Nghiệm Cực Đông Tổ Quốc" },
      { value: "Phố Cổ Đồng Văn" },
      { value: "Lũng Cú Nơi Địa Đầu Của Tổ Quốc" },
      { value: "Chuyện Của Pao" },
    ],
    price: 6880000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2020/12/09/10/ivivu-ha-giang-nho-que-bia-360x225.gif",
    ribbonText: "Nóc Nhà Đông Dương",
    title: "Tour Miền Bắc 5N4Đ: Khám Phá Hà Giang - Sa Pa - Hà Nội",
    listPros: [
      { value: "Cực Bắc Tổ Quốc" },
      { value: "Con Đường Hạnh Phúc" },
      { value: "Phố Cổ Đồng Văn" },
      { value: "Cao Nguyên Đá" },
      { value: "City Tour Hà Nội" },
    ],
    price: 6999000,
  },
];
const CardNorthwestTour = () => {
  return (
    <WrapperCardTour heading="North West Road" descibe="East Northwest Hung Vi">
      <WrapperGrid cols="3" spacing="10">
        {TOUR_LIST.map((item) => (
          <CardTourItem
            key={uuidv4()}
            imgThumbnail={item.imgThumbnail}
            ribbonText={item.ribbonText}
            title={item.title}
            point={item.point}
            rate={item.rate}
            listPros={item.listPros}
            price={item.price}
          />
        ))}
      </WrapperGrid>
    </WrapperCardTour>
  );
};

export default CardNorthwestTour;
