import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';

import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
//import { FileSecurityService } from '@app/core/services/filesecurity.service';

const log = new Logger('Upload');

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  version: string = environment.version;
  error: string;  
  isLoading = false;
  form: FormGroup;
  files: FileList;

  @ViewChild('file') fileInput: ElementRef;

  constructor(private router: Router,
    private fb: FormBuilder,
    private i18nService: I18nService,
    private http: HttpClient) {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      file: null      
    });
  }


  ngOnInit() {}

  onFileChange(event:any) {
    this.files = event.target.files;
    
    if (event.target.files && event.target.files.length > 0) {
      const [file] = event.target.files;      
    }
  }

  onSubmit(value: any, event: Event) {

    console.log(this.files);

    const fileSend = this.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(fileSend);
    reader.onload = () => {

    

    }

    return false;
  }
  clearFile() {
    this.form.get('file').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}