import './App.css';
import { AppProvider } from './store/AppContext';
import { MyAppPage } from './Pages/MyAppPage';

const App = () => {
  return (
    <AppProvider>
      <MyAppPage />
    </AppProvider>
  );
}

export default App;
