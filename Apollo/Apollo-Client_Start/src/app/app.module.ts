import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


// TODO
// Initialize apollo client
// Create link to server

export class AppModule {
  // Initialize apollo client
  constructor(apollo: Apollo, httpLink: HttpLink) {
   // Put your code here
  }
}

