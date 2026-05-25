import { Component, ElementRef, OnInit, AfterViewInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  private http = inject(HttpClient);
  private el = inject(ElementRef);

  repos = signal<GithubRepo[]>([]);
  loading = signal(true);
  error = signal(false);
  skeletons = [1, 2, 3, 4, 5, 6];

  ngOnInit() {
    this.http
      .get<GithubRepo[]>(
        'https://api.github.com/users/adriianluna/repos?sort=updated&direction=desc&per_page=12',
        { headers: { Accept: 'application/vnd.github+json' } }
      )
      .subscribe({
        next: (data) => {
          this.repos.set(data.filter((r) => !r.fork).slice(0, 9));
          this.loading.set(false);
        },
        error: () => {
          this.error.set(true);
          this.loading.set(false);
        },
      });
  }

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
      { threshold: 0.08 }
    );
    observer.observe(this.el.nativeElement.querySelector('.projects__inner'));
  }

  formatName(name: string): string {
    return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }

  getStack(repo: GithubRepo): string[] {
    const stack: string[] = [];
    if (repo.language) stack.push(repo.language);
    stack.push(...(repo.topics ?? []).slice(0, 3));
    return stack.slice(0, 4);
  }
}
