import TagAirport from "~/tag/TagAirport";

const LIST_ARE_FORM = [
  { id: "1", city: "Hồ Chí Minh", airport: "Sân bay quốc tế Tân Sơn Nhất" },
  { id: "2", city: "Hà Nội", airport: "Sân bay quốc tế Nội Bài" },
  { id: "3", city: "Đà Nẵng", airport: "Sân bay quốc tế Đà Nẵng" },
  { id: "4", city: "Phú Quốc", airport: "Sân bay quốc tế Phú Quốc" },
];
const ListAirport = ({ control, name, setValue }) => {
  return (
    <div className="w-[418px] rounded-[4px] bg-white py-2">
      {LIST_ARE_FORM.map((item, index) => (
        <TagAirport
          key={index}
          id={item.id}
          city={item.city}
          airport={item.airport}
          control={control}
          name={name}
          setValue={setValue}
        />
      ))}
    </div>
  );
};

export default ListAirport;
