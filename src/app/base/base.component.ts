import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BasePageComponent implements OnInit {
  frm = new FormGroup({})
  constructor() { }

  ngOnInit(): void {
  }

}
