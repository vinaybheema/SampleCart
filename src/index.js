import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './Store/ConfigureStore';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cart from './Cart';
import ParentHome from './ParentHome';
import Login from './Login';
import rootReducer from "./Reducers/reducer";
import D3Library from './D3Library';

const store = configureStore();
//const history = createBrowserHistory();

ReactDOM.render(
<Provider store={store}>
    <ParentHome />
</Provider>,
document.getElementById('root'));

//ReactDOM.render(<D3Library />, document.getElementById('root1'));

registerServiceWorker();

//   {/* <Router>
//         <div>
//             <Route path='/Home' component={ParentHome} />
//             {/* <Route path='/Login' component={Login} /> */}
//             <Route path='/Cart' component={Cart} />
//         </div>
//     </Router> */}