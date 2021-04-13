import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache()
});

const JOBS = gql`
  {jobs {title}}
`;

function Getjobs1() {
  const { loading, error, data } = useQuery(JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data => (
    <div>
      <p>
        {data}
      </p>
    </div>
  );
}

function Getjobs() {
  const { loading, error, data } = useQuery(JOBS);
  console.log(data)
}

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
          <h2>Getjobs</h2>
          <button onClick={Getjobs}>get jobs</button>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
