import { Component, EventEmitter, HostListener, Output } from '@angular/core';

import { HeroItem } from '../../models/models';
import { HeroItemComponent } from '../hero-item/hero-item.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroItemComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  heroItems: HeroItem[] = [
    {
      img: '/img/train-x-mansion.webp',
      title: 'Train at the X-Mansion',
      hosted: 'Hosted by Jubilee',
      status: 'đ961,757 per guest',
    },
    {
      img: '/img/kevinhart.webp',
      title: 'Go VIP with Kevin Hart',
      hosted: 'Hosted by Kevin Hart',
      status: 'Coming August 21',
    },
    {
      img: '/img/doja.webp',
      title: 'Join a living room session with Doja',
      hosted: 'Hosted by Doja Cat',
      status: 'Coming October',
    },
    {
      img: '/img/purplerainhouse.webp',
      title: "Stay in Prince's Purple Rain house",
      hosted: 'Hosted by Wendy and Lisa',
      status: 'Coming October',
    },
    {
      img: '/img/janhvi.webp',
      title: 'Live like Bollywood star Janhvi Kapoor',
      hosted: 'Hosted by Janhvi Kapoor',
      status: 'Sold out',
    },
    {
      img: '/img/olympicorsay.webp',
      title: "Open the Olympic Games at Musée d'Orsay",
      hosted: 'Hosted by Mathieu Lehanneur',
      status: 'Sold out',
    },
    {
      img: '/img/orsay.webp',
      title: "Wake up in the Musée d'Orsay",
      hosted: 'Hosted by Mathieu Lehanneur',
      status: 'Sold out',
    },
    {
      img: '/img/insideout.webp',
      title: 'Make core memory with Inside out 2',
      hosted: 'Hosted by Joy',
      status: 'Sold out',
    },
    {
      img: '/img/supersuit.webp',
      title: 'Design your Incredibles Supersuit',
      hosted: 'Hosted by Edna Mode',
      status: 'Sold out',
    },
    {
      img: '/img/feid.webp',
      title: 'Go on tour with Feid',
      hosted: 'Hosted by Feid',
      status: 'Sold out',
    },
  ];

  @Output() scrollEvent = new EventEmitter<boolean>();

  lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = document.documentElement.scrollTop;
    console.log(st);

    if (st > this.lastScrollTop) {
      this.scrollEvent.emit(false);
    } else {
      this.scrollEvent.emit(true);
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
