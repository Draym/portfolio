import {CompanyImg} from "../assets/img/images";
import React from "react";

const Enterprises =
    [
        {
            title: "Solution Architect",
            institute: "Everis",
            institute_logo: CompanyImg.everis,
            city: "Glasgow",
            country: "United Kingdom",
            date_start: "Feb 2019",
            date_end: "Jan 2020",
            date_total: "1yr",
            intro: "IT Consultant for ScottishPower client within an agile team. Designed new applications, API and services to support the modernisation of the client's web solution, including a complete ecosystem to handle web notification through our websites.",
            badges: [{name: 'Java', color: 'info'}, {name: 'ReactJs', color: 'info'},
                {name: 'Spring', color: 'light'}, {name: 'MyBatis', color: 'light'},
                {name: 'Kerberos', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li>Agile team with daily meeting and goal update</li>
                    <li>Manage DEV environment using JBoss</li>
                    <li className="plvl-1">
                        <p><strong>Tech transition</strong> and modernisation</p>
                        <ul>
                            <li>
                                <p>Migrate existing website (made in C#.Net asp) to PWA norms:</p>
                                <ul>
                                    <li>Offline mode, fast respond & cookies</li>
                                    <li>Engagement with push notifications and custom installation</li>
                                </ul>
                            </li>
                            <li>Redesign .Net prototype using Java and Spring to follow new Iberdrola policies</li>
                        </ul>
                    </li>
                    <li className="plvl-1">
                        <p><strong>Web Notification ecosystem</strong></p>
                        <ul>
                            <li>
                                <p>PushNotification Hub API</p>
                                <ul className="ul-limit-info">
                                    <li>API secured using WSO2 and api_key</li>
                                    <li className="ul-opt-info">
                                        <p>Allow external app to register and manage their rights</p>
                                        <ul>
                                            <li>Event scripts managed for each apps</li>
                                            <li>Notification channels created for each apps</li>
                                            <li>Manage end-users subscription for each apps</li>
                                            <li>Each end-user are associated to a channel, a category and an app</li>
                                        </ul>
                                    </li>
                                    <li>Trigger on demand push notifications to end-users</li>
                                    <li>Manage subscriptions for all the different channel within our websites</li>
                                    <li>Manage delayed notifications and planned event</li>
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
                        <p><strong>Internal APPs</strong> for the business team</p>
                        <ul>
                            <li>
                                <p>Internal dashboard to manage company's web notification data</p>
                                <ul>
                                    <li className="plvl-2">
                                        <p>Dashboard API: using Spring</p>
                                        <ul>
                                            <li>API secured using Spring-Security token</li>
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
                                            <li className="ul-opt-info">
                                                <p>Interact with PushNotification Hub API</p>
                                                <ul>
                                                    <li>Creates reports using notification data</li>
                                                    <li>Manage external apps right such as notification channels</li>
                                                    <li>Manage delayed notification and third party events</li>
                                                </ul>
                                            </li>
                                            <li className="ul-opt-info">
                                                TODO TODO TODO
                                                <p>Manage scheduled data's Lookup to trigger events</p>
                                                <ul>
                                                    <li></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="plvl-2">
                                        TODO TODO TODO
                                        <p>Web Dashboard: made in ReactJs</p>
                                        <ul>
                                            <li>Web App secured with Login page and token management</li>
                                            <li>Present multiple graphics related to the push notification functionality
                                                destined to the
                                                business team
                                            </li>
                                            <li>Admin panel & user management</li>
                                            <li>Automatization of events due to alerts</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="plvl">➔ Java, Spring, MyBatis, Spring-Security & Kerberos, C# .Net asp</p>
                <p className="plvl">➔ ReactJs, PWA, Web Notification</p>
                <p className="plvl">➔ SQLServer, OracleSQL, JBoss, WSO2</p>
                <p className="plvl">➔ Design solution, API & project documentation</p>
            </div>
        },
        {
            title: "Developer C#.Net & Angular",
            institute: "Linnworks",
            institute_logo: CompanyImg.linnworks,
            city: "Chichester",
            country: "United Kingdom",
            date_start: "Jan 2018",
            date_end: "Nov 2019",
            date_total: "11mos",
            intro: "Part of a team who promotes customer-centric approach. In charge of carrying out multiple projects to expand the core features of the software to meet the specific needs of customers, as well as supporting the API for third-party developers.",
            badges: [{name: '.Net', color: 'info'}, {name: 'Angular', color: 'info'},
                {name: 'APIs', color: 'light'}, {name: 'E-commerce', color: 'light'},
                {name: 'Integration', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li className="plvl-1">
                        <p><strong>Customization department</strong></p>
                        <ul>
                            <li>
                                <p>Worked in the full project life cycle:</p>
                                <ul>
                                    <li>Define specs with customers, answer their needs</li>
                                    <li>Development and testing</li>
                                    <li>Support of the delivered projects</li>
                                </ul>
                            </li>
                            <li>
                                <p>Additional embedded functionality for specific customers</p>
                                <ul>
                                    <li>Complex SQL scripts for customized reports</li>
                                    <li>Use of internal and external APIs</li>
                                    <li className="ul-opt-info">
                                        <p>C# macro triggered by specified event</p>
                                        <ul>
                                            <li>Use of Linnworks internal API</li>
                                            <li>Use of FTP / Emails / Dropbox / customer API</li>
                                            <li>Import/Export CSV, XML, JSON</li>
                                            <li>Modify Linnworks entities (products, orders…)</li>
                                            <li>Manage customers third party stock</li>
                                        </ul>
                                    </li>
                                    <li className="ul-opt-info">
                                        <p>AngularJs application embedded in Linnworks</p>
                                        <ul>
                                            <li>Barcode reader with automatic order status change</li>
                                            <li>Data listing</li>
                                            <li>Team productivity graph: Chart.js</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="ul-opt-info">
                                <p>API Integration for Global-E</p>
                                <ul>
                                    <li>C# .Net application to create a bridge between Global-E API and Linnworks
                                        API
                                    </li>
                                    <li>Manage sessions with oauth2</li>
                                    <li>Manage Manifest & request Label when an order is purchased</li>
                                </ul>
                            </li>
                            <li>Magento shipping integration</li>
                        </ul>
                    </li>
                    <li className="plvl-1"><strong>API Support</strong>: Answer technical troubles met by third party
                        developers
                    </li>
                    <li className="plvl-1">
                        <p><strong>Internal Projects</strong>: I proposed multiple projects to help the team</p>
                        <ul>
                            <li>
                                <p>Macro Parameters: Angular / Bootstrap</p>
                                <ul>
                                    <li>Web application embedded in Linnworks software</li>
                                    <li className="ul-opt-info">
                                        <p>Modular and generic UI to create forms</p>
                                        <ul>
                                            <li>Admin can extends UI components by adding values, objects and arrays
                                            </li>
                                            <li>Form templates can be created withing the UI and reused</li>
                                            <li>User will then fill the generated forms</li>
                                        </ul>
                                    </li>
                                    <li>Parameters are transformed in JSON and saved on a private FTP
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>Jira & TimeDoctor Dashboard</p>
                                <ul>
                                    <li className="ul-opt-info">
                                        <p>Backend: C# .Net with API integration</p>
                                        <ul>
                                            <li>Jira API with AtlassianSDK; TimeDoctor API with oauth2</li>
                                            <li>Get, parse and compile users’ data</li>
                                        </ul>
                                    </li>
                                    <li className="ul-opt-info">
                                        <p>Frontend: Angular & Bootstrap & Chart.js</p>
                                        <ul>
                                            <li>Authentication process for both API</li>
                                            <li>Manage the users to show on the charts</li>
                                            <li>
                                                <p>Multiple charts (+10) to show stats along users’ data</p>
                                                <ul>
                                                    <li>Ticket per type/users</li>
                                                    <li>Productivity</li>
                                                    <li>Annual work/goal</li>
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
                <p className="plvl">➔ E-commerce, project manager, customer billing</p>
            </div>
        },
        {
            title: "Intern FullStack Java Developer",
            institute: "Formaltis",
            institute_logo: CompanyImg.formaltis,
            city: "Bordeaux",
            country: "France",
            date_start: "Apr 2016",
            date_end: "Aug 2016",
            date_total: "5mos",
            intro: "Worked in an agile environment as a FullStack developer within a dynamic startup. Conception and development of a Human Resources web application to manage training center in France.",
            badges: [{name: 'Java', color: 'info'}, {name: 'AngularJs', color: 'info'},
                {name: 'Spring', color: 'light'}, {name: 'Hibernate - JPA', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li>
                        <p>Web application on top of JHipster</p>
                        <ul>
                            <li className="plvl-2">
                                <p><strong>Backend</strong>: JEE, Spring Boot (MVC, RestAPI) + Hibernate</p>
                                <ul>
                                    <li>Entities and DAO (Hibernate binding: JPA)</li>
                                    <li>Controllers (API routes) & Services (business code)</li>
                                    <li>Resolve Database problematics while doing DB schemes</li>
                                    <li>Installation and usage of ElasticSearch</li>
                                </ul>
                            </li>
                            <li className="plvl-2">
                                <p><strong>Frontend</strong>: AngularJs, HTML/CSS with bootstrap</p>
                                <ul>
                                    <li>New web pages (listing data, user input…)</li>
                                    <li>Angular services for each entity (API, tools)</li>
                                    <li>Custom components calendar / modals</li>
                                    <li>Design with bootstrap and CSS without web designer</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Prototype for a new project: a wine trading website</p>
                        <ul>
                            <li>Web prototype using AngularJS</li>
                            <li>Bring idea to solve problematics</li>
                        </ul>
                    </li>
                    <li>
                        <p>Team focused work using the Agile method</p>
                        <ul>
                            <li>Daily morning meeting: what has been done / going to be done / troubles</li>
                            <li>Weekly rush</li>
                        </ul>
                    </li>
                </ul>

                <p className="plvl">➔ JEE, Spring, Hibernate, JPA, ElasticSearch, SQL</p>
                <p className="plvl">➔ AngularJS, HTML, CSS</p>
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
            intro: "Supervision of 13 students in a JavaEE training program for Capgemini.",
            badges: [{name: 'Java', color: 'info'}, {name: 'Teaching ', color: 'info'}, {
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
                <p className="plvl">➔ communication, build tutorial</p>
            </div>
        },
        {
            title: "Java Developer",
            institute: "1-ONE",
            institute_logo: CompanyImg.one,
            city: "Bordeaux",
            country: "France",
            date_start: "Dec 2015",
            date_end: "Mar 2016",
            date_total: "5mos",
            intro: "Part-time contract with 1-ONE, i have developed accessibility functionality through the main software to improve exchange channel between customers and our team.",
            badges: [{name: 'Java', color: 'info'}, {name: 'SQL', color: 'info'},
                {name: 'Design Patterns', color: 'light'}, {name: 'Scripting', color: 'light'}],
            details: <div>
                <ul className="p-br-2">
                    <li>
                        <p>Creation of a data import functionality to improve user experience within 1-ONE software</p>
                        <ul>
                            <li>Web module with UI allowing the customer to import required data</li>
                            <li>Resolving huge Maven dependencies issues due to internal libraries</li>
                        </ul>
                    </li>
                    <li className="ul-opt-info">
                        <p>Creation of Talend scripts for each kind of data</p>
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
                                    <li>Generate a Java launcher/ logger files (use of abstraction pattern)</li>
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
            title: "Intern Java Developer",
            institute: "1-ONE",
            institute_logo: CompanyImg.one,
            city: "Bordeaux",
            country: "France",
            date_start: "Sep 2014",
            date_end: "Jan 2015",
            date_total: "5mos",
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
                            <li>Self-learning on Java and Spring frameworks</li>
                            <li>Implementation of design patterns and security good practices</li>
                        </ul>
                    </li>
                </ul>

                <p className="plvl">➔ Java, Spring, Hibernate</p>
                <p className="plvl">➔ Android APK, JSON, APIs</p>
            </div>
        },
        {
            title: "Intern Developer C# and tester",
            institute: "Sogeti",
            institute_logo: CompanyImg.sogeti,
            city: "Bordeaux",
            country: "France",
            date_start: "July 2013",
            date_end: "Dec 2013",
            date_total: "5mos",
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