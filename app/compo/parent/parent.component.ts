import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentItem = "data from parent comonent";
  isChild = false;

  constructor() {
    console.log("parent constructor")

   }

  ngOnInit(): void {
    console.log("parent oninit")

  }
  showme(){
    this.isChild=!this.isChild
  }
}
