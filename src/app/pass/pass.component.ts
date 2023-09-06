import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PassService } from './pass.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css'],
})
export class PassComponent  {
  password: string = '';
  hasMinLength: boolean = false;
  hasUpperCase: boolean = false;
    lowercase: boolean = false;
        specialcase: boolean = false;
          number: boolean = false;

  checkPassword() {
    this.hasMinLength = this.password.length >= 8;
    this.hasUpperCase = /[A-Z]/.test(this.password);
    this.number=/[0-9]/.test(this.password)
    this.lowercase=/[a-z]/.test(this.password)
    this.specialcase=/[@,#,$,%,*,^,&,?,/]/.test(this.password)

  }

  isPasswordValid(): boolean {
    return this.hasMinLength && this.hasUpperCase;
  }
}
