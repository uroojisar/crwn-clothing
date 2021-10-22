import React from 'react';
import './homepage.styles.scss';
import Directory from '../../Component/directory/directory.component';

const HomePage = ({history}) => {
  return (
    <div className="homepage"> 
      <Directory history={history}/>
    </div>
  );
}

export default HomePage;
