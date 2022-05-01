import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css"

export var theme = createTheme({
  palette: {
    primary: {
      main: '#f35353',
    },
    secondary: {
      main: '#2196f3',
    },
    textColor: {
      main: '#282828'
    }
  },
});


function App() {
  return (
    <div style={{
      color: theme.palette.textColor.main
    }} >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
