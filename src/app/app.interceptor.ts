import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor,
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
    let token = sessionStorage.getItem("jwtToken");
    if (token != null){
      const authReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          token
        )
      });
      this.handlerObservable = next.handle(authReq);
      this.handlerObservable.subscribe(
        data => {},
        error => {
          this.router.navigate(["/unauthorized"]);
        },
        () => {

        }
      );
      return next.handle(authReq)/*this.handlerObservable*/;
    } else {
      return next.handle(req);
    }
  }
}
