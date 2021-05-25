import React, { useState, useEffect, Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import './css/main.css';
import Nav from './views/components/Nav/Nav';
import Footer from './views/components/Footer/Footer';
import { isAuthenticated, getToken } from './helpers/userAuth';
import { connect } from 'react-redux';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Home = React.lazy(() => import('./views/pages/home/Home'));
const Vehicles = React.lazy(() => import('./views/pages/vehicles/Vehicles'));
const Contact = React.lazy(() => import('./views/pages/contact/Contact'));
const About = React.lazy(() => import('./views/pages/aboutUs/AboutUs'));
const SingleCar = React.lazy(() => import('./views/pages/singleCar/SingleCar'));



const App = (props) => {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  useEffect(() => {
    if (props.auth.user.token) {
      setAuthenticated(isAuthenticated());
    }
    
  }, [props.auth.user.token])


  return (
    <div>
      <HashRouter>
        <Nav></Nav>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => {
              if (!authenticated) {
                return (
                  <Login {...props} />
                )
              } else {
                return (
                  <Redirect to="/"/>
                )
              }
            }} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route exact path="/rent-a-car/" name="RentHome" render={props => <Home {...props} />} />
            <Route exact path="/rent-a-car/vehicles" name="Vehicles" render={props => <Vehicles {...props} />} />
            <Route exact path="/rent-a-car/contact" name="Contact" render={props => <Contact {...props} />} />
            <Route exact path="/rent-a-car/about" name="About" render={props => <About {...props} />} />
            <Route exact path="/rent-a-car/vehicles/:vehicleId" name="SingleCar" render={props => <SingleCar {...props} />} />
            <Route path="/" name="Home" render={props => {
              if (authenticated) {
                return (
                  <TheLayout {...props} />
                )
              } else {
                return (
                  <Redirect to="/rent-a-car/"/>
                )
              }
            }} />
          </Switch>
        </React.Suspense>
        <Footer></Footer>
      </HashRouter>
    </div>

  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { })(App);
