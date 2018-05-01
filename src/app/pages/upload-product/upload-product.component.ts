import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Router } from '@angular/router';
import { BarterService } from '../../service';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss']
})
export class UploadProductComponent implements OnInit {

  @ViewChild("fileUpload") fileUploadElementRef: ElementRef
  fileUploadElement: HTMLInputElement
  loadingImage
  loadingAll
  imgUrl
  description

  constructor(private router: Router, private service: BarterService) {
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.fileUploadElement = this.fileUploadElementRef.nativeElement
  }

  stopPropagation() {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  click() {
    this.fileUploadElement.click()
  }

  handleFiles($event) {
    this.stopPropagation()
    let file = this.fileUploadElement.files[0]
    this.uploadFile(file)
  }

  private uploadFile(file) {
    this.imgUrl = null
    this.loadingImage = true
    this.stopPropagation()
    let url = `https://api.cloudinary.com/v1_1/${environment.cloudinary_cloud_name}/upload`;
    let xhr = new XMLHttpRequest();
    let fd = new FormData();

    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", (e) => {
      let progress = Math.round((e.loaded * 100.0) / e.total);
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        let url = response.secure_url;
        this.imgUrl = url
        this.loadingImage = false
      }
    };

    fd.append('upload_preset', environment.cloudinary_preset);
    fd.append('file', file);
    xhr.send(fd);
  }

  start() {
    this.loadingAll = true
    let body = {
      name: "orian",
      desc: this.description,
      image: this.imgUrl,
      userId: environment.myId
    }
    this.service.addProduct(body).then(res => {
      this.router.navigate(['slide-page']);
    })
  }


}
