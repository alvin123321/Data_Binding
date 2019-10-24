import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;

  constructor() {
    console.log('Constructor Called');
  }

  ngOnChanges(changes: any) {
    console.log('1.ngOnchanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('2.ngOnInit Called! - ', this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('3.ngDoCheck Called!');
  }

  ngAfterContentInit() {
    console.log('4.ngAfterContentInit Called!');
  }

  ngAfterContentChecked() {
    console.log('5.ngAfterContentChecked Called!');
  }

  ngAfterViewInit() {
    console.log(
      '6.ngAfterViewInit Called! - ',
      this.header.nativeElement.textContent
    );
  }

  ngAfterViewChecked() {
    console.log('7.ngAfterViewChecked Called!');
  }

  ngOnDestroy() {
    console.log('8.ngOnDestroy Called!');
  }
}
