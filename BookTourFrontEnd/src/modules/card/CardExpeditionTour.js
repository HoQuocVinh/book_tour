import React from "react";
import CardTourItem from "~/components/card/CardTourItem";
import { WrapperGrid } from "~/components/common";
import WrapperCardTour from "~/components/common/WrapperCardTour";
import { v4 as uuidv4 } from "uuid";
const TOUR_LIST = [
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/09/15/15/ivivu-hang-ho-360x225.gif",
    ribbonText: "Thử Thách #1 Việt Nam",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Cano 3 Đảo - Free Day",
    listPros: [
      { value: "Hang Sụt Kong" },
      { value: "Hang Pygmy" },
      { value: "Hang Hổ" },
      { value: "Phong Nha Kẻ Bàng" },
      { value: "Đu dây mạo hiểm" },
    ],
    price: 2020000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/09/15/15/ivivu-hang-ho-360x225.gif",
    ribbonText: "Thử Thách #1 Việt Nam",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Cano 3 Đảo - Free Day",
    listPros: [
      { value: "Hang Sụt Kong" },
      { value: "Hang Pygmy" },
      { value: "Hang Hổ" },
      { value: "Phong Nha Kẻ Bàng" },
      { value: "Đu dây mạo hiểm" },
    ],
    price: 2020000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/09/15/15/ivivu-hang-ho-360x225.gif",
    ribbonText: "Thử Thách #1 Việt Nam",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Cano 3 Đảo - Free Day",
    listPros: [
      { value: "Hang Sụt Kong" },
      { value: "Hang Pygmy" },
      { value: "Hang Hổ" },
      { value: "Phong Nha Kẻ Bàng" },
      { value: "Đu dây mạo hiểm" },
    ],
    price: 2020000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/09/15/15/ivivu-hang-ho-360x225.gif",
    ribbonText: "Thử Thách #1 Việt Nam",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Cano 3 Đảo - Free Day",
    listPros: [
      { value: "Hang Sụt Kong" },
      { value: "Hang Pygmy" },
      { value: "Hang Hổ" },
      { value: "Phong Nha Kẻ Bàng" },
      { value: "Đu dây mạo hiểm" },
    ],
    price: 2020000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/09/15/15/ivivu-hang-ho-360x225.gif",
    ribbonText: "Thử Thách #1 Việt Nam",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Cano 3 Đảo - Free Day",
    listPros: [
      { value: "Hang Sụt Kong" },
      { value: "Hang Pygmy" },
      { value: "Hang Hổ" },
      { value: "Phong Nha Kẻ Bàng" },
      { value: "Đu dây mạo hiểm" },
    ],
    price: 2020000,
  },
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2022/09/15/15/ivivu-hang-ho-360x225.gif",
    ribbonText: "Thử Thách #1 Việt Nam",
    title: "Tour Cao Cấp Phú Quốc 3N2Đ: Cano 3 Đảo - Free Day",
    listPros: [
      { value: "Hang Sụt Kong" },
      { value: "Hang Pygmy" },
      { value: "Hang Hổ" },
      { value: "Phong Nha Kẻ Bàng" },
      { value: "Đu dây mạo hiểm" },
    ],
    price: 2020000,
  },
];
const CardExpeditionTour = () => {
  return (
    <WrapperCardTour heading="" descibe="">
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

export default CardExpeditionTour;
