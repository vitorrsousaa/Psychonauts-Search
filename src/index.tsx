import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FavoritesContextProvider } from './context/FavoritesContext';
import { SearchNameProvider } from './context/SearchContext';
import { theme } from './styles/theme';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={ theme }>
      <SearchNameProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </SearchNameProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

