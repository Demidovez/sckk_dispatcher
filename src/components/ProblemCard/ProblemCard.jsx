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

function ProblemCard({ problem }) {
  const {
    id,
    problem_code,
    location,
    owner,
    title,
    text,
    reason,
    comment,
    date,
    is_done,
  } = problem;

  return (
    <Panel className="problem-card-component">
      <Container>
        <Container className="content">
          <Header>
            <h3>
              <span>#{id}</span> {title}
            </h3>
          </Header>
          <Content>
            <p className="text-problem">{text}</p>
            <p>
              <span className="reason-label">Причина:</span> {reason}
            </p>
            <p>
              <span className="comment-label">Комментарий:</span> {comment}
            </p>
            <p>
              <span>Ответственный:</span> {owner}
            </p>
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Container>
        <Divider vertical />
        <Sidebar>
          <div className="date-status-wrapper">
            <span>{date}</span>
            <div className={`status ${is_done ? "done" : "open"}`}>
              {is_done ? "Закрыто" : "Актуально"}
            </div>
          </div>
          <div className="another-options">
            <p className="location">
              Цех:
              <span>{location}</span>
            </p>
            <p className="problem-code">
              Код проблемы:
              <Whisper
                placement="right"
                trigger="hover"
                speaker={
                  <Tooltip>Технологическая проблема на пресспате</Tooltip>
                }
              >
                <span>{problem_code}</span>
              </Whisper>
            </p>
          </div>
          <Button color="blue" className="btn-edit">
            <Icon icon="" /> Изменить
          </Button>
        </Sidebar>
      </Container>
    </Panel>
  );
}

export default ProblemCard;
