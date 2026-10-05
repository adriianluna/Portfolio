import { Component, ElementRef, AfterViewInit, signal } from '@angular/core';

interface Project {
  name: string;
  description?: string;
  technologies?: string[];
  images?: string[];
  url?: string;
  role?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent implements AfterViewInit {
  openIndex = signal(-1);

  projects: Project[] = [
    {
      name: 'Velare - Panel Web',
      description:
        'Plataforma web desarrollada en equipo para la gestión integral de Velare. Desde este panel, los administradores controlan toda la operativa del negocio: gestión de pedidos, configuración de restaurantes, usuarios y zonas de reparto. Los propios restaurantes acceden para configurar sus horarios, carta, precios y ajustes. La facturación está automatizada mediante integración directa con la API de FactuSol, generando y sincronizando facturas sin intervención manual.',
      technologies: ['React', '.NET', 'PostgreSQL', 'FactuSol API'],
      role: 'Fullstack Developer',
    },
    {
      name: 'Velare - App Cliente',
      description:
        'Aplicación orientada al usuario final dentro del ecosistema Velare, desarrollada en equipo. Permite realizar pedidos a restaurantes con un flujo de compra completo: selección de productos, carrito, y múltiples métodos de pago (en efectivo o con tarjeta mediante Stripe). Incluye seguimiento del pedido en tiempo real mediante la API de Google Maps, mostrando la ubicación del repartidor con actualización automática desde la app de repartidor. El usuario recibe notificaciones del estado de su pedido en cada fase del proceso.',
      technologies: ['React', '.NET', 'Stripe', 'Google Maps API'],
      role: 'Fullstack Developer',
    },
    {
      name: 'Velare - App Repartidor',
      description:
        'Aplicación diseñada para los repartidores de la plataforma Velare, desarrollada en equipo. Recibe notificaciones push en tiempo real cuando un cliente realiza un pedido, permitiendo al repartidor aceptarlo o rechazarlo. Una vez aceptado, su geolocalización se transmite en tiempo real a la app de cliente mediante Google Maps, para que el usuario pueda seguir la entrega en todo momento. Incluye historial de pedidos y gestión del estado de cada entrega.',
      technologies: ['React', '.NET', 'Google Maps API'],
      role: 'Fullstack Developer',
    },
    {
      name: 'Velare - Datáfono',
      description:
        'Aplicación de punto de venta físico (TPV) desarrollada en equipo para los establecimientos de Velare. Se conecta a un dispositivo de cobro físico para procesar pagos con tarjeta de forma presencial. Incluye impresión automática de tickets tras cada transacción, sin necesidad de intervención manual. Integrada con el backend central de Velare para mantener sincronizados los pedidos y cobros.',
      technologies: ['React', '.NET'],
      role: 'Fullstack Developer',
    },
  ];

  constructor(private el: ElementRef) {}

  toggle(index: number) {
    this.openIndex.set(this.openIndex() === index ? -1 : index);
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
}
