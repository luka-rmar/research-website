import bootstrapStyles from "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { scroller } from "react-scroll";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
// import List from "./list";
// import Post from "./post";
// import Loading from "./loading";
import Title from "./title";
// import PageError from "./page-error";

import Home from "../pages/home";

const Theme = ({ state }) => {
  // const data = state.source.get(state.router.link);
  const [scrollValue, setScrollValue] = useState(0);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <script
          src={`"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"`}
          type="text/javascript"
          async
          contentEditable={{
            symbols: [
              {
                proName: "FOREXCOM:SPXUSD",
                title: "S&P 500",
              },
              {
                proName: "FOREXCOM:NSXUSD",
                title: "Nasdaq 1000",
              },
              {
                proName: "FX_IDC:EURUSD",
                title: "EUR/USD",
              },
              {
                proName: "BITSTAMP:ETHUSD",
                title: "ETH/USD",
              },
              {
                description: "USD",
                proName: "BITBAY:BTCUSD",
              },
            ],
            showSymbolLogo: true,
            colorTheme: "dark",
            isTransparent: false,
            largeChartUrl: "https://be.capital/",
            displayMode: "adaptive",
            locale: "br",
          }}
        />
      </Head>

      <Global styles={globalStyles} />
      <Global styles={bootstrapStyles} />

      {/* <HeadContainer> */}
      <Header />
      {/* </HeadContainer> */}

      <Main>
        <Switch>
          <Home />
          {/* <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} /> */}
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Titillium Web";

    text-decoration: none;
    list-style: none;
  }

  html,
  body,
  #root {
    height: 100%;
    background: #fff;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;

// const HeadContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   background-color: #1f38c5;
// `;

const Main = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 140px;
`;
