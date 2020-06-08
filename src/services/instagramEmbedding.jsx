import * as React from 'react';
import {Helmet} from "react-helmet";

 class InstagramEmbedding extends React.Component {
   render() {
     return (
      <Helmet>
        <script async src='https://www.instagram.com/embed.js'/>
      </Helmet>
    );
  }
}
 export default InstagramEmbedding;