import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken')
  const location = useLocation()

  if (!authToken) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedRoute 