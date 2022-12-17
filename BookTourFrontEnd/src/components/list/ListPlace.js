import Card from "@/card/Card";
const PLACES_HOT = [
  {
    id: "1",
    locationName: "Bà Rịa - Vũng Tàu",
    numberHotel: 112,
    src: "https://images.unsplash.com/photo-1623596711744-c10ed15581d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80",
  },
  {
    id: "2",
    locationName: "Đà Lạt",
    numberHotel: 535,
    src: "https://images.unsplash.com/photo-1625125083143-09732aee1f36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80",
  },
  {
    id: "3",
    locationName: "Phan Thiết",
    numberHotel: 107,
    src: "https://images.unsplash.com/photo-1582230706459-f7f0062e6134?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80",
  },
  {
    id: "4",
    locationName: "Cần Thơ",
    numberHotel: 496,
    src: "https://images.unsplash.com/photo-1593152399172-9277bfd12c6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    id: "5",
    locationName: "Phú Quốc",
    numberHotel: 365,
    src: "https://images.unsplash.com/photo-1632456417636-8425fb148522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: "6",
    locationName: "Đà Nẵng",
    numberHotel: 795,
    src: "https://images.unsplash.com/photo-1592223044449-08450a43e36d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: "7",
    locationName: "Quy Nhơn",
    numberHotel: 138,
    src: "https://images.unsplash.com/photo-1647277529830-fe733797785a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "8",
    locationName: "Vịnh Hạ Long",
    numberHotel: 286,
    src: "https://images.unsplash.com/photo-1599484443690-8d7e55b1da18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: "9",
    locationName: "Hội An",
    numberHotel: 518,
    src: "https://images.unsplash.com/photo-1560699380-276159e957e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const ListPlace = ({ heading, control, name, setValue }) => {
  return (
    <div>
      <div className="p-4">
        <div className="text-lg font-medium text-black">{heading}</div>
        <hr className="mt-3" />
      </div>
      <div className="mt-2 grid grid-cols-3 grid-rows-3">
        {PLACES_HOT.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            setValue={setValue}
            locationName={item.locationName}
            numberHotel={item.numberHotel}
            src={item.src}
            control={control}
            name={name}
          />
        ))}
      </div>
    </div>
  );
};

export default ListPlace;
