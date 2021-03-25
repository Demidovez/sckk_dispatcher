// Pretty view of numbers
export const formatNumber = (num) =>
  num ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") : num;
