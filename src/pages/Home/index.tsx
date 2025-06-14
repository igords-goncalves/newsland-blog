import { Grid } from '../../components/layouts/Grid';
import { Header } from '../../components/templates/Header';
import { Main } from '../../components/templates/Main';
import { SearchProvider } from '../../context/SearchProvider';

export function Home() {
    return (
        <SearchProvider>
            <Grid>
                <Header />
                <Main />
            </Grid>
        </SearchProvider>
    );
}
