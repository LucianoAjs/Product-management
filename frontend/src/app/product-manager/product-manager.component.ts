import { Component } from '@angular/core';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss'],
})
export class ProductManagerComponent {
  public list_items = [
    {
      name: 'Headset Gamer Havit',
      description:
        'Drivers 53mm, Microfone Plugável, P2, PC, PS4, XBOX ONE, Preto - HV-H2002D',
      price: 'R$ 189,99',
      purchaseDate: '06/04/2023',
      category: 'Eletronico',
    },
    {
      name: 'Processador Intel Core i5-10400F',
      description:
        '2.9GHz (4.3GHz Max Turbo), Cache 12MB, 6 Núcleos, 12 Threads, LGA 1200 - BX8070110400F',
      price: 'R$ 2000',
      purchaseDate: '06/04/2023',
      category: 'Eletronico',
    },
    {
      name: 'Teclado Mecânico Gamer HyperX Alloy MKW100',
      description: 'Teclado Mecânico Gamer HyperX Alloy MKW100',
      price: 'RGB, Switch Red, Full Size, Layout US - 4P5E1AA#ABA',
      purchaseDate: '06/04/2023',
      category: 'Eletronico',
    },
    {
      name: 'Notebook Asus AMD Ryzen 5-3500U',
      description:
        '8GB RAM, SSD 256GB, 15,6, Radeon Vega 8, Windows 11 Home, Cinza - M515DA-BR1213W',
      price: 'R$ 2.500,0',
      purchaseDate: '06/04/2023',
      category: 'Eletronico',
    },
    {
      name: 'Mouse Gamer Redragon Cobra',
      description: 'Chroma RGB, 12400DPI, 7 Botões, Preto - M711 V2',
      price: 'R$ 109,0',
      purchaseDate: '06/04/2023',
      category: 'Eletronico',
    },
  ];
}
