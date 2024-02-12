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
    query getUser($userId: ID) {
        user(_id: $userId){
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
    query getStock($stockId: ID) {
        stock(_id: $stockId) {
            _id
            ticker
            name
        }
    }
        
`;