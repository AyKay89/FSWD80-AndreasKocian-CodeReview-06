var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Location = /** @class */ (function () {
    function Location(city, zipcode, address, teaserimg) {
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.teaserimg = teaserimg;
    }
    Location.prototype.display = function () {
        return "\n\t" + this.city + " " + this.zipcode + " " + this.address + " " + this.teaserimg + "\n\t";
    };
    return Location;
}());
// let location1 = new Location()
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zipcode, address, teaserimg, telephone, type, web) {
        var _this = _super.call(this, city, zipcode, address, teaserimg) || this;
        _this.telephone = telephone;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    Restaurant.prototype.displayRestaurant = function () {
        return _super.prototype.display.call(this) + "\n\t\ttelephone: " + this.telephone + "\n\t\ttype: " + this.type + "\n\t\tweb: " + this.web;
    };
    return Restaurant;
}(Location));
// let location2 = new Location()
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(city, zipcode, address, teaserimg) {
        var _this = _super.call(this, city, zipcode, address, teaserimg) || this;
        _this.date = date;
        _this.time = time;
        _this.ticketprice = ticketprice;
        return _this;
    }
    Event.prototype.displayEvent = function () {
        return _super.prototype.display.call(this) + "\n\tdate: " + this.date + "\n\ttime: " + this.time + "\n\tticketprice: " + this.tickeprice;
    };
    return Event;
}(Location));
var charleschurch = new Location("Vienna", 1010, "Karlsplatz 1", "img/st_charles.jpg");
var zoo = new Location("Vienna", 1130, "Maxingerstraße 13b", "img/zoo.jpg");
var thairestaurant = new Location("Vienna", 1050, "Kettenbrückengasse 19", "img/restaurant.png", +43(1), 5812308, "thai", "www.lemonleaf.at");
var sixta = new Location("Vienna", 1050, "Schönbrunnerstraße 21", "img/restaurant2.png", +43, 1, 58, 528, 56, "viennese", "http://www.sixta-restaurant.at/");
var kristofferson = new Location("Vienna", 1150, "Roland Rainer Platz 1", "img/kristofferson.jpg", 15.11, .2019, 20, 00, 58, 50);
var kravitz = new Location("Vienna", 1150, "Roland Rainer Platz 1", "img/kravitz.jpg", 09.12, .2019, 19, 30, 47, 80);
