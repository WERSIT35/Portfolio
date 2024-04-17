import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import Aos from 'aos';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isMenuOpen: boolean = false;

  toggleNav() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Check if the clicked element is outside the menu and the hamburger icon
    const menu = document.querySelector('.menubar');
    const hamburger = document.querySelector('.hamburger');
    if (!menu?.contains(event.target as Node) && !hamburger?.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }
  }


  touchStartX: number = 0;

onTouchStart(event: TouchEvent) {
  this.touchStartX = event.touches[0].clientX;
}

onTouchMove(event: TouchEvent) {
  if (this.isMenuOpen) {
    const touchMoveX = event.touches[0].clientX;
    const deltaX = touchMoveX - this.touchStartX;
    const menu = document.querySelector('.menubar') as HTMLElement; // Narrowed type to HTMLElement
    if (menu) {
      menu.style.transform = `translateX(${Math.max(0, deltaX)}px)`;
    }
  }
}

onTouchEnd(event: TouchEvent) {
  const touchEndX = event.changedTouches[0].clientX;
  const deltaX = touchEndX - this.touchStartX;
  const menuWidth = (document.querySelector('.menubar') as HTMLElement)?.clientWidth || 0; // Narrowed type to HTMLElement
  if (deltaX > menuWidth / 2) {
    this.isMenuOpen = false;
  }
  const menu = document.querySelector('.menubar') as HTMLElement; // Narrowed type to HTMLElement
  if (menu) {
    menu.style.transform = '';
  }
}

}
