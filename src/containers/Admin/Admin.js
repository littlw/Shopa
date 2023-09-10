import React from 'react';
import Addgoods from '../../components/Addgoods/Addgoods';
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation';

class Admin extends React.Component {
constructor() {
    super() 
    this.state = {
        goods: []
    }
}

loadgoods = (goods) => {
    this.setState(prevState => ({
      goods: [...prevState.goods, goods]
    }));
  }

  render() {
    const { loadgoods } = this.state;
     return(
    <div>
      <AdminNavigation />
      <Addgoods loadgoods={loadgoods}/>
      </div>
    )
  }
}

export default Admin;