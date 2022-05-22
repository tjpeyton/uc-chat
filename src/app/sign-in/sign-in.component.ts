import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) 
              {
                this.form = this.fb.group({
                  email: new FormControl('', [
                    Validators.required,
                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                  ])
                })
               }

  ngOnInit(): void {
  }

  public submit() {
    localStorage.setItem('email', this.form.value.email);
    this.router.navigate(['chat'])
  }
}
