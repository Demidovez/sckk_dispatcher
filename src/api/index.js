import axios from "axios";

export const getProblems = async (searchData) => {
  try {
    const { data } = await axios.post("http://127.0.0.1:5000/all_problems", {
      searchData,
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const addProblem = async (problemData) => {
  try {
    const { data } = await axios.post("http://127.0.0.1:5000/add_problem", {
      problemData,
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteProblem = async (problemId) => {
  try {
    const { data } = await axios.post("http://127.0.0.1:5000/delete_problem", {
      problemId,
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const editProblem = async (problem) => {
  try {
    const { data } = await axios.post("http://127.0.0.1:5000/edit_problem", {
      problem,
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};
