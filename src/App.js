import React, { Suspense, lazy, Profiler } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './components/spinner/spinner.compoennt';

import ErrorBooundary from './components/error-boundary/erroe-boundary.component';

import Header from './components/header/header.component';

import { GlobalStyles } from './global.styles.jsx';

import Contact from './pages/contact-us/contact-us.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import CurrentUserContext from './contexts/current-user/current-user.context';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() =>
	import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

class App extends React.Component {
	unsubscribeFromAuth = null;
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			}

			this.setState({ currentuser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		console.log(this.state.currentUser);
		return (
			<div>
				<GlobalStyles />
				<CurrentUserContext.Provider value={this.state.currentUser}>
					<Header />
				</CurrentUserContext.Provider>
				<Switch>
					<ErrorBooundary>
						<Suspense fallback={<Spinner />}>
							<Profiler
								id='homepage'
								onRender={(id, phase, acctualDuration) =>
									console.log({ id, phase, acctualDuration })
								}
							>
								<Route exact path='/' component={HomePage} />
							</Profiler>
							<Route path='/Shop' component={ShopPage} />
							<Route
								exact
								path='/checkout'
								component={CheckoutPage}
							/>
							<Route
								exact
								path='/signin'
								render={() =>
									this.state.currentUser ? (
										<Redirect to='/' />
									) : (
										<SignInAndSignUpPage />
									)
								}
							/>
							<Route exact path='/contact' component={Contact} />
						</Suspense>
					</ErrorBooundary>
				</Switch>
			</div>
		);
	}
}

export default App;
