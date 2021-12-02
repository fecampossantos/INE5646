/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import '../index.scss';
import { Provider } from 'react-redux';
import { useStore } from 'store';
import { updateUser } from 'action/user';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  // const [loading, setLoading] = useState(!!getJwt());
  const { user } = store.getState();

  // const loadCurrentUser = async () => {
  //   const { dispatch } = store;

  //   await api().users.current()
  //     .then(res => dispatch(updateUser(res.data)))
  //     .catch(e => console.error('error on auth', e))
  //     .finally(() => setLoading(false));
  // };

  // useEffect(() => {
  //   if (getJwt()) loadCurrentUser();
  // }, []);

  return (
    <>
      <Head>

        {/* Open Sans font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" /> 
        {/* End Open Sans font */}

        <title>Sheets and Dragons</title>
        <meta
          name="description"
          content="Hora de jogar"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />

        <style type="text/css">
          {`
          html {
            --background: ${theme.palette.background.default};
            --secondary: darken(${theme.palette.secondary.main}, 30%);
            --primary: ${theme.palette.primary.main};
            --error: ${theme.palette.error.main};
            --borderRadius: ${theme.shape.borderRadius};
          }
        `}
        </style>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
