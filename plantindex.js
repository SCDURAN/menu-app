class Plant {
    constructor(name, typeOfPlant) {
        this.name = name;
        this.typeOfPlant= typeOfPlant;
    }

    describe() {
        return`${this.name} plays ${this.typeOfPlant}`;
    }
}

class Location {
    constructor(name) {
        this.name =name;
        this.plant = [];
    }

    addPlant(plant) {
        if (plant instanceof plant) {
this.plants.push(plant);
        }else{
            throw new Error(`You can only add an instance of plant. Argument is not a plant: ${plant}`);
        }
    }

    describe() {
        return `${this.name} has ${this.plants.length} plants.`;
    }
}

class Menu {
    constructor() {
        this.locations = [];
        this.selectedLocation =null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createLocation();
                    break;
                case '2':
                    this.viewLocation();
                        break;
                case '3' :
                    this.deleteLocation();
                    break;
                case '4' :
                    this.displayLocations();
                    break;
                default:
                    selection = -0;
            }
            selection = this.showMainMenuOptions();
        }
        
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new Location
        2) view Location
        3) delete Location
        4) display all Locations
        `);
    
    }

    showLocationMenuOptions(locationinfo) {
        return prompt(`
        0) back
        1) create plant
        2) delete plant
        --------------------
        ${locationInfo}
        `);
    }

    displayLocations() {
        let locationString = '';
        for (let i = 0; i < this.locations.length; i++) {
            locationString += i + ')' +this.locations[i].name + '\n';
        }
        alert(locationString);
    }
    createLocation() {
        let name = prompt('Enter name for new location:');
        this.locations.push(new Location(name));
    }

    viewLocation() {
        let index = prompt('Enter the index of the location you wish to view:');
        if (index > -1 && index < this.locations.length) {
            this.selectedLocation = this.locations[index];
            let description = 'Location Name' + this.selectedLocation.name + '\n';

            for (let i = 0; i < this.selectedLocation.plants.length; i++) {
                description += i + ') ' + this.selectedLocation.plants[i].name + ' - ' + this.selectedLocation.plants[i].typeOfPlant + '\n';
            }

            let selection= this.showLocationMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlant();
                    break;
                    case '2':
                        this.deletePlant();
            }
        }
    }

    deleteLocation() {
        let index = prompt('Enter the index of the location you wish to delete:');
        if (index > -1 && index < this.locations.length) {
            this.locations.splice(index, 1);

        }
    }

    createPlant() {
        let name = prompt('Enter namw for new plant:')
        let typeOfPlant = prompt('Enter typeOfPlant for new plant:');
        this.selectedLocation.plants.push(new Plant(name, typeOfPlant));
    }

    deletePlant() {
        let index = prompt('Enter the index of the plant you wish to delete');
        if(index > -1 && index < this.selectedLocation.plants.length) {
           this.selectedLocation.plants.splice(index,1);
        }
    }
}

let menu = new Menu();
menu.start();


