import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req);
  }
}
