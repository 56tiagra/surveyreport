export type SurveyResult = {
  name: string;
  url: string;
  participant_count: number;
  response_rate: number;
  submitted_response_count: number;
};

export type SurveyResultDetail = SurveyResult & {
  themes: Theme[]
}

export type Theme = {
  name: string;
  questions: Question[]
}

export type Question = {
  description: string;
  question_type: string;
  survey_responses: SurveyResponse[];
  average_rating: number;
}

export type SurveyResponse = {
  id: number;
  question_id: number;
  respondent_id: number;
  response_content: string
}