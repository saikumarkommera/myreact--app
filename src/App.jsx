import Navbar from "./components/Navbar"
import Header from "./components/Header"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"

function App() {
  return (
    <>
    <Navbar />
    <Header title="Become a React Dev" subTitle = "Find the React job that fits your skills and needs"/>
    <HomeCards />
    <JobListings />
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a>
    </section>
    </>
  )
}

export default App
