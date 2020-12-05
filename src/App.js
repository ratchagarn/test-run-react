import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import './App.css'

import routes from './pages/routes.js'

import NotFoundPage from './pages/NotFoundPage.js'

const queryCache = new QueryCache()

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          {routes.map((route, i) => (
            <Route
              key={route.path}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
          <Route path="*" exact component={NotFoundPage} />
        </Switch>
      </Router>
    </ReactQueryCacheProvider>
  )
}

export default App
