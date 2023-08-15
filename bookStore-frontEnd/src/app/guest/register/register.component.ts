import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user : User = new User();
  faUser = faUserCircle;
  errorMessage : string = "";

  constructor(private authenticationService : AuthenticationService, private router : Router) {

  }

  ngOnInit(){
    if (this.authenticationService.currentUserValue?.id){
      this.router.navigate(['/profile']);
      return
    }
  }

  register(){
    this.authenticationService.register(this.user).subscribe(data => {
      this.router.navigate(['/login']);
    }, error => {
      if(error?.status === 409){
        this.errorMessage = "Username already exists.";
      }else{
        this.errorMessage = "Unexpected error occurred. Error is: " + error?.errorMessage;
        console.log(error);
      }
    });
  }
}
