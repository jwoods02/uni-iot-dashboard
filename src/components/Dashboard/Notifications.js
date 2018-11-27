import React, { Component } from "react";
import '../../App.css';

class Notifications extends Component {
  render() {
    return (
      <div id="content-wrapper">
        <h1 className="ml-3">Notifications</h1>
        <div class="list-group col">
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start blue"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start blue"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start blue"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start blue"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start blue"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start blue"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </a>
        </div>
      </div>
    );
  }
}

export default Notifications;