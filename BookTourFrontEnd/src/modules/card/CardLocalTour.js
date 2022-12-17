import React from "react";
import CardTourItem from "~/components/card/CardTourItem";
import { WrapperGrid } from "~/components/common";
import WrapperCardTour from "~/components/common/WrapperCardTour";
import { v4 as uuidv4 } from "uuid";
const TOUR_LIST = [
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2020/07/10/17/ivivu-hon-may-rut-bia-360x225.gif",
    ribbonText: "Xác Nhận Ngay",
    title:
      "Tour Phú Quốc 1N: Cano Hòn Mây Rút - Hòn Dăm Ngang - Hòn Móng Tay - Cáp Treo Hòn Thơm",
    point: 9.5,
    rate: 16,
    listPros: [
      { value: "Tặng Free Bộ Ảnh Chụp Tại " },
      { value: "Hòn Dăm Ngang" },
      { value: "Hòn Mây Rút Ngoài và Trong" },
      { value: "Hòn Ghầm Ghì" },
      { value: "Cáp Treo Hòn Thơm" },
    ],
    price: 1150000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2020/07/14/17/ivivu-chua-ho-quoc-2-360x225.gif",
    ribbonText: "Xe Jeep",
    title: "Tour Phú Quốc 1N: Xe Jeep Khám Phá Nam Đảo",
    point: 9.5,
    rate: 16,
    listPros: [
      { value: "Trải Nghiệm Xe Jeep" },
      { value: "Khám Phá Nam Đảo Phú Quốc" },
      { value: "Trại Rắn Đồng Tâm 2" },
    ],
    price: 1000000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/03/07/10/ivivu-thi-tran-dia-trung-hai-360x225.gif",
    ribbonText: "Grand World",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Grand World - Lặn Ngắm San Hô Nam Đảo",
    point: 9.5,
    rate: 16,
    listPros: [
      { value: "Trải Nghiệm Cano 3 Đảo" },
      { value: "Công Viên San Hô" },
      { value: "Lặn Ngắm Và Câu Cá" },
    ],
    price: 1000000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/03/07/10/ivivu-thi-tran-dia-trung-hai-360x225.gif",
    ribbonText: "Grand World",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Grand World - Lặn Ngắm San Hô Nam Đảo",
    point: 9.5,
    rate: 16,
    listPros: [
      { value: "Trải Nghiệm Cano 3 Đảo" },
      { value: "Công Viên San Hô" },
      { value: "Lặn Ngắm Và Câu Cá" },
    ],
    price: 1000000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/03/07/10/ivivu-thi-tran-dia-trung-hai-360x225.gif",
    ribbonText: "Grand World",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Grand World - Lặn Ngắm San Hô Nam Đảo",
    point: 9.5,
    rate: 16,
    listPros: [
      { value: "Trải Nghiệm Cano 3 Đảo" },
      { value: "Công Viên San Hô" },
      { value: "Lặn Ngắm Và Câu Cá" },
    ],
    price: 1000000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/03/07/10/ivivu-thi-tran-dia-trung-hai-360x225.gif",
    ribbonText: "Grand World",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Grand World - Lặn Ngắm San Hô Nam Đảo",
    point: 9.5,
    rate: 16,
    listPros: [
      { value: "Trải Nghiệm Cano 3 Đảo" },
      { value: "Công Viên San Hô" },
      { value: "Lặn Ngắm Và Câu Cá" },
    ],
    price: 1000000,
  },
];
const CardLocalTour = () => {
  return (
    <WrapperCardTour heading="Local Tour" descibe="Hot checked in">
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

export default CardLocalTour;
