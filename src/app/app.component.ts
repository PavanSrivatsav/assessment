import {Component, Inject, OnInit} from '@angular/core';
import {Service} from './service';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from "@angular/common";
import {AppSettings} from "./AppSettings";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{

  constructor(private _service: Service,private route:ActivatedRoute, private router: Router, @Inject(DOCUMENT) private document: any) {}

  ngOnInit() {
    console.log('started main component');
    console.log(this.router.url);
  }

  goToPreviousUI() {
    localStorage.removeItem("jwtToken");
    localStorage.clear();
    console.log(AppSettings.CORE_APPLICATION_END_POINT);
    this.document.location.href = AppSettings.CORE_APPLICATION_END_POINT;
  }

}
