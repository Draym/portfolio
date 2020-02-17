import React, {Component} from 'react';
import SectionProjects from "./sections/SectionProjects";
import SectionExperiences from "./sections/SectionExperiences";
import SectionContact from "./sections/SectionContact";
import SectionProfile from "./sections/SectionProfile";

class Sections extends Component {

    render() {
        return (
            <div>
                <section id="profile">
                    <SectionProfile/>
                </section>
                <section id="experience">
                    <SectionExperiences/>
                </section>
                <section id="projects">
                    <SectionProjects/>
                </section>
                <section id="contact">
                    <SectionContact/>
                </section>
            </div>
        );
    }
}

export default Sections;
