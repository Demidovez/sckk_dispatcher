export const formatNumber = (num) =>
  num ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") : num;

export const getApiUrl = () => {
  let api_url = "";

  if (process.env.NODE_ENV === "development") {
    api_url = process.env.REACT_APP_API_DEV_HOST;
  } else {
    api_url = process.env.REACT_APP_API_HOST;
  }

  return api_url;
};
