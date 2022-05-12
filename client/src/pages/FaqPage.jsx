import {Box, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';


export function FaqPage() {
    return (
        <Box mt={10}>
            <Grid container justifyContent="center" alignItems='center'>
                <Grid item>
                    <Typography variant="h2">F.A.Q</Typography>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography variant="h6">How can we help you?</Typography>
                        <Box>
                            <SearchIcon/>
                            <TextField label={"Search"} type="search"/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography>1. Who can join Meliora Impact?</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography paragraph>If you can't find your question, please fill in the form.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}