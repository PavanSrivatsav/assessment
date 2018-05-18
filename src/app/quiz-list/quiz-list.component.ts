import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {Router} from '@angular/router';
import {QuizDetailsComponent} from '../quiz-details/quiz-details.component';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public quizzes;
  public quiz;

  constructor(private _service: Service, private router: Router) { }

  ngOnInit() {
    this.getQuizzes();
  }

  getQuizzes() {
    this._service.getQuizzes().subscribe(
      // the first argument is a function which runs on success
      data => { this.quizzes = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading quizzes')
    );
  }

  // getQuiz(link) {
  //   console.log('hai');
  //   this._service.getQuiz(link).subscribe(
  //   // the first argument is a function which runs on success
  //   data => {
  //     this.quiz = data;
  //   },
  //   // the second argument is a function which runs on error
  //   err => console.error(err),
  //   // the third argument is a function which runs on completion
  //   () => {
  //     console.log('done loading indv quiz');
  //     this.router.navigate(['/quiz/'+this.quiz.id]);
  //   }
  // );
    
  // }

  goToQuizDetails(quiz){    
    this.router.navigate(['/quiz/'+quiz.quizId]);
  }

}
