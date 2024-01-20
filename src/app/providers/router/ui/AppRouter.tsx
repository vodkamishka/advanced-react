import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = (): JSX.Element => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              {Object.values(routerConfig).map(({ element, path }) => (
                  <Route
                            key={path}
                            path={path}
                            element={
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            }
                        />
              ))}
          </Routes>
      </Suspense>
  )
}

export default AppRouter
