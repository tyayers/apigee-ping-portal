import { TinaProvider, TinaCMS, useForm, usePlugin } from 'tinacms';
import Home from './components/home.jsx'
import './App.css';

const homeData = {
  title: 'Apigee PING Developer Portal',
  body: 'The most fastest, most secure way to onboard developers.',
};

function App() {
  const cms = new TinaCMS({
    sidebar: true,
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
