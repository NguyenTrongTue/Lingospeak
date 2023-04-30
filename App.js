import { Provider } from 'react-redux';
import { store } from './components/redux/index';
import MainApp from './components/MainApp';

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
