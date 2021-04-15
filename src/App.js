import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './routes/Home'
import { Chart } from './routes/Chart'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Layout>  
    </Router>
  )
}