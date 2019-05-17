import React from 'react';
import List from './sub-components/List.jsx';
import { withRouter } from 'react-router';

class Quizzes extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let dummyQuizzes = [
            {
                id: 1,
                title: "test1", 
                questionsLength: 10
            },
            {
                id: 2,
                title: "test2", 
                questionsLength: 15
            },
            {
                id: 3,
                title: "test3", 
                questionsLength: 20
            }
        ];

        return (
            <div id="quizzes">
                <div className="panel">
                    <List quizzes={dummyQuizzes}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Quizzes);