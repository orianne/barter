import { Component, OnInit } from '@angular/core';
import { BarterService } from '../../service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-slide-page',
  templateUrl: './slide-page.component.html',
  styleUrls: ['./slide-page.component.scss']
})
export class SlidePageComponent implements OnInit {

  data = []
  fullData
  currentIndex = 0
  match
  yourImage
  friendImage
  myId = environment.myId
  approve

  constructor(private service: BarterService) { }

  ngOnInit() {
    this.service.getAllProducts().then(data => {
      this.fullData = data
      data.forEach(product => {
        if (product.userId !== this.myId)
          this.data.push(product)
      });
      this.currentIndex = Math.round(Math.random() * this.data.length)
    })
  }

  clickDecline() {
    this.data.splice(this.currentIndex, 1)
  }

  clickRefresh() {
    this.currentIndex = (this.currentIndex + 1) % this.data.length

  }

  clickApprove() {
    this.approve = true
    let body = {
      userId: environment.myId,
      productId: this.data[this.currentIndex].id
    }
    this.service.addLike(body.userId, body.productId).then(res => {
      this.friendImage = this.data[this.currentIndex].image
      let index = this.fullData.findIndex(product => product.userId === environment.myId)
      this.yourImage = this.data[index].image
      if (res)
        this.match = true
      else this.clickRefresh()
      this.approve = false
    })
  }

  continue() {
    this.match = false

  }

}
