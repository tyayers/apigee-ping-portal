import React from 'react'
import { TinaProvider, TinaCMS, useCMS, useForm, usePlugin } from 'tinacms';
import PrimarySearchAppBar from './navbar'
import SignIn from './signin'
import ApiProducts from './apis'
import Profile from './profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from '../apigee-icon-blue.svg';

const homeData = {
  title: 'Apigee Ping Developer Portal',
  tag: 'Fast and secure developer onboarding.',
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

  const [user, setUser] = React.useState(undefined);

  const [editableData, form] = useForm(formConfig)
  usePlugin(form)

  const handleUserChange = function(user) {
    //alert("user alert!")
    setUser(user);
  };

  return (
    <div>
      <Router>
        <PrimarySearchAppBar title={editableData.title} user={user}/>
        <Switch>
          <Route path="/signin">
            <SignIn onUserChange={handleUserChange}/>
          </Route>
          <Route path="/apis">
            <ApiProducts title={editableData.title} tag={editableData.tag} />
          </Route>
          <Route path="/profile">
            <Profile title={editableData.title} tag={editableData.tag} user={user}/>
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