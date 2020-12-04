import { NavLink } from 'react-router-dom'

import routes from '../pages/routes'

function PageLayout({ title, children }) {
  return (
    <div className="container lg:mx-auto p-4 pb-24">
      {title && <h1 className="text-5xl font-bold mb-12">{title}</h1>}
      <ul className="mb-8">
        {routes.map((route) => (
          <li key={route.path} className="inline-block mr-4 hover:underline">
            <NavLink to={route.path} activeClassName="text-blue-500 font-bold">
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
}

export default PageLayout
