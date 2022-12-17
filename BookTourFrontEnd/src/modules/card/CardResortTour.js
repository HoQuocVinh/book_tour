import React from "react";
import CardTourItem from "~/components/card/CardTourItem";
import { WrapperGrid } from "~/components/common";
import WrapperCardTour from "~/components/common/WrapperCardTour";
import { v4 as uuidv4 } from "uuid";
const TOUR_LIST = [
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/03/07/10/ivivu-thi-tran-dia-trung-hai-pq-360x225.gif",
    ribbonText: "Xác Nhận Ngay",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Cano 3 Đảo - Free Day",
    listPros: [
      { value: "Du Ngoạn 3 Đảo" },
      { value: "Nghỉ Dưỡng Cao Cấp" },
      { value: "Trải Nghiệm Đảo Ngọc" },
    ],
    price: 2020000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/04/15/17/ivivu-dora-cruise-ha-long-360x225.gif",
    ribbonText: "Xác Nhận Ngay",
    title: "Tour Hạ Long 2N1Đ: Du Thuyền 5 Sao Dora Cruise Hạ Long - Lan Hạ",
    listPros: [
      { value: "Du Ngoạn Vịnh Hạ Long Lan Hạ" },
      { value: "Du thuyền Dora 5 Sao" },
      { value: "Trải Nghiệm Chèo Kayak" },
    ],
    price: 3750000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/04/15/17/ivivu-dora-cruise-ha-long-360x225.gif",
    ribbonText: "Xác Nhận Ngay",
    title: "Tour Hạ Long 2N1Đ: Du Thuyền 5 Sao Dora Cruise Hạ Long - Lan Hạ",
    listPros: [
      { value: "Du Ngoạn Vịnh Hạ Long Lan Hạ" },
      { value: "Du thuyền Dora 5 Sao" },
      { value: "Trải Nghiệm Chèo Kayak" },
    ],
    price: 3750000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/04/15/17/ivivu-dora-cruise-ha-long-360x225.gif",
    ribbonText: "Xác Nhận Ngay",
    title: "Tour Hạ Long 2N1Đ: Du Thuyền 5 Sao Dora Cruise Hạ Long - Lan Hạ",
    listPros: [
      { value: "Du Ngoạn Vịnh Hạ Long Lan Hạ" },
      { value: "Du thuyền Dora 5 Sao" },
      { value: "Trải Nghiệm Chèo Kayak" },
    ],
    price: 3750000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/04/15/17/ivivu-dora-cruise-ha-long-360x225.gif",
    ribbonText: "Xác Nhận Ngay",
    title: "Tour Hạ Long 2N1Đ: Du Thuyền 5 Sao Dora Cruise Hạ Long - Lan Hạ",
    listPros: [
      { value: "Du Ngoạn Vịnh Hạ Long Lan Hạ" },
      { value: "Du thuyền Dora 5 Sao" },
      { value: "Trải Nghiệm Chèo Kayak" },
    ],
    price: 3750000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/04/15/17/ivivu-dora-cruise-ha-long-360x225.gif",
    ribbonText: "Xác Nhận Ngay",
    title: "Tour Hạ Long 2N1Đ: Du Thuyền 5 Sao Dora Cruise Hạ Long - Lan Hạ",
    listPros: [
      { value: "Du Ngoạn Vịnh Hạ Long Lan Hạ" },
      { value: "Du thuyền Dora 5 Sao" },
      { value: "Trải Nghiệm Chèo Kayak" },
    ],
    price: 3750000,
  },
];
const CardResortTour = () => {
  return (
    <WrapperCardTour
      heading="Resort Tour"
      descibe="Enjoy the trip, full of health"
    >
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

export default CardResortTour;
