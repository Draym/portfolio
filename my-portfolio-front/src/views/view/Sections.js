import React, {Component} from 'react';
import SectionProjects from "./sections/SectionProjects";
import SectionExperiences from "./sections/SectionExperiences";
import SectionContact from "./sections/SectionContact";
import SectionProfile from "./sections/SectionProfile";
import CDelim from "../components/CDelim";

class Sections extends Component {

    render() {
        return (
            <div>
                <section id="profile">
                    <SectionProfile/>
                </section>
                <CDelim/>
                <section id="experience">
                    <SectionExperiences/>
                </section>
                <CDelim/>
                <section id="projects">
                    <SectionProjects/>
                </section>
                <CDelim/>
                <section id="contact">
                    <SectionContact/>
                </section>
            </div>
        );
    }
}

export default Sections;
