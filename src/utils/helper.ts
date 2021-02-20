import { Question } from './../types/survey';
export const CalculateAverageRating = (question: Question):number => {
  let responseSummary = {
    numberOfValidAnswers: 0,
    totalScore: 0
  }
  question.survey_responses.reduce((currentResponseSumary, res) => {
    if(res.response_content !== "") {
      currentResponseSumary.numberOfValidAnswers = currentResponseSumary.numberOfValidAnswers + 1;
      currentResponseSumary.totalScore = currentResponseSumary.totalScore + parseInt(res.response_content)
    }
    return currentResponseSumary
  }, responseSummary)
  return responseSummary.totalScore/responseSummary.numberOfValidAnswers;
}