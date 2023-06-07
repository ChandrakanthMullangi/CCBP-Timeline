// Write your code here

import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props

  return (
    <div className="project-container">
      <img src={data.imageUrl} alt="project" className="image" />
      <div className="project-title-duration-container">
        <h1 className="project-title"> {data.projectTitle} </h1>
        <div className="project-duration-container">
          <AiFillCalendar />
          <p className="project-duration"> {data.duration} </p>
        </div>
      </div>
      <p className="description"> {data.description} </p>
      <div className="navigation-container">
        <a href={data.projectUrl}>Visit</a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
