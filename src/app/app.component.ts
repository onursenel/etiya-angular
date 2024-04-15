import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eitya-crm-angular';

  products = [
    {
      name: 'Samsung Galaxy S10',
      price: 900,
      discontinued: true,
    },
    {
      name: 'Iphone 11',
      price: 1200,
      discontinued: false,
    },
    {
      name: 'Huawei P30',
      price: 800,
      discontinued: false,
    },
    
  ];
  
  itemList: { name: string, price: number, discontinued: boolean}[] = [
    { name: 'Samsung Galaxy S10', price: 900, discontinued: true }, //discontinued true olanlar devam edilmeyen şeklinde bir yazı dönecek
    { name: 'Iphone 11', price: 1200, discontinued: false},
    { name: 'Huawei P30 ', price: 800, discontinued: false}
  ];

  onButtonClick() {
    console.log('Button clicked');
  }
} 
