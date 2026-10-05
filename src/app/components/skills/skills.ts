import { Component, ElementRef, AfterViewInit } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent implements AfterViewInit {
  skills: Skill[] = [
    { name: 'React', icon: 'devicon-react-original colored', category: 'Frontend' },
    { name: 'Angular', icon: 'devicon-angularjs-original colored', category: 'Frontend' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'Frontend' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'Frontend' },
    { name: 'HTML5', icon: 'devicon-html5-original colored', category: 'Frontend' },
    { name: 'CSS3', icon: 'devicon-css3-original colored', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', category: 'Frontend' },
    { name: 'Flutter', icon: 'devicon-flutter-plain colored', category: 'Mobile' },
    { name: 'Dart', icon: 'devicon-dart-plain colored', category: 'Mobile' },
    { name: '.NET / C#', icon: 'devicon-dotnetcore-plain colored', category: 'Backend' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'Backend' },
    { name: 'Java', icon: 'devicon-java-original colored', category: 'Backend' },
    { name: 'Spring Boot', icon: 'devicon-spring-original colored', category: 'Backend' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', category: 'Database' },
    { name: 'SQL / MySQL', icon: 'devicon-mysql-original colored', category: 'Database' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'DevOps' },
    { name: 'Git', icon: 'devicon-git-original colored', category: 'Tools' },
  ];

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
      { threshold: 0.1 }
    );
    observer.observe(this.el.nativeElement.querySelector('.skills__inner'));
  }
}
