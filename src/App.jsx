import "rsuite/dist/styles/rsuite-default.css";
import "./App.scss";
import { Grid, Row, Col, Divider } from "rsuite";
import SearchBar from "./components/SearchBar/searchbar";
import ButtonAddProblem from "./components/ButtonAddProblem/buttomaddproblem";
import SearchBarControllers from "./components/SearchBarControllers/searchbarcontrollers";
import ProblemsList from "./components/ProblemsList/problemslist";

function App() {
  const isUserCanAddProblem = true;

  return (
    <div className="app-component">
      <Grid fluid>
        <Row>
          <Col xs={6} />
          <Col xs={12} className="content">
            <div className="search-wrapper">
              <SearchBar />
              {isUserCanAddProblem && (
                <>
                  <Divider vertical />
                  <ButtonAddProblem />
                </>
              )}
            </div>
            <SearchBarControllers />
            <ProblemsList />
          </Col>
          <Col xs={6} />
        </Row>
      </Grid>
    </div>
  );
}

export default App;
