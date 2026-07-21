import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/app/routing/AppRouter';
import { BubblesBackground } from '@/widgets/BubblesBackground';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
        <BubblesBackground />
      </div>
    </BrowserRouter>
  );
}

export default App;