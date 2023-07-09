import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { routes } from 'routes';

export const App = () => {
  return (
    <>
      <h2>App</h2>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.COUNTRY} element={<CountrySearch />} />
          <Route path={routes.COUNTRY_ID} element={<Country />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} replace />} />
      </Routes>
    </>
  );
};
