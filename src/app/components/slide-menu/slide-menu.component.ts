import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MenuItem } from '../../models/models';

@Component({
  selector: 'app-slide-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-menu.component.html',
})
export class SlideMenuComponent {
  menuItems: MenuItem[] = [
    {
      img: '/img/menu-icon/icons.webp',
      title: 'Icons',
    },
    {
      img: '/img/menu-icon/room.webp',
      title: 'Rooms',
    },
    {
      img: '/img/menu-icon/beachfront.webp',
      title: 'Beachfront',
    },
    {
      img: '/img/menu-icon/amazingpool.webp',
      title: 'Amazing pools',
    },
    {
      img: '/img/menu-icon/earthhome.webp',
      title: 'Earth homes',
    },
    {
      img: '/img/menu-icon/breakfast.webp',
      title: 'Bed & Breakfasts',
    },
    {
      img: '/img/menu-icon/mansion.webp',
      title: 'Mansions',
    },
    {
      img: '/img/menu-icon/luxe.webp',
      title: 'Luxe',
    },
    {
      img: '/img/menu-icon/amazingview.webp',
      title: 'Amazing views',
    },
    {
      img: '/img/menu-icon/omg.webp',
      title: 'OMG!',
    },
    {
      img: '/img/menu-icon/cabin.webp',
      title: 'Cabins',
    },
    {
      img: '/img/menu-icon/play.webp',
      title: 'Play',
    },
    {
      img: '/img/menu-icon/minsus.webp',
      title: 'Minsus',
    },
    {
      img: '/img/menu-icon/offthegrid.webp',
      title: 'Off-the-grid',
    },
    {
      img: '/img/menu-icon/trending.webp',
      title: 'Trending',
    },
    {
      img: '/img/menu-icon/riads.webp',
      title: 'Riads',
    },
    {
      img: '/img/menu-icon/lakefront.webp',
      title: 'Lakefront',
    },
    {
      img: '/img/menu-icon/boats.webp',
      title: 'Boats',
    },
    {
      img: '/img/menu-icon/tinyhomes.webp',
      title: 'Tiny homes',
    },
    {
      img: '/img/menu-icon/houseboats.webp',
      title: 'Houseboats',
    },
    {
      img: '/img/menu-icon/islands.webp',
      title: 'Islands',
    },
  ];
}
