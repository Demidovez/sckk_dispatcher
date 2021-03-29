import { useDispatch, useSelector } from "react-redux";
import { Button, Drawer, Modal, Icon, Alert } from "rsuite";
import { Formik } from "formik";
import "./styles.scss";
import {
  deleteProblemAction,
  editProblemAction,
} from "../../actions/creators/problemsActionCreators";
import FormProblem from "../FormProblem/FormProblem";
import { useEffect, useState } from "react";
import { RESULT } from "../../reducers/problemsReducer";

function DrawerEditProblem({ onClose, isShow, problem }) {
  const { validationSchema, resultProblemStatus } = useSelector(
    (state) => state.problems
  );
  const dispatch = useDispatch();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const onDelete = () => {
    dispatch(deleteProblemAction(problem.id));
    setShowDeleteModal(false);
    onClose(true);
  };

  useEffect(() => {
    if (resultProblemStatus === RESULT.DELETED) {
      Alert.success("Проблема удалена!");
    } else if (resultProblemStatus === RESULT.EDITED) {
      Alert.success("Проблема изменена!", 99999999);
    } else if (resultProblemStatus === RESULT.ERROR) {
      Alert.error("Произошла ошибка!");
    }
  }, [resultProblemStatus]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={problem}
      onSubmit={(values) => {
        dispatch(editProblemAction(values));
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
          className="drawer-edit-problem-component"
        >
          <Drawer.Header>
            <Drawer.Title>Изменить проблему</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            {problem && (
              <FormProblem
                errors={errors}
                touched={touched}
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
            )}
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
              Изменить
            </Button>
            <Button onClick={onClose} appearance="subtle">
              Отмена
            </Button>
            <Button
              color="red"
              appearance="ghost"
              onClick={() => setShowDeleteModal(true)}
              className="btn-delete"
            >
              Удалить
            </Button>
          </Drawer.Footer>

          <Modal
            show={showDeleteModal}
            onHide={() => setShowDeleteModal(false)}
            size="xs"
            className="drawer-edit-problem-modal"
          >
            <Modal.Body>
              <Icon icon="remind" />
              Вы уверены, что хотите удалить?
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onDelete} appearance="primary">
                Да
              </Button>
              <Button
                onClick={() => setShowDeleteModal(false)}
                appearance="subtle"
              >
                Нет
              </Button>
            </Modal.Footer>
          </Modal>
        </Drawer>
      )}
    </Formik>
  );
}

export default DrawerEditProblem;
