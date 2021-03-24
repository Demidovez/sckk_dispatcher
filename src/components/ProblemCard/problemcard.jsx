import { Panel } from "rsuite";
import "./styles.scss";

function ProblemCard({ problem }) {
  const { title } = problem;

  return <Panel className="problem-card-component">{title}</Panel>;
}

export default ProblemCard;
