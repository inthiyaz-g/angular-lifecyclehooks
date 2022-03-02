import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() item =  ' ';
  @Input() parentItem='';

  constructor() {
    console.log("child constructor")
   }
  ngOnInit(): void {
    console.log("child on init")

  }
ngOnChanges(changes: SimpleChanges): void {
    console.log("child ng on chnages")

}
}
