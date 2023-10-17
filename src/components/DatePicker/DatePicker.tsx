type valueTypeDatePicker = 'date' | 'datetime-local' | 'time';

type propsDatePicker = {
  id: string;
  type: valueTypeDatePicker;
};

const DatePicker = ({ id, type }: propsDatePicker) => {
  return <input type={type} name={id} />;
};

export default DatePicker;
