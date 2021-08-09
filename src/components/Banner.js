import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import bannerImg from '../assets/banner-images.png'
import React from 'react';

const Banner = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Container maxWidth="lg" className={classes.container} >
                <Box pt={10} pb={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={7} className={classes.left}>
                            {/* <Typography variant="overline" color="textSecondary">Schedule a</Typography> */}
                            <Typography variant="h3" component="h2" gutterBottom={true}>
                                <Typography variant="h3" component="h1">Schedule a</Typography>
                                <Typography color="primary" variant="h3" component="h1">
                                    COVID-19.
                                </Typography>
                                <Typography variant="h3" component="h1">vaccination appointment</Typography>
                            </Typography>
                            <Typography variant="subtitle1" component="p" color="textSecondary">In order to successfully book your vaccination appointment, you will need to be eligible for booking, and provide either an email address or mobile phone number to receive your booking confirmation. For more information, please refer to Vaccine Appointment Booking Terms of Use below.</Typography>
                            <Box mt={3}>
                                {/* <Button variant="contained" color="primary" className={classes.primaryAction}>Action</Button> */}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} className={classes.right}>
                            <div className={classes.features}>

                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
}

export default Banner;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#68c9d0',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: `linear-gradient(to right , #3071b4 40%, #3071b4d4 55%,  transparent), url('${bannerImg}') no-repeat`,
        // background: `linear-gradient(to right, #68c9d0 55%,  transparent), url('${bannerImg}') no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'right 32%',
    },
    left: {
        textAlign: 'left',
        "& h1": {
            color: "#fff",
            fontFamily: `"Gotham A", "Gotham B", Arial, Helvetica, Verdana, sans-serif`,
            margin: "0",
            textShadow: "0 2px 3px #adadad",
            textTransform: "uppercase",
            fontSize: "40px",
        },
        "& p": {
            color: "#fff",
        },
        "& button": {

        }
    },
    right: {
        textAlign: "left"
    },
    features: {
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(10),
            borderLeftWidth: 1,
            borderLeftStyle: 'solid',
            borderColor: theme.palette.background.emphasis,
        }
    },
    iconWrapper: {
        backgroundColor: 'blue',
    },
}));