import React from "react"
import { Route } from "react-router-dom"
import { useAuth } from "./AuthContext"
import Login from "./Login"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Login/>
      }}
    >
    </Route>
  )
}
