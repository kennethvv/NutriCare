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

  Frutas:InterchangeMeal[] = [//List of Frutass interchanges
    {name: 'Anona', portion:'1/4 Unidad', category:'Frutas'},
    {name: 'Banano', portion:'1 Unidad Pequeña', category:'Frutas'},
    {name: 'Caimito', portion:'1 Pequeño', category:'Frutas'},
    {name: 'Ciruela Pasa', portion:'3 Medianas', category:'Frutas'},
    {name: 'Ensalada de Frutas', portion:'1/2 Taza', category:'Frutas'},
    {name: 'Frambueza', portion:'1 Taza', category:'Frutas'},
    {name: 'Fresa', portion:'1 Taza', category:'Frutas'},
    {name: 'Granadilla', portion:'2 Unidades', category:'Frutas'},
    {name: 'Guaba', portion:'1 Unidad', category:'Frutas'},
    {name: 'Guayaba', portion:'1 Mediana', category:'Frutas'},
    {name: 'Higo Fresco', portion:'2 Unidades', category:'Frutas'},
    {name: 'Jocote', portion:'4 Unidades', category:'Frutas'},
    {name: 'Kiwi', portion:'1 Unidad', category:'Frutas'},
    {name: 'Limón Dulce', portion:'1 Unidad', category:'Frutas'},
    {name: 'Mandarina', portion:'1 Unidad', category:'Frutas'},
    {name: 'Mango', portion:'1/2 Pequeño', category:'Frutas'},
    {name: 'Marañón', portion:'1 Grande', category:'Frutas'},
    {name: 'Manzana', portion:'1 Pequeña', category:'Frutas'},
    {name: 'Melón', portion:'1/2 Taza', category:'Frutas'},
    {name: 'Mora', portion:'1/2 Taza', category:'Frutas'},
    {name: 'Nance', portion:'20 Unidades', category:'Frutas'},
    {name: 'Naranja', portion:'1 Pequeña', category:'Frutas'},
    {name: 'Papaya', portion:'1 Taza', category:'Frutas'},
    {name: 'Pasas', portion:'2 Cucharadas', category:'Frutas'},
    {name: 'Pera', portion:'1/2 Grande', category:'Frutas'},
    {name: 'Piña', portion:'1 Taza', category:'Frutas'},
    {name: 'Sandía', portion:'1 Taza', category:'Frutas'},
    {name: 'Toronja', portion:'1/2 Unidad', category:'Frutas'},
    {name: 'Uvas', portion:'12 Unidades', category:'Frutas'},
    {name: 'Jugos Naturales', portion:'Sin Azucar 1/2 Taza', category:'Frutas'}
  ]

  Harinas:InterchangeMeal[] = [//List of Harinas interchanges
    {name: 'Pan Cuadrado', portion:'1 Rebanada', category:'Harinas'},
    {name: 'Pan Integral', portion:'1 Rebanada',category:'Harinas'},
    {name: 'Pan Frances', portion:'1 Bollito',category:'Harinas'},
    {name: 'Pan Hot Dog', portion:'1/2 Unidad',category:'Harinas'},
    {name: 'Pan Hamburgueza', portion:'1/2 Unidad',category:'Harinas'},
    {name: 'Tortillas', portion:'2 Unidades Pequeñas',category:'Harinas'},
    {name: 'Galleta Soda', portion:'1 Paquete',category:'Harinas'},
    {name: 'Galleta María', portion:'1 Paquete',category:'Harinas'},
    {name: 'Harina', portion:'1 Cucharada',category:'Harinas'},
    {name: 'Masa', portion:'3 Cucharadas',category:'Harinas'},
    {name: 'Arroz', portion:'1/3 Taza',category:'Harinas'},
    {name: 'Gallo Pinto', portion:'1 Unidad Mediana',category:'Harinas'},
    {name: 'Papa', portion:'1 Unidad Mediana',category:'Harinas'},
    {name: 'Puré de Papa', portion:'1/2 Taza',category:'Harinas'},
    {name: 'Yuca, Camote, Tiquizque', portion:'1/2 taza',category:'Harinas'},
    {name: 'Platano Maduro', portion:'1/4 Unidad',category:'Harinas'},
    {name: 'Plátano Verde', portion:'1/4 Unidad',category:'Harinas'},
    {name: 'Elote', portion:'1 Pequeño',category:'Harinas'},
    {name: 'Frijoles, Garbanzos Lentejas', portion:'1/2 Taza',category:'Harinas'},
    {name: 'Arvejas', portion:'1/2 Taza',category:'Harinas'},
    {name: 'Pasta/Fideos', portion:'1/2 Taza',category:'Harinas'},
    {name: 'Cereales Inflados', portion:'3/4 Taza',category:'Harinas'},
    {name: 'Corn Flakes', portion:'3/4 Taza',category:'Harinas'},
    {name: 'All Bran', portion:'1/2 Taza',category:'Harinas'},
    {name: 'Avena en hojuela', portion:'3 cdas',category:'Harinas'},
    {name: 'Germen de Trigo', portion:'3 cdas',category:'Harinas'},
    {name: 'Granola', portion:'1/4 taza',category:'Harinas'},
    {name: 'Palomitas de Maíz', portion:'1/4 Unidad',category:'Harinas'}
  ]

  Carnes:InterchangeMeal[] = [//List of meals interchanges
    {name: 'Pollo o Pavo sin Grasa', portion:'1 Onza', category:'Carnes'},
    {name: 'Mariscos', portion:'1 Onza',category:'Carnes'},
    {name: 'Pescados', portion:'1 Onza',category:'Carnes'},
    {name: 'Atún en Agua', portion:'1 Onza',category:'Carnes'},
    {name: 'Sardinas(enlatadas)', portion:'1 Onza',category:'Carnes'},
    {name: 'Jamón de Pavo', portion:'1 Onza',category:'Carnes'},
    {name: 'Jamón de Cerdo', portion:'1 Onza',category:'Carnes'},
    {name: 'Clara de Huevo', portion:'1 Onza',category:'Carnes'},
    {name: 'Queso cottage', portion:'1 Onza',category:'Carnes'},
    {name: 'Chuleta de Cerdo', portion:'1 Onza',category:'Carnes'},
    {name: 'Carne Molida', portion:'1 Onza',category:'Carnes'},
    {name: 'Queso Ricotta', portion:'1 Onza',category:'Carnes'},
    {name: 'Queso Mozarella', portion:'1 Onza',category:'Carnes'},
    {name: 'Huevo', portion:'1 Onza',category:'Carnes'},
    {name: 'Costilla de Cerdo', portion:'1 Onza',category:'Carnes'},
    {name: 'Salchicha', portion:'1/4 Unidad',category:'Carnes'},
    {name: 'Salami', portion:'1/4 Unidad',category:'Carnes'},
    {name: 'Tocino', portion:'1 Pequeño',category:'Carnes'},
    {name: 'Queso Cheddar', portion:'1 Onza',category:'Carnes'},
    {name: 'Queso Amarillo', portion:'1 Onza',category:'Carnes'}
  ]

  Vegetales:InterchangeMeal[] = [//List of Vegetales interchanges
    {name: 'Lechuga', portion:'1 Taza', category:'Vegetales'},
    {name: 'Nabos', portion:'1 Taza',category:'Vegetales'},
    {name: 'Puerros', portion:'1 Taza',category:'Vegetales'},
    {name: 'Pepino', portion:'1 Taza',category:'Vegetales'},
    {name: 'Repollo', portion:'1 Taza',category:'Vegetales'},
    {name: 'Remolacha', portion:'1 Taza',category:'Vegetales'},
    {name: 'Tomate', portion:'1 Taza',category:'Vegetales'},
    {name: 'Vainica', portion:'1 Taza',category:'Vegetales'},
    {name: 'Palmito', portion:'1 Taza',category:'Vegetales'},
    {name: 'Zanahoria', portion:'1 Taza',category:'Vegetales'},
    {name: 'Alcachofa', portion:'1 Taza',category:'Vegetales'},
    {name: 'Coliflor', portion:'1 Taza',category:'Vegetales'},
    {name: 'Apio', portion:'1 Taza',category:'Vegetales'},
    {name: 'Esparragos', portion:'1 Taza',category:'Vegetales'},
    {name: 'Arvejas', portion:'1 Taza',category:'Vegetales'},
    {name: 'Espinaca', portion:'1 Taza',category:'Vegetales'},
    {name: 'Ayote', portion:'1 Taza',category:'Vegetales'},
    {name: 'Berenjena', portion:'1 Taza',category:'Vegetales'},
    {name: 'Berros', portion:'1 Taza',category:'Vegetales'},
    {name: 'Brócoli', portion:'1 Taza',category:'Vegetales'},
    {name: 'Cebolla', portion:'1 Taza',category:'Vegetales'},
    {name: 'Cebollín', portion:'1 Taza',category:'Vegetales'},
    {name: 'Chayote', portion:'1 Taza',category:'Vegetales'},
    {name: 'Chile Dulce', portion:'1 Taza',category:'Vegetales'}
  ]

  Lacteos:InterchangeMeal[] = [//List of Lácteos interchanges
    {name: 'Leche 2%', portion:'1 Taza', category:'Lacteos'},
    {name: 'Leche Descremada', portion:'1 Taza',category:'Lacteos'},
    {name: 'Leche de Soya', portion:'1 Taza',category:'Lacteos'},
    {name: 'Leche de Cabra', portion:'1 Taza',category:'Lcteos'},
    {name: 'Leche en Polvo', portion:'1/4 Taza',category:'Lacteos'},
    {name: 'Leche Evaporada', portion:'1 Taza',category:'Lacteos'},
    {name: 'Leche Agria', portion:'1 Taza',category:'Lacteos'},
    {name: 'Yogurt sin Azucar', portion:'1 Taza',category:'Lacteos'},
    {name: 'Yogurt con Azucar', portion:'1/2 Taza',category:'Lacteos'},
    {name: 'Helado Light', portion:'1/2 Taza',category:'Lacteos'}
  ]

  Aceites:InterchangeMeal[] = [//List of Lácteos interchanges
    {name: 'Aceite', portion:'1 Cucharadita', category:'Aceites'},
    {name: 'Aderezo', portion:'1 Cucharada',category:'Aceites'},
    {name: 'Aguacate', portion:'2 Cucharadas',category:'Aceites'},
    {name: 'Ajonjolí', portion:'1 Cucharada',category:'Aceites'},
    {name: 'Coco Rallado', portion:'2 Cucharadas',category:'Aceites'},
    {name: 'Maní', portion:'10 Unidades',category:'Aceites'},
    {name: 'Mantequilla', portion:'1 cucharadita',category:'Aceites'},
    {name: 'Mantequilla de Maní', portion:'1/2 cdta',category:'Aceites'},
    {name: 'Margarina', portion:'1 Cucharadita',category:'Aceites'},
    {name: 'Mayoneza', portion:'1 Cucharadita',category:'Aceites'},
    {name: 'Natilla', portion:'2 Cucharaditas',category:'Aceites'},
    {name: 'Nueces', portion:'6 Unidades',category:'Aceites'},
    {name: 'Queso Crema', portion:'1 Cucharada',category:'Aceites'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get("categoryPassed");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InterchangeDetailsPage');
  }

}
