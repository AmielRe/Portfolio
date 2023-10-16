import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { TaggedContentCard } from "react-ui-cards";
import { projects } from "../constants";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode === true ? "bg-white" : "bg-gray-900"}
    >
      <Container className="py-5">
        <h2
          className={
            darkMode
              ? "pb-4 text-5xl font-bold px-4 md:px-0 text-center"
              : "pb-4 text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Projects
        </h2>
        <Row lg={3} md={2} sm={1}>
          {projects.map((project) => (
            <Col key={project.id}>
              <TaggedContentCard
                href={project.href}
                thumbnail={project.thumbnail}
                title={project.title}
                description={project.description}
                tags={project.tags}
                className="b-5"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
