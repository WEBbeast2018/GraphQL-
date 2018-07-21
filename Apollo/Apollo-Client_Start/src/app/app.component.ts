import { Component } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from "graphql-tag";
import {window} from "@angular/platform-browser/src/browser/tools/browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// TODO
// Query for users
// Update UI

export class AppComponent {
  title = 'GraphQL';

  constructor(apollo: Apollo) {


  }

}
