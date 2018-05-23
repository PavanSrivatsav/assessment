import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    let token = localStorage.getItem("jwtToken");
    const authReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        token
      )
    });
    console.log(authReq);
    console.log(authReq.body);
    return next.handle(authReq);
  }
}
