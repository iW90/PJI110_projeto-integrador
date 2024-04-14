import React from 'react';
import HomePage from '../pages/HomePage';
import PointListPage from '../pages/PointListPage/PointListPage';
import ManagementPage from '../pages/ManagementPage/ManagementPage';
import SearchPage from '../pages/SearchPage/SearchPage'

// Componente de Conteúdo
function	PageContent({ pagina }) {
	if (pagina === 'home') {
	  return <HomePage />;
	} else if (pagina === 'calc') {
	  return <PointListPage />;
	} else if (pagina === 'mngt') {
	  return <ManagementPage />;
	} else if (pagina === 'srch') {
	return <SearchPage />;
	} else {
		return null;
	}
}

export default PageContent;