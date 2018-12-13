import React, { Component } from "react";
import { getEntriesByType } from "../../utils/documentation/getDocuments";
import SectionList from "./SectionList";

export default class HomeWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: ""
    };

    this.getEntries();
  }

  getEntries() {
    getEntriesByType("section").then(sections => {
      this.setState({
        sections: sections
      });
    });
  }

  renderEntries() {
    let allPages = [];
    if (this.state.sections) {
      this.state.sections.forEach(element => {
        allPages.push(
          <SectionList
            title={element.fields.sectionTitle}
            url={element.fields.url}
            articles={JSON.stringify(element.fields.articles)}
          />
        );
      });
    }

    return allPages;
  }

  render() {
    return this.renderEntries();
  }
}
