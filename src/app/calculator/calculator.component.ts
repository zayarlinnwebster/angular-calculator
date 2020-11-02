import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  input:string = '';
  result:string = ''

  pressChar(char: string){
    const lastNum = this.lastInput;

    if(char == '.') 
      if(this.input != '')
        if(lastNum.lastIndexOf('.') >= 0) 
          return;

    if(char == '0') {
      if(this.input == '') 
        return;
    
      if(lastNum === '/' || lastNum === '*' || lastNum === '+' || lastNum === '-') 
        return;
    }
          
    this.input += char;
    this.calcAnswer();
  }

  pressOperator(op: string) {
    const lastKey = this.lastInput;

    if(lastKey === '/' || lastKey === '*' || lastKey === '+' || lastKey === '-') 
        return;

    this.input += op;
    this.calcAnswer();
  }

  allClear() {
    this.input = '';
    this.result = '';
  }

  calcAnswer() {
    let formula = this.input;
    let lastKey = this.lastInput;

    if(lastKey === '.')
      formula = formula.substr(0, formula.length - 1);

    lastKey = formula[formula.length - 1];

    if(lastKey === '/' || lastKey === '*' || lastKey === '+' || lastKey === '-') 
        formula = formula.substr(0, formula.length - 1);

    this.result = eval(formula);
  }

  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    
    if(this.input == '0')
      this.input = '';
  }

  get lastInput(): string {
    return this.input[this.input.length - 1]
  }

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
