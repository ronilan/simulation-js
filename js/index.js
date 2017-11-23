/*
* This is an example of Object Oriented Programing with ES6. 
* The driver and passengers are objects, instances of the Person class. 
* Each car on the road is an object, an instance of the of a subclass, either Truck, Sport, Sedan or SUV that inherits from a Car class. 
* A simulation object, instance of the Sim class, controls the cars on each road. 
* At set intervals the Simulation is stepped forward. 
* A visualization Object, instance of the Vis class generates and refreshes the UI for each road.
*/

/** Class representing a Faker of data. */
class Faker {
  /**
  * Create a faker.
  */
  constructor() {
    this.firstNames = [
      'Noah',
      'Liam',
      'Mason',
      'Jacob',
      'William',
      'Ethan',
      'James',
      'Alexander',
      'Michael',
      'Benjamin',
      'Elijah',
      'Daniel',
      'Aiden',
      'Logan',
      'Matthew',
      'Lucas',
      'Jackson',
      'David',
      'Oliver',
      'Jayden',
      'Joseph',
      'Gabriel',
      'Samuel',
      'Carter',
      'Anthony',
      'John',
      'Dylan',
      'Luke',
      'Henry',
      'Andrew',
      'Isaac',
      'Christopher',
      'Joshua',
      'Wyatt',
      'Sebastian',
      'Owen',
      'Caleb',
      'Nathan',
      'Ryan',
      'Jack',
      'Hunter',
      'Levi',
      'Christian',
      'Jaxon',
      'Julian',
      'Landon',
      'Grayson',
      'Jonathan',
      'Isaiah',
      'Charles',
      'Emma',
      'Olivia',
      'Sophia',
      'Ava',
      'Isabella',
      'Mia',
      'Abigail',
      'Emily',
      'Charlotte',
      'Harper',
      'Madison',
      'Amelia',
      'Elizabeth',
      'Sofia',
      'Evelyn',
      'Avery',
      'Chloe',
      'Ella',
      'Grace',
      'Victoria',
      'Aubrey',
      'Scarlett',
      'Zoey',
      'Addison',
      'Lily',
      'Lillian',
      'Natalie',
      'Hannah',
      'Aria',
      'Layla',
      'Brooklyn',
      'Alexa',
      'Zoe',
      'Penelope',
      'Riley',
      'Leah',
      'Audrey',
      'Savannah',
      'Allison',
      'Samantha',
      'Nora',
      'Skylar',
      'Camila',
      'Anna',
      'Paisley',
      'Ariana',
      'Ellie',
      'Aaliyah',
      'Claire',
      'Violet'
    ];
    this.lastNames = [
      'Rmith',
      'ohnson',
      'illiams',
      'ones',
      'rown',
      'avis',
      'iller',
      'ilson',
      'oore',
      'Taylor',
      'Anderson',
      'Thomas',
      'Jackson',
      'White',
      'Harris',
      'Martin',
      'Thompson',
      'Garcia',
      'Martinez',
      'Robinson',
      'Clark',
      'Rodriguez',
      'Lewis',
      'Lee',
      'Walker',
      'Hall',
      'Allen',
      'Young',
      'Hernandez',
      'King',
      'Wright',
      'Lopez',
      'Hill',
      'Scott',
      'Green',
      'Adams',
      'Baker',
      'Gonzalez',
      'Nelson',
      'Carter',
      'Mitchell',
      'Perez',
      'Roberts',
      'Turner',
      'Phillips',
      'Campbell',
      'Parker',
      'Evans',
      'Edwards',
      'Collins',
      'Stewart',
      'Sanchez',
      'Morris',
      'Rogers',
      'Reed',
      'Cook',
      'Morgan',
      'Bell',
      'Murphy',
      'Bailey',
      'Rivera',
      'Cooper',
      'Richardson',
      'Cox',
      'Howard',
      'Ward',
      'Torres',
      'Peterson',
      'Gray',
      'Ramirez',
      'James',
      'Watson',
      'Brooks',
      'Kelly',
      'Sanders',
      'Price',
      'Bennett',
      'Wood',
      'Barnes',
      'Ross',
      'Henderson',
      'Coleman',
      'Jenkins',
      'Perry',
      'Powell',
      'Long',
      'Patterson',
      'Hughes',
      'Flores',
      'Washington',
      'Butler',
      'Simmons',
      'Foster',
      'Gonzales',
      'Bryant',
      'Alexander',
      'Russell',
      'Griffin',
      'Diazs'
    ];
  }
  /**
  * Generates a fake (random) name.
  * @return {string} - a rnadom first name and last name combination.
  */
  name() {
    return `${this.firstNames[
      Math.floor(Math.random() * this.firstNames.length)
    ]} ${this.lastNames[Math.floor(Math.random() * this.lastNames.length)]}`;
  }
}

