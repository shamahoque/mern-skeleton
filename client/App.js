import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import JssProvider from 'react-jss/lib/JssProvider';
import {MuiThemeProvider, createMuiTheme, createGenerateClassName} from '@material-ui/core/styles'
import {indigo, pink} from '@material-ui/core/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
    light: '#757de8',
    main: '#3f51b5',
    dark: '#002984',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff79b0',
    main: '#ff4081',
    dark: '#c60055',
    contrastText: '#000',
  },
    openTitle: indigo['400'],
    protectedTitle: pink['400'],
    type: 'light'
  }
})
const generateClassName = createGenerateClassName();
const App = () => (
  <BrowserRouter>
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <MainRouter/>
      </MuiThemeProvider>
    </JssProvider>
  </BrowserRouter>
)

export default hot(module)(App)
