import { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Routes, Route, Navigate
} from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Lists from '../../components/Lists/Lists';
import Footer from '../../components/Footer/Footer'
import Admin from '../Admin/Admin';
import About from '../../components/About/About';
import Singlegood from '../../components/Singlegood/Singlegood';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Shop from '../../components/Shop/Shop';
import Register from '../../components/Register/Register';
import { Icon } from 'semantic-ui-react';
import Login from '../../components/Login/Login';

import { requestGoods, 
  setSearchfield,
   setRoute, 
  adminSignIn,
  loadUser} from '../../Actions/actions';
import SearchBox from '../../components/Searchbox/Searchbox';
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation';

const mapStateToProps = state => {
  return {
    searchfield: state.searchGoods.searchfield,
    goods: state.requestGoods.goods,
    isPending: state.requestGoods.isPending,
    error: state.requestGoods.error,
    route: state.route,
    isAdmin: state.isAdmin
  }
}

const mapDispatchToProps = (dispatch) => {
 return { 
  onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
  onRequestGoods: () => dispatch(requestGoods()),
  onSetRoute: (route) => dispatch(setRoute(route)),
  onAdminSignIn: () => dispatch(adminSignIn()),
  onLoadUser: (data) => dispatch(loadUser(data))
}
}

class App extends Component {
  componentDidMount()  {
    this.props.onRequestGoods();
  }
  loadUser = (data) => {
    this.props.onLoadUser(data);
  }

  render() {
    const { 
      goods,
      isPending,
      isAdmin, 
      searchfield, 
      onSearchChange, } = this.props;
    const filteredGoods = goods.filter(good => {
      return good.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    if (isAdmin) { 
      return <Navigate to="/admin" />;
    } else {
    return isPending ?  
      <Icon className='yellow loader'
       loading name='spinner' size='huge' />
      :(
        <div>
    <Header />
    <Navigation />
    <ErrorBoundary>
      <Routes>
        <Route index element={(
              <div>
                <SearchBox searchChange={onSearchChange} />
                <Lists goods={filteredGoods} />
              </div>
            )}
          />
      <Route path="/goods/:id" element={<Singlegood goods={goods} />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signin" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/admin" element={<Admin /> }  />
      </Routes>   
    </ErrorBoundary>
    <Footer />
      </div>
        );
  }
}}

export default connect(mapStateToProps, mapDispatchToProps)(App);


/* 1. ////Making routes between pages
2. making a login and register
3. making a profile 
4. making an admin profile 
- in the admin profile i need to have an below functions:
+ ability to add new goods 
+ different statistics
5. Styled Page with full information about clothes//// with capability to route between cardlist 
//and the full description of goods
*/