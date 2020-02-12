import React, {Component} from 'react';
import './App.scss';
import Footer from "./views/view/Footer";
import Header from "./views/view/Header";
import Navbar from "./views/view/Navbar";
import Sections from "./views/view/Sections";

class App extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="App" id="page-top">
                <Navbar/>
                <Header id="header"/>
                <Sections/>
                <Footer/>
            </div>
        );
    }
}

export default App;
