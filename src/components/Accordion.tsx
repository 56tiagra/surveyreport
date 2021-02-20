import React from 'react'
import { Theme } from "../types/survey"
import { CalculateAverageRating } from "../utils/helper";

interface IAccordion {
  themes: Theme[]
}
function Accordion(props: IAccordion) {
  const themes = props.themes;
  return (
    <div className="accordion-menu">
      {themes.map((theme, index) => (
        <li className="accordion-item" id={index.toString()}>
          <a className="accordion-item__title">{theme.name} </a>
          <div className="accordion-smenu">
            {
              theme.questions.map((q, i) =>
                (<a>
                  {q.description}
                  <br/>
                  <span>Score: </span>{CalculateAverageRating(q)}
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