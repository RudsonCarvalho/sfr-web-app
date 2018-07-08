import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';
//import { FileSecurityService } from '@app/core/services/filesecurity.service';

const log = new Logger('Upload');

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  version: string = environment.version;
  error: string;
  componentForm: FormGroup;
  isLoading = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private i18nService: I18nService) {
    this.createForm();
  }

  ngOnInit() { }

  private createForm() {
    this.componentForm = this.formBuilder.group({
      file: ['', Validators.required],      
      remember: false
    });
  }

}