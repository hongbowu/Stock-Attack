import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";

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


function App() {
  // return <Homepage />;
  // return <Profile />;
  // return <Login />;
  // return <Signup />;
  return (
  <ApolloProvider client={client}>
    <Header />
      <Nav />
      <Outlet />
    <Footer />
  </ApolloProvider>
  );
}

export default App;