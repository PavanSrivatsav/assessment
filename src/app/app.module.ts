import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Service} from './service';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import {RouterModule, Routes, Router} from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'quiz/:id', component: QuizDetailsComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz', component: QuizComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    QuizDetailsComponent,
    QuizListComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})

export class AppModule {

}
