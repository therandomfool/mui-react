import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';


const App = () => {
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
           <div>
               <Container maxWidth='sm' align='center'>
                <Typography variant='h2'  color='textPrimary'gutterBottom>
                    Photo Album
                </Typography>
                <Typography variant = 'h5'  color='textSecondary' paragraph>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta deleniti amet animi, tempore fugit repellendus unde perferendis aut. Veniam libero porro animi, iure nobis pariatur corrupti modi. Suscipit, autem dignissimos!
                    Veniam nisi ut doloremque debitis assumenda minus, optio corrupti totam tenetur accusantium quaerat voluptas modi unde, beatae aliquam aliquid tempora voluptate quis numquam soluta harum cupiditate odio illum sapiente. Culpa?
                </Typography>
               </Container>
           </div>
       </main>
       </>
    )
}

export default App;