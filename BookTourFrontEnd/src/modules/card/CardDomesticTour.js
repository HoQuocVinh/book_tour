import CardTourItem from "~/components/card/CardTourItem";
import { WrapperGrid } from "~/components/common";
import WrapperCardTour from "~/components/common/WrapperCardTour";
import { v4 as uuidv4 } from "uuid";
const TOUR_LIST = [
  {
    imgThumbnail:
      "https://images.unsplash.com/photo-1585244540993-e46464efd31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ribbonText: "Xe lửa",
    title:
      "Tour Quy Nhơn 3N4Đ: KDL Hầm Hô - Kỳ Co - Eo Gió - Chùa Ông Núi (Xe Lửa)",
    point: 9.1,
    rate: 16,
    listPros: [
      { value: "KDL Ghềnh Ráng" },
      { value: "Du Ngoạn Kỳ Co" },
      { value: "Check In Eo Gió" },
    ],
    price: 3250000,
  },
  {
    imgThumbnail:
      "https://images.unsplash.com/photo-1621559179037-9830ffe0da13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=769&q=80",
    ribbonText: "30/12 Tết Dương Lịch",
    title: "Tour Cao Cấp Đà Nẵng 3N2Đ: Đà Nẵng - Sơn Trà - Hội An - Bà Nà",
    point: 9.3,
    rate: 11,
    listPros: [
      { value: "Leo Núi Ngũ Hành" },
      { value: "Phố Cổ Hội An" },
      { value: "Chiêm Ngưỡng Cây Cầu Vàng" },
    ],
    price: 3999000,
  },
  {
    imgThumbnail:
      "https://images.unsplash.com/photo-1638684524566-51ada6e1c0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    ribbonText: "Tour bán chạy",
    title: "Tour Miền Tây 4N3Đ: Cần Thơ - Sóc Trăng - Bạc Liêu - Cà Mau",
    point: 9.0,
    rate: 4,
    listPros: [
      { value: "Tọa Độ Cực Nam" },
      { value: "Ẩm Thực Nam Bộ" },
      { value: "Tặng 1 Đêm Khách Sạn 5 Sao" },
    ],
    price: 36800000,
  },
  {
    imgThumbnail:
      "https://images.unsplash.com/photo-1628158621143-616bb4e0b461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80",
    ribbonText: "Giảm 10% nhóm 3 khách",
    title: "Tour Miền Tây 4N3Đ: Cần Thơ - Sóc Trăng - Bạc Liêu - Cà Mau",
    point: 8.7,
    rate: 3,
    listPros: [
      { value: "Nghỉ Dưỡng Resort 4 Sao" },
      { value: "KDL Núi Tà Cú" },
      { value: "Linh Sơn Trường Thọ Tự" },
    ],
    price: 2250000,
  },
  {
    imgThumbnail:
      "https://images.unsplash.com/photo-1571270237712-84eeb3b777b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
    ribbonText: "HN-Sapa-Ninh Bình-Hạ Long",
    title: "Tour Miền Bắc 5N4Đ: Hà Nội - Sapa - Ninh Bình - Hạ Long",
    point: 8.7,
    rate: 3,
    listPros: [
      { value: "Chinh Phục Fansipan" },
      { value: "Vịnh Hạ Long" },
      { value: "36 Phố Phường" },
      { value: "Danh Thắng Tràng An" },
    ],
    price: 7290000,
  },
  {
    imgThumbnail:
      "https://images.unsplash.com/photo-1565535613033-778b945767d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ribbonText: "Resort 3 Sao",
    title: "Tour Phú Quốc 3N2Đ: HCM - Câu Cá - Lặn Ngắm San Hô",
    point: 9.3,
    rate: 6,
    listPros: [
      { value: "Trải Nghiệm Câu Cá" },
      { value: "Ngắm San Hô Tại Đảo" },
      { value: "Thành Phố Không Ngủ Grand Words" },
    ],
    price: 4690000,
  },
];
const CardDomesticTour = ({ tour }) => {
  return (
    <WrapperCardTour heading="Demestic Tour" descibe="Most Checked In">
      <WrapperGrid cols="3" spacing="10">
        {tour && tour.map((item) => <CardTourItem key={item.id} tour={item} />)}
      </WrapperGrid>
    </WrapperCardTour>
  );
};
export default CardDomesticTour;
