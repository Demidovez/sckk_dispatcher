import "./styles.scss";
import ProblemCard from "../ProblemCard/problemcard";

function ProblemsList() {
  const problems = [
    {
      id: 1,
      problem_code: "T45",
      location: "5AB",
      owner: "Дайнеко С.",
      title: "Порвало трубу на БКЦ1",
      text:
        "В 16:30 со слов оператора, на верхней части бака небеленной целлюлозы поравало трубу на сухой части",
      reason: "Вышел из строя анализатор",
      comment: "Нужно уточнить у Дайнеко",
      date: "25.02.2021 16:00",
      is_hide: false,
      is_done: false,
    },
    {
      id: 2,
      problem_code: "T45",
      location: "5AB",
      owner: "Дайнеко С.",
      title: "Порвало трубу на БКЦ1",
      text:
        "В 16:30 со слов оператора, на верхней части бака небеленной целлюлозы поравало трубу на сухой части",
      reason: "Вышел из строя анализатор",
      comment: "Нужно уточнить у Дайнеко",
      date: "25.02.2021 16:00",
      is_hide: false,
      is_done: false,
    },
    {
      id: 3,
      problem_code: "T45",
      location: "5AB",
      owner: "Дайнеко С.",
      title: "Порвало трубу на БКЦ1",
      text:
        "В 16:30 со слов оператора, на верхней части бака небеленной целлюлозы поравало трубу на сухой части",
      reason: "Вышел из строя анализатор",
      comment: "Нужно уточнить у Дайнеко",
      date: "25.02.2021 16:00",
      is_hide: false,
      is_done: false,
    },
  ];

  return (
    <div className="problems-list-component">
      {problems.map((problem) => (
        <ProblemCard key={problem.id} problem={problem} />
      ))}
    </div>
  );
}

export default ProblemsList;
