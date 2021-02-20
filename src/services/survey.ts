import { SurveyResultDetail } from '../types/survey';
import { SurveyResult } from '../types/survey';
export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

export const getSurveyList = async () => await http<{ survey_results: SurveyResult[]}>('/api/surveys')

export const getSurveyDetail = async (id:number) => await http<{survey_result_detail: SurveyResultDetail}>(`/api/surveys/${id}`)