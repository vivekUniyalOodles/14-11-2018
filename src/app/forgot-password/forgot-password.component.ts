import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  isLinear = false;
  forgetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9]\.?([a-zA-Z0-9!_.-])*@([a-zA-Z0-9-])+\.([a-zA-Z0-9-])+\.?([a-zA-Z0-9]{2})$')]]
    });
  }
}