import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-errored',
  templateUrl: './errored.component.html',
  styleUrls: ['./errored.component.scss'],
})
export class ErroredComponent  implements OnInit {

  @Input() status!:Status
  constructor() { }

  ngOnInit() {}

}

type Status = "loading" | "errored" | "active"