import { Box } from  "@mantine/core" ;
import useSWR from "swr";
import './App.css'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  return <Box>
  Hello world
  </Box>
}

export default App
