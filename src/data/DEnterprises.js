import {CompanyImg} from "../assets/img/images";
import React from "react";

const Enterprises =
    [
        {
            title: "Software Engineer",
            institute: "Cometh",
            institute_logo: CompanyImg.cometh,
            city: "Paris",
            country: "France",
            date_start: "Mar 2022",
            date_end: "now",
            date_total: "4mon",
            id: "cometh",
            intro: "Developing Backend services in the SaaS ecosystem of Cometh.",
            badges: [{name: 'Node', color: 'primary'}, {name: 'Blockchain', color: 'primary'}, {
                name: 'Lead',
                color: 'primary'
            },
                {name: 'RestAPI', color: 'info'}, {name: 'Payment', color: 'info'},
                {name: 'Kafka', color: 'info'}],
            details: <div>
                <ul className="p-br-2">
                    <li>Develop orderbook and marketplace api for blockchain with off-chain optimization</li>
                    <li>Develop an put in production Kong Gateway to handle authentication and ApiKeys</li>
                    <li className="plvl-1">
                        <p>Develop the Customer Licenses, Billing and Payment system of our SaaS platform</p>
                        <ul>
                            <li>Integration of RevolutPay for scheduled payments</li>
                            <li>Integration of Pennylane for invoice generation and accounting</li>
                        </ul>
                    </li>
                </ul>
                <p className="plvl">➔ Typescript, Node.js, Kafka, Kong, Ethers</p>
                <p className="plvl">➔ PostgresSQL, Docker, Kubernetes, GCloud</p>
                <p className="plvl">➔ Lead projects</p>
            </div>
        },
        {
            title: "FullStack Engineer",
            institute: "RCT.ai",
            institute_logo: CompanyImg.rct,
            city: "Beijing",
            country: "China",
            date_start: "Mar 2022",
            date_end: "May 2023",
            date_total: "1.2yr",
            id: "rct",
            intro: "Working on Delysium, first cross-chain AAA game, as the Infrastructure Lead for the Web3 team. Interacting weekly with stakeholders and PMs; while developing the core web3 modules deployed on AWS with Kubernetes.",
            badges: [{name: 'Node', color: 'primary'}, {name: 'Blockchain', color: 'primary'}, {
                name: 'Lead',
                color: 'primary'
            },
                {name: 'RestAPI', color: 'info'}, {name: 'Micro-Services', color: 'info'},
                {name: 'Kafka', color: 'info'}, {name: 'Redis', color: 'info'},
                {name: 'Solidity', color: 'info'}, {name: 'Smart-Contract', color: 'info'}],
            details: <div>
                <ul className="p-br-2">
                    <li>Lead ImmutableX chain integration and chain syncer development on NodeJs</li>
                    <li>Lead Delysium SSO on NodeJs: web3 & social auth, whitelist, micro-services API keys, Redis</li>
                    <li>Infrastructure engineering of a decentralized game publishing model (DMO) including protocol
                        token, staking, player incentives and game Multiverse; orchestrated into smart-contracts and
                        micro-services
                    </li>
                    <li>Develop cross-chain NFT state listener for in-game integration using Kafka event streams</li>
                    <li>Tokens & NFT cross-chain products: marketplace, airdrop & batch transfer, metadata manager</li>
                    <li>Smart-contract development on Ethereum and Polygon chains; testing and auditing</li>
                </ul>
                <p className="plvl">➔ Typescript, Node.js, Kafka, Redis, Solidity, Ethers, Hardhat</p>
                <p className="plvl">➔ MySQL, Docker, Kubernetes, AWS</p>
                <p className="plvl">➔ Develop EVM smart-contract and deploy to testnet and mainnet</p>
                <p className="plvl">➔ Lead projects and team members</p>
            </div>
        },
        {
            title: "Software Engineer Backend",
            institute: "Stey",
            institute_logo: CompanyImg.stey,
            city: "Beijing",
            country: "China",
            date_start: "Jun 2020",
            date_end: "Mar 2022",
            date_total: "1.5yr",
            id: "stey",
            intro: "Responsible for the backend development within micro-services architectures of +20 services written in Kotlin and Scala. Use of Azure cloud, Azure CI, Kubernetes, SpringCloud and event streams with Kafka.",
            badges: [{name: 'Kotlin', color: 'primary'}, {name: 'Scala', color: 'primary'},
                {name: 'Spring', color: 'info'}, {name: 'RestAPI', color: 'info'}, {
                    name: 'Micro-Services',
                    color: 'info'
                },
                {name: 'Kubernetes', color: 'info'}, {name: 'Azure Cloud', color: 'info'},
                {name: 'Kafka', color: 'info'}, {name: 'Akka', color: 'info'},
                {name: 'SQL', color: 'info'}],
            details: <div>
                <ul className="p-br-2">
                    <li>Creation and configuration of new API modules as micro-services</li>
                    <li>Design and develop Housekeep management system using Akka message-driven principals and Kafka
                        event streams.
                    </li>
                    <li>Tencent SMS & Chat API integration</li>
                    <li>IOT third-parties APIs integration for connected rooms</li>
                    <li className="plvl-1">
                        <p>Implement digital Invoices & Contracts management</p>
                        <ul>
                            <li>Mobile payment using WeChat & Alipay APIs; transactions tracking and reporting</li>
                            <li>Legal E-signing; Automatic Billing; IOT locker; PDF generation</li>
                            <li>Kotlin first <a href="https://github.com/Draym/PDF-Flex" rel="noreferrer"
                                                target="_blank">PDF generation
                                library</a> based on generic grid design including a markdown interpreter
                            </li>
                        </ul>
                    </li>
                    <li>Migrate Hibernate JPA to Exposed, refactor services to SOLID principles</li>
                </ul>
                <p className="plvl">➔ Kotlin, Spring, Exposed, Spring-Cloud & ServiceDiscovery, SOLID principles</p>
                <p className="plvl">➔ Scala, Play, Slick, Akka, Functional programing</p>
                <p className="plvl">➔ Kubernetes, Azure Cloud, Docker, Akka, SQLServer</p>
                <p className="plvl">➔ Design an implements APIs for core business features within a micro-service
                    architecture</p>
            </div>
        },
        {
            title: "Full-Stack Developer",
            institute: "Everis",
            institute_logo: CompanyImg.everis,
            city: "Glasgow",
            country: "United Kingdom",
            date_start: "Nov 2018",
            date_end: "Jan 2020",
            date_total: "1.5yr",
            id: "everis",
            intro: "IT Consultant for ScottishPower client within an agile team. Designed new web applications, APIs and services to support the modernisation of the client's web solution, including a complete ecosystem to handle web notification through their websites.",
            badges: [{name: 'Java', color: 'primary'}, {name: 'ReactJs', color: 'primary'},
                {name: 'Spring', color: 'info'}, {name: 'RestAPI', color: 'info'}, {name: 'MyBatis', color: 'info'},
                {name: 'Kerberos', color: 'info'}],
            details: <div>
                <ul className="p-br-2">
                    <li>Worked in an Agile team with daily meeting and goals update</li>
                    <li>Managed deployment environment using JBoss and Database using SQLServer</li>
                    <li>Supervision and mentor of an intern for the development of chatbots on NodeJs with IBM Watson
                    </li>
                    <li className="plvl-1">
                        <p><strong>Web Applications</strong></p>
                        <ul>
                            <li>
                                <p>Develop internal webapp in React which displays electricity usage metrics and
                                    blackouts across the
                                    UK</p>
                            </li>
                            <li className="ul-opt-info">
                                <p>Migrated existing website (made in C#.Net asp) to PWA norms</p>
                                <ul>
                                    <li>Offline mode, fast response & cookies -> 100 score on Lighthouse</li>
                                    <li>Engagement with push notifications and custom home-screen installation</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="plvl-1">
                        <p><strong>Push-Notification ecosystem</strong>: designed, developed and successfully deployed
                        </p>
                        <ul>
                            <li>
                                <p>PushNotification Hub backend</p>
                                <ul className="ul-limit-info">
                                    <li>Trigger on demand push notifications to end-users for any browser</li>
                                    <li>Manage subscriptions for different channels within our websites</li>
                                    <li>Configure delayed notifications and planned event</li>
                                    <li>Automatize reception of events triggered by third party services</li>
                                    <li>API secured using WSO2 and api_key</li>
                                    <li className="ul-opt-info">
                                        <p>Allow external application to register and manage their rights</p>
                                        <ul>
                                            <li>Create Notification channels</li>
                                            <li>Handle events scripts and end-users' subscription</li>
                                            <li>Handle user engagement and notification design</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="ul-opt-info">
                                <p>SDK to cover APIs and JS configuration for web-notification</p>
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
                            <li>Fully designed, developed and successfully deployed the v1 using Java and React</li>
                            <li className="plvl-2">
                                <p>Backend API: using SpringBoot & MyBatis</p>
                                <ul>
                                    <li>Secured using Spring-Security JWT</li>
                                    <li className="ul-opt-info">
                                        <p>User management using Corporate account secured by Kerberos</p>
                                        <ul>
                                            <li>Integration of Kerberos active directory and Spnego on
                                                Spring-Security
                                            </li>
                                            <li>Manage role and right for each users at the application level
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Interact with the micro-service PushNotification Hub</li>
                                    <li className="ul-opt-info">
                                        <p>Automatize Data Lookup and trigger events</p>
                                        <ul>
                                            <li>Users create script configuration which are saved in DB</li>
                                            <li>Dedicated Runner which execute script into threads at given time
                                                interval
                                            </li>
                                            <li>Triggers either API, web notification or email event based on the script
                                                result
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="plvl-2">
                                <p>Web management Dashboard: made in ReactJs</p>
                                <ul>
                                    <li>Secured with Login page and JWT storage</li>
                                    <li>Administrative panels for user and third party apps management</li>
                                    <li className="ul-opt-info">
                                        <p>Configure PushNotification Hub service with dedicated UIs</p>
                                        <ul>
                                            <li>Manage planned notification stream and third party events</li>
                                            <li>Manage external app rights such as notification channels, api_keys</li>
                                            <li>Create reports using notification data</li>
                                        </ul>
                                    </li>
                                    <li className="ul-opt-info">
                                        <p>Data Lookup editor using service connector preview</p>
                                        <ul>
                                            <li>Create a script configuration using Target - Action - Notification
                                                design
                                            </li>
                                            <li>Handle API, FTP, DB connection as target with connection preview such as
                                                IDEs
                                            </li>
                                            <li>Handle SQL script & procedures and any API request type with data
                                                preview on success call
                                            </li>
                                            <li>Web Notification editor with the result data as usable parameters</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="plvl">➔ Java, Spring, MyBatis, Spring-Security & Kerberos, C# .Net asp</p>
                <p className="plvl">➔ ReactJs, PWA, Push Notification</p>
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
            date_end: "Sept 2018",
            date_total: "9mos",
            id: "linnworks",
            intro: "Develop features to tackle e-commerce & warehouse problematics. In charge of carrying out multiple projects to expand the core features of the software, as well as integrating third party APIs and supporting our public API for developers.",
            badges: [{name: '.Net', color: 'primary'}, {name: 'Angular', color: 'primary'},
                {name: 'RestAPI', color: 'info'}, {name: 'SDK', color: 'info'}, {
                    name: 'SQL',
                    color: 'info'
                }, {name: 'E-Commerce', color: 'info'}],
            details: <div>
                <ul className="p-br-2">
                    <li className="plvl-1">
                        <p><strong>Linnworks software</strong></p>
                        <ul>
                            <li>Create webapps using .Net & Angular for warehouse management</li>
                            <li className="ul-opt-info">
                                <p>Develop Shipping integration of Global-E using their third-party APIs for Linnworks
                                    marketplace</p>
                                <ul>
                                    <li>C# .Net application to create a bridge between Global-E API and Linnworks API
                                    </li>
                                    <li>Manage sessions with oauth2</li>
                                    <li>Handle Shipping, Manifest & request Label when an order is purchased</li>
                                </ul>
                            </li>
                            <li>
                                <p>Dedicated projects for customers</p>
                                <ul>
                                    <li className="ul-opt-info">
                                        <p>Close communications with customers</p>
                                        <ul>
                                            <li>Define specs with customers by highlighting their needs</li>
                                            <li>Decision making & project responsibility</li>
                                            <li>Development and testing</li>
                                            <li>Support of the delivered projects</li>
                                        </ul>
                                    </li>
                                    <li>Complex SQL scripts for customized reports</li>
                                    <li className="ul-opt-info">
                                        <p>C# Macros hosted on AWS triggered by configured events</p>
                                        <ul>
                                            <li>Manage customers warehouse & shipping</li>
                                            <li>Use of Linnworks internal API & SDKs</li>
                                            <li>Use of FTP / Emails / Dropbox / customer APIs</li>
                                            <li>Generate/Import/Export dataset</li>
                                        </ul>
                                    </li>
                                    <li className="ul-opt-info">
                                        <p>AngularJs application embedded in Linnworks</p>
                                        <ul>
                                            <li>Barcode reader with automatic Order status change for warehouses</li>
                                            <li>Data tracker and analysis of Stock & Sales analytics</li>
                                            <li>In-house sellers' productivity Tracker</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="plvl-1"><strong>Linnworks Public API</strong>: Answer technical questions met by
                        third party
                        developers
                    </li>
                    <li className="plvl-1">
                        <p><strong>Internal Projects</strong>: I proposed multiple projects to help the team</p>
                        <ul>
                            <li className="plvl-2">
                                <p>Macro Parameters webapp used by hundreds of clients</p>
                                <ul>
                                    <li>Angular application embedded in Linnworks software</li>
                                    <li className="ul-opt-info">
                                        <p>Modular and generic UI to configure Parameter forms for Linnworks Macro</p>
                                        <ul>
                                            <li>Admin can extends UI components by adding typed-values, objects and
                                                arrays
                                            </li>
                                            <li>Form templates can be created within the UI and reused</li>
                                            <li>Unlimited forms' deep complexity using adaptable screen editor</li>
                                        </ul>
                                    </li>
                                    <li>User's filled Parameters are serialized in JSON and saved using FTP then
                                        retrieved at given Macro
                                        startup
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
                                            <li>Different screen layout including full screen for team presentation
                                                meetings
                                            </li>
                                            <li>
                                                <p>Multiple charts (+10) to show metrics of users’ achievements</p>
                                                <ul>
                                                    <li>Ticket per type/users</li>
                                                    <li>Team Productivity</li>
                                                    <li>Annual workload & goals</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <p className="plvl">➔ C#, .Net, SQL, APIs, Jira</p>
                <p className="plvl">➔ Angular, HTML, CSS, Bootstrap, Chart.js</p>
                <p className="plvl">➔ E-Commerce, project management, customer billing</p>
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
            id: "coacademy",
            intro: "Supervision of 13 students in a JavaEE training program for Capgemini.",
            badges: [{name: 'JavaEE', color: 'primary'}, {name: 'Teaching ', color: 'primary'}, {
                name: 'Communication',
                color: 'info'
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
            id: "formaltis",
            intro: "Worked in an agile environment as a FullStack developer within a dynamic startup. Conception and development of a Human Resources web application to manage training center in France.",
            badges: [{name: 'Java', color: 'primary'}, {name: 'AngularJs', color: 'primary'},
                {name: 'Spring', color: 'info'}, {name: 'Hibernate - JPA', color: 'info'}, {
                    name: 'RestAPI',
                    color: 'info'
                }],
            details: <div>
                <ul className="p-br-2">
                    <li>
                        <p>Web application on top of JHipster developed from scratch within a small team</p>
                        <ul>
                            <li className="plvl-2">
                                <p><strong>Backend</strong>: JEE, Spring Boot (MVC, RestAPI), Hibernate</p>
                                <ul>
                                    <li>Design rest APIs and services using SOLID principles</li>
                                    <li>Design DB schemes and class Models</li>
                                    <li>Installation and usage of ElasticSearch</li>
                                </ul>
                            </li>
                            <li className="plvl-2">
                                <p><strong>Frontend</strong>: AngularJs, HTML/CSS with bootstrap</p>
                                <ul>
                                    <li>Design web pages</li>
                                    <li>Develop internal API SDK</li>
                                    <li>Custom components including calendar, charts, modals</li>
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
            title: "Software Developer - contract",
            institute: "1-ONE",
            institute_logo: CompanyImg.one,
            city: "Bordeaux",
            country: "France",
            date_start: "Dec 2015",
            date_end: "Mar 2016",
            date_total: "5mos",
            id: "1one1",
            intro: "Part-time contract with 1-ONE, i have developed accessibility functionalities through the main software to improve exchange channel between customers and our team.",
            badges: [{name: 'Java', color: 'primary'}, {name: 'SQL', color: 'primary'},
                {name: 'Design Patterns', color: 'info'}, {name: 'Scripting', color: 'info'}, {
                    name: 'Talend',
                    color: 'info'
                }],
            details: <div>
                <ul className="p-br-2">
                    <li>
                        <p>Develop a data import service to improve user experience within 1-ONE software</p>
                        <ul>
                            <li>Web pages allowing customers to import required data into the software</li>
                            <li>Improve UI and user journey with a proper data error handler</li>
                        </ul>
                    </li>
                    <li className="ul-opt-info">
                        <p>Creation of Talend scripts to handle users' data</p>
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
                                <p>Generate runnable scripts from Talend software</p>
                                <ul>
                                    <li>Develop a Java launcher & files logger using abstraction pattern</li>
                                    <li>Open .zip files and parse Talend files</li>
                                    <li>Transform the files into a Java executable as JAR</li>
                                </ul>
                            </li>
                            <li className="ul-opt-info">
                                <p>Run Talend script within 1-ONE</p>
                                <ul>
                                    <li>Creation of a module in 1-ONE which run a specific script when a data is
                                        uploaded by a customer
                                    </li>
                                    <li>Launches specific .jar script with CSV file as input</li>
                                    <li>Create a logger file which will be interpreted by 1-ONE</li>
                                </ul>
                            </li>
                            <li>Display the result and potential errors to the customer</li>
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
            id: "1one2",
            intro: "Conception and development of an API & mobile solution to answer a mobility problematic of 1-ONE software.",
            badges: [{name: 'Java', color: 'primary'}, {name: 'AndroidAPK', color: 'primary'},
                {name: 'Spring', color: 'info'}, {name: 'Hibernate', color: 'info'}, {name: 'RestAPI', color: 'info'}],
            details: <div>
                <ul className="p-br-2">
                    <li className="ul-opt-info">
                        <p>Conception of a REST API using Spring</p>
                        <ul>
                            <li>Using SpringMVC and SpringSecurity</li>
                            <li>Hibernate for the data layer</li>
                            <li>Integration of the mobility module in 1-ONE software</li>
                        </ul>
                    </li>
                    <li>
                        <p>Development of an Android app (prototype + alpha)</p>
                        <ul>
                            <li>Consume the mobility RestAPI</li>
                            <li>Offer some of the 1-ONE software functionality through UI</li>
                            <li>UI styling and testing</li>
                            <li>Offline mode with auto update</li>
                        </ul>
                    </li>
                    <li>
                        <p>Architecture and decision making</p>
                        <ul>
                            <li>Project directed by myself with the supervision of a mentor</li>
                            <li>Bring solutions and idea on how to tackle problematics</li>
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
            title: "Intern Software Developer",
            institute: "Sogeti",
            institute_logo: CompanyImg.sogeti,
            city: "Bordeaux",
            country: "France",
            date_start: "Jul 2013",
            date_end: "Dec 2013",
            date_total: "5mos",
            id: "sogeti",
            intro: "First internship done at Sogeti, affiliate of Capgemini. Participate in A/B testing campaign for CDiscount and create an automated test tool using Selenium.",
            badges: [{name: 'C#', color: 'primary'}, {name: 'Selenium', color: 'primary'}, {
                name: 'Web Testing',
                color: 'info'
            }],
            details: <div>
                <ul className="p-br-2">
                    <li>
                        <p>Creation of a C# software which can make automatic test on a web page</p>
                        <ul>
                            <li>Interpret json files containing actions to create a script and execute it</li>
                            <li>Simulate human actions on a web page using Selenium</li>
                            <li>Chain API calls to test CDiscount APIs</li>
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