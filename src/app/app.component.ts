import {Component, Inject, OnInit} from '@angular/core';
import {Service} from './service';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from "@angular/common";
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
    this.document.location.href = 'http://192.168.2.119/core';
  }

}
