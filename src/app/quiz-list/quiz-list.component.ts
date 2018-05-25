import {Component, Inject, OnInit} from '@angular/core';
import {Service} from '../service';
import {Router} from '@angular/router';
import {QuizDetailsComponent} from '../quiz-details/quiz-details.component';
import {DOCUMENT, LocationChangeListener, PlatformLocation} from "@angular/common";
import {Observable} from "rxjs/index";
import {AppSettings} from "../AppSettings";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public quizzes;
  public redirect:boolean = true;

  constructor(private _service: Service, private router: Router, platformLocation: PlatformLocation, @Inject(DOCUMENT) private document: any) {
    platformLocation.onPopState((e) => {
      console.log(e.state.navigationId);
      console.log("Redirecting to core...", this.redirect);
      if (this.redirect && e.state.navigationId == 1) {
        localStorage.removeItem("jwtToken");
        localStorage.clear();
        this.document.location.href = AppSettings.CORE_APPLICATION_END_POINT;
      }
    });
  }

  ngOnInit() {
    this.getQuizzes();
  }

  getQuizzes() {
    this._service.getQuizzes().subscribe(
      // the first argument is a function which runs on success
      data => { this.quizzes = data},
      // the second argument is a function which runs on error
      err => {
        console.error(err)
        this.router.navigate(["/unauthorized"]);
      },
        // the third argument is a function which runs on completion
        () => console.log('done loading quizzes')
    );
  }

  goToQuizDetails(quiz){
    this.redirect = false;
    this.router.navigate(['/quizDetails/'+quiz.quizId]);
  }

}
