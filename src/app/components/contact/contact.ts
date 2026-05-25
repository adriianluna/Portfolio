import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(this.el.nativeElement.querySelector('.contact__inner'));
  }
}
