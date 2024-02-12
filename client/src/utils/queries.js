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

// export const QUERY_ALL_STOCKS = gql`
//     query stocks {
//         stock{
//             _id
//             ticker
//             name
//         }
//     }
// `;