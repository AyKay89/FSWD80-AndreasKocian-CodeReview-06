class Location {
	city:string;
	zipcode:number;
	address:string;
	teaserimg:string;

	constructor(city:string, zipcode:number, address:string, teaserimg:string) {
		this.city=city;
		this.zipcode=zipcode;
		this.address=address;
		this.teaserimg=teaserimg;
	}

	display() {
	return `
	${this.city} ${this.zipcode} ${this.address} ${this.teaserimg}
	`
	}
}

// let location1 = new Location()

class Restaurant extends Location {
	telephone:number;
	type:string;
	web:string;

	constructor(city:string, zipcode:number, address:string, teaserimg:string, telephone:number, type:string, web:string) {
		super(city, zipcode, address, teaserimg);
		this.telephone=telephone;
		this.type=type;
		this.web=web;
	}
	displayRestaurant() {
		return `${super.display()}
		telephone: ${this.telephone}
		type: ${this.type}
		web: ${this.web}`
	}
}

// let location2 = new Location()

class Event extends Location {
	date:number;
	time:number;
	ticketprice:number;

	constructor(city:string, zipcode:number, address:string, teaserimg:string) {
		super(city, zipcode, address, teaserimg);
		this.date=date;
		this.time=time;
		this.ticketprice=ticketprice;
}

displayEvent() {
	return `${super.display()}
	date: ${this.date}
	time: ${this.time}
	ticketprice: ${this.tickeprice}`
	}
}

let charleschurch = new Location("Vienna", 1010, "Karlsplatz 1", "img/st_charles.jpg");
let zoo = new Location("Vienna", 1130, "Maxingerstraße 13b" "img/zoo.jpg");

let thairestaurant = new Location("Vienna", 1050, "Kettenbrückengasse 19", "img/restaurant.png", +43(1)5812308, "thai", "www.lemonleaf.at" );
let sixta = new Location("Vienna", 1050, "Schönbrunnerstraße 21", "img/restaurant2.png",  +43 1 58 528 56, "viennese", "http://www.sixta-restaurant.at/");

let kristofferson = new Location("Vienna", 1150, "Roland Rainer Platz 1", "img/kristofferson.jpg", 15.11.2019, 20:00, 58,50);
let kravitz = new Location("Vienna", 1150, "Roland Rainer Platz 1", "img/kravitz.jpg", 09.12.2019, 19:30, 47,80);

