import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-sod-banki',
  templateUrl: './sod-banki.component.html',
  styleUrls: ['./sod-banki.component.scss']
})
export class SodBankiComponent implements OnInit {
  public bankInterest: FormGroup;
  // public calcType: string[] = [];
  constructor() { }
  ngOnInit(): void {
      this.formInit()
  }
  formInit() {
    this.bankInterest = new FormGroup({
      loan: new FormControl('', [Validators.pattern('[0-9\/]*'), Validators.required]),
      payPerMonth: new FormControl('', Validators.pattern('[0-9\/]*'),),
      years: new FormControl('', [Validators.pattern('[0-9\/]*'), Validators.required]),
      profit: new FormControl('', [Validators.pattern('[0-9\/]*'), Validators.required]),
    })
  }
  calc(){}
}
