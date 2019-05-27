class Quiz{
  constructor(pgCols){
    this.authorId = pgCols.author_id;
    this.dateCreated = pgCols.date_created;
    this.dateUpdated = pgCols.date_updated;
    this.id = pgCols.id;
    this.title = pgCols.title;
  }
}

module.exports = Quiz;
