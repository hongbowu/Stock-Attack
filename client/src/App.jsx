import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { StockProvider } from "./utils/stockContext";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

//search bar

function App() {
  // return <Homepage />;
  // return <Profile />;
  // return <Login />;
  // return <Signup />;
  return (
  <StockProvider>
  <ApolloProvider client={client}>
    <Header />
      <Nav />
      <Outlet />
    <Footer />
  </ApolloProvider>
  </StockProvider>
  );
}

export default App;