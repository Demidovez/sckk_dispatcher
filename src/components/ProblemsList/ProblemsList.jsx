import ProblemCard from "../ProblemCard/ProblemCard";
import { Button, Loader } from "rsuite";
import { formatNumber } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import DrawerEditProblem from "../DrawerEditProblem/DrawerEditProblem";
import { useState } from "react";
import { getMoreProblemsAction } from "../../actions/creators/problemsActionCreators";

function ProblemsList() {
  const {
    problems,
    moreProblems,
    count,
    isLoading,
    offset,
    offsetStep,
  } = useSelector((state) => state.problems);
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();

  const [isShowEditProblemDrawer, setIsShowEditProblemDrawer] = useState(false);
  const [idProblemEdit, setIdProblemEdit] = useState();

  const showEditProblemDrawer = (problemId) => {
    setIdProblemEdit(problemId);
    setIsShowEditProblemDrawer(true);
  };

  const getMoreProblems = () =>
    dispatch(getMoreProblemsAction(searchData, offset + offsetStep));

  return (
    <div className="problems-list-component">
      {isLoading && problems.length === 0 && (
        <Loader size="md" content="Загрузка..." />
      )}
      {!isLoading && problems.length === 0 && (
        <p className="not-found">Проблем не найдено...</p>
      )}
      {[...problems, ...moreProblems].map((problem) => (
        <ProblemCard
          key={problem.id}
          problem={problem}
          showEditDrawer={showEditProblemDrawer}
        />
      ))}
      {problems.length + moreProblems.length < count && (
        <div className="show-more">
          <Button onClick={getMoreProblems}>Показать еще</Button>{" "}
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
