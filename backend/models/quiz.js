class Quiz{
  constructor(pgCols){
    this.dateCreated = pgCols.date_created;
    this.dateUpdated = pgCols.date_updated;
    this.id = pgCols.id;
    this.title = pgCols.title;
    this.questionCount = pgCols.question_count;
  }
}

module.exports = Quiz;
