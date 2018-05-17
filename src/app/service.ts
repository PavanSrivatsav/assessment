import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class Service {

  constructor(private http: HttpClient) {
  }

  // Uses http.get() to load data from a single API endpoint
  getQuizzes() {
    return this.http.get('http://192.168.2.119:8098/quiz/get/all/linked');
  }

  getQuiz(link) {
    return this.http.get(link);
  }

}

