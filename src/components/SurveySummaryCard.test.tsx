import React from "react";
import { render } from "@testing-library/react";

import SurveySummaryCard from "./SurveySummaryCard"
import { SurveyResult } from "../types/survey";

const inputData: SurveyResult = {name:"Simple Survey",url:"/surveys/1",participant_count:6,response_rate:0.8333333333333334,submitted_response_count:5}

describe("survey summary card", () => {
  it("should display survey summary", ()=> {
    const { container } = render(
      <SurveySummaryCard surveyResult={inputData}/>
    )
    const h2 = container.querySelector("h2")
    expect(h2?.textContent).toBe(inputData.name)
  })
})