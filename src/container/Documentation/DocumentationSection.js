import React, { Component } from "react";
import { getSectionByUrl } from "../../utils/documentation/getDocuments";
import SectionList from "../../components/Documentation/SectionList";

export default class DocumentationSection extends Component {
  constructor(props) {
    super(props);

    const currentUrl = this.href.substr(this.href.lastIndexOf("/") + 1);

    this.state = {
      sections: "",
      url: currentUrl
    };

    this.getEntries();
  }

  getEntries() {
    getSectionByUrl(this.state.url).then(sections => {
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
          <SectionList
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
