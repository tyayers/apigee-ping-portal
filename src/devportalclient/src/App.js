import { TinaProvider, TinaCMS, useForm, usePlugin } from 'tinacms';
import Home from './components/home.jsx'
import './App.css';

const homeData = {
  title: 'Apigee Ping Developer Portal',
  body: 'The fastest, most secure way to onboard developers.',
};

function App() {
  const cms = new TinaCMS({
    sidebar: true,
    toolbar: false,
    enabled: true
  });

  return (
    <TinaProvider cms={cms}>
      <div className="App">
        <Home />
      </div>
    </TinaProvider>
  );
}

export default App;
