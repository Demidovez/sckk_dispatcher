import "./styles.scss";
import ProblemCard from "../ProblemCard/problemcard";
import { Button } from "rsuite";
import { formatNumber } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProblemsAction } from "../../actions/creators/problemsActionCreators";

function ProblemsList() {
  // const problems = [
  //   {
  //     id: 1,
  //     problem_code: "T45",
  //     location: "5AB",
  //     owner: "Дайнеко С.",
  //     title: "Порвало трубу на БКЦ1",
  //     text:
  //       "В 16:30 со слов оператора, на верхней части бака небеленной целлюлозы поравало трубу на сухой части",
  //     reason: "Вышел из строя анализатор",
  //     comment: "Нужно уточнить у Дайнеко",
  //     date: "25.02.2021 16:00",
  //     is_hide: false,
  //     is_done: true,
  //   },
  //   {
  //     id: 2,
  //     problem_code: "T45",
  //     location: "5AB",
  //     owner: "Дайнеко С.",
  //     title: "Порвало трубу на БКЦ1",
  //     text:
  //       "В 16:30 со слов оператора, на верхней части бака небеленной целлюлозы поравало трубу на сухой части",
  //     reason: "Вышел из строя анализатор",
  //     comment: "Нужно уточнить у Дайнеко",
  //     date: "25.02.2021 16:00",
  //     is_hide: false,
  //     is_done: false,
  //   },
  //   {
  //     id: 3,
  //     problem_code: "T45",
  //     location: "5AB",
  //     owner: "Дайнеко С.",
  //     title: "Порвало трубу на БКЦ1",
  //     text:
  //       "В 16:30 со слов оператора, на верхней части бака небеленной целлюлозы поравало трубу на сухой части",
  //     reason: "Вышел из строя анализатор",
  //     comment: "Нужно уточнить у Дайнеко",
  //     date: "25.02.2021 16:00",
  //     is_hide: false,
  //     is_done: false,
  //   },
  // ];

  const { problems, moreProblems, count } = useSelector(
    (state) => state.problems
  );
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(getAllProblemsAction()), []);

  return (
    <div className="problems-list-component">
      {problems.map((problem) => (
        <ProblemCard key={problem.id} problem={problem} />
      ))}
      {problems.length + moreProblems.length < count && (
        <div className="show-more">
          <Button>Показать еще</Button>{" "}
          {formatNumber(problems.length + moreProblems.length)} <span>из</span>
          {formatNumber(count)}
        </div>
      )}
    </div>
  );
}

export default ProblemsList;
