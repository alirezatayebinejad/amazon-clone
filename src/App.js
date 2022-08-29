import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import { BasketProvider } from "./contexts/basketContext";
import SignIn from "./pages/SignIn/SignIn";
import Payment from "./pages/Payment/Payment";

function App() {
	return (
		<BasketProvider>
			<BrowserRouter>
				<div className="app">
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Header />
									<Home />
								</>
							}
						></Route>
						<Route
							path="/checkout"
							element={
								<>
									<Header />
									<Checkout />
								</>
							}
						></Route>
						<Route
							path="/sign-in"
							element={
								<>
									<SignIn />
								</>
							}
						></Route>
						<Route
							path="/payment"
							element={
								<>
									<Header />
									<Payment />
								</>
							}
						></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</BasketProvider>
	);
}

export default App;
