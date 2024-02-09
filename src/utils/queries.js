import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    query users {
        users {
            _id
            username
            stocks
        }
    }
`;
