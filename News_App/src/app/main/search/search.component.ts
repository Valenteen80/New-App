import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class FormComponent {
  public search: string = '';
  public placeholderValue: string = 'Что ищите?...';

  @Output() public onAddSearch: EventEmitter<string> = new EventEmitter();

  public inputEvent(): void {
    this.onAddSearch.emit(this.search);
  }
}
