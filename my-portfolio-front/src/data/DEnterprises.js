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
            intro: "IT Consultant for ScottishPower client. Designed new application and services to support the modernisation of the client's web solution and took part in the update of the main website.",
            badges: [{name: 'Java', color: 'info'}, {name: 'ReactJs', color: 'info'},
                {name: 'Spring', color: 'light'}, {name: 'MyBatis', color: 'light'},
                {name: 'Kerberos', color: 'light'}],
            details: <div>
                <p className="p-br">I have directed, designed and developed the following projects.</p>
                <p className="plvl">- Migrate existing website (made in C#.Net asp) to PWA norms:</p>
                <ul className="p-br ul-circle">
                    <li>
                        Offline mode, fast respond & cookies
                    </li>
                    <li>
                        Engagement with push notifications and custom installation
                    </li>
                </ul>
                <p className="plvl">- Creation of multiple RestAPI in Java using SpringBoot</p>
                <ul className="p-br">
                    <li>
                        <p className="plvl-1">PushNotification Hub API</p>
                        <ul>
                            <li>Manage subscriptions for all the different channel within our websites</li>
                            <li>Trigger push notifications to users registered to specific channels</li>
                            <li>Manage the automatization of events due to alerts</li>
                        </ul>
                    </li>
                    <li>
                        <p className="plvl-1">NotificationDashboard API: internal dashboard to manage push notification
                            data</p>
                        <ul>
                            <li>Business and administrative panel</li>
                            <li>Pull data from PushNotification Hub API and create reports</li>
                        </ul>
                    </li>
                </ul>
                <p className="plvl p-br">- Manage API security using Spring-Security and Kerberos + Spnego</p>
                <p className="plvl">- Creation of internal application & dashboards for the business team</p>
                <ul className="p-br-2">
                    <li>
                        <p className="plvl-1">Notification Dashboard: made in ReactJs</p>
                        <ul>
                            <li>Present multiple graphics related to the push notification functionality destined to the
                                business team
                            </li>
                            <li>Admin panel & user management</li>
                            <li>Manage the automatization of events due to alerts</li>
                        </ul>
                    </li>
                </ul>
                <p className="plvl">➔ Java, Spring, MyBatis, Spring-Security & Kerberos, C# .Net asp, APIs</p>
                <p className="plvl">➔ SQLServer, OracleSQL</p>
                <p className="plvl">➔ ReactJs, PWA, Web Notification</p>
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
            date_end: "Oct 2019",
            date_total: "10mos",
            intro: "In charge of carrying out projects to expand the core features of the software to meet the specific needs of customers, as well as supporting the API for third-party developers.",
            badges: [{name: '.Net', color: 'info'}, {name: 'Angular', color: 'info'},
                {name: 'APIs', color: 'light'}, {name: 'E-commerce', color: 'light'},
                {name: 'Integration', color: 'light'}],
            details: <div>
                <p className="plvl">I personally worked on :</p>
                <p className="plvl">- SQL script to create customized reports</p>
                <p className="plvl">- C# .Net application which will work as macro through the Linnworks software</p>
                <p className="plvl">- C# .Net asp + AngularJS web application</p>
                <p className="plvl">- Shipping integration (Magento, Global-E ...) for Linnworks</p>
                <p className="plvl">- SQL script to create customized reports</p>
                <p className="plvl">- SQL script to create customized reports</p>
                <p className="plvl">- Create internal applications with usage of public API such as TimeDoctor & Jira</p>
                <p className="plvl p-br-2"></p>

                <p className="plvl">➔ C#, .Net, MySQL, APIs, Jira</p>
                <p className="plvl">➔ Angular, HTML, CSS</p>
                <p className="plvl">➔ E-commerce, project manager, customer billing</p>
            </div>
        },
        {
            title: "FullStack Java Developer",
            institute: "Formaltis",
            institute_logo: CompanyImg.formaltis,
            city: "Bordeaux",
            country: "France",
            date_start: "Apr 2016",
            date_end: "Aug 2016",
            date_total: "5mos",
            intro: "Conception and development of a HR software package to manage training center. Worked in an agile context as a FullStack developer.",
            badges: [{name: 'Java', color: 'info'}, {name: 'AngularJs', color: 'info'},
                {name: 'Spring', color: 'light'}, {name: 'Hibernate - JPA', color: 'light'}],
            details: <div>
                <p className="plvl">- Backend using JEE, Spring Boot (MVC, API RESTFull) + Hibernate, resolving different problematic and implement the business code.</p>
                <p className="plvl">- Front using AngularJS, HTML/CSS with Bootstrap</p>
                <p className="plvl p-br-2">- using JHipster generator with yeoman</p>

                <p className="plvl">➔ JEE, Spring, Hibernate, JPA, ElasticSearch, SQL</p>
                <p className="plvl">➔ AngularJS, HTML, CSS</p>
            </div>
        },
        {
            title: "Java Developer",
            institute: "1-ONE",
            institute_logo: CompanyImg.one,
            city: "Bordeaux",
            country: "France",
            date_start: "Sep 2014",
            date_end: "Jan 2015",
            date_total: "5mos",
            intro: "Conception and development of an api & mobile solution to answer a mobility problematic made by the clients of 1-ONE software.",
            badges: [{name: 'Java', color: 'info'}, {name: 'AndroidAPK', color: 'info'},
                {name: 'Spring', color: 'light'}, {name: 'Hibernate', color: 'light'}],
            details: <div>
                <p className="plvl">- API RESTfull using SpringMVC and SpringSecurity</p>
                <p className="plvl">- Creation of an DAO using Hibernate for data access</p>
                <p className="plvl p-br-2">- Android application which can interact with the API to offer some access to
                    1-ONE</p>

                <p className="plvl">➔ Java, Spring, Hibernate</p>
                <p className="plvl">➔ Android APK</p>
            </div>
        }
    ];

export default Enterprises;