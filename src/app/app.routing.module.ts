import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizDetailsComponent} from './quiz-details/quiz-details.component';
import {AppComponent} from './app.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {TokenComponent} from "./token/token.component";
import {QuizComponent} from "./quiz/quiz.component";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";


const routes: Routes = [
  { path: 'token/:token', component: TokenComponent},
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quizDetails/:id', component: QuizDetailsComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', component: QuizListComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  declarations: []
})
export class AppRoutingModule {


}
