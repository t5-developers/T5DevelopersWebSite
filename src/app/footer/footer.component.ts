import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('move', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => left', [
        style({ transform: 'translateX(100%)' }),
        animate(200)
      ]),
      transition('left => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ]),
      transition('void => right', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('right => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {
  date: number;


  public imagesUrl;
  public slideConfig;

  @Input() images: [any];
  @Input() autoRotate = true;
  @Input() autoRotateAfter = 5000;
  @Input() autoRotateRight = true;
  public safeUrls = [];

  public state = 'void';
  public disableSliderButtons = false;
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.date = new Date().getFullYear()
    this.imagesUrl = ['assets/img/clientlogo/penoply_logo.jpg','assets/img/clientlogo/we.png'];

    if (this.autoRotate) {
      const source = interval(this.autoRotateAfter);
      this.subscription = source.subscribe(() =>
        (this.autoRotateRight) ? this.moveLeft() : this.moveRight());
    }
  }
  moveLeft() {
    if (this.disableSliderButtons) {
      return;
    }
    this.state = 'right';
    this.imageRotate(this.imagesUrl, true);
  }

  moveRight() {
    if (this.disableSliderButtons) {
      return;
    }
    this.state = 'left';
    this.imageRotate(this.imagesUrl, false);
  }

  imageRotate(arr, reverse) {
    if (reverse) {
      arr.unshift(arr.pop());
    } else {
      arr.push(arr.shift());
    }
    return arr;
  }

  onFinish($event) {
    this.state = 'void';
    this.disableSliderButtons = false;
  }

  onStart($event) {
    this.disableSliderButtons = true;
  }
}