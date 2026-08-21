import React from 'react';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css/normalize.css';
import Footer from './Footer';
import Search from './search/SearchModal';
import { SearchModalContextProvider } from '../contexts/searchModalContext';
import GlobalImageCarousel from './GlobalImageCarousel';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search />
      <Header />
      <main>{children}</main>
      <GlobalImageCarousel />
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;