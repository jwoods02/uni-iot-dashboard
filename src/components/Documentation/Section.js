import React, { Component } from "react";

function ArticleList(props) {
  const articles = JSON.parse(props.articles);
  const listItems = articles.map(article => <li>{article.fields.title}</li>);
  return <ul>{listItems}</ul>;
}

export default class Section extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
}
