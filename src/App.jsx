import {

  QueryClient,

  QueryClientProvider,

} from 'react-query'
import Home from './Home/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/:id" exact element={<Home />}/>
        </Routes>
      </Router>
    </QueryClientProvider>
    </>
  );
}

export default App;
