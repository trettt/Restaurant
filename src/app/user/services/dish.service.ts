import { Injectable } from '@angular/core';
import { Dish } from '../interfaces/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  arrayOfDishes: Dish[] = [
    {
      name: 'Ciorba de pui a la grec',
      category: 'ciorbe',
      ingredients:
        'pui întreg sau bucăți de pui (piept, pulpe, aripioare etc.), cartofi, ceapă, usturoi, morcovi, ardei gras, roșii în bulion sau roșii proaspete, pătrunjel proaspăt, mărar proaspăt, frunze de dafin, ulei de măsline, boia de ardei dulce, oregano uscat, sare, piper, apă',
      price: 24.99,
      portionSize: 400,
      imagePath:
        'https://jamilacuisine.ro/wp-content/uploads/2021/05/Ciorba-de-pui-a-la-grec-500x500.jpg',
    },
    {
      name: 'Pizza prosciutto e funghi',
      category: 'pizza',
      ingredients:
        'aluat de pizza, sos de roșii, mozzarella, șuncă (prosciutto), ciuperci, ulei de măsline, oregano, sare, piper',
      price: 34.99,
      portionSize: 550,
      imagePath:
        'https://www.newcroco.ro/image/cache/catalog/Prosciutto%20E%20Funghi%20(1600)-1000x700.jpg',
    },
    {
      name: 'Mozzarella caprese',
      category: 'gustari reci',
      ingredients: 'mozzarella, rosii, busuioc, ulei de măsline extravirgin, oțet balsamic, sare, piper',
      price: 11.99,
      portionSize: 250,
      imagePath:
        'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F3b432b41ce04c96a08d77befa42b9881a587a436',
    },
    {
      name: 'Lava cake',
      category: 'desert',
      ingredients:
        'ciocolată neagră, unt, ouă, zahăr, făină, esență de vanilie',
      price: 17.99,
      portionSize: 250,
      imagePath:
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/39E92D31-D1AE-44DC-8B86-C60A8E6B8D05/Derivates/744B2C83-F33A-4AB5-A7DD-0D59D555D0F6.jpg',
    },
    {
      name: 'Penne carbonara',
      category: 'paste',
      ingredients:
        'paste penne, bacon, ouă, parmezan ras, smântână (opțional), usturoi, piper proaspăt măcinat, sare',
      price: 21.99,
      portionSize: 300,
      imagePath:
        'https://www.mindmegette.hu/images/242/O/shutterstock_614169200.jpg',
    },
    {
      name: 'Aripioare pui',
      category: 'preparate din pui',
      ingredients:
        'aripioare de pui, ulei de măsline, usturoi, sos de soia, miere, suc de lămâie, boia de ardei dulce, sare, piper',
      price: 26.99,
      portionSize: 300,
      imagePath:
        'https://www.lauralaurentiu.ro/wp-content/uploads/2018/01/aripioare-de-pui-la-cuptor-reteta-laura-laurentiu-reteta-de-aripioare-de-pui-la-cuptor-crocante-si-picante-foto%C2%A9Laura-Laurentiu.jpg',
    },
    {
      name: 'Coaste marinate',
      category: 'preparate porc',
      ingredients:
        'coaste de porc sau de vită, sos de soia, ketchup, miere, oțet balsamic, usturoi, ghimbir proaspăt sau pudră de ghimbir, suc de lămâie, ulei de măsline, boia de ardei dulce, sare, piper',
      price: 33.99,
      portionSize: 450,
      imagePath:
        'https://retete.unica.ro/wp-content/uploads/2013/11/coaste-porc-marinate.jpg',
    },
    {
      name: 'Burger cu cartofi prajiti',
      category: 'preparate vita',
      ingredients:
        'chiflă de burger, carne de vită sau pui (sau o alternativă vegetală pentru burger), frunze de salată, felii de roșii, felii de ceapă, felii de castraveți murați, ketchup, muștar, maioneză, brânză topită, bacon (opțional), sare, piper, ulei de prăjit, cartofi',
      price: 28.99,
      portionSize: 350,
      imagePath:
        'https://aplantifulpath.com/wp-content/uploads/2019/05/Black-Bean-Burger-with-Fries.jpg',
    },
  ];
}
