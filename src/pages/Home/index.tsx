import { useContext } from 'react';
import { Grid } from '../../components/layouts/Grid';
import { Header } from '../../components/templates/Header';
import { Main } from '../../components/templates/Main';
import { ThemeContext } from '../../context/ThemeContext';

export function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme === 'light' ? 'theme--light' : 'theme--dark'}>
            <Grid>
                <Header />
                <Main />
            </Grid>
        </div>
    );
}
