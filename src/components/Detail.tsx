import React, { useEffect, useState } from "react";
import { getSurveyDetail } from "../services/survey";
import { SurveyResultDetail } from "../types/survey";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Detail(props: any) {
  const [surveyDetail, setsurveyDetail] = useState<SurveyResultDetail | null>(null)
  useEffect(() => {
    let response;
    const { match: {
      params
    } } = props;
    const fetchData = async () => {
      try {
        response = await getSurveyDetail(params.id)
        setsurveyDetail(response.survey_result_detail)
      }
      catch (e) {
        //toaster
      }
    }
    fetchData();
  }, [])
  if (!surveyDetail) {
    return <div>loading...</div>
  }
  const goBack = () => {
    props
      .history
      .goBack();
  }
  return (
    <div className='surveydetail'>
      <div className="surveydetail__header">
        <button className="back-button" onClick={goBack}>Back</button>
      </div>
      <div className="surveydetail__summary">
        <h2 className="surveydetail__summary__title">{surveyDetail.name}</h2>
        <h4 className="surveydetail__summary__text">Response rate:</h4>
        <CircularProgressbar className="progress-circle" styles={buildStyles({
              textColor: 'white',
              pathColor:'white',
              pathTransitionDuration: 0.5,
        })} value={surveyDetail.response_rate*100} text={`${Math.round(surveyDetail.response_rate*100)}%`} />
      </div>
      <div className="surveydetail__question-details">

      </div>

      {JSON.stringify(surveyDetail)}
    </div>
  );
}

export default Detail;
