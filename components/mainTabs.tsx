import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import AlertDialogSlide from '../components/alertDialogSlide';
import BasicSelect from '../components/basicSelect';
import React, { useState, SyntheticEvent, ReactNode } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import { Data } from '../util/table';
import DataTable, { createTheme } from 'react-data-table-component';


//const fetcher = (...args) => fetch(...args).then(res => res.json())
//async function sendRequest(url, { arg }) {
//  let result = await fetch(url, {
//    method: 'POST',
//    body: JSON.stringify(arg)
//  })
//  console.log(result);
//  return result;
//}
//sendRequest('/api/directories', [{test1: 1, test2: '2', abc: "abc"}, {test1: 100, test2: '200', abc: "something else"}])


createTheme('dark', {
  background: {
    default: 'transparent',
  },
  striped: {
    default: '#64554a',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(100,150,200,0.8)',
    disabled: 'rgba(0,0,0,.12)',
  },
});


const columns = [
  [
    {
      name: 'Dessert (100g serving)',
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: 'Calories',
      selector: (row: any) => row.calories,
      sortable: true,
    },
    {
      name: 'Fat (g)',
      selector: (row: any) => row.fat,
      sortable: true,
    },
    {
      name: 'Carbs (g)',
      selector: (row: any) => row.carbs,
      sortable: true,
    },
    {
      name: 'Protein (g)',
      selector: (row: any) => row.protein,
      sortable: true,
    },
  ], [
    {
      name: 'Dessert (100g serving)',
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: 'Calories',
      selector: (row: any) => row.calories,
      sortable: true,
    },
    {
      name: 'Fake 1',
      selector: (row: any) => row.fake1,
      sortable: true,
    },
    {
      name: 'Fake 2',
      selector: (row: any) => row.fake2,
      sortable: true,
    },
    {
      name: 'Fake 3',
      selector: (row: any) => row.fake3,
      sortable: true,
    },
  ]
];


interface IProps {
}

interface IState {
  value: string,
  queryData: any,
  data: Data[][],
  dataIndex: number,
  error: boolean,
  isLoading: boolean
}
export default class MainTabs extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '1',
      queryData: [{test1: 1, test2: '2', abc: "abc"}, {test1: 100, test2: '200', abc: "something else"}],
      data: [[]],
      dataIndex: 0,
      error: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.getTableData();
  }
  handleChange = (event: SyntheticEvent, newValue: string) => {
    this.setState({value: newValue})
  }

  getTableData = () => {
    this.setState({error: false});
    this.setState({isLoading: true});
    this.setState({dataIndex: this.state.dataIndex == 0 ? 1 : 0});
    fetch('/api/directories', {
      method: 'POST',
      body: JSON.stringify(this.state.queryData)
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({data: result});
          this.setState({error: false});
          this.setState({isLoading: false});
        },
        (error) => {
          this.setState({error: true});
          this.setState({isLoading: false});
        }
      );
  }

  render() {
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={this.state.value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={this.handleChange} aria-label="lab API tabs example">
              <Tooltip title="Click me!">
                <Tab label="Item One" value="1" />
              </Tooltip>
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Filter</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Search</Typography>
                <BasicSelect title="Age" options={[{value: 10, label: "Ten"}, {value: 20, label: "Twenty"}, {value: 30, label: "Thirty"}]}/>
                <Typography>for</Typography>
                <BasicSelect title="Age" options={[{value: 10, label: "Ten"}, {value: 20, label: "Twenty"}, {value: 30, label: "Thirty"}]}/>
                <BasicSelect title="Age" options={[{value: 10, label: "Ten"}, {value: 20, label: "Twenty"}, {value: 30, label: "Thirty"}]}/>
                <Autocomplete
                  disablePortal
                  id="combo-box1"
                  options={top100Films}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                <BasicSelect value="and" options={[{value: "and", label: "and"}, {value: "or", label: "or"}]}/>
                <BasicSelect title="Age" options={[{value: 10, label: "Ten"}, {value: 20, label: "Twenty"}, {value: 30, label: "Thirty"}]}/>
                <BasicSelect title="Age" options={[{value: 10, label: "Ten"}, {value: 20, label: "Twenty"}, {value: 30, label: "Thirty"}]}/>
                <Autocomplete
                  disablePortal
                  id="combo-box2"
                  options={top100Films}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                  <FormControlLabel control={<Checkbox />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                </FormGroup>
                <Stack spacing={2} direction="row">
                  <Button variant="contained">Reset</Button>
                  <Button variant="contained">Filter</Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Results</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {(this.state.error || this.state.isLoading) ? <DataTable columns={columns[0]} data={[]} progressPending theme="dark" /> : <DataTable columns={columns[this.state.dataIndex]} data={this.state.data[this.state.dataIndex]} highlightOnHover pagination pointerOnHover responsive selectableRows striped theme="dark" />}
                <Button variant="contained" onClick={this.getTableData}>Add Selected</Button>
              </AccordionDetails>
            </Accordion>
          </TabPanel>
          <TabPanel value="2">
            <Badge badgeContent={4} color="primary">
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Badge>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Button1</Button>
              <Button variant="contained">Button2</Button>
            </Stack>
          </TabPanel>
          <TabPanel value="3">
            <AlertDialogSlide />
          </TabPanel>
        </TabContext>
      </Box>
    );
  }

}


const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
