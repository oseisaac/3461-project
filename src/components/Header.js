import React from 'react';
import { AppBar, Box, Button, createStyles, Drawer, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ onStepChange }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({ open: false });

    const toggleDrawer = (val) => {
        setState({ open: val })
    }

    return (
        <AppBar position="static" color="inherit" className={classes.appBar}>
            <Toolbar className={classes.toolbar} disableGutters variant='dense'>
                <Link href="#" onClick={() => onStepChange(1)} color="primary" underline="none" variant="h5" className={classes.brand}>
                    {/* <img src="nereus-assets/img/nereus-light.png" alt="" width="110" /> */}
                    VACC HELPER
                </Link>
                <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={() => toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer anchor="left" open={state.open} onClose={() => toggleDrawer(false)}>
                <div className={classes.drawerContainer}>
                    <Box mb={1} ml={2} pb={2} border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
                        <Link href="#" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
                            <img src="nereus-assets/img/nereus-light.png" alt="" width="110" />
                        </Link>
                    </Box>
                </div>
            </Drawer>
        </AppBar>
    );
}

export default Header;

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        background: "#3071b4",
    },
    toolbar: {
        minHeight: 70,
        [theme.breakpoints.up('sm')]: {
            padding: '0 40px',
        }
    },
    brand: {
        lineHeight: 1,
        marginRight: 'auto',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '22px',
        [theme.breakpoints.up('sm')]: {
            // marginLeft: '20px',
        }
    },
    link: {
        marginRight: '30px',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    primaryAction: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    menuButton: {
        color: '#fff',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    iconWrapper: {
        minWidth: 40,
    },
    icon: {
        color: theme.palette.text.hint
    },
    drawerContainer: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(3),
        width: 300,
    }
}));