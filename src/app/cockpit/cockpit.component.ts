import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

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

  @Output() reset = new EventEmitter<{}>();

  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    if (nameInput.value !== '' && contentInput.value !== '') {
      this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
    } else {
      alert('Invalid input');
    }

    this.clearInput();
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    if (nameInput.value !== '' && contentInput.value !== '') {
      this.bluePrintCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
    } else {
      alert('Invalid input');
    }

    this.clearInput();
  }

  resetClick() {
    this.reset.emit();
  }

  clearInput() {
    const elements = document.getElementsByTagName('input');
    for (let i = 0; i < elements.length; i++) {
      elements[i].value = '';
    }
  }
}
