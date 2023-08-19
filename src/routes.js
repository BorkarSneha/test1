import JobListing from "./pages/jobs/jobListing"
import JobDetails from "./pages/jobs/jobDetails"
import { Routes, Route } from "react-router-dom"

const Router = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<JobListing />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
    </Routes>
  </div>
);

export default Router;