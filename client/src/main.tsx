import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import rootReducer from "./state/rootRecucer.ts";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Navigation/Header.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { SidebarProvider } from "./utils/SidebarContext.tsx";
import ApplyBox from "./components/ApplyBox.tsx";
import { Toaster } from "react-hot-toast";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		});
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistStore(store)}>
				<SidebarProvider>
					<BrowserRouter>
						<Header />
						<div className="applynow-box">
							<ApplyBox />
						</div>
						<App />
						<Footer />
						<Toaster />
					</BrowserRouter>
				</SidebarProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
