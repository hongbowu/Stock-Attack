import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_STOCK = gql`
  mutation addStock($ticker: String! name: String!) {
    addStock(ticker: $ticker, name: $name) {
      ticker
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: $String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const REMOVE_STOCK = gql`
  mutation removeStock($ticker: String!) {
    removeStock(ticker: $ticker) {
        _id
        ticker
        name
    }
  }
`;