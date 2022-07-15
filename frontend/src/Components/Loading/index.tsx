import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const MyLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={1}
    width={266.667}
    height={266.667}
    viewBox="0 0 266.667 266.667"
    backgroundColor="#fcfcfc"
    foregroundColor="#ecebeb"
    {...props}
  >
    <path d="M 0 100 v 100 h 200 V 0 H 0 v 100 z m 115.6 -88.9 c 18.1 3.2 33.2 10.9 46.8 23.8 C 180.7 52.5 190 74.3 190 100 c 0 25.7 -9.3 47.5 -27.6 65.1 c -17.7 16.8 -37.9 24.9 -62.4 24.9 s -44.7 -8.1 -62.4 -24.9 C 19.3 147.5 10 125.7 10 100 c 0 -25.7 9.3 -47.5 27.6 -65.1 C 50.8 22.3 64.5 15.1 82 11.5 c 8 -1.6 25.6 -1.9 33.6 -0.4 z" />
    <path d="M 91.8 31.1 c -22.6 2.6 -41.7 15.7 -53.7 37 c -6.8 12.2 -9.3 33 -5.7 48.3 c 5.7 24.4 26.9 45.5 51.2 51.2 c 8.8 2 24 2 32.8 0 c 24.3 -5.7 45.5 -26.9 51.2 -51.2 c 2 -8.8 2 -24 0 -32.8 c -4.5 -19.2 -18.8 -36.9 -37.4 -46.2 c -10.6 -5.3 -25.6 -7.8 -38.4 -6.3 z" />
  </ContentLoader>
);

export default MyLoader;
