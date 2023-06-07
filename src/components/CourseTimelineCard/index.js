// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {data} = props

  return (
    <div className="course-container">
      <div className="course-title-duration-container">
        <h1 className="course-title"> {data.courseTitle} </h1>
        <div className="course-duration-container">
          <AiFillClockCircle />
          <p className="course-duration">{data.duration}</p>
        </div>
      </div>
      <p className="description"> {data.description} </p>
      <div className="tagslist">
        {data.tagsList.map(eachTag => (
          <p className="tag-item"> {eachTag.name} </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
