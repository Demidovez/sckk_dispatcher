import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Drawer,
  Input,
  DatePicker,
  SelectPicker,
  RadioGroup,
  Radio,
} from "rsuite";
import { Formik } from "formik";
import * as Yup from "yup";
import "./styles.scss";

const validationSchema = Yup.object({
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
  problemCode: Yup.string().ensure().required("Обязательное поле"),
});

const initialProblemData = {
  name: "",
  text: "",
  reason: "",
  comment: "",
  owner: "",
  area: "",
  problemCode: "",
  date: null,
  isActual: true,
};

function DrawerAddProblem({ onClose, isShow, problem }) {
  const { areaList, codeProblemList, locale } = useSelector(
    (state) => state.problems
  );

  const [problemData, setProblemData] = useState({});

  useEffect(() => {
    isShow &&
      setProblemData(
        problem ? problem : { ...initialProblemData, date: new Date() }
      );
  }, [problem, isShow]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={problemData}
      onSubmit={(values) => console.log(values)}
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
            <div
              className={`field-required ${
                errors.name && touched.name ? "has-error" : ""
              }`}
            >
              <p>Название:</p>
              <Input
                spellCheck="false"
                placeholder="Кратко суть проблемы..."
                value={values.name}
                onChange={handleChange("name")}
              />
              <div className="error">{errors.name}</div>
            </div>
            <div
              className={`field-required ${
                errors.text && touched.text ? "has-error" : ""
              }`}
            >
              <p>Текст:</p>
              <Input
                spellCheck="false"
                placeholder="Подробно о проблеме..."
                componentClass="textarea"
                rows={4}
                value={values.text}
                onChange={handleChange("text")}
              />
              <div className="error">{errors.text}</div>
            </div>
            <p>Причина:</p>
            <Input
              spellCheck="false"
              placeholder="Из-за чего..."
              value={values.reason}
              onChange={handleChange("reason")}
            />
            <p>Комментарий:</p>
            <Input
              spellCheck="false"
              placeholder="Дополнительная информация..."
              componentClass="textarea"
              rows={2}
              value={values.comment}
              onChange={handleChange("comment")}
            />
            <p>Ответственный:</p>
            <Input
              spellCheck="false"
              placeholder="Кто занимается проблемой..."
              value={values.owner}
              onChange={handleChange("owner")}
            />
            <div
              className={`field-required ${
                errors.area && touched.area ? "has-error" : ""
              }`}
            >
              <p>Цех:</p>
              <SelectPicker
                data={areaList}
                searchable={false}
                placeholder="Выберите"
                value={values.area}
                onChange={(value) => setFieldValue("area", value)}
              />
              <div className="error">{errors.area}</div>
            </div>
            <div className="code-and-date-wrapper">
              <div
                className={`field-required ${
                  errors.problemCode && touched.problemCode ? "has-error" : ""
                }`}
              >
                <p>Код проблемы:</p>
                <SelectPicker
                  data={codeProblemList}
                  searchable={false}
                  placeholder="Выберите"
                  value={values.problemCode}
                  onChange={(value) => setFieldValue("problemCode", value)}
                />
                <div className="error">{errors.problemCode}</div>
              </div>
              <div>
                <p>Дата:</p>
                <DatePicker
                  oneTap
                  block
                  placeholder="Дата проблемы"
                  value={values.date}
                  ranges={[]}
                  locale={locale}
                  placement="auto"
                  isoWeek
                  cleanable={false}
                  onChange={(value) => setFieldValue("date", value)}
                />
              </div>
            </div>
            <RadioGroup
              name="radioList"
              inline
              value={values.isActual}
              onChange={(value) => setFieldValue("isActual", value)}
            >
              <Radio value={true}>актуально</Radio>
              <Radio value={false}>закрыто</Radio>
            </RadioGroup>
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
