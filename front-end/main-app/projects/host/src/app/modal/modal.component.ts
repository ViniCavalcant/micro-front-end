import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isVisible = false;
  @Input() title = '';
  @Input() message = '';
  @Input() confirmButtonText = 'Confirmar';
  
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  close(): void {
    this.isVisible = false;
    this.cancel.emit();
  }

  onCancel(): void {
    this.isVisible = false;
    this.cancel.emit();
  }

  onConfirm(): void {
    this.isVisible = false;
    this.confirm.emit();
  }
}
