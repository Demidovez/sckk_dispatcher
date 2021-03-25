import axios from "axios";

export const getProblems = async (options) => {
  try {
    const { data } = await axios.get(
      "https://605ce7fa6d85de00170db496.mockapi.io/problems"
    );

    console.log(data);

    return { problems: data, count: data.length };
  } catch (e) {
    throw new Error(e);
  }
};
