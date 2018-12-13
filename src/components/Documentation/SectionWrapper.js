import React, { Component } from "react";
import { getSectionByUrl } from "../../utils/documentation/getDocuments";
import Section from "./Section";

export default class SectionWrapper extends Component {
  constructor(props) {
    super(props);
    const fullUrl = window.location.pathname;
    const url = fullUrl.substring(fullUrl.lastIndexOf("/") + 1, fullUrl.length);

    this.state = {
      sections: "",
      url: url
    };

    this.getEntries();
  }

  getEntries() {
    getSectionByUrl(this.state.url).then(sections => {
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
