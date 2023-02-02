import {SchoolImg} from "../assets/img/images";
import React from "react";

const Education =
    [
        {
            title: "Master Information Technology",
            institute: "Epitech",
            institute_logo: SchoolImg.epitech,
            city: "Paris",
            country: "France",
            date_start: "2012",
            date_end: "2018",
            date_total: "5y",
            id:"epitech",
            intro: "French IT leading school that teaches computer engineering. It promotes self-learning, strong emphasis on solution-first and project-based methodology.",
            badges: [{name: 'C', color: 'primary'}, {name: 'C++', color: 'primary'}, {name: 'OOP', color: 'primary'},
                {name: 'Java', color: 'info'}, {name: 'Self-learning', color: 'info'}, {name: 'Code rigor', color: 'info'}, {name: 'Team Project', color: 'info'}, {name: 'Linux', color: 'info'}],
            details: null
        },
        {
            title: "Master Software Engineering",
            institute: "Beijing Jiaotong University",
            institute_logo: SchoolImg.bjtu,
            city: "Beijing",
            country: "China",
            date_start: "2016",
            date_end: "2017",
            date_total: "1y",
            id:"bjtu",
            intro: "International exchange program in a computer software engineering course. I spend a year in Beijing mostly learning Java, Design patterns and most of all a new culture.",
            badges: [{name: 'Java', color: 'primary'}, {name: 'Software', color: 'primary'},
                {name: 'Design Pattern', color: 'info'}, {name: 'Security', color: 'info'}],
            details: <div>
                <p className="p-br">Through the year, I have developed multiple projects as solo or within a team.</p>
                <p className="plvl">Some of my biggest free projects:</p>
                <ul className="p-br-2">
                    <li><a href="https://github.com/Draym/JumppyJumper" target="_blank" rel="noopener noreferrer">JumpyJumper</a> : 2D game
                        developed from scratch using Java and Slick2D, my challenge was to develop a brand new Game
                        Engine SDK including animation and physics.
                    </li>
                    <li><a href="https://github.com/Draym/LostInBJTU" target="_blank" rel="noopener noreferrer">LostInBJTU</a> : University map
                        mobile application, with the purpose to include each classroom and buildings.
                    </li>
                    <li><a href="https://github.com/Draym/shoumeFW" target="_blank" rel="noopener noreferrer">shoumeFW</a> : Social healthy recipe
                        app, team project including Back, Web, Mobile. Using AngularJS + Bootstrap.
                    </li>
                </ul>
            </div>
        },
        {
            title: "Science Baccalaureate",
            institute: "Anatole de Monzie High school",
            institute_logo: SchoolImg.lycee,
            city: "Bordeaux",
            country: "France",
            date_start: "2009",
            date_end: "2012",
            date_total: "3y",
            id:"highschool",
            intro: "Science classes with Physics speciality in Bordeaux high school.",
            badges: null,
            details: null
        }
    ];

export default Education;