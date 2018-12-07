import React, { Component } from "react";
import { getEntriesByType } from "../../utils/documentation/getDocuments";
import Section from "../../components/Documentation/Section";

export default class DocumentationHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: ""
    };

    this.getEntries();
  }

  getEntries() {
    getEntriesByType("section").then(sections => {
      console.log(sections);
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
          <Section
            title={element.fields.sectionTitle}
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
