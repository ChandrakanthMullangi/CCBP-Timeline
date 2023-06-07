// Write your code here

import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard'

import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timeline-view">
      <h1 className="heading">
        MY JOURNEY OF <span className="highlight">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachObj => {
            if (eachObj.categoryId === 'COURSE') {
              return <CourseTimeLineCard data={eachObj} />
            }
            return <ProjectTimeLineCard data={eachObj} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
