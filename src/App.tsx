import { SearchProvider } from './context/SearchProvider';
import { ThemeProvider } from './context/ThemeProvider';
import { Home } from './pages/Home';
import { AmplitudeProvider } from './context/AmplitudeProvider';

function App() {
    return (
        <AmplitudeProvider>
            <SearchProvider>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </SearchProvider>
        </AmplitudeProvider>
    );
}

export default App;
