// import './App.css'
// import Dashboard from './pages/dashboard';
// import Homepage from './pages/homepage';
// import Login from './pages/login';
// import Signup from './pages/signup';
// save the import for advance
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";

const client = new ApolloClient({
  uri: "/graphql",
  cache: InMemoryCache(),
});

function App() {
  // return <Homepage />;
  // return <Dashboard />;
  // return <Login />;
  // return <Signup />;
<ApolloProvider
}

export default App;
