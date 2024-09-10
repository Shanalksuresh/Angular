import { Component } from '@angular/core';

@Component({
  selector: 'app-student-registeration',
  templateUrl: './student-registeration.component.html',
  styleUrl: './student-registeration.component.css'
})
export class StudentRegisterationComponent {
  public std = ""
  ngOnInit() {
    console.log(this.std)
  }
  Std = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
  }
  Register() {
    console.log("click", this.std);



  }
  printThispage(){
    window.print();
  }
}



