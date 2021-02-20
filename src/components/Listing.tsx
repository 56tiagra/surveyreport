import React, { useEffect, useState } from "react";
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
        surveyList.map(value => (<SurveySummaryCard surveyResult={value} />))
      }
    </div>

  );
}

export default Listing;
