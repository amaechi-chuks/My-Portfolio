import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import coverImage from './Components/~reusables/assets/images/background-image.jpeg';
import ContextProvider from './Provider';
import Spinner from './Components/~reusables/components/Spinner';
import Footer from './Components/~reusables/components/Footer';

const AboutPage = React.lazy(() => import('./Components/views/About/AboutPage'));
const LandingPage = React.lazy(() => import('./Components/views/LandingPage/LandingPage'));

const MainArea = styled.div`
background: url(${coverImage}) top center/cover no-repeat #bababa;
width: 100vw;
  min-height: 100vh;
  position: relative;
`;
function App() {
  return (
    <Router>
      <React.Suspense fallback={<Spinner />}>
        <ContextProvider>
          <MainArea>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
            <Footer />
          </MainArea>
        </ContextProvider>
      </React.Suspense>
    </Router>

  );
}

export default App;
