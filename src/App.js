import { ThemeProvider, createTheme } from '@mui/material';
import { Card } from './components/Card';
import { purple } from '@mui/material/colors';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

const data = [{
	name: 'James Hiddleston',
	first_name: 'James',
	last_name: 'Hiddleston',
	current_title: 'Machine Learning Engineer',
	location: 'San Francisco Bay area',
	phone_number: '1234567890',
	personal_email: 'james.hiddleston@gmail.com',
  linkedIn: 'https://www.linkedin.com/',
	experience: ['Senior Machine Learning Engineer, At Google', 'Junior Machine Learning Engineer at spotify'],
	education: ['Stanford University, M.S., Computer Science Oct']
 }]

function App() {
  return (
    <ThemeProvider theme={theme}>
      {data.map(d => <Card key={d.name} {...d} />)}
    </ThemeProvider>
  );
}

export default App;
