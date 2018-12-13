import React, { Component } from "react";
import Article from "./Article";
import { getArticleByUrl } from "../../utils/documentation/getDocuments";

export default class ArticleWrapper extends Component {
  constructor(props) {
    super(props);
    const fullUrl = window.location.pathname;
    const url = fullUrl.substring(fullUrl.lastIndexOf("/") + 1, fullUrl.length);

    this.state = {
      data: "",
      url: url
    };

    this.getData();
  }

  getData() {
    getArticleByUrl(this.state.url).then(article => {
      console.log(article);
      this.setState({
        data: article[0]
      });
    });
  }

  render() {
    if (this.state.data) {
      return <Article data={this.state.data} />;
    } else {
      return <p />;
    }
  }
}
