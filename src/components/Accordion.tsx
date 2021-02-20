import React from 'react'
import { Theme } from "../types/survey"
import { CalculateAverageRating } from "../utils/helper";
import ProgressBar from "./ProgressBar";

interface IAccordion {
  themes: Theme[]
}
function Accordion(props: IAccordion) {
  const themes = props.themes;
  return (
    <div className="accordion-menu">
      {themes.map((theme, index) => (
        <li key={index} className="accordion-item" id={index.toString()}>
          <a className="accordion-item__title">{theme.name} </a>
          <div className="accordion-smenu">
            {
              theme.questions.map((q, i) =>
                (<a>
                  {q.description}
                  <br />
                  <span>Score: </span>
                  <div className="question-score__container">
                    <ProgressBar score={CalculateAverageRating(q)} />
                  </div>
                </a>)
              )
            }
          </div>
        </li>
      ))}
    </div>
  )
}
export default Accordion;