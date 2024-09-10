import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  constructor(private getApi: ApicallService) {}
  ngOninit() {
    this.getApi.getPost().subscribe((res) => {
      console.log(res)
    })
  }


}
