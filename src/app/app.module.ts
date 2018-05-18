import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Service} from './service';
import { QuizComponent } from './quiz/quiz.component';
import {RouterModule, Routes} from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'quiz-list', component: QuizListComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizListComponent
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
