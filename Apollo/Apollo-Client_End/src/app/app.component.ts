import { Component } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from "graphql-tag";
import {window} from "@angular/platform-browser/src/browser/tools/browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GraphQL';

  constructor(apollo: Apollo) {

    const queryUsers = gql`
          {
            getUsers{
              id
              name 
            }
          } 
          `;

    apollo.query({
      query: queryUsers,
    }).subscribe((({ data, loading }) => {
      console.log(data.getUsers)
      document.getElementById("item1").innerHTML = data.getUsers[0].name;
      document.getElementById("item2").innerHTML = data.getUsers[1].name;
    });
  }

}
