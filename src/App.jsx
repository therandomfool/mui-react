import React from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    container: {
        backgrounColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    }
}))


const App = () => {
    const classes = useStyles();

    return (
       <>
       <CssBaseline />
       <AppBar position='relative'>
           <Toolbar>
               <PhotoCamera />
               <Typography varient ='h6'>
                   Photo Album
               </Typography>
           </Toolbar>
       </AppBar>
       <main>
           <div className={classes.container}>
               <Container maxWidth='sm' align='center' >
                <Typography variant='h2'  color='textPrimary'gutterBottom>
                    Photo Album
                </Typography>
                <Typography variant = 'h5'  color='textSecondary' paragraph>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta deleniti amet animi, tempore fugit repellendus unde perferendis aut. Veniam libero porro animi, iure nobis pariatur corrupti modi. Suscipit, autem dignissimos!
                    Veniam nisi ut doloremque debitis assumenda minus, optio corrupti totam tenetur accusantium quaerat voluptas modi unde, beatae aliquam aliquid tempora voluptate quis numquam soluta harum cupiditate odio illum sapiente. Culpa?
                </Typography>
                <div>
                    <Grid container spacing={2} justify='center'>
                        <Grid item>
                            <Button variant='contained' color='primary'>
                                See my photos
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant='outlined' color='primary'>
                                Secondary Action
                            </Button>
                        </Grid>

                    </Grid>
                </div>
               </Container>
           </div>
       </main>
       </>
    )
}

export default App;