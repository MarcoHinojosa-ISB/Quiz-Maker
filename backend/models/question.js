class Question{
  constructor(pgCols){
    this.dateCreated = pgCols.date_created;
    this.dateUpdated = pgCols.date_updated;
    this.id = pgCols.id;
    this.questionText = pgCols.question_text;
    this.quizId = pgCols.quiz_id;
  }
}

module.exports = Question;