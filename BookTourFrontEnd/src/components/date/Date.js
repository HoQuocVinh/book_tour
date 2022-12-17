import { FormField, WrapperFlex } from "../common";
import { FieldSearchBox } from "../field";
import { IconCalendar } from "../icon";

const Date = ({ name, control, id, className, children, onClick }) => {
  return (
    <WrapperFlex
      items="center"
      spacing="3"
      className={className}
      onClick={onClick}
    >
      <span className="text-c4">
        <IconCalendar />
      </span>
      <FormField>
        <FieldSearchBox pointer control={control} name={name} id={id} readOnly>
          {children}
        </FieldSearchBox>
      </FormField>
    </WrapperFlex>
  );
};

export default Date;
