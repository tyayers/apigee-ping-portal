import { TinaProvider, TinaCMS, useCMS, useForm, usePlugin } from 'tinacms';
import PrimarySearchAppBar from './navbar'
import SignIn from './signin'
import ApiProducts from './apis'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from '../gcp.png';

const homeData = {
  title: 'Apigee PING Developer Portal',
  tag: 'The fastest and most secure way to onboard developers.',
};

function Home() {
  const formConfig = {
    id: 'tina-tutorial-index',
    label: 'Edit Page',
    fields: [
      {
        name: 'title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'tag',
        label: 'Tag line',
        component: 'textarea',
      },
    ],
    initialValues: homeData,
    onSubmit: async () => {
      //window.alert('Saved!')
    },
  };

  // 3. Create the form
  const [editableData, form] = useForm(formConfig)

  // 4. Register it with the CMS
  usePlugin(form)

  return (
    <div>
      <Router>
        <PrimarySearchAppBar title={editableData.title}/>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/apis">
            <ApiProducts title={editableData.title} tag={editableData.tag} />
          </Route>          
          <Route path="/">
            <section className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>{editableData.title}</h1>
              <p>{editableData.tag}</p>
            </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Home;