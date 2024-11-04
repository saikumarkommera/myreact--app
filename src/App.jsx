import { Route , createBrowserRouter , createRoutesFromElements , RouterProvider } from "react-router-dom"
import Homepage from './pages/Homepage'
import MainLayout from "./layouts/MainLayout"
import Jobs from "./pages/Jobs"
import NotFoundpage from './pages/NotFountPage'
import Job , {jobLoader} from "./pages/Job"
import AddJobPage from "./pages/AddJobPage"

const router = createBrowserRouter (
  createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}> 
    <Route index element={<Homepage/>} />
    <Route path="/jobs" element={<Jobs/>} />
    <Route path="/jobs/:id" element={<Job/>} loader={jobLoader}/>
    <Route path="/add-job" element={<AddJobPage/>} />
    <Route path="*" element={<NotFoundpage/>} />
  </Route>
)
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
