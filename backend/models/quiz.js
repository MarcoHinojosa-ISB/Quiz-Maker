class Quiz{
  constructor(data){
    this.authorId = data.author_id,
    this.dateCreated = data.date_created,
    this.dateUpdated = data.date_updated,
    this.id = data.id,
    this.title = data.title
  }
}

module.exports = Quiz;
