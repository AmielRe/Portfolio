import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import WorkIcon from "@material-ui/icons/Work";
import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ThemeContext } from "../themeProvider";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-800"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About
        </h2>
        <div className="mt-8">
          <VerticalTimeline
            className={darkMode === true ? "vertical-timeline-custom-line" : ""}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "10px solid rgb(33, 150, 243)",
              }}
              date="Jan 2024 - Present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Software Engineer, Tipalti
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Tel Aviv, Israel
              </h4>
              <p>
                Create and maintain top-tier software for our financial
                platform. Lead projects, mentor teammates, and drive innovation
                in global payment automation.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentArrowStyle={{
                borderRight: "10px solid rgb(233, 30, 99)",
              }}
              date="2020 - 2023"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                BSc - Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                College of Management, Rishon Lezion
              </h4>
              <p>
                Achieved Dean's Honor in my first year, maintained an average
                grade of 95, participated in the excellence program, and
                completed an academic article as my final project during my
                degree.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "10px solid rgb(33, 150, 243)",
              }}
              date="Oct 2021 - Aug 2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                R&D Backend Team Lead, IDF
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Israel</h4>
              <p>
                Managed a team of 5 developers, applied Agile Scrum principles,
                maintained high standards, and conducted two full training
                cycles as a chief sergeant.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--star"
              contentArrowStyle={{
                borderRight: "10px solid rgb(16, 204, 82)",
              }}
              date="2021"
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Matzov Award of Excellence in 2021 Independence Day
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "10px solid rgb(33, 150, 243)",
              }}
              date="Apr 2021 - Oct 2021"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineering Team Lead, IDF
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Israel</h4>
              <p>
                Responsible for designing project architecture, guiding external
                stakeholders and collaborators, and gaining exposure to Big Data
                tools and technologies.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--star"
              contentArrowStyle={{
                borderRight: "10px solid rgb(16, 204, 82)",
              }}
              date="2020"
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Branch Award of Excellence in 2020 Rosh Hashanah
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "10px solid rgb(33, 150, 243)",
              }}
              date="Mar 2018 - Apr 2021"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Software Engineer, IDF
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Israel</h4>
              <p>
                Managed the PKI infrastructure in C#, led a high-level team,
                contributed to system architectural designs, utilized MSSQL for
                the system database, worked with smart cards and digital
                certificates, and implemented a CI infrastructure, receiving
                awards for excellence in 2020 and 2021.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;
