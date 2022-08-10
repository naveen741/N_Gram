import { gql } from '@apollo/client';
export const SIGNIN = gql`
  query ($signinUserInput: CreateUserInput!) {
    signin(signinUserInput: $signinUserInput) {
      status
      message
    }
  }
`;
export const SIGNUP = gql`
mutation($signupUserInput:CreateUserInput!){
  signup(signupUserInput: $signupUserInput){
    status
    message
  }
}
`;