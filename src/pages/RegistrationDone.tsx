import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE } from '../Router'

export function RegistrationDone() {
  return (
    <div>
      You're done. <Link to={ROUTE.LOGIN}>Login</Link> and try out WebAuth
    </div>
  )
}
