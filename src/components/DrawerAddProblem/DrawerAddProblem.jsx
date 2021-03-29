import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Drawer, Alert } from "rsuite";
import { Formik } from "formik";
import "./styles.scss";
import {
  addProblemAction,
  getAllProblemsAction,
} from "../../actions/creators/problemsActionCreators";
import { RESULT } from "../../reducers/problemsReducer";
import FormProblem from "../FormProblem/FormProblem";

const initialProblemData = {
  name: "",
  text: "",
  reason: "",
  comment: "",
  owner: "",
  area: "",
  problem_code: "",
  date: null,
  is_done: false,
};

function DrawerAddProblem({ onClose, isShow }) {
  const { resultProblemStatus, validationSchema } = useSelector(
    (state) => state.problems
  );
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();

  const [problemData, setProblemData] = useState({});

  useEffect(() => {
    isShow && setProblemData({ ...initialProblemData, date: new Date() });
  }, [isShow]);

  useEffect(() => {
    if (resultProblemStatus === RESULT.ADDED) {
      Alert.success("Проблема сохранена!");

      dispatch(getAllProblemsAction(searchData));
    } else if (resultProblemStatus === RESULT.ERROR) {
      Alert.error("Произошла ошибка!");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultProblemStatus]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={problemData}
      onSubmit={(values) => {
        dispatch(addProblemAction(values));
        onClose();
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <Drawer
          show={isShow}
          onHide={onClose}
          className="drawer-add-problem-component"
        >
          <Drawer.Header>
            <Drawer.Title>Добавить проблему</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <FormProblem
              errors={errors}
              touched={touched}
              values={values}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
          </Drawer.Body>
          <Drawer.Footer>
            <Button
              onClick={handleSubmit}
              appearance="primary"
              disabled={
                Object.keys(errors).length > 0 &&
                Object.keys(touched).length > 0
              }
            >
              Добавить
            </Button>
            <Button onClick={onClose} appearance="subtle">
              Отмена
            </Button>
          </Drawer.Footer>
        </Drawer>
      )}
    </Formik>
  );
}

export default DrawerAddProblem;
