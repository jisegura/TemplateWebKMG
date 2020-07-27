import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroupDirective, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-kmg-login',
  templateUrl: './kmg-login.component.html',
  styleUrls: ['./kmg-login.component.scss']
})
export class KmgLoginComponent implements OnInit {

  hide = true;

  logInForm: FormGroup;
  submitted: boolean;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.logInForm = this.fb.group({
      tm1server: [null, Validators.required],
      username: [null, Validators.required],
      password: [null]
    });

    this.submitted = false;

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  isDisabled(): boolean{
    return !this.logInForm.valid;
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    if (!this.submitted) {
      console.log("form summit", this.returnUrl);
      this.submitted = true;

      //this.router.navigate([this.returnUrl]);

      this.router.navigate(['/module', 1]);

      //const categoria: Categoria = {
      //  Nombre: formData.value.nombre
      //} as Categoria;

      //this.categoriaDataService.create(categoria).subscribe(next => {

      //}, error => {
      //  this.submitted = false;
      //}, () => {
      //  formDirective.resetForm();
      //  this.categoriaForm.reset();
      //  this.submitted = false;
      //})
    }
  }

}
