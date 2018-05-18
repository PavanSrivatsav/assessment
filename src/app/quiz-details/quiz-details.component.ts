import {Component, Input, OnInit} from '@angular/core';
import { Service } from '../service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css'],  
})
export class QuizDetailsComponent implements OnInit {

  public indQuiz;

  constructor(private _service:Service,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {     
        this.getQuiz(params.id);        
    });
   
    }

  ngOnInit() {
    console.log('inside ind quiz');    
  }
getQuiz(id){
  this._service.getIndQuiz(id).subscribe(
    // the first argument is a function which runs on success
    data => {
      this.indQuiz = data;    
    },
    // the second argument is a function which runs on error
    err => console.error(err),
    // the third argument is a function which runs on completion
    () => {
      console.log('done loading indv quiz');
    }
  );
}
}
