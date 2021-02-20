import React from "react";
import { SurveyResult } from "../types/survey";

interface ISurveySummaryCard {
  surveyResult: SurveyResult
}
function SurveySummaryCard(props: ISurveySummaryCard) {
  const surveyResult = props.surveyResult
  return (
    <div className="surveylist__card">
      <div className="surveylist__card__header">
        <h2 className="surveylist__card__header__name">{surveyResult.name}</h2>
      </div>
      <div className="surveylist__card__body">
        <div className="surveylist__card__body__numbers">
          <div className="surveylist__card__body__numbers__item">
            <span>{surveyResult.participant_count}</span>
            Participants
          </div>
          <div className="divider"></div>
          <div className="surveylist__card__body__numbers__item">
            <span>{surveyResult.submitted_response_count}</span>
            Submitted
          </div>
          <div className="divider"></div>
          <div className="surveylist__card__body__numbers__item">
            <span>{`${(Math.round(surveyResult.response_rate * 10000) / 100).toFixed(2)}%`}</span>
            Rate
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurveySummaryCard;