import {Component, OnInit} from '@angular/core';
import {Service} from './service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{

  constructor(private _service: Service, private router: Router) { }

  ngOnInit() {
    console.log('started main component');
    this.router.navigate(['/quiz-list']);
  }

}
