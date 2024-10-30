import Navbar from "./components/Navbar"
import Header from "./components/Header"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs"

function App() {
  return (
    <>
    <Navbar />
    <Header title="Become a React Dev" subTitle = "Find the React job that fits your skills and needs"/>
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}

export default App
