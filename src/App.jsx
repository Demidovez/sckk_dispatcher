import "rsuite/dist/styles/rsuite-default.css";
import "./App.scss";
import { Grid, Row, Col, Divider } from "rsuite";
import SearchBar from "./components/SearchBar/SearchBar";
import ButtonAddProblem from "./components/ButtonAddProblem/ButtomAddProblem";
import SearchBarControllers from "./components/SearchBarControllers/SearchBarControllers";
import ProblemsList from "./components/ProblemsList/ProblemsList";
import { useEffect } from "react";
import { getAllProblemsAction } from "./actions/creators/problemsActionCreators";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const isUserCanAddProblem = true;
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProblemsAction(searchData));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData]);

  return (
    <div className="app-component">
      <Grid fluid>
        <Row>
          <Col xs={5} />
          <Col xs={14} className="content">
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
          <Col xs={5} />
        </Row>
      </Grid>
    </div>
  );
}

export default App;
