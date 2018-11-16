import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalServiceService } from "../global-service.service"
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public submit = false;
  public response : any;
  public loginErr  = false;

  constructor(private router:Router,private service:GlobalServiceService,public snackBar: MatSnackBar ) { 
    this.createForm();
  }

  public profileForm :FormGroup;

  createForm(){
    this.profileForm = new FormGroup({
      username: new FormControl('',[ Validators.required, Validators.minLength(2),Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('',[ Validators.required,Validators.pattern('^[a-zA-Z0-9]\.?([a-zA-Z0-9!_.-])*@([a-zA-Z0-9-])+\.([a-zA-Z0-9-])+\.?([a-zA-Z0-9]{2})$')]),
      password: new FormControl('',[ Validators.required, Validators.minLength(5),Validators.pattern('^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{5,}$')]),
      confirmPassword: new FormControl('',[ Validators.required ]),
    },{
      validators: this.validateConfirmPassword
    });
  }

  validateConfirmPassword(abstractControl : AbstractControl) {
    if( abstractControl.get('password').value == abstractControl.get('confirmPassword').value){
      return null;
    }else{
      abstractControl.get('confirmPassword').setErrors( {'MatchPassword': true} );
    }          
    
  }



  // on form submit the fnction will check valid form and submit already or not
  onSubmit() {
    if(this.profileForm.value && !this.submit){      
      this.submit=true;
      // calling post data service for registration
      this.service.postData(this.profileForm.value,environment.register).subscribe(
        success => {        
          this.response=success;
          // status contains the response from server
          if(this.response.status ==true){          
            //  checks the errors 
            if(!Object.keys(this.response.error).length){    
              // verifying register 
              if(this.response.data.register==true){              
                this.snackBar.open("Registration", "done", {
                  duration: 5000,
                });
                console.log("success");
                this.router.navigateByUrl("/");
              }else{
                this.loginErr=true;
              }
            }
          }
         this.submit=false;
        },error => {
          console.log('error=', error);
          this.snackBar.open("Registration", "error", {
            duration: 5000,
          });
          this.submit=false;
      });
    }
  }

  ngOnInit() {  
    
  }

}
