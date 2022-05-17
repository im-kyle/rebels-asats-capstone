import { useAuth } from '../../contexts/AuthContext';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Typography,
  Link,
  GlobalStyles,
  Container,
  ButtonBase,
} from '@mui/material'
import { styled } from '@mui/material/styles';

const images = [
  {
    url: 'https://www2.deloitte.com/content/dam/insights/us/articles/3867_Operational-omnipresence/images/3867-Operational-omnipresence_1440x660.jpg',
    title: 'Dashboard',
    route:'/dashboard',
    protected: true,
  },
  {
    url: 'https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/2022-03/military-medals.jpg',
    title: 'Awards',
    route:'/awards',
    protected: false,
  },
  {
    url: 'https://images03.military.com/sites/default/files/media/spouse/2016/09/jag-divorce-1200x800.jpg',
    title: 'Packages',
    route:'/packages',
    protected: true,
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://supracoders.us/">
        SDI #9 Rebels
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Home() {
  const { firebaseUser } = useAuth();
  const navigate = useNavigate();

  const handleClick = (image) => {
    if (firebaseUser) {
      navigate(image.route)
    } else {
      !image.protected && navigate(image.route)
    }
  }

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to ASATS!
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          The Air and Space Awards Tracking System (ASATS) is your one-stop shop for all Airman and Guardian trophies and awards.
          {!firebaseUser && '\n\nPlease sign in to begin using ASAT\'s full functionality.'}
        </Typography>
      </Container>
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {images.map((image) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={image.title}
              xs={12}
              sm={6}
              md={4}
            >
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: '100%'
                }}
                onClick={() => handleClick(image)}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Home;