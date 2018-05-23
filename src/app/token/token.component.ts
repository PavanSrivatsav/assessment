import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Service} from "../service";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  encryptedToken:string;
  token:any;

  constructor(private _service:Service, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams
    this.activatedRoute.params.subscribe(params => {
      this.encryptedToken = params.token;
      _service.decryptToken(this.encryptedToken).subscribe(
        data => {
          this.token = data;
        },
        // the second argument is a function which runs on error
        err => console.error(err),
        // the third argument is a function which runs on completion
        () => {
          console.log('Done verifying token');
          console.log("Response from server for validation: ", this.token);
          localStorage.setItem("jwtToken", this.token);
          this.router.navigate(['']);
        }
      )
    });
  }

  ngOnInit() {
  }

}
