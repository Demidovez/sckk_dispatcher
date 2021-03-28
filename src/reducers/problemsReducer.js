import Actions from "../actions/types/problemsActionTypes";
import * as Yup from "yup";

export const RESULT = {
  SUCCESS: 0,
  ERROR: 1,
  DELETED: 2,
  EDITED: 3,
};

const initialState = {
  problems: [],
  moreProblems: [],
  count: 0,
  offset: 0,
  offsetStep: 15,
  orderValue: null,
  resultProblemStatus: null,
  isLoading: false,
  areaList: [
    { label: "Другой", value: "Другой" },
    { label: "1ABCDEH", value: "1ABCDEH" },
    { label: "2ABCDE", value: "2ABCDE" },
    { label: "5ABC", value: "5ABC" },
    { label: "6ABCDEF", value: "6ABCDEF" },
  ],
  codeProblemList: [
    { label: "Другой", value: "Другой" },
    { label: "T345", value: "T345" },
    { label: "A14", value: "A14" },
    { label: "X90", value: "X90" },
    { label: "K89", value: "K89" },
  ],
  locale: {
    sunday: "Вс",
    monday: "Пн",
    tuesday: "Вт",
    wednesday: "Ср",
    thursday: "Чт",
    friday: "Пт",
    saturday: "Сб",
    ok: "OK",
  },
  validationSchema: Yup.object({
    name: Yup.string()
      .trim()
      .min(2, "Слишком коротко!")
      .max(50, "Слишком длинное!")
      .required("Обязательное поле"),
    text: Yup.string()
      .trim()
      .min(2, "Слишком коротко!")
      .max(500, "Слишком длинный!")
      .required("Обязательное поле"),
    area: Yup.string().ensure().required("Обязательное поле"),
    problem_code: Yup.string().ensure().required("Обязательное поле"),
  }),
};

const problemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_PROBLEMS:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.SET_ALL_PROBLEMS:
      return {
        ...state,
        problems: action.payload.problems,
        count: action.payload.count,
        isLoading: false,
      };
    case Actions.SET_MORE_PROBLEMS:
      return {
        ...state,
        moreProblems: action.payload,
        offset: state.offset + state.offsetStep,
      };
    case Actions.SET_RESULT_PROBLEM_STATUS:
      return {
        ...state,
        resultProblemStatus: action.payload,
      };
    case Actions.ADD_PROBLEM:
      return {
        ...state,
        resultProblemStatus: initialState.resultProblemStatus,
      };
    case Actions.DELETE_PROBLEM:
      return {
        ...state,
        problems: state.problems.filter(
          (problem) => problem.id !== action.payload
        ),
      };
    case Actions.EDIT_PROBLEM:
      return {
        ...state,
        problems: state.problems.map((problem) =>
          problem.id === action.payload.id ? action.payload : problem
        ),
      };
    default:
      return state;
  }
};

export default problemsReducer;
