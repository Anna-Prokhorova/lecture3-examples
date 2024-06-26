import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.less'],
})
export class FormsComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);

  public email: string = '';
  public select: '1' | '2' | '3' | '' = '';
  public checkbox: boolean = false;

  public myForm: FormGroup = this.formBuilder.group({
    email: FormControl<string>,
    select: FormControl<string>,
    checkbox: FormControl<boolean>,
  });

  ngOnInit(): void {
    this.initForm();
    this.myForm.controls['email'].valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(console.log);

    this.myForm.valueChanges.subscribe(console.log);
  }

  public sendForm(type: 'template-driven' | 'reactive'): void {
    console.log(type);

    if (type === 'template-driven') {
      console.log(this.email);
      console.log(this.select);
      console.log(this.checkbox);
    } else if ('reactive') {
      console.log(this.myForm.value);
    }
  }

  public initForm(): void {
    this.myForm = this.formBuilder.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      select: [''],
      checkbox: [false],
    });
  }
}