/** Class representing a person. */
class Person {
  /**
  * Create a person.
  * @param {string} name - the name of the person (defaults to Jane Doe)
  * @param {number} age - the age of the person
  */
  constructor(name = 'Jane Doe', age) {
    this.name = name;
    this.age = age;
  }
}

/** Class representing a car. */
class Car {
  /**
  * Create a car.
  * @param {string} type - the type of car
  */
  constructor(type) {
    Car._counter = Car._counter || 0; // class variable

    this.type = type;
    this.plate = this._register();
    this.serial = Car._counter++;
    this.x = -50;
  }

  /**
  * Loads a car with driver and passangers
  * @param {object} driver - a person object who is the driver.
  * @param {Array} passengers - an array of person objects who are potential passengers. Array will be trimmed to car capacity.
  * @return {number} - the number of passengers loaded.
  */
  load(driver = null, passengers) {
    this.driver = driver;
    this.passengers = passengers.slice(0, this.maxPassengers);
  }

  /**
  * Makes the car move at initilized speed
  * @param {number} speed - the initial speed of the car.
  */
  go(speed) {
    this.speed = speed;
  }

  /**
  * Makes the car move slower
  */
  slower() {
    if (this.speed > 0) {
      this.speed--;
    }
  }

  /**
  * Makes the car move faster
  */
  faster() {
    if (this.speed < this.speedLimit) {
      this.speed++;
    }
  }

  /**
  * Makes the car break by halving speed.
  */
  break() {
    this.speed = Math.floor(this.speed / 2);
  }

  /**
  * Move the car by changing x position on road
  */
  drive() {
    this.x = Math.floor(this.x + this.speed / 10);
  }

  /**
  * Private. Registers a random (reasobnably unique) plate number for car.
  */
  _register() {
    return Math.random()
      .toString(36)
      .substr(2, 5)
      .toUpperCase();
  }
}

/**
* Class representing a Truck.
* @extends Car
*/
class Truck extends Car {
  /**
  * Create truck car.
  */
  constructor() {
    super('truck');
    this.speedLimit = 55;
    this.maxPassengers = 2;
  }
}

/**
* Class representing a Sedan.
* @extends Car
*/
class Sedan extends Car {
  /**
  * Create sedan car.
  */
  constructor() {
    super('sedan');
    this.speedLimit = 75;
    this.maxPassengers = 4;
  }
}

/**
* Class representing an SUV.
* @extends Car
*/
class SUV extends Car {
  /**
  * Create SUV car.
  */
  constructor() {
    super('suv');
    this.speedLimit = 70;
    this.maxPassengers = 6;
  }
}

/**
* Class representing a Sports Car.
* @extends Car
*/
class Sport extends Car {
  /**
  * Create sport car.
  */
  constructor() {
    super('sport');
    this.speedLimit = 80;
    this.maxPassengers = 1;
  }
}

/**
* Class representing a Simulation.
*/
class Sim {
  constructor() {
    this.iteration = 0;
    this.cars = this._init();
  }

  /**
  * Run the simulation step.
  */
  step() {
    const carLength = 60;
    let i;
    let fenderDist;

    this.iteration++;

    // add a new car to road if there is room for one.
    if (this.cars[this.cars.length - 1].x > carLength * 3) {
      this.cars.push(this._generateCar());
    }

    this.cars[0].drive();
    this.cars[0].faster();

    // loop over all cars in the road to update.
    for (i = 1; i < this.cars.length; i++) {
      // update car and ui reperentation.
      this.cars[i].drive();

      // apply driving rules.
      fenderDist = this.cars[i - 1].x - this.cars[i].x;

      fenderDist > carLength * 3 ? this.cars[i].faster() : null;
      fenderDist < carLength * 3 ? this.cars[i].slower() : null;
      fenderDist < carLength * 1.5 ? this.cars[i].break() : null;
    }

    this.cars.slice(-20);
  }

