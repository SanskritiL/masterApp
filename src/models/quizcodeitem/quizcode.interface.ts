export interface QuizCode {
  code: String;
}
export interface Users {
  email: String;
  password: String;
  nickname: String;
}
export interface Questions {
  code: String;
  question: any;
}
export interface QuizInfo {
  code: String;
  date: String;
  nickname: String;
  quiztopic: any;
}

export interface MainContent {
  code: String;
  question: String;
  comment: String;
  answer1: String;
  answer2: String;
  answer3: String;
  answer4: String;
  correctanswer: String;
}
