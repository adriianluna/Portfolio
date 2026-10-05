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
  openTeamIndex = signal(-1);
  openPersonalIndex = signal(-1);

  teamProjects: Project[] = [
    {
      name: 'Velare - Panel Web',
      description:
        'Plataforma web desarrollada en equipo para la gestión integral de Velare. Desde este panel, los administradores controlan toda la operativa del negocio: gestión de pedidos, configuración de restaurantes, usuarios y zonas de reparto. Los propios restaurantes acceden para configurar sus horarios, carta, precios y ajustes. La facturación está automatizada mediante integración directa con la API de FactuSol, generando y sincronizando facturas sin intervención manual.',
      technologies: ['Angular', '.NET', 'PostgreSQL', 'Redis', 'SignalR', 'FactuSol API'],
      role: 'Fullstack Developer',
    },
    {
      name: 'Velare - App Cliente',
      description:
        'Aplicación orientada al usuario final dentro del ecosistema Velare, desarrollada en equipo. Permite realizar pedidos a restaurantes con un flujo de compra completo: selección de productos, carrito, y múltiples métodos de pago (en efectivo o con tarjeta mediante Stripe). Incluye seguimiento del pedido en tiempo real mediante SignalR y Google Maps, mostrando la ubicación del repartidor con actualización automática desde la app de repartidor. El usuario recibe notificaciones push del estado de su pedido en cada fase del proceso mediante Firebase.',
      technologies: ['React', '.NET', 'Stripe', 'SignalR', 'Google Maps API', 'Firebase'],
      role: 'Fullstack Developer',
    },
    {
      name: 'Velare - App Repartidor',
      description:
        'Aplicación diseñada para los repartidores de la plataforma Velare, desarrollada en equipo. Recibe notificaciones push mediante Firebase cuando un cliente realiza un pedido, permitiendo al repartidor aceptarlo o rechazarlo. Una vez aceptado, su geolocalización se transmite en tiempo real a la app de cliente mediante SignalR y Google Maps, para que el usuario pueda seguir la entrega en todo momento. Incluye historial de pedidos y gestión del estado de cada entrega.',
      technologies: ['React', '.NET', 'SignalR', 'Google Maps API', 'Firebase'],
      role: 'Fullstack Developer',
    },
    {
      name: 'Velare - Datáfono',
      description:
        'Aplicación de punto de venta físico (TPV) desarrollada en equipo para los establecimientos de Velare. Se conecta a un dispositivo de cobro físico para procesar pagos con tarjeta de forma presencial. Incluye impresión automática de tickets tras cada transacción, sin necesidad de intervención manual. Integrada con el backend central de Velare para mantener sincronizados los pedidos y cobros.',
      technologies: ['React', '.NET', 'PostgreSQL'],
      role: 'Fullstack Developer',
    },
  ];

  personalProjects: Project[] = [
    {
      name: 'Rcenter',
      description:
        'Plataforma web fullstack para la gestión integral de eventos de motor. Conecta circuitos, corredores, tiendas y patrocinadores en un único ecosistema. Los circuitos crean eventos y carreras, los corredores se inscriben y pagan mediante Stripe, las tiendas reservan stands por metros cuadrados y los patrocinadores financian eventos. Incluye sistema de autenticación JWT con 5 roles diferenciados, mapas interactivos con Leaflet, ranking de corredores, recuperación de contraseña con rate limiting, y despliegue con Docker. Backend desplegado en Railway y frontend en Vercel.',
      technologies: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'Stripe', 'Leaflet', 'Docker'],
      role: 'Fullstack Developer',
    },
    {
      name: 'Carta Digital',
      description:
        'Aplicación móvil para que restaurantes puedan crear su propia carta de menú en PDF de forma sencilla, sin depender de diseñadores ni herramientas complejas. Permite gestionar categorías y platos con nombre, descripción, precio y variantes, personalizar la portada con imagen del restaurante, y configurar el diseño del PDF con bordes decorativos, tipografía elegante y separadores ornamentales. Incluye vista previa en tiempo real, ordenación manual mediante drag & drop, formato de doble columna, y exportación directa para compartir desde el móvil.',
      technologies: ['Flutter', 'Dart', 'Hive', 'PDF'],
      role: 'Desarrollador',
    },
  ];

  constructor(private el: ElementRef) {}

  toggleTeam(index: number) {
    this.openPersonalIndex.set(-1);
    this.openTeamIndex.set(this.openTeamIndex() === index ? -1 : index);
  }

  togglePersonal(index: number) {
    this.openTeamIndex.set(-1);
    this.openPersonalIndex.set(this.openPersonalIndex() === index ? -1 : index);
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
