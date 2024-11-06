import { Route , createBrowserRouter , createRoutesFromElements , RouterProvider } from "react-router-dom"
import Homepage from './pages/Homepage'
import MainLayout from "./layouts/MainLayout"
import Jobs from "./pages/Jobs"
import NotFoundpage from './pages/NotFountPage'
import Job , {jobLoader} from "./pages/Job"
import AddJobPage from "./pages/AddJobPage"

const App = () => {
  //adding a job
const addJob = async (newJob) => {
  const res = await fetch('/api/jobs' , {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob),
  });
  return;
}
//deleting a job
const deleteJob = async (jobId) => {
  const url = `http://localhost:8000/jobs/${jobId}`;
  const res = await fetch(url,{
    method: 'DELETE',
  });
  return;
}
const router = createBrowserRouter (
  createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}> 
    <Route index element={<Homepage/>} />
    <Route path="/jobs" element={<Jobs/>} />
    <Route path="/jobs/:id" element={<Job deleteJob={deleteJob}/>} loader={jobLoader}/>
    <Route path="/add-job" element={<AddJobPage addNewJob={addJob}/>} />
    <Route path="*" element={<NotFoundpage/>} />
  </Route>
)
);
  return <RouterProvider router={router} />;
};

export default App;
