import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class Service {
  body:any;
  headers:HttpHeaders;

  constructor(private http: HttpClient) {
  }

  // Uses http.get() to load data from a single API endpoint
  getQuizzes() {
    return this.http.get('http://localhost:8098/quiz/all/linked');
  }

  // getQuiz(link) {
  //   return this.http.get(link);
  // }

  getIndQuiz(id) {
    return this.http.get('http://localhost:8098/quiz/'+id);
  }

  getQuestionLinks(quizId) {
    return this.http.get('http://localhost:8098/question/assessment/'+quizId);
  }

  getQuestion(link) {
    return this.http.get(link);
  }

  verifyToken(token:string) {
    this.body = {"token" : token};
    this.headers = (new HttpHeaders())
      .set('Content-type', 'application/json')
      .set('Accept', 'application/json');
    return this.http.post('http://localhost:8098/security/verifyToken', this.body, {headers: this.headers});
  }

}

