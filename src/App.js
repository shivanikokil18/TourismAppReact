import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About/About';
import Navbar from './Navbar';
import PgNotFound from './pgnotfound';
import Contact from './Contact/Contact';
import Places from './Places/Places';
import { Route,Switch,Redirect } from 'react-router-dom';
import VisitPlace from './VisitPlace';
import PLaceDetail from './Places/PlaceDetail';
import FormDemo from './FormDemo';
import RBDemo from './RBDemo';
import Details from './Places/Details';

function App(props) {

    return (
      <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/places" component={Places} />
        {/* <Route path="/place/:slug" component={PLaceDetail} /> */}
        <Route path="/place/:slug" component={Details} />
        <Route path="/place" component={PLaceDetail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/visit" component={VisitPlace} />
        <Redirect from="/abcd" to="about" />
        <Route component={PgNotFound} />
      </Switch>
      <RBDemo />
      </div>
    );
}

export default App;
