class Answer{
  constructor(pgCols){
    this.answerText = pgCols.answer_text;
    this.dateCreated = pgCols.date_created;
    this.date_updated = pgCols.date_updated;
    this.id = pgCols.id;
    this.questionId = pgCols.question_id;
    this.submissionId = pgCols.submission_id;
  }
}

module.exports = Answer;