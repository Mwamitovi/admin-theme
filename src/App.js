import React from 'react'
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Resource } from 'react-admin'
import { UserList } from './users'

const dataProvider = jsonServerProvider(
  'http://jsonplaceholder.typicode.com'
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={UserList} />
  </Admin>
);

export default App;
