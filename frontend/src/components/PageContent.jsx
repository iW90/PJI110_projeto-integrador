import React from 'react';
import HomePage from '../pages/HomePage';
import CalculatorPage from '../pages/CalculatorPage';

// Componente de Conteúdo
function	PageContent({ pagina }) {
	if (pagina === 'home') {
	  return <HomePage />;
	} else if (pagina === 'calc') {
	  return <CalculatorPage />;
	} else {
		return null;
	}


	// } else if (pagina === 'mngt') {
	//   return <ManagementPage />;
	// } else if (pagina === 'srch') {
	//   return <SearchPage />;
	// }
  
}

export default PageContent;