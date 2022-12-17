import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import locationApi from '~/api/location.api';
import { Location } from '~/data/Interface';
import classNames from '~/utils/classNames';

type PropTypes = {
  name: string;
  control: any;
  dropdownLabel: string;
  setValue: Function;
  list?: Array<string>;
  className: string;
  id?: string;
  type?: string;
};

const Dropdown = ({
  id,
  name,
  control,
  dropdownLabel = '',
  setValue,
  list = [],
  className,
  type,
}: PropTypes) => {
  const dropdownValue = useWatch({
    control,
    name,
    defaultValue: dropdownLabel, // default value before the render
  });
  const [location, setLocation] = useState<string | any>([]);

  useEffect(() => {
    switch (type) {
      case 'BEGIN':
        locationApi.getLocationByType('BEGINNING').then((reponse) => {
          reponse.data.map((item: Location) =>
            setLocation((prev: any) => [...prev, item.locationName]),
          );
        });
        break;
      case 'DES':
        locationApi.getLocationByType('DESTINATION').then((reponse) => {
          reponse.data.map((item: Location) =>
            setLocation((prev: any) => [...prev, item.locationName]),
          );
        });
        break;
      default:
        break;
    }
  }, []);

  const handleGetValue = (e: any) => {
    setValue(name, e.target.value);
    console.log(e.target.value);
  };

  return (
    <select
      id={id}
      defaultValue={dropdownLabel}
      onChange={handleGetValue}
      className={classNames('px-5 py-3 rounded-md border border-c6', className)}
    >
      <option value={dropdownLabel}>{dropdownLabel}</option>
      {type
        ? location.map((item: string) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))
        : list.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
      {/* {list.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))} */}
    </select>
  );
};

export default Dropdown;
