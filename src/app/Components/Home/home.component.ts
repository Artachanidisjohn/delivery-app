import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/Services/userService";


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent  {

apiUrl='http://localhost:3100';

currentTab = 'pizzas';  // Ορισμός default tab
cart=[];

selectedPizza: any = null;  // Η επιλεγμένη πίτσα
successMessage: string = '';  // Μήνυμα επιτυχίας




pizzas = [
    { 
      id: 1, 
      name: 'Margherita', 
      description: 'Tomato, Mozzarella, Basil', 
      image: 'assets/images/margarita.jpeg', 
      price: 7,
      ingredients: ['Tomato', 'Mozzarella', 'Basil']  // Προσθήκη υλικών για την πίτσα
    },
    { 
      id: 2, 
      name: 'Pepperoni', 
      description: 'Pepperoni, Mozzarella, Tomato', 
      image: 'assets/images/peperoni.jpeg', 
      price: 8,
      ingredients: ['Pepperoni', 'Mozzarella', 'Tomato']  // Προσθήκη υλικών για την πίτσα
    },
    { 
        id: 3, 
        name: 'Hawaiian', 
        description: 'Ham, Pineapple, Mozzarella',
        image: 'assets/images/havai.jpeg', 
        price: 8,
        ingredients: ['Ham', 'Pineapple', 'Mozzarella']  // Προσθήκη υλικών για την πίτσα
      }
  ];


  drinks=[
    {id:1,name:'coca-cola',image: 'assets/images/coca-cola.jpeg',price:2},
    {id:1,name:'fanta',image: 'assets/images/fanta.jpeg',price:2},
    {id:1,name:'beer',image: 'assets/images/beer.jpeg',price:4}
  ]
      
    constructor(
        private router: Router,
        private userService:UserService,
        private http:HttpClient,
    ) { }



   





    showTab(tabName: string) {
        this.currentTab = tabName;  // Αλλάζουμε το tab ανάλογα με το κλικ
      }


      logout() {
        const userId=this.userService.getUser();
        this.http.post(`${this.apiUrl}/logout`,{userId}).subscribe(()=>{
            this.router.navigate(['/']);
            this.userService.clearUserData();})
            console.log(userId,'userId');
      }

      addToBasket(item: any) {
        this.cart.push({ ...item, quantity: 1 });
      
        this.successMessage = 'Προστέθηκε επιτυχώς στο καλάθι';
      
        setTimeout(() => {
          this.successMessage = '';
        }, 1000);
      }
      

      updateQuantity(item: any, newQuantity: number) {
        item.quantity = newQuantity;
      }


      removeFromCart(item) {
        const index = this.cart.indexOf(item);
        if (index > -1) {
          this.cart.splice(index, 1);
        }
      }
      
      selectPizza(pizza: any) {
        // Εάν η επιλεγμένη πίτσα είναι η ίδια με αυτή που κλικάραμε, αποεπιλέγουμε
        if (this.selectedPizza && this.selectedPizza.id === pizza.id) {
          this.selectedPizza = null;  // Αποεπιλέγουμε την πίτσα
        } else {
          this.selectedPizza = pizza;  // Επιλέγουμε τη νέα πίτσα
        }
      }

      closePizzaItem() {
        this.selectedPizza = null;  // Κλείνουμε το επιλεγμένο PizzaItem
      }


      getTotalCost(): number {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
      

      increaseQuantity(item: any) {
        item.quantity += 1;
      }
    
      // Μείωση της ποσότητας του προϊόντος, με ελάχιστη ποσότητα το 1
      decreaseQuantity(item: any) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }

}