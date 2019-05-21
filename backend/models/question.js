class Question{
  constructor(){

  }

  convertSqlToJson(data){
    return {
      dateCreated: data.date_created,
      dateUpdated: data.date_updated,
      id: data.id,
      questionText: data.question_text,
      quizId: data.quiz_id
    }
  }

  convertJsonToSql(data){
    return {
      date_created: data.dateCreated,
      date_updated: data.dateUpdated,
      id: data.id,
      question_text: data.questionText,
      quiz_id: data.quizId
    }
  }
}

module.exports = Question;