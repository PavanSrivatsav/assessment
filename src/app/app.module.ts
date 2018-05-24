import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Service} from './service';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import {RouterModule, Routes, Router} from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';
import {AppInterceptor} from "./app.interceptor";
import {TokenComponent} from "./token/token.component";
import {AppRoutingModule} from "./app.routing.module";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";

@NgModule({
  declarations: [
    AppComponent,
    QuizDetailsComponent,
    QuizListComponent,
    QuizComponent,
    TokenComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [Service,
    {provide:HTTP_INTERCEPTORS, useClass:AppInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
