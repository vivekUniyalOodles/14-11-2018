import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'; 
import { GlobalServiceService } from "../global-service.service"
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private http :HttpClient,public router :Router,private service:GlobalServiceService) { }
 
  public submit = false;
  public response : any;
  public loginErr  = false;

  // on form submit the fnction will check valid form and submit already or not
  registerUser(form){
    if(form.valid && !this.submit){      
      this.submit=true;
      // calling post data service for login
      this.service.postData(form.value,environment.login).subscribe(
        success => {        
          this.response=success;
          // status contains the response from server
          if(this.response.status ==true){     
            //  checks the errors 
            if(!Object.keys(this.response.error).length){            
              // verifying login 
              if(this.response.data.login==true){                              
                localStorage.setItem('user', form.form.controls.username.value);
                this.router.navigateByUrl("/dashboard");
              }else{
                this.loginErr=true;
              }
            }
          }
         this.submit=false;
        },error => {
          console.log('error=', error);
          this.submit=false;
      });
    }


  }


  ngOnInit() {
  }

}
