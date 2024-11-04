import React from 'react'
import Header from "../components/Header"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"

const Homepage = () => {
  return (
    <>
      <Header title="Become a React Dev" subTitle = "Find the React job that fits your skills and needs"/>
      <HomeCards />
      <JobListings isHomePage={true} />
      <ViewAllJobs />
    </>
  )
}

export default Homepage
