import './App.css';
import JobListing from "./components/pages/jobs/jobListing"
import JobDetails from './components/pages/jobs/jobDetails';
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JobListing />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
