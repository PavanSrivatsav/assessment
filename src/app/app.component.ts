import {Component, OnInit} from '@angular/core';
import {Service} from './service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{

  constructor(private _service: Service,private route:ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log('started main component');
    console.log(this.router.url);
  }

}
