import {PortfolioImg} from "../assets/img/images";

const Projects =
    [
        {
            title: "COVID-19 Tracker",
            desc: "Dashboard to track COVID-19 impact worldwide. Providing charts and stats using WHO data with daily auto update.",
            tags: ["Web", "Java", "ReactJs"],
            src: PortfolioImg.covid,
            link: "http://covid19.draymlab.fr",
            target: "live website"
        },
        {
            title: "PDF-Flex library",
            desc: "Open-source Library for generating PDF using responsive components, most used elements such as paragraph and tables are implemented and customisable. Available in maven-central.",
            tags: ["PDF-Generation", "Kotlin", "Tool", "maven-central", "open-source" ],
            src: PortfolioImg.pdfflex,
            link: "https://github.com/Draym/PDF-Flex",
            target: "github"
        },
        {
            title: "OG-Tracker",
            desc: "Tracker providing top missing functionality designed and used by Ogame players.",
            tags: ["Web", "Java", "ReactJs"],
            src: PortfolioImg.ogtrack,
            link: "https://github.com/Draym/OG-ActiTrack",
            target: "github"
        },
        {
            title: "Dragon Ball Arena",
            desc: "Multi-player 2D fighting game in Java, using slick2D. UIs, many animations and proper physics modules.",
            tags: ["Game", "Multi-player", "Java"],
            src: PortfolioImg.dba,
            link: "https://github.com/Draym/DragonBallArena",
            target: "github"
        },
        {
            title: "Jumppy Jumper",
            desc: "Video game with homemade game SDK and physics interaction based gameplay.",
            tags: ["Game", "Java"],
            src: PortfolioImg.jjump,
            link: "https://github.com/Draym/JumppyJumper",
            target: "github"
        },
        {
            title: "SW-Manager",
            desc: "Dashboard providing useful tools for Spacewars players, including data visualisation and scripting generator.",
            tags: ["Web", "Tool", "Java", "Angular"],
            src: PortfolioImg.swman,
            link: "https://github.com/Draym/SWmanager",
            target: "github"
        },
        {
            title: "My Mail App",
            desc: "Mail api for serverless website, will become a mail listing management app in future.",
            tags: ["Tool", "API", "Java"],
            src: PortfolioImg.mailapp,
            link: "https://github.com/Draym/MyMailApp",
            target: "github"
        },
        {
            title: "Draym Lab",
            desc: "My personal portal where i upload my projects, hobbies and future tutorials. in construction.",
            tags: ["Web", "Blog", "Java", "ReactJs"],
            src: PortfolioImg.draymlab,
            link: "https://github.com/Draym/MyPortal",
            target: "github"
        },
        {
            title: "Push Notification",
            desc: "API for serverless application using web Push Notification, soon available live.",
            tags: ["Web", "Tool", "API", "Java", "ReactJs"],
            src: PortfolioImg.pnotif,
            link: "https://github.com/Draym",
            target: "github"
        },
        {
            title: "E-Mars Market",
            desc: "Market place prototype, fully functional with user management, cart, payment process.",
            tags: ["Web", "Prototype", "Java", "Angular"],
            src: PortfolioImg.emars,
            link: "https://github.com/Draym/JWeb",
            target: "github"
        },
    ];

export default Projects;