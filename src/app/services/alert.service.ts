import { Injectable } from '@angular/core';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
const types = ['success', 'error', 'info', 'warning'];
@Injectable()
export class AlertService {
  options: GlobalConfig;
  constructor(public toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
    this.options.closeButton = true;
    this.options.progressBar = true;
    this.options.progressAnimation = "increasing";
  }
  showMessage(message, title, type) {
    this.toastr.show(
      message,
      title,
      this.options,
      this.options.iconClasses[type],
    );
  }
  success(message, title) {
    this.showMessage(message, title, types[0]);
    return true;
  }
  error(message, title) {
    this.showMessage(message, title, types[1]);
    return false;
  }
  info(message, title) {
    this.showMessage(message, title, types[2]);
    return true;
  }
  warning(message, title) {
    this.showMessage(message, title, types[3]);
    return false;
  }
}
