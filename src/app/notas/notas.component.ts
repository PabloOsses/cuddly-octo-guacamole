import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
  
})
export class NotasComponent implements OnInit {

  lista:Array<String>=[];

  constructor() { }

  ngOnInit(): void {
  }

}
