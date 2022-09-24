import {Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() message: any;
  @Output() close = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  closeModal() {
    this.close.emit();
  }
}
