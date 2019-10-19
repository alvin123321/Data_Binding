import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit() {}

  onAddServer() {
    if (this.newServerName !== '' && this.newServerContent !== '') {
      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
    } else {
      alert('Invalid input');
    }

    this.clearInput();
  }

  onAddBlueprint() {
    if (this.newServerName !== '' && this.newServerContent !== '') {
      this.bluePrintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
    } else {
      alert('Invalid input');
    }

    this.clearInput();
  }

  clearInput() {
    this.newServerName = '';
    this.newServerContent = '';
  }
}
