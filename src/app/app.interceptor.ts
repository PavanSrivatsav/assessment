import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {Router} from "@angular/router";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  handlerObservable:Observable<HttpEvent<any>>

  constructor(private router: Router) {}

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    let token = localStorage.getItem("jwtToken");
    const httpHeaders = new HttpHeaders({
      'Authorization': token
    });
    if (token != null){
      req = req.clone({headers: req.headers.set('Authorization', token)});
      console.log(req);
      this.handlerObservable = next.handle(req);
      this.handlerObservable.subscribe(
        data => {},
        error => {
          this.router.navigate(["/unauthorized"]);
        },
        () => {
          console.log("Here");
        }
      );
      return next.handle(req)/*this.handlerObservable*/;
    } else {
      return next.handle(req);
    }
  }
}
