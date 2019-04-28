import React from 'react';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="home">
        <h3>
          This is a Quiz-Generating app. You can make quizzes of different kinds here.
        </h3>

        <h4>Sample Quiz Below</h4>
      </div>
    );
  }
}

export default withRouter(Home);
