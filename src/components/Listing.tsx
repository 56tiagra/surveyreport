import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSurveyList } from "../services/survey";
import { SurveyResult } from "../types/survey";
import SurveySummaryCard from "./SurveySummaryCard";

function Listing() {
  const [surveyList, setsurveyList] = useState<SurveyResult[] | null>(null)
  useEffect(() => {
    let response;
    const fetchData = async () => {
      try {
        response = await getSurveyList()
        setsurveyList(response.survey_results)
      }
      catch (e) {
        //toaster
      }
    }
    fetchData();
  }, [])
  if (!surveyList) {
    return <div>loading...</div>
  }
  return (
    <div className="surveylist">
      <h1 className="surveylist__title">Survey Result</h1>
      {
        surveyList.map(value => (<Link to={value.url}><SurveySummaryCard surveyResult={value} /></Link>))
      }
    </div>

  );
}

export default Listing;
