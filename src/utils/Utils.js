import moment from "moment";

export const currencyFormat = (value) => {
  return value
    ? "R$ " + value?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : "R$ 0,00";
};

export const formatDate = (date) => {
  return moment(date).format("DD/MM/yyyy");
};
