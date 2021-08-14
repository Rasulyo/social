import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App(props) {
 
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Sidebar state={props.appState.sideBar}/>
      <div className="app-content">
        <Switch>
          {/* <Route path='/dialogs' component={Dialogs}/>
          <Route exact path='/profile' component={Profile}/> */}

          <Route path='/dialogs' render={ () => < Dialogs state={props.appState.dialogPage} addMessage={props.addMessage}  updateMessage={props.updateMessage} messageText={props.appState.dialogPage.messageText} />}/>
          <Route exact path='/profile' render={ () => < Profile   state={props.appState.profilePage} updatePostText={props.updatePostText} addPost={props.addPost} />}/>
        </Switch>
      </div>

     </div>
    </BrowserRouter>
  );
}

export default App;
