// ===== Домашнє завдання 25 =====
// Тема: класи, конструктор, методи, екземпляри класу,
// наслідування через extends і super.

// ---------- Завдання 1 (обов'язкове) ----------
// Створити клас Product — товар в інтернет-магазині.
//
// 1. Конструктор приймає name, price і quantity
//    та записує їх у властивості екземпляра.
//
// 2. Додати метод getTotal(), який повертає загальну вартість
//    товару на складі: price * quantity.
//
// 3. Додати метод getInfo(), який повертає рядок виду:
//    "Laptop: 1200$, in stock: 3 pcs, total: 3600$."
//    Усередині використати метод getTotal(), а не дублювати обчислення.
//
// 4. Створити щонайменше три екземпляри класу Product з різними даними.
//
// 5. Вивести в консоль самі екземпляри і результат getInfo() для кожного.
//
// Додатково (за бажанням):
// Додати геттер і сеттер discount:
//    - геттер повертає збережене значення, а якщо його ще не задали — 0;
//    - сеттер зберігає значення у властивість _discount.
// Врахувати знижку (у відсотках) у методі getTotal().



class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this._discount = 0; 
  }

  get discount() {
    return this._discount;
  }


  set discount(value) {
    if (value >= 0 && value <= 100) {
      this._discount = value;
    } else {
      console.log("Знижка повинна бути в діапазоні від 0 до 100%");
    }
  }


  getTotal() {
    const baseTotal = this.price * this.quantity;
    if (this._discount > 0) {
      return baseTotal * (1 - this._discount / 100);
    }
    return baseTotal;
  }


  getInfo() {
    const total = this.getTotal();
    let info = `${this.name}: ${this.price}$, in stock: ${this.quantity} pcs, total: ${total}$`;
    if (this._discount > 0) {
      info += ` (знижка ${this._discount}%)`;
    }
    return info + ".";
  }
}


const product1 = new Product("Laptop", 1200, 3);
const product2 = new Product("Mouse", 25, 10);
const product3 = new Product("Keyboard", 75, 5);


product3.discount = 10; 


console.log("--- Завдання 1 ---");
console.log(product1);
console.log(product1.getInfo());

console.log(product2);
console.log(product2.getInfo());

console.log(product3);
console.log(product3.getInfo());

// ---------- Завдання 2 (за бажанням) ----------
// Створити ланцюг наслідування з трьох класів: Vehicle → Car → ElectricCar.
//
// 1. Клас Vehicle:
//    - конструктор приймає brand і maxSpeed;
//    - метод getInfo() повертає рядок виду:
//      "Tesla, max speed: 250 km/h."
//
// 2. Клас Car наслідує Vehicle (extends):
//    - конструктор приймає brand, maxSpeed і seats;
//      brand і maxSpeed передати в батьківський конструктор через super;
//    - метод getSeats() повертає рядок виду:
//      "Tesla has 5 seats."
//
// 3. Клас ElectricCar наслідує Car:
//    - конструктор приймає brand, maxSpeed, seats і batteryRange;
//      перші три параметри передати через super;
//    - метод getRange() повертає рядок виду:
//      "Tesla can drive 500 km on a single charge."
//
// 4. Створити по одному екземпляру кожного класу.
//    Для екземпляра ElectricCar викликати всі три методи:
//    getInfo(), getSeats() і getRange() — і вивести результати в консоль.
//
// 5. Перевірити, що в екземпляра Vehicle немає методу getSeats,
//    а в екземпляра Car — методу getRange.
