import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { StockProvider } from "./utils/stockContext";
// import Nav from "./components/nav";

//// -- WORKING CODE --
// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });


const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  
  const token = localStorage.getItem('id_token');
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  
  link: authLink.concat(httpLink),
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
      {/* <Nav /> */}
      <Outlet />
    <Footer />
  </ApolloProvider>
  </StockProvider>
  );
}

export default App;