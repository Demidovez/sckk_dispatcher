import ProblemCard from "../ProblemCard/ProblemCard";
import { Button } from "rsuite";
import { formatNumber } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProblemsAction } from "../../actions/creators/problemsActionCreators";
import "./styles.scss";

function ProblemsList() {
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
