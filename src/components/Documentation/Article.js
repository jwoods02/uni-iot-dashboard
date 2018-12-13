import React, { Component } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default class Article extends Component {
  render() {
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node =>
          //   console.log(
          //     "NODE",
          //     node.data.target.fields.file.url
          //   )
          `<img src=${("https:",
          node.data.target.fields.file.url)} class="img-fluid"/>`
      }
    };
    return (
      <div>
        <h1>{this.props.data.fields.title}</h1>
        <p className="text-muted">
          Last updated:{" "}
          {new Date(this.props.data.fields.lastUpdated).toString()}
        </p>
        {console.log(this.props.data.fields.article)}
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(
              this.props.data.fields.article,
              options
            )
          }}
        />
        {}
      </div>
    );
  }
}
