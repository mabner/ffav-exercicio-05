import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() filter = '';
  @Output() newFilterEvent = new EventEmitter<string>();

  onInputChange(name: string) {
    this.newFilterEvent.emit(name);
    console.log(name);
  }

  constructor() {}

  ngOnInit(): void {}
}
