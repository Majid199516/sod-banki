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
      loanName: new FormControl('',  Validators.required),
      payPerMonth: new FormControl('', Validators.pattern('[0-9\/]*'),),
      years: new FormControl('', [Validators.pattern('^(0[1-9]|1[01])$'), Validators.required]),
      profit: new FormControl('', [Validators.pattern('[0-9\/]*'), Validators.required]),
    })
    this.bankInterest.controls['payPerMonth'].disable()
  }
  calc(){
    if(this.bankInterest.invalid) {
      this.bankInterest.markAllAsTouched()
    } else {
      let loan = +this.bankInterest.controls['loan'].value
      let payPerMonth = +this.bankInterest.controls['payPerMonth'].value
      let years = +this.bankInterest.controls['years'].value
      let profit = +this.bankInterest.controls['profit'].value
      let perMonthWithoutProfit = loan / years
      let monthes = years * 12
      for(let i:number=0; i < years; i++ ){
        console.log(i);
        
      }
      
    }
    
  }
}
