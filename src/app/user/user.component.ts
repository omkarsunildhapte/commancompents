import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnakbarService } from '../snakbar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBarService: SnakbarService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.snackBarService.showSuccessSnackBar('User created successfully!');
    }
    console.log(this.myForm.value);
  }
}
