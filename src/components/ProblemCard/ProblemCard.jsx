import {
  Icon,
  Panel,
  Container,
  Header,
  Content,
  Sidebar,
  Whisper,
  Tooltip,
  Button,
  Divider,
} from "rsuite";
import "./styles.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ProblemCard({ problem, showEditDrawer }) {
  const {
    id,
    problem_code,
    area,
    owner,
    name,
    text,
    reason,
    comment,
    date,
    is_done,
  } = problem;

  const { codeProblemList } = useSelector((state) => state.problems);
  const { isLogined } = useSelector((state) => state.user);

  const [descProblemCode, setDescProblemCode] = useState("");

  useEffect(() => {
    const foundProblemCode = codeProblemList.find(
      (code) => code.value === problem_code
    );

    setDescProblemCode(
      foundProblemCode ? foundProblemCode.desc : "код проблемы"
    );
  }, [codeProblemList, problem_code]);

  return (
    <Panel className="problem-card-component">
      <Container>
        <Container className="content">
          <Header>
            <h3>{name}</h3>
          </Header>
          <Content>
            <p className="text-problem">{text}</p>
            {reason && (
              <p>
                <span className="reason-label">Причина:</span> {reason}
              </p>
            )}
            {comment && (
              <p>
                <span className="comment-label">Комментарий:</span> {comment}
              </p>
            )}
            {owner && (
              <p>
                <span>Ответственный:</span> {owner}
              </p>
            )}
          </Content>
        </Container>
        <Divider vertical />
        <Sidebar>
          <div className="date-status-wrapper">
            <div className="date">
              <span>№ {id}</span> {new Date(date).toLocaleDateString()}
            </div>
            <div className={`status ${is_done ? "done" : "open"}`}>
              {is_done ? "Закрыто" : "Актуально"}
            </div>
          </div>
          <div className="another-options">
            <p className="location">
              Цех:
              <span>{area}</span>
            </p>
            <p className="problem-code">
              Код проблемы:
              <Whisper
                placement="right"
                trigger="hover"
                speaker={<Tooltip>{descProblemCode}</Tooltip>}
              >
                <span>{problem_code}</span>
              </Whisper>
            </p>
          </div>
          <div className="btn-edit-wrapper">
            {isLogined && (
              <Button color="blue" onClick={() => showEditDrawer(problem.id)}>
                <Icon icon="" /> Изменить
              </Button>
            )}
          </div>
        </Sidebar>
      </Container>
    </Panel>
  );
}

export default ProblemCard;
