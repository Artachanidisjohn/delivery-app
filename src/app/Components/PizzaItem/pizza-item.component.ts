import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: any;  // Λαμβάνουμε τις πληροφορίες της πίτσας από το parent
  @Output() addPizzaToCart = new EventEmitter<any>();  // Εκπέμπουμε το event για προσθήκη στο καλάθι
  @Output() closePizzaItem = new EventEmitter<void>(); // Εκπέμπουμε event για να κλείσει το item

  showSuccessMessage = false;  // Μεταβλητή για το μήνυμα επιτυχίας
  selectedIngredients: string[] = [];
  


ngOnInit(): void {
  
  this.selectedIngredients = [...this.pizza.ingredients];

}


  // Προσθήκη ή αφαίρεση υλικού από τη λίστα
  toggleIngredient(ingredient: string) {
    const index = this.selectedIngredients.indexOf(ingredient);
    if (index === -1) {
      this.selectedIngredients.push(ingredient);
    } else {
      this.selectedIngredients.splice(index, 1);
    }
  }

  // Προσθήκη στο καλάθι
  addToCart() {
    const pizzaWithIngredients = {
      ...this.pizza,
      ingredients: this.selectedIngredients
    };
    this.addPizzaToCart.emit(pizzaWithIngredients);

    // Εμφανίζουμε το μήνυμα επιτυχίας
    this.showSuccessMessage = true;

    // Εξαφάνιση του μηνύματος και κλείσιμο του pizza item μετά από 3 δευτερόλεπτα
    setTimeout(() => {
      this.showSuccessMessage = false;
      this.selectedIngredients = [];  // Καθαρίζουμε τα επιλεγμένα υλικά
      this.closePizzaItem.emit();  // Εκπέμπουμε το event για να κλείσει το pizza item
    }, 1000);
  }
}
