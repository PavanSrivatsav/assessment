import { Component } from '@angular/core';
import {Service} from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public quizzes;
  public quiz;

  constructor(private _service: Service) { }

  ngOnInit() {
    console.log('started quiz component');
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
  getQuiz(link){
    this._service.getQuiz(link).subscribe(
      // the first argument is a function which runs on success
      data => { this.quiz = data, console.log(data)},

      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading indv quiz')
    );
  }
}
