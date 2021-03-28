import ProblemCard from "../ProblemCard/ProblemCard";
import { Button, Loader } from "rsuite";
import { formatNumber } from "../../helpers";
import { useSelector } from "react-redux";
import "./styles.scss";
import DrawerEditProblem from "../DrawerEditProblem/DrawerEditProblem";
import { useState } from "react";

function ProblemsList() {
  const { problems, moreProblems, count, isLoading } = useSelector(
    (state) => state.problems
  );

  const [isShowEditProblemDrawer, setIsShowEditProblemDrawer] = useState(false);
  const [idProblemEdit, setIdProblemEdit] = useState();

  const showEditProblemDrawer = (problemId) => {
    setIdProblemEdit(problemId);
    setIsShowEditProblemDrawer(true);
  };

  return (
    <div className="problems-list-component">
      {isLoading && problems.length === 0 && (
        <Loader size="md" content="Загрузка..." />
      )}
      {problems.map((problem) => (
        <ProblemCard
          key={problem.id}
          problem={problem}
          showEditDrawer={showEditProblemDrawer}
        />
      ))}
      {problems.length + moreProblems.length < count && (
        <div className="show-more">
          <Button>Показать еще</Button>{" "}
          {formatNumber(problems.length + moreProblems.length)} <span>из</span>
          {formatNumber(count)}
        </div>
      )}

      {/* TODO: А что если мы нажали на список moreProblems? нужно подумать про удаление и изменение проблемы*/}
      <DrawerEditProblem
        onClose={() => setIsShowEditProblemDrawer(false)}
        isShow={isShowEditProblemDrawer}
        problem={problems.find(({ id }) => id === idProblemEdit)}
      />
    </div>
  );
}

export default ProblemsList;
