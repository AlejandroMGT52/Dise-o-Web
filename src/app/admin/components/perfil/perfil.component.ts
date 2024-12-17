import { Component } from '@angular/core';
import { CardModule } from 'primeng/card'; // Importamos CardModule
import { ImageModule } from 'primeng/image'; // Importamos ImageModule
import { ButtonModule } from 'primeng/button'; // Importamos ButtonModule
import { CommonModule } from '@angular/common'; // Importamos CommonModule

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  // Lista de tarjetas con temas de fechas festivas
  cards = [
    {
      imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/EDGNF3TDWVFHZD4FG5RCPKSRFM.jpg',
      title: 'Fiestas de Quito 2024',
      subtitle: 'Cultura y tradición',
      content: 'Desfiles, danzas, conciertos y fuegos artificiales. ¡No te lo pierdas!',
      detailsUrl: 'https://www.pichincha.gob.ec/images/2024/pdf/agenda-por-fiestas-de-quito-2024-ok.pdf'
    },
    {
      imageUrl: 'https://hastalavuelta.com/wp-content/uploads/2016/12/webhlvs.jpg',
      title: 'Navidad en Quito',
      subtitle: 'Luces y magia navideña',
      content: 'Disfruta de la iluminación navideña y eventos familiares en la ciudad.',
      detailsUrl: 'https://gk.city/2024/12/11/que-hacer-en-navidad-en-quito-2024/'
    },
    {
      imageUrl: 'https://www.radioactiva.cl/wp-content/uploads/2023/12/Shows-Fuegos-Artificiales-600x315.webp',
      title: 'Año Nuevo 2024',
      subtitle: 'Fuegos artificiales',
      content: 'Recibe el año con espectaculares fuegos artificiales y conciertos.',
      detailsUrl: 'https://www.tiktok.com/discover/eventos-para-fin-de-a%C3%B1o-2024-en-quito'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF8vQDldEKrZOyKUy-hIkWlOxBAxz3gRuTA&s',
      title: 'Día de Reyes',
      subtitle: 'Tradición y cultura',
      content: 'Celebra el Día de Reyes con actividades culturales y gastronómicas.',
      detailsUrl: 'https://koe.ec/KOE-Noticia-dia-reyes-ecuador'
    },
    {
      imageUrl: 'https://ecuatoriando.com/wp-content/uploads/2024/11/quitofest-2024.jpg',
      title: 'Festival de Música',
      subtitle: 'Eventos en vivo',
      content: 'Vive una experiencia única con conciertos de artistas nacionales e internacionales.',
      detailsUrl: 'https://www.quitofest.com/'
    },
    {
      imageUrl: 'https://www.eltelegrafo.com.ec/media/k2/items/cache/e162349597a2fd81aa104487b8a0bf00_XL.jpg',
      title: 'Carnaval 2024',
      subtitle: 'Colores y alegría',
      content: 'Comparsas, juegos de agua y mucha diversión para todas las edades.',
      detailsUrl: 'https://www.lanacion.com.ar/feriados/2025/cuando-es-el-carnaval-2025-nid03102024/'
    }
  ];

  // Lógica de los botones
  onButtonClick(detailsUrl?: string) {
    if (detailsUrl) {
      window.open(detailsUrl, '_blank'); // Abre la URL en una nueva pestaña
    } else {
      alert('No hay detalles disponibles para este evento.');
    }
  }
}