  /**
  * Private. Create an initial set of cars on the road
  * @return {Array} - an array of carobjects
  */
  _init() {
    let cars = [this._generateCar()];
    return cars;
  }

  /**
  * Private. Generates a loaded and moving car
  * @return {object} - a car
  */
  _generateCar() {
    let faker = new Faker();
    let i;
    let car;
    let speed = 55;

    // generate a random driver age 16 to 76
    let driver = new Person(faker.name(), Math.floor(Math.random() * 60) + 16);

    // generate an array with random number of persons randomly at ages 1 to 80;
    let passengerCount = Math.floor(Math.random() * 7);
    let passengers = [];
    for (i = 0; i < passengerCount; i++) {
      passengers.push(
        new Person(faker.name(), Math.floor(Math.random() * 80) + 1)
      );
    }

    // choose a random type for the car and create the object
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        car = new Truck();
        break;
      case 1:
        car = new SUV();
        break;
      case 2:
        car = new Sport();
        break;
      case 3:
        car = new Sedan();
        break;
    }

    // set the car
    car.load(driver, passengers);
    car.go(speed);

    return car;
  }
}

/** Class encapsulating the HTML Visualisation. */
class Vis {
  constructor(roadId, direction) {
    this.roadId = roadId;
    this.direction = direction;
  }

  /**
  * Renders HTML cars onto the HTML road.
  * @param {Array} cars - an array of car objects.
  * @param {string} roadId - the HTML id of the road element.
  */
  render(cars) {
    let i;
    let max = cars.length;

    for (i = 0; i < max; i++) {
      let el = document.getElementById(`car-${cars[i].plate}`);

      if (!el) {
        el = document.getElementById(cars[i].type);
        let elc = el.cloneNode(true);
        this._refreshSprites(cars[i], elc);
        document.getElementById(this.roadId).appendChild(elc);
      } else {
        this._refreshSprites(cars[i], el);
      }
    }
  }

  /**
  * Renders HTML of car info onto the page
  * @param {object} car - car object.
  * @param {string} roadId - the HTML id of the container element.
  */
  render_info(car) {
    let passengers = car.passengers
      .map(item => {
        return `${item.name} [${item.age}]`;
      })
      .join('<br/>');

    document.getElementById(this.roadId + '-car-info').innerHTML = `
      ${car.type.toUpperCase()} <strong>${car.plate}</strong> (${car.serial})<br /> 
      ${car.driver.name} [${car.driver.age}]<br />
      <div class='passenger-list'>${passengers}</div>
    `;
  }

  /**
  * Refresh the car DOM element (sprite)
  * @param {object} car - a car object.
  * @param {object} roadId - the DOM element.
  */
  _refreshSprites(car, sprite) {
    sprite.id = `car-${car.plate}`;

    let speed = sprite.getElementsByClassName('speed')[0];
    if (car.speed >= parseInt(speed.innerHTML)) {
      speed.classList.add('faster');
      speed.classList.remove('slower');
    } else {
      speed.classList.add('slower');
      speed.classList.remove('faster');
    }
    car.speed > 20
      ? (speed.innerHTML = `${car.speed}`)
      : (speed.innerHTML = '');

    let i;

    let seats = sprite.getElementsByClassName('seat');
    for (i = 0; i < car.passengers.length; i++) {
      seats[i].classList.add('passenger');
    }

    if (this.direction === 'east') {
      sprite.style.left = car.x + 'px';
    } else {
      sprite.style.left = window.innerWidth - car.x + 'px';
      sprite.classList.add('flip');
      speed.classList.add('flip');
    }

    sprite.parentNode && car.x > 1600
      ? sprite.parentNode.removeChild(sprite)
      : null;
  }
}

// run it
let topRoad = new Sim();
let bottomRoad = new Sim();

let topVis = new Vis('top', 'east');
let bottomVis = new Vis('bottom', 'west');

let iteration = 0;

let runner = setInterval(() => {
  topRoad.step();
  bottomRoad.step();

  topVis.render(topRoad.cars, 'top');
  topVis.render_info(topRoad.cars[topRoad.cars.length - 1]);

  bottomVis.render(bottomRoad.cars, 'bottom');
  bottomVis.render_info(bottomRoad.cars[bottomRoad.cars.length - 1]);

  iteration++;

  iteration > 3000 ? clearInterval(runner) : null;
}, 40);