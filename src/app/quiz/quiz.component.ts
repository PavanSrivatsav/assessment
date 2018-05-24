import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public quizQuestionLinks;
  public quizQuestion;
  public currentQuestion:number;

  constructor(private _service:Service,private activatedRoute: ActivatedRoute, private router: Router) {
    this.currentQuestion=1;
    this.activatedRoute.params.subscribe(params => {
        this.getQuestionLinks(params.id);
    });
  }

  ngOnInit() {
    console.log("inside quiz");
  }

  getQuestionLinks(quizId){
    this._service.getQuestionLinks(quizId).subscribe(
      // the first argument is a function which runs on success
      data => {
        this.quizQuestionLinks = data;
      },
      // the second argument is a function which runs on error
      err => {
        console.error(err);
        this.router.navigate(["/unauthorized"]);
      },
          // the third argument is a function which runs on completion
        () => {
          console.log('done loading indv quiz links');
          this.getQuestion();
        }
    );
  }

  // getQuestions(quizId){
  //   this._service.getQuestionLinks(quizId).subscribe(
  //     // the first argument is a function which runs on success
  //     data => {
  //       this.quizQuestion = data;
  //     },
  //     // the second argument is a function which runs on error
  //     err => console.error(err),
  //     // the third argument is a function which runs on completion
  //     () => {
  //       console.log('done loading indv quiz');
  //     }
  //   );
  // }
  nextQn(){
    this.currentQuestion++;

    this.getQuestion();
  }

  previousQn(){
    this.currentQuestion--;

    this.getQuestion();
  }

  getQuestion() {
    let link=this.quizQuestionLinks[this.currentQuestion-1].links[0].href;
    this._service.getQuestion(link).subscribe(
      // the first argument is a function which runs on success
      data => {
        this.quizQuestion = data;
      },
      // the second argument is a function which runs on error
      err => {
        console.error(err);
        this.router.navigate(["/unauthorized"]);
      },
      // the third argument is a function which runs on completion
      () => {
        console.log('done loading indv quiz');
      }
    );
  }

}
