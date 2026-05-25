import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  scrollTo(id: string) {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
