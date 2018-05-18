import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizDetailsComponent} from './quiz-details/quiz-details.component';
import {AppComponent} from './app.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'quiz/:id', component: QuizDetailsComponent },
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
