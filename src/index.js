import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import { Home, About, Contacts, Errors } from './Pages'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        Home
                    </Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item" key={1}>
                        <Link to="#/About" className="navbar-brand">
                            About
                    </Link>
                    </li>
                    <li className="nav-item" key={1}>
                        <Link to="#/contact" className="navbar-brand">
                            Contact
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


// const HomePage = () => (
//     <div classNameName="jumbotron">
//         <h1 classNameName="display-3">Home page</h1>
//     </div>
// );

// const AboutPage = () => (
//     <div classNameName="jumbotron">
//         <h1 classNameName="display-3">About page</h1>
//     </div>
// );

// const ContatcPage = () => (
//     <div classNameName="jumbotron">
//         <h1 classNameName="display-3">Contact page</h1>
//     </div>
// );

// const NoMatch = ({ location }) => (
//     <div>
//         <h3>
//             No match for <code>{location.pathname}</code>
//         </h3>
//     </div>
// );

ReactDOM.render(
    <HashRouter>
        <div>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contacts} />
                    <Route component={Errors} />
                </Switch>
            </div>
        </div>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();