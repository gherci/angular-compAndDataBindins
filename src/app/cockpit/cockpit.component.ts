import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  // newServerName = '';
  // newServerContent = '';

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(element: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: element.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(element: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: element.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
