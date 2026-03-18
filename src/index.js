import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import store from './store';
import withAnalytics from './utils/withAnalytics';
import './styles/sass/app.scss';


// Import all containers
import App from './containers/App';
import About from './containers/About';
import Cart from './containers/Cart';
import Wishlist from './containers/Wishlist';
import Confirm from './containers/Confirm';
import Products from './containers/Products';
import MensProducts from './containers/MensProducts';
import WomensProducts from './containers/WomensProducts';
import GearProducts from './containers/GearProducts';
import YogaProducts from './containers/YogaProducts';
import Blog from './containers/Blog';
import LumaPlus from './containers/LumaPlus';
import Checkout from './containers/Checkout';
import SingleProduct from './containers/SingleProduct';
import SignupConfirm from './containers/SignupConfirm';
import Home from './containers/Home';



const TrackedApp = withAnalytics(App);

const dispatchCustomEvent = (eventName, target) => {
  const event = new CustomEvent(eventName);
  target.dispatchEvent(event);
  console.log(`[index.js] Custom event '${eventName}' dispatched`);
};

const AppWithEvents = withRouter((props) => {
  React.useEffect(() => {
    if (window.location.pathname === '/') {
      setTimeout(() => dispatchCustomEvent("page-load-top", document.body), 300);
      setTimeout(() => dispatchCustomEvent("page-load-bottom", document.getElementById('app')), 1000);

      if (!document.cookie.includes('lumaCookie=')) {
  const lumaId = Math.floor(Math.random() * 10000000) + 90000000;

  // 50% user-level sampling
  const isSampledUser = lumaId % 2 === 0;

  if (!isSampledUser) {
    console.log('[LUMA SAMPLE] User not sampled — no cookie set');
    return;
  }

  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `lumaCookie=${lumaId}; path=/; expires=${expires}`;

  console.log('[LUMA SAMPLE] User sampled — cookie set:', lumaId);
}




    }

    const handleRouteChange = () => {
      dispatchCustomEvent("page-load-top", document.body);
      setTimeout(() => dispatchCustomEvent("page-load-bottom", document.getElementById('app')), 1000);
    };

    props.history.listen(handleRouteChange);

    return () => {
      props.history.unlisten(handleRouteChange);
    };
  }, [props.history]);

  return <TrackedApp {...props} />;
});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <AppWithEvents>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/confirm" component={Confirm} />
            <Route path="/products" component={Products} />
            <Route path="/mensproducts" component={MensProducts} />
            <Route path="/womensproducts" component={WomensProducts} />
            <Route path="/gearproducts" component={GearProducts} />
            <Route path="/yogaproducts" component={YogaProducts} />
            <Route path="/blog" component={Blog} />
            <Route path="/lumaplus" component={LumaPlus} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/product/:id" component={SingleProduct} />
            <Route path="/signupconfirm" component={SignupConfirm} />
          </Switch>
        </AppWithEvents>
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  );
};

render();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}
