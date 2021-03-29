import { useSelector } from "react-redux";
import { Input, DatePicker, SelectPicker, RadioGroup, Radio } from "rsuite";
import "./styles.scss";

function FormProblem({ errors, touched, values, handleChange, setFieldValue }) {
  const { areaList, codeProblemList, locale } = useSelector(
    (state) => state.problems
  );

  return (
    <div className="form-problem-component">
      <div
        className={`field-required ${
          errors.name && touched.name ? "has-error" : ""
        }`}
      >
        <p>Название:</p>
        <Input
          spellCheck="false"
          placeholder="Кратко суть проблемы..."
          value={values.name || ""}
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
          value={values.text || ""}
          onChange={handleChange("text")}
        />
        <div className="error">{errors.text}</div>
      </div>
      <p>Причина:</p>
      <Input
        spellCheck="false"
        placeholder="Из-за чего..."
        value={values.reason || ""}
        onChange={handleChange("reason")}
      />
      <p>Комментарий:</p>
      <Input
        spellCheck="false"
        placeholder="Дополнительная информация..."
        componentClass="textarea"
        rows={2}
        value={values.comment || ""}
        onChange={handleChange("comment")}
      />
      <p>Ответственный:</p>
      <Input
        spellCheck="false"
        placeholder="Кто занимается проблемой..."
        value={values.owner || ""}
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
            errors.problem_code && touched.problem_code ? "has-error" : ""
          }`}
        >
          <p>Код проблемы:</p>
          <SelectPicker
            data={codeProblemList}
            searchable={false}
            placement="auto"
            placeholder="Выберите"
            value={values.problem_code}
            onChange={(value) => setFieldValue("problem_code", value)}
          />
          <div className="error">{errors.problem_code}</div>
        </div>
        <div>
          <p>Дата:</p>
          <DatePicker
            oneTap
            block
            placeholder="Дата проблемы"
            value={new Date(values.date)}
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
        value={values.is_done}
        onChange={(value) => setFieldValue("is_done", value)}
      >
        <Radio value={false}>актуально</Radio>
        <Radio value={true}>закрыто</Radio>
      </RadioGroup>
    </div>
  );
}

export default FormProblem;
