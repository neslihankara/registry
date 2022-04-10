import styled from 'styled-components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

const GetUsers = gql`
  query GetUsers {
    users {
      name
      email
    }
  }
`;

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const { loading, error, data } = useQuery(GetUsers, { pollInterval: 2000 });

  return (
    <StyledApp>
      <h1>Welcome</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.users.map((user: { name: string }) => <h5>{user.name}</h5>)
      )}
    </StyledApp>
  );
}

export default App;
