import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from "./AppSettings";

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class Service {
  body: any;
  headers: Headers;
  ASSESSMENT:string = AppSettings.ASSESSMENT_API_END_POINT;

  constructor(private http: HttpClient) {
  }

  // Uses http.get() to load data from a single API endpoint
  getQuizzes() {
    return this.http.get( this.ASSESSMENT + '/quiz/all/linked');
  }

  // getQuiz(link) {
  //   return this.http.get(link);
  // }

  getIndQuiz(id) {
    return this.http.get(this.ASSESSMENT + '/quiz/' + id);
  }

  getQuestionLinks(quizId) {
    return this.http.get(this.ASSESSMENT + '/question/assessment/' + quizId);
  }

  getQuestion(link) {
    return this.http.get(link);
  }

  /*verifyToken(token: string) {
    this.body = {"token": token};

    return this.http.post('http://192.168.2.119:8098/security/verifyToken', this.body, httpOptions);

  }*/

  decryptToken(token: string) {
    const headerOptions = {
      headers: new HttpHeaders({
        'encryptedToken': token,
      }),
      responseType: 'text' as 'text'
    };

    return this.http.get(AppSettings.SECURITY_API_END_POINT + '/api/v2/token/decrypt', headerOptions);

  }

}

