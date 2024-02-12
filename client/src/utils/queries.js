import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
    query users {
        user {
            _id
            name
            email
            stocks{
                _id
                ticker
                name
            }
        }
    }
`;

export const QUERY_ALL_STOCKS = gql`
    query stocks {
        stock{
            _id
            ticker
            name
        }
    }
`;

export const QUERY_SINGLE_USERS = gql`
    query getUser($users: _id) {
        user(_id: ID){
            _id
            name
            email
            stocks{
                _id
                ticker
                name
            }
        }
    }
`;

export const QUERY_SINGLE_STOCKS = gql`
    query getStock($stocks: _id) {
        stock(_id: ID) {
            _id
            ticker
            name
        }
    }
        
`;