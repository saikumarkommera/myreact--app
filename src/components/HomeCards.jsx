import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
      <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card headline ="For Developers" description="Browse our React jobs and start your career today" 
          btnlabel="Browse Jobs"/>
          <Card headline ="For Employers" description="List your job to find the perfect developer for the role" 
          btnlabel="Add Job"/>
        </div>
      </div>
    </section>
  )
}

export default HomeCards
