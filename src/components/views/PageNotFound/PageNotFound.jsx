import React from 'react';
import { withRouter } from 'react-router';

class PageNotFound extends React.Component {
  render(){
    return (
      <div id="page-not-found">
        <h1>404: Page not found</h1>
      </div>
    );
  }
}

export default withRouter(PageNotFound);
