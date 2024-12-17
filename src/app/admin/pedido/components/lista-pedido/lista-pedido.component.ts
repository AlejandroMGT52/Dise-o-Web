import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-pedido', // Selector del componente
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.scss']
})
export class ListaPedidoComponent {
  images: any[] = [
    {
      source:
        'https://www.motofichas.com/images/phocagallery/yamaha/yzf-r6-race-2024/10-yamaha-yzf-r6-race-2024-estudio-negro-01.jpg',
      thumbnail:
        'https://www.motofichas.com/images/phocagallery/yamaha/yzf-r6-race-2024/10-yamaha-yzf-r6-race-2024-estudio-negro-01.jpg',
      alt: 'Yamaha YZF-R6 Race 2021-2024',
      title: 'Yamaha YZF-R6 Race 2021-2024'
    },
    {
      source:
        'https://www.motofichas.com/images/cache/10-aprilia-rs-660-2024-estudio-negro-01-739-a.jpg',
      thumbnail:
        'https://www.motofichas.com/images/cache/10-aprilia-rs-660-2024-estudio-negro-01-739-a.jpg',
      alt: 'Aprilia RS 660 2020-2024',
      title: 'Aprilia RS 660 2020-2024'
    },
    {
      source:
        'https://www.motofichas.com/images/phocagallery/Honda/cbr500r-2024/10-honda-cbr500r-2024-estudio-rojo-01.jpg',
      thumbnail:
        'https://www.motofichas.com/images/phocagallery/Honda/cbr500r-2024/10-honda-cbr500r-2024-estudio-rojo-01.jpg',
      alt: 'Honda CBR500R 2024',
      title: 'Honda CBR500R 2024'
    },
    {
      source:
        'https://www.motofichas.com/images/phocagallery/Aprilia/rs-125-2024/10-aprilia-rs-125-2024-estudio-blanco-azul-01.jpg',
      thumbnail:
        'https://www.motofichas.com/images/phocagallery/Aprilia/rs-125-2024/10-aprilia-rs-125-2024-estudio-blanco-azul-01.jpg',
      alt: 'Aprilia RS 125 2021-2024',
      title: 'Aprilia RS 125 2021-2024'
    },
    {
      source:
        'https://www.motofichas.com/images/cache/02-mitt-125-gp-limited-2021-estudio-rojo-739-a.jpg',
      thumbnail:
        'https://www.motofichas.com/images/cache/02-mitt-125-gp-limited-2021-estudio-rojo-739-a.jpg',
      alt: 'MITT GP 125 2021-2024',
      title: 'MITT GP 125 2021-2024'
    }
  ];
}

