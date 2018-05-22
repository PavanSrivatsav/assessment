import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Service} from "../service";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  token:string;
  isTokenValid:boolean;

  constructor(private _service:Service, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.token = params.token;
      console.log(this.token);
      _service.verifyToken(this.token).subscribe(
        data => {
          this.isTokenValid = (!!data);
          console.log(data, this.isTokenValid);
        },
        // the second argument is a function which runs on error
        err => console.error(err),
        // the third argument is a function which runs on completion
        () => {
          console.log('Done verifying token');
          console.log("Response from server for validation: ", this.isTokenValid);
        }
      )
    });
  }

  ngOnInit() {
  }

}
