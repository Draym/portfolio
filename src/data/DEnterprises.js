import {CompanyImg} from "../assets/img/images";
import React from "react";

const Enterprises =
    [
        {
            title: "Software Engineer Backend",
            institute: "Stey",
            institute_logo: CompanyImg.stey,
            city: "Beijing",
            country: "China",
            date_start: "July 2020",
            date_end: "Now",
            date_total: (new Date().getFullYear() - 2020).toString(),
            id:"stey",
            intro: "Responsible for the backend development within micro-services architectures of +20 services written in Kotlin and Scala. Use of Azure cloud, Azure CI, Kubernetes, SpringCloud and event streams with Kafka.",
            badges: [{name: 'Kotlin', color: 'info'}, {name: 'Scala', color: 'info'},
                {name: 'Spring', color: 'light'}, {name: 'Play', color: 'light'},
                {name: 'Kubernetes', color: 'light'}, {name: 'Azure cloud', color: 'light'}, {name: 'Kafka', color: 'light'}, {name: 'Akka', color: 'light'}, {name: 'Exposed', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li>Creation and configuration of new API modules as micro-services</li>
                    <li>Housekeep operations management system designed under Akka message-driven principals and Kafka event streams.</li>
                    <li>Tencent SMS & Chat API integration</li>
                    <li>IOT third-parties APIs integration for connected rooms</li>
                    <li className="plvl-1">
                        <p>new digital invoices and contracts management</p>
                        <ul>
                            <li>WeChat & Alipay APIs for mobile payment; transactions tracking and reporting</li>
                            <li>legal E-signing, automatic billing, IOT locker, PDF generation</li>
                            <li>kotlin first PDF generation library based on generic grid design including a markdown interpreter</li>
                        </ul>
                    </li>
                    <li>Migrate Hibernate JPA to Exposed, refactor services to SOLID principles</li>
                </ul>
                <p className="plvl">➔ Kotlin, Spring, Exposed, Spring-Cloud & ServiceDiscovery, SOLID</p>
                <p className="plvl">➔ Scala, Play, Slick, Akka, function programing</p>
                <p className="plvl">➔ Kubernetes, Azure Cloud, Docker, Akka, SQLServer</p>
                <p className="plvl">➔ Design an implements APIs for core business features within a micro-service architecture</p>
            </div>
        },
        {
            title: "Full-Stack Developer",
            institute: "Everis",
            institute_logo: CompanyImg.everis,
            city: "Glasgow",
            country: "United Kingdom",
            date_start: "Feb 2019",
            date_end: "Jan 2020",
            date_total: "1yr",
            id:"everis",
            intro: "IT Consultant for ScottishPower client within an agile team. Designed new web applications, APIs and services to support the modernisation of the client's web solution, including a complete ecosystem to handle web notification through their websites.",
            badges: [{name: 'Java', color: 'info'}, {name: 'ReactJs', color: 'info'},
                {name: 'Spring', color: 'light'}, {name: 'MyBatis', color: 'light'},
                {name: 'Kerberos', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li>Worked in an Agile team with daily meeting and goal update</li>
                    <li>Managed app environment using JBoss and Database using SQLServer</li>
                    <li className="plvl-1">
                        <p><strong>Tech transition</strong> and modernisation</p>
                        <ul>
                            <li>
                                <p>Migrated existing website (made in C#.Net asp) to PWA norms:</p>
                                <ul>
                                    <li>Offline mode, fast response & cookies -> 100 score on Lighthouse</li>
                                    <li>Engagement with push notifications and custom home-screen installation</li>
                                </ul>
                            </li>
                            <li>Redesign .Net prototypes using Java and Spring to follow new Iberdrola policies</li>
                        </ul>
                    </li>
                    <li className="plvl-1">
                        <p><strong>Web Notification ecosystem</strong>: designed, developed and successfully deployed
                        </p>
                        <ul>
                            <li>
                                <p>PushNotification Hub API</p>
                                <ul className="ul-limit-info">
                                    <li>API secured using WSO2 and api_key</li>
                                    <li className="ul-opt-info">
                                        <p>Allow external application to register and manage their rights</p>
                                        <ul>
                                            <li>Create Notification channels</li>
                                            <li>Handle events scripts and end-users' subscription</li>
                                            <li>Handle user engagement and notification design</li>
                                        </ul>
                                    </li>
                                    <li>Trigger on demand push notifications to end-users for any browser</li>
                                    <li>Manage subscriptions for all the different channel within our websites</li>
                                    <li>Handle delayed notifications and planned event</li>
                                    <li>Automatization of the events triggered by third party services</li>
                                </ul>
                            </li>
                            <li className="ul-opt-info">
                                <p>Web package with API utilities and JS configuration</p>
                                <ul>
                                    <li>generic solution import-to-go for any .Net corporate website</li>
                                    <li>API SDK with logic and implementation</li>
                                    <li>ServiceWorker.js configuration and JS script for the front-end</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="plvl-1">
                        <p><strong>Internal Business Dashboard</strong> to manage company's web notification data</p>
                        <ul>
                            <li>First developed C# .net prototypes before the company tech transition</li>
                            <li>Fully designed, developed and successfully deployed the final version in Java</li>
                            <li className="plvl-2">
                                <p>Backend API: using SpringBoot & MyBatis</p>
                                <ul>
                                    <li>Secured using Spring-Security token</li>
                                    <li className="ul-opt-info">
                                        <p>User management using Corporate account with Kerberos</p>
                                        <ul>
                                            <li>Integration of Kerberos active directory and Spnego on
                                                Spring-Security
                                            </li>
                                            <li>Manage role and right for each users at the application level
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Interact with PushNotification Hub API to handle dashboard UI functionality</li>
                                    <li className="ul-opt-info">
                                        <p>Manage scheduled data Lookup to trigger events</p>
                                        <ul>
                                            <li>Generic script configuration created by users saved in DB</li>
                                            <li>Runner which execute script at the desired time interval</li>
                                            <li>Trigger API, web notification, email event depending on the data result</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="plvl-2">
                                <p>Web management Dashboard: made in ReactJs</p>
                                <ul>
                                    <li>Secured with Login page and token storage</li>
                                    <li>Administrative panels for user and third party apps management</li>
                                    <li className="ul-opt-info">
                                        <p>Interact with PushNotification Hub API with dedicated UIs</p>
                                        <ul>
                                            <li>Creates reports using notification data</li>
                                            <li>Manage external apps right such as notification channels, api_keys</li>
                                            <li>Manage delayed notification and third party events</li>
                                        </ul>
                                    </li>
                                    <li className="ul-opt-info">
                                        <p>Data Lookup editor using service connector preview</p>
                                        <ul>
                                            <li>Create a script configuration using Target - Action - Notification design</li>
                                            <li>Handle API, FTP, DB connection as target with connection preview such as IDEs</li>
                                            <li>Handle SQL script & procedures and any API request type with data preview on success call</li>
                                            <li>Web Notification editor with the result data as usable parameters</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Supervision and mentor of an intern for the development of chatbots on NodeJs with IBM Watson</li>
                </ul>
                <p className="plvl">➔ Java, Spring, MyBatis, Spring-Security & Kerberos, C# .Net asp</p>
                <p className="plvl">➔ ReactJs, PWA, Web Notification</p>
                <p className="plvl">➔ SQLServer, OracleSQL, JBoss, WSO2</p>
                <p className="plvl">➔ Design solution, API & project documentation, Mentor of interns</p>
            </div>
        },
        {
            title: "Software Developer",
            institute: "Linnworks",
            institute_logo: CompanyImg.linnworks,
            city: "Chichester",
            country: "United Kingdom",
            date_start: "Jan 2018",
            date_end: "Nov 2018",
            date_total: "10mos",
            id:"linnworks",
            intro: "Part of a team who promotes customer-centric approach. In charge of carrying out multiple projects to expand the core features of the software to meet the specific customers' needs, as well as integrating third party APIs and supporting our public API for third-party developers.",
            badges: [{name: '.Net', color: 'info'}, {name: 'Angular', color: 'info'},
                {name: 'APIs', color: 'light'}, {name: 'E-commerce', color: 'light'},
                {name: 'Integration', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li className="plvl-1">
                        <p><strong>Customization department</strong></p>
                        <ul>
                            <li>
                                <p>Worked closely with customers:</p>
                                <ul>
                                    <li>Define specs with customers by answering their needs, in charge of billing estimation</li>
                                    <li>Decision making & project responsibility</li>
                                    <li>Development and testing</li>
                                    <li>Support of the delivered projects</li>
                                </ul>
                            </li>
                            <li>
                                <p>Embedded functionality for specific customers</p>
                                <ul>
                                    <li>Complex SQL scripts for customized reports</li>
                                    <li>Use of internal and external APIs</li>
                                    <li className="ul-opt-info">
                                        <p>C# macro triggered by specified event</p>
                                        <ul>
                                            <li>Use of Linnworks internal API & SDKs</li>
                                            <li>Use of FTP / Emails / Dropbox / customer APIs</li>
                                            <li>Import/Export CSV, XML, JSON</li>
                                            <li>Manage customers third-party stock & shipping</li>
                                        </ul>
                                    </li>
                                    <li className="ul-opt-info">
                                        <p>AngularJs application embedded in Linnworks</p>
                                        <ul>
                                            <li>Barcode reader with automatic order status change for warehouses</li>
                                            <li>Data analysis for stock & sells analytics</li>
                                            <li>Tracking seller productivity</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="ul-opt-info">
                                <p>API Integration for Global-E</p>
                                <ul>
                                    <li>C# .Net application to create a bridge between Global-E API and Linnworks API</li>
                                    <li>Manage sessions with oauth2</li>
                                    <li>Manage Manifest & request Label when an order is purchased</li>
                                </ul>
                            </li>
                            <li>Developed Magento shipping integration within Linnworks</li>
                        </ul>
                    </li>
                    <li className="plvl-1"><strong>API Training</strong>: Answer technical problems met by third party
                        developers
                    </li>
                    <li className="plvl-1">
                        <p><strong>Internal Projects</strong>: I proposed multiple projects to help the team</p>
                        <ul>
                            <li className="plvl-2">
                                <p>Macro Parameters app used by hundreds of clients</p>
                                <ul>
                                    <li>Angular application embedded in Linnworks software</li>
                                    <li className="ul-opt-info">
                                        <p>Modular and generic UI to create parameters forms</p>
                                        <ul>
                                            <li>Admin can extends UI components by adding values, objects and arrays</li>
                                            <li>Form templates can be created withing the UI and reused</li>
                                            <li>Unlimited forms' deep complexity using adaptable screen editor</li>
                                        </ul>
                                    </li>
                                    <li>Parameters are serialized in JSON and saved using FTP then retrieve during macro execution
                                    </li>
                                </ul>
                            </li>
                            <li className="plvl-2">
                                <p>Jira & TimeDoctor Dashboard for team managers</p>
                                <ul>
                                    <li className="ul-opt-info">
                                        <p>Backend: C# .Net with API integration</p>
                                        <ul>
                                            <li>Jira API with AtlassianSDK; TimeDoctor API with oauth2</li>
                                            <li>compile users’ data to create reports and charts</li>
                                        </ul>
                                    </li>
                                    <li className="ul-opt-info">
                                        <p>Frontend: Angular & Bootstrap & Chart.js</p>
                                        <ul>
                                            <li>Authentication process for both API</li>
                                            <li>Fully designed the UI to improve manager experience</li>
                                            <li>Optimize chart's data rendering</li>
                                            <li>Different screen layout design for full screen team presentation purpose</li>
                                            <li>
                                                <p>Multiple charts (+10) to show stats along users’ data</p>
                                                <ul>
                                                    <li>Ticket per type/users</li>
                                                    <li>Productivity</li>
                                                    <li>Annual workload & goal</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <p className="plvl">➔ C#, .Net, MySQL, APIs, Jira</p>
                <p className="plvl">➔ Angular, HTML, CSS, Bootstrap, Chart.js</p>
                <p className="plvl">➔ E-commerce, project management, customer billing</p>
            </div>
        },
        {
            title: "Teacher assistant for JavaEE class",
            institute: "Code Academy",
            institute_logo: CompanyImg.codingac,
            city: "Paris",
            country: "France",
            date_start: "Sep 2017",
            date_end: "Dec 2017",
            date_total: "4mos",
            id:"coacademy",
            intro: "Supervision of 13 students in a JavaEE training program for Capgemini.",
            badges: [{name: 'JavaEE', color: 'info'}, {name: 'Teaching ', color: 'info'}, {
                name: 'communication',
                color: 'light'
            }],
            details: <div>
                <ul className="p-br-2">
                    <li>
                        <p>Assist students in their daily projects</p>
                        <ul>
                            <li>C exercises</li>
                            <li>Build web pages in HTML5/CSS & JavaScript with jQuery</li>
                            <li>Java servlets</li>
                            <li>Spring & JSP</li>
                            <li>Spring MVC & Hibernate with MongoDB</li>
                            <li>Angular2</li>
                        </ul>
                    </li>
                    <li>Correction of projects and organization of tutorial</li>
                    <li>Manage social trouble such as a team manager</li>
                    <li>Personal follow-up</li>
                </ul>
                <p className="plvl">➔ Teaching (make languages concept easier)</p>
                <p className="plvl">➔ Communication, build tutorial</p>
            </div>
        },
        {
            title: "Intern Full-Stack Java Developer",
            institute: "Formaltis",
            institute_logo: CompanyImg.formaltis,
            city: "Bordeaux",
            country: "France",
            date_start: "Apr 2016",
            date_end: "Aug 2016",
            date_total: "5mos",
            id:"formaltis",
            intro: "Worked in an agile environment as a FullStack developer within a dynamic startup. Conception and development of a Human Resources web application to manage training center in France.",
            badges: [{name: 'Java', color: 'info'}, {name: 'AngularJs', color: 'info'},
                {name: 'Spring', color: 'light'}, {name: 'Hibernate - JPA', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li>
                        <p>Web application on top of JHipster developed from scratch within a small team</p>
                        <ul>
                            <li className="plvl-2">
                                <p><strong>Backend</strong>: JEE, Spring Boot (MVC, RestAPI), Hibernate</p>
                                <ul>
                                    <li>Design rest APIs and services using SOLID</li>
                                    <li>Design DB schemes</li>
                                    <li>Installation and usage of ElasticSearch</li>
                                </ul>
                            </li>
                            <li className="plvl-2">
                                <p><strong>Frontend</strong>: AngularJs, HTML/CSS with bootstrap</p>
                                <ul>
                                    <li>Design of web pages</li>
                                    <li>Develop internal API sdk</li>
                                    <li>Custom components calendar, modals</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Prototype for a new project: a wine trading website</p>
                        <ul>
                            <li>Web prototype using AngularJS to present it to investors</li>
                        </ul>
                    </li>
                    <li>
                        <p>Team focused work using the Agile method</p>
                        <ul>
                            <li>Daily morning meeting: what has been done / going to be done / troubles</li>
                            <li>Tackle fast delivery on weekly rush basis</li>
                        </ul>
                    </li>
                </ul>

                <p className="plvl">➔ JEE, Spring, Hibernate, JPA, ElasticSearch, SQL</p>
                <p className="plvl">➔ AngularJS, HTML, CSS</p>
            </div>
        },
        {
            title: "Software Developer - mission",
            institute: "1-ONE",
            institute_logo: CompanyImg.one,
            city: "Bordeaux",
            country: "France",
            date_start: "Dec 2015",
            date_end: "Mar 2016",
            date_total: "5mos",
            id:"1one1",
            intro: "Part-time contract with 1-ONE, i have developed accessibility functionality through the main software to improve exchange channel between customers and our team.",
            badges: [{name: 'Java', color: 'info'}, {name: 'SQL', color: 'info'},
                {name: 'Design Patterns', color: 'light'}, {name: 'Scripting', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li>
                        <p>Creation of a data import functionality to improve user experience within 1-ONE software</p>
                        <ul>
                            <li>Web module with UI allowing the customer to import required data</li>
                            <li>Resolved huge Maven dependencies issues due to internal libraries</li>
                        </ul>
                    </li>
                    <li className="ul-opt-info">
                        <p>Creation of Talend scripts for many kind of data</p>
                        <ul>
                            <li>Parse CSV files and retrieves data</li>
                            <li>Check for errors and correct them (type, forbidden character)</li>
                            <li>Manipulate data in remote Database</li>
                        </ul>
                    </li>
                    <li>
                        <p>Creation of a Talend script manager application</p>
                        <ul>
                            <li className="ul-opt-info">
                                <p>Generate runnable from Talend script for 1-ONE</p>
                                <ul>
                                    <li>Open .zip files and parse Talend files</li>
                                    <li>Generate a Java launcher & logger files (use of abstraction pattern)</li>
                                    <li>Generate a jar which launch the script as a Java app</li>
                                </ul>
                            </li>
                            <li className="ul-opt-info">
                                <p>Run Talend script within 1-ONE</p>
                                <ul>
                                    <li>Creation of a module in 1-ONE which run a specific script when a data is
                                        uploaded by a customer
                                    </li>
                                    <li>Launches specific .jar script (imported) with CSV file as input</li>
                                    <li>Create a logger file, it will be read by the 1-ONE module</li>
                                </ul>
                            </li>
                            <li>Display the result and potential errors in live to the customer</li>
                        </ul>
                    </li>
                </ul>

                <p className="plvl">➔ Java, SQL, Maven</p>
                <p className="plvl">➔ Design Patterns, Talend, Scripting, Netbeans</p>
            </div>
        },
        {
            title: "Intern Software Developer",
            institute: "1-ONE",
            institute_logo: CompanyImg.one,
            city: "Bordeaux",
            country: "France",
            date_start: "Sep 2014",
            date_end: "Jan 2015",
            date_total: "5mos",
            id:"1one2",
            intro: "Conception and development of an API & mobile solution to answer a mobility problematic made by the clients of 1-ONE software.",
            badges: [{name: 'Java', color: 'info'}, {name: 'AndroidAPK', color: 'info'},
                {name: 'Spring', color: 'light'}, {name: 'Hibernate', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li className="ul-opt-info">
                        <p>Conception of a REST API using Spring</p>
                        <ul>
                            <li>Using SpringMVC and SpringSecurity</li>
                            <li>Hibernate for data layer</li>
                            <li>Integration of the API in 1-ONE software</li>
                        </ul>
                    </li>
                    <li>
                        <p>Development of an Android app (prototype + alpha)</p>
                        <ul>
                            <li>Consume the RestAPI created</li>
                            <li>Offer some of the 1-ONE software functionality through UI</li>
                            <li>UI styling and testing</li>
                            <li>Offline mode with auto update</li>
                        </ul>
                    </li>
                    <li>
                        <p>Architecture and decision making</p>
                        <ul>
                            <li>Project directed by myself with the supervision of a mentor</li>
                            <li>Bring solutions and idea on how to resolve problematics</li>
                            <li>Self-learner on Java and Spring frameworks</li>
                            <li>Implementation of design patterns and security good practices</li>
                        </ul>
                    </li>
                </ul>

                <p className="plvl">➔ Java, Spring, Hibernate</p>
                <p className="plvl">➔ Android APK, JSON, APIs</p>
            </div>
        },
        {
            title: "Intern Software Developer",
            institute: "Sogeti",
            institute_logo: CompanyImg.sogeti,
            city: "Bordeaux",
            country: "France",
            date_start: "July 2013",
            date_end: "Dec 2013",
            date_total: "5mos",
            id:"sogeti",
            intro: "First internship done at Sogeti, affiliate of Capgemini. Participate in A/B testing campaign for CDiscount and created an automated test tool using Selenium.",
            badges: [{name: 'C#', color: 'info'}, {name: 'Selenium', color: 'info'}, {
                name: 'Web Testing',
                color: 'light'
            }],
            details: <div>
                <ul className="p-br-2">
                    <li>
                        <p>Creation of a C# software which can make automatic test on a web page</p>
                        <ul>
                            <li>interpret json files (contain actions) to create a script and execute it</li>
                            <li>simulate human actions on a web page (Selenium)</li>
                            <li>API call to test CDiscount API</li>
                        </ul>
                    </li>
                    <li>
                        <p>Web testing for CDiscount with detailed report on Mantis</p>
                        <ul>
                            <li>Methodology and team working</li>
                            <li>Good practices for user interface and user engagement</li>
                        </ul>
                    </li>
                </ul>
                <p className="plvl">➔ C#, Web Testing, Selenium</p>
                <p className="plvl">➔ Mantis, Admin Tools, Documentation, A/B Testing campaign</p>
            </div>
        }
    ];

export default Enterprises;