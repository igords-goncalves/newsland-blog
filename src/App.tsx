import { SearchProvider } from './context/SearchProvider';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';

function App() {
    return (
        <SearchProvider>
            <ThemeProvider>
                <Home />
            </ThemeProvider>
        </SearchProvider>
    );
}

export default App;
