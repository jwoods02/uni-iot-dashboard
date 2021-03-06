import React, { Component } from "react";
import { Link } from "react-router-dom";

function ArticleList(props) {
  const articles = JSON.parse(props.articles);
  const listItems = articles.map(article => {
    return (
      <Link
        to={"/documentation/article/" + article.fields.url}
        state={{ url: article.fields.url }}
        style={{ textDecoration: "none" }}
      >
        <li className="list-group-item">{article.fields.title}</li>
      </Link>
    );
  });
  return <ul className="list-group">{listItems}</ul>;
}

export default class SectionList extends Component {
  render() {
    return (
      <div>
        <Link
          to={"/documentation/section/" + this.props.url}
          state={{ url: this.props.url }}
          style={{ textDecoration: "none" }}
        >
          <h2>{this.props.title}</h2>
        </Link>
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
}
