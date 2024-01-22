import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

const AppRouter = (): JSX.Element => {
    return (

        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>

    );
};

export default AppRouter;
