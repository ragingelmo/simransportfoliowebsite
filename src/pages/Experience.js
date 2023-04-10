import React from "react";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 - 2021"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Sturgis Charter Public School, Hyannis, Mass.
                    </h3>
                    <p> High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2021 - present"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Boston University, Boston, Massachusetts, US. 
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>
                    <p> Computer Science and Neuroscience

                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>

        </div>
    );
}

export default Experience;