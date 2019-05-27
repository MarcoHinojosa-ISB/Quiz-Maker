class Question{
  constructor(data){
    this.dateCreated = data.date_created;
    this.dateUpdated = data.date_updated;
    this.id = data.id;
    this.questionText = data.question_text;
    this.quizId = data.quiz_id;
  }
}

module.exports = Question;