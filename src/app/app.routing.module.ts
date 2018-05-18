import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {AppComponent} from './app.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'quiz-list', component: QuizListComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {


}
