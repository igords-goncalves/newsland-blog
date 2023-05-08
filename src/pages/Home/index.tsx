import { Grid } from '../../components/layouts/Grid';
import Header from '../../components/templates/Header';
import { Main } from '../../components/templates/Main';
import './style.scss';

export function Home() {
    return (
        <Grid>
            <Header />
            <Main />
        </Grid>
    );
}
