//проверка введено ли поле
export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

//проверка длины строки через замыкание
export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length <= maxLength) return undefined;
  return `Max length is ${maxLength} symbols`;
};
