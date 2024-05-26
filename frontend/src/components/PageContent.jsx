import React from 'react';
import HomePage from '../pages/HomePage';
import PointListPage from '../pages/PointListPage/PointListPage';
import ManagementPage from '../pages/ManagementPage/ManagementPage';
import SearchPage from '../pages/SearchPage/SearchPage';

function PageContent({ pagina, floors, setFloors }) {
    if (pagina === 'home') {
        return <HomePage />;
    } else if (pagina === 'calc') {
        return <PointListPage />;
    } else if (pagina === 'mngt') {
        return <ManagementPage floors={floors} setFloors={setFloors} />; /* Pass floors and setFloors as props */
    } else if (pagina === 'srch') {
        return <SearchPage />;
    } else {
        return null;
    }
}

export default PageContent;
