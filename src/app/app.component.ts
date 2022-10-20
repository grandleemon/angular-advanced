import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.minLength(8)],
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
