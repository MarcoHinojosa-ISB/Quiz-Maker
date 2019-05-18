class Quiz{
  constructor(){

  }

  convertSqlToJson(data){
    return {
      authorId: data.author_id,
      dateCreated: data.date_created,
      dateUpdated: data.date_updated,
      id: data.id,
      title: data.title,
      numberOfQuestions: data.number_of_questions //optional
    }
  }

  convertJsonToSql(data){
    return {
      author_id: data.authorId,
      date_created: data.dateCreated,
      date_updated: data.dateUpdated,
      id: data.id,
      title: data.title
    }
  }
}

module.exports = Quiz;
