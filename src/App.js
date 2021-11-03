import React from 'react';
import HomePage from './Pages/homepage/homepage.component';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';
import Header from "./Component/header/header.component";
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: ''
    }
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Open subscript to auth state change event. Must close this to avoid memory leaks.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  // Subscription for auth state change will be closed by this method.
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
