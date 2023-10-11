type propsDatePicker = {
  id: string;
};

const DatePicker = ({ id }: propsDatePicker) => {
  return <input type='date' name={id} />;
};

export default DatePicker;
