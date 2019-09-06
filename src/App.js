import React from 'react'
import { Admin } from 'react'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider(
  'http://jsonplaceholder.typicode.com'
);

const App = () => <Admin dataProvider={dataProvider} />

export default App;
