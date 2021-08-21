import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppHeader from '../app-header/app-header'
import { CartPage, MainPage, MenuItemPage } from '../pages'
import bgImg from './food-bg.jpg'

const App = () => {
  return (
    <div
      style={{ background: `url(${bgImg}) center center/cover no-repeat` }}
      className="app"
    >
      <AppHeader total={50} />

      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>

        <Route path="/cart" exact>
          <CartPage />
        </Route>

        <Route path="/menu/:id">
          <MenuItemPage />
        </Route>

        <Route>
          <MainPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
