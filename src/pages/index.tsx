/** @jsxImportSource theme-ui */

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import JSONData from "../content/portfolio.json";
import {
  Articles,
  Contact,
  Education,
  Experience,
  FeaturedPortfolio,
  Footer,
  Header,
  Hero,
  Services,
  Testimonials,
} from "../components/home";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Global from "../components/Global";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <main
        sx={{
          position: "relative",
        }}
      >
        <Global />
        <Header />
        <Hero />
        <Services />
        <FeaturedPortfolio />
        {/* <Experience /> */}
        {/* <Articles /> */}
        <Testimonials />
        <Education />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>{site.siteMetadata.title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </>
  );
};
