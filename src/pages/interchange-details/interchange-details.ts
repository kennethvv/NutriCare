import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InterchangeMeal } from '../../models/interchangeMeal';

/**
 * Generated class for the InterchangeDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interchange-details',
  templateUrl: 'interchange-details.html',
})
export class InterchangeDetailsPage {
  public category;

  fruits:InterchangeMeal[] = [//List of fruits interchanges
    {name: 'Anona', portion:'1/4 Unidad', category:'fruit'},
    {name: 'Banano', portion:'1 Unidad Pequeña', category:'fruit'},
    {name: 'Caimito', portion:'1 Pequeño', category:'fruit'},
    {name: 'Ciruela Pasa', portion:'3 Medianas', category:'fruit'},
    {name: 'Ensalada de Frutas', portion:'1/2 Taza', category:'fruit'},
    {name: 'Frambueza', portion:'1 Taza', category:'fruit'},
    {name: 'Fresa', portion:'1 Taza', category:'fruit'},
    {name: 'Granadilla', portion:'2 Unidades', category:'fruit'},
    {name: 'Guaba', portion:'1 Unidad', category:'fruit'},
    {name: 'Guayaba', portion:'1 Mediana', category:'fruit'},
    {name: 'Higo Fresco', portion:'2 Unidades', category:'fruit'},
    {name: 'Jocote', portion:'4 Unidades', category:'fruit'},
    {name: 'Kiwi', portion:'1 Unidad', category:'fruit'},
    {name: 'Limón Dulce', portion:'1 Unidad', category:'fruit'},
    {name: 'Mandarina', portion:'1 Unidad', category:'fruit'},
    {name: 'Mango', portion:'1/2 Pequeño', category:'fruit'},
    {name: 'Marañón', portion:'1 Grande', category:'fruit'},
    {name: 'Manzana', portion:'1 Pequeña', category:'fruit'},
    {name: 'Melón', portion:'1/2 Taza', category:'fruit'},
    {name: 'Mora', portion:'1/2 Taza', category:'fruit'},
    {name: 'Nance', portion:'20 Unidades', category:'fruit'},
    {name: 'Naranja', portion:'1 Pequeña', category:'fruit'},
    {name: 'Papaya', portion:'1 Taza', category:'fruit'},
    {name: 'Pasas', portion:'2 Cucharadas', category:'fruit'},
    {name: 'Pera', portion:'1/2 Grande', category:'fruit'},
    {name: 'Piña', portion:'1 Taza', category:'fruit'},
    {name: 'Sandía', portion:'1 Taza', category:'fruit'},
    {name: 'Toronja', portion:'1/2 Unidad', category:'fruit'},
    {name: 'Uvas', portion:'12 Unidades', category:'fruit'},
    {name: 'Jugos Naturales', portion:'Sin Azucar 1/2 Taza', category:'fruit'}
  ]

  flours:InterchangeMeal[] = [//List of flours interchanges
    {name: 'Pan Cuadrado', portion:'1 Rebanada', category:'flour'},
    {name: 'Pan Integral', portion:'1 Rebanada',category:'flour'},
    {name: 'Pan Frances', portion:'1 Bollito',category:'flour'},
    {name: 'Pan Hot Dog', portion:'1/2 Unidad',category:'flour'},
    {name: 'Pan Hamburgueza', portion:'1/2 Unidad',category:'flour'},
    {name: 'Tortillas', portion:'2 Unidades Pequeñas',category:'flour'},
    {name: 'Galleta Soda', portion:'1 Paquete',category:'flour'},
    {name: 'Galleta María', portion:'1 Paquete',category:'flour'},
    {name: 'Harina', portion:'1 Cucharada',category:'flour'},
    {name: 'Masa', portion:'3 Cucharadas',category:'flour'},
    {name: 'Arroz', portion:'1/3 Taza',category:'flour'},
    {name: 'Gallo Pinto', portion:'1 Unidad Mediana',category:'flour'},
    {name: 'Papa', portion:'1 Unidad Mediana',category:'flour'},
    {name: 'Puré de Papa', portion:'1/2 Taza',category:'flour'},
    {name: 'Yuca, Camote, Tiquizque', portion:'1/2 taza',category:'flour'},
    {name: 'Platano Maduro', portion:'1/4 Unidad',category:'flour'},
    {name: 'Plátano Verde', portion:'1/4 Unidad',category:'flour'},
    {name: 'Elote', portion:'1 Pequeño',category:'flour'},
    {name: 'Frijoles, Garbanzos Lentejas', portion:'1/2 Taza',category:'flour'},
    {name: 'Arvejas', portion:'1/2 Taza',category:'flour'},
    {name: 'Pasta/Fideos', portion:'1/2 Taza',category:'flour'},
    {name: 'Cereales Inflados', portion:'3/4 Taza',category:'flour'},
    {name: 'Corn Flakes', portion:'3/4 Taza',category:'flour'},
    {name: 'All Bran', portion:'1/2 Taza',category:'flour'},
    {name: 'Avena en hojuela', portion:'3 cdas',category:'flour'},
    {name: 'Germen de Trigo', portion:'3 cdas',category:'flour'},
    {name: 'Granola', portion:'1/4 taza',category:'flour'},
    {name: 'Palomitas de Maíz', portion:'1/4 Unidad',category:'flour'}
  ]

  meats:InterchangeMeal[] = [//List of meals interchanges
    {name: 'Pollo o Pavo sin Grasa', portion:'1 Onza', category:'meat'},
    {name: 'Mariscos', portion:'1 Onza',category:'meat'},
    {name: 'Pescados', portion:'1 Onza',category:'meat'},
    {name: 'Atún en Agua', portion:'1 Onza',category:'meat'},
    {name: 'Sardinas(enlatadas)', portion:'1 Onza',category:'meat'},
    {name: 'Jamón de Pavo', portion:'1 Onza',category:'meat'},
    {name: 'Jamón de Cerdo', portion:'1 Onza',category:'meat'},
    {name: 'Clara de Huevo', portion:'1 Onza',category:'meat'},
    {name: 'Queso cottage', portion:'1 Onza',category:'meat'},
    {name: 'Chuleta de Cerdo', portion:'1 Onza',category:'meat'},
    {name: 'Carne Molida', portion:'1 Onza',category:'meat'},
    {name: 'Queso Ricotta', portion:'1 Onza',category:'meat'},
    {name: 'Queso Mozarella', portion:'1 Onza',category:'meat'},
    {name: 'Huevo', portion:'1 Onza',category:'meat'},
    {name: 'Costilla de Cerdo', portion:'1 Onza',category:'meat'},
    {name: 'Salchicha', portion:'1/4 Unidad',category:'meat'},
    {name: 'Salami', portion:'1/4 Unidad',category:'meat'},
    {name: 'Tocino', portion:'1 Pequeño',category:'meat'},
    {name: 'Queso Cheddar', portion:'1 Onza',category:'meat'},
    {name: 'Queso Amarillo', portion:'1 Onza',category:'meat'}
  ]

  vegetables:InterchangeMeal[] = [//List of flours interchanges
    {name: 'Lechuga', portion:'1 Taza', category:'vegetable'},
    {name: 'Nabos', portion:'1 Taza',category:'vegetable'},
    {name: 'Puerros', portion:'1 Taza',category:'vegetable'},
    {name: 'Pepino', portion:'1 Taza',category:'vegetable'},
    {name: 'Repollo', portion:'1 Taza',category:'vegetable'},
    {name: 'Remolacha', portion:'1 Taza',category:'vegetable'},
    {name: 'Tomate', portion:'1 Taza',category:'vegetable'},
    {name: 'Vainica', portion:'1 Taza',category:'vegetable'},
    {name: 'Palmito', portion:'1 Taza',category:'vegetable'},
    {name: 'Zanahoria', portion:'1 Taza',category:'vegetable'},
    {name: 'Alcachofa', portion:'1 Taza',category:'vegetable'},
    {name: 'Coliflor', portion:'1 Taza',category:'vegetable'},
    {name: 'Apio', portion:'1 Taza',category:'vegetable'},
    {name: 'Esparragos', portion:'1 Taza',category:'vegetable'},
    {name: 'Arvejas', portion:'1 Taza',category:'vegetable'},
    {name: 'Espinaca', portion:'1 Taza',category:'vegetable'},
    {name: 'Ayote', portion:'1 Taza',category:'vegetable'},
    {name: 'Berenjena', portion:'1 Taza',category:'vegetable'},
    {name: 'Berros', portion:'1 Taza',category:'vegetable'},
    {name: 'Brócoli', portion:'1 Taza',category:'vegetable'},
    {name: 'Cebolla', portion:'1 Taza',category:'vegetable'},
    {name: 'Cebollín', portion:'1 Taza',category:'vegetable'},
    {name: 'Chayote', portion:'1 Taza',category:'vegetable'},
    {name: 'Chile Dulce', portion:'1 Taza',category:'vegetable'}
  ]

  dairys:InterchangeMeal[] = [//List of dairy interchanges
    {name: 'Leche 2%', portion:'1 Taza', category:'dairy'},
    {name: 'Leche Descremada', portion:'1 Taza',category:'dairy'},
    {name: 'Leche de Soya', portion:'1 Taza',category:'dairy'},
    {name: 'Leche de Cabra', portion:'1 Taza',category:'dairy'},
    {name: 'Leche en Polvo', portion:'1/4 Taza',category:'dairy'},
    {name: 'Leche Evaporada', portion:'1 Taza',category:'dairy'},
    {name: 'Leche Agria', portion:'1 Taza',category:'dairy'},
    {name: 'Yogurt sin Azucar', portion:'1 Taza',category:'dairy'},
    {name: 'Yogurt con Azucar', portion:'1/2 Taza',category:'dairy'},
    {name: 'Helado Light', portion:'1/2 Taza',category:'dairy'}
  ]

  oils:InterchangeMeal[] = [//List of dairy interchanges
    {name: 'Aceite', portion:'1 Cucharadita', category:'oils'},
    {name: 'Aderezo', portion:'1 Cucharada',category:'oils'},
    {name: 'Aguacate', portion:'2 Cucharadas',category:'oils'},
    {name: 'Ajonjolí', portion:'1 Cucharada',category:'oils'},
    {name: 'Coco Rallado', portion:'2 Cucharadas',category:'oils'},
    {name: 'Maní', portion:'10 Unidades',category:'oils'},
    {name: 'Mantequilla', portion:'1 cucharadita',category:'oils'},
    {name: 'Mantequilla de Maní', portion:'1/2 cdta',category:'oils'},
    {name: 'Margarina', portion:'1 Cucharadita',category:'oils'},
    {name: 'Mayoneza', portion:'1 Cucharadita',category:'oils'},
    {name: 'Natilla', portion:'2 Cucharaditas',category:'oils'},
    {name: 'Nueces', portion:'6 Unidades',category:'oils'},
    {name: 'Queso Crema', portion:'1 Cucharada',category:'oils'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get("categoryPassed");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InterchangeDetailsPage');
  }

}
