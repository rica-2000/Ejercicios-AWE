import { Component } from '@angular/core';
import { Product } from '../../Interfaces/product.interface';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  imports: [NgClass, NgFor, NgIf, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, img: "https://th.bing.com/th/id/OIP.2fOoQ52EaTkcCl6eQEm-TAHaGL?rs=1&pid=ImgDetMain"},
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, img: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202210/06/00194612200868____8__1200x1200.jpg"},
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, img: "https://d500.epimg.net/cincodias/imagenes/2018/09/06/tablets/1536253402_943574_1536253538_sumario_normal_recorte1.jpg"},
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, img: "https://th.bing.com/th/id/OIP.lUMyrbUL9wIMjGRtBwwI9QHaFj?w=2400&h=1800&rs=1&pid=ImgDetMain"},
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, img: "https://th.bing.com/th/id/OIP.bPl3R1qP-Agt5mcttILp1QHaEK?rs=1&pid=ImgDetMain"},
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, img: "https://media.gamestop.com/i/gamestop/20000734/Logitech-G502-X-PLUS-LIGHTSPEED-Wireless-Gaming-Mouse?fmt=auto"},
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, img: "https://http2.mlstatic.com/impresora-laser-multifuncional-monocromo-brother-dcp-l2540dw-D_NQ_NP_985701-MPE20377194437_082015-F.jpg"},
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, img: ""},
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, img: ""},
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, img: ""},
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, img: ""},
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, img: ""},
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, img: ""},
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, img: ""},
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, img: ""},
  ];

  selectedProduct!: Product;

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}
