/*
This app has the following task completed and remaining are partially completed.
STATUS :
Complete :
Imagine there's a json feed with hotels similar to the current one. Design the json format and use it to display similar hotels on the page.
Improve the room table. Some ideas you may consider: allow the user to sort the rooms table by occupancy or price, display a total when the user selects a quantity, display additional information about rooms.
Improve the hotel page however you see fit.

INCOMPLETE:

Create a photo carousel using the large photos linked from the thumbnails currently in the page. Some ideas you may consider: include an automatic slideshow mode, add prev/next buttons to manually controll the carousel, add a layer that shows the contents of the images alt text.

NOT STARTED:
Imagine there's a json feed with nearby landmarks. Design the json format and use it to display landmarks on the page.
Split the reviews into blocks of 5 and create pagination. Allow the user to sort the reviews by review score.
Improve the facilities block.

* More about this app :
   1. No External Library used , how ever some CSS have been inspired by bootstrap and other open source projects.
   2. There is a JSON Feed that will populate similar hotels nearby.
   3. Redigned the page with CSS added externally.s
   4. Project has a table which can be sorted on Room Avaliable and prive , along with the total amount on selecting rooms.
   5. Project Cotains no iframe.
Author : Sanyam Agrawal
Date : 13th June 2014
*/

/*Following Reveling Modular Pattern(IIFE) in this code base so that the global namespace is not populated
 * app contains 3 methods which are exposed to the public , rest all the functions and variables are private
 */

var app = (function() {

    /*
     * JSON Object for a specific Hotel.Gives detail of the a particular hotel.
     * @type function
     *
     * @private
     */
    function getHotelDescriptionJSON() {

        var hotelDetails = {
            "name": "Hotel Fantastique",
            "rating": 5,
            "address": "72b Rue de Awesome, 75001, Paris, France",
            "currency": "$",
            "description": [
                "Located in the heart of Paris, this 5-star hotel offers elegant guest rooms in a Hausmannian-style building. It features a fitness centre, a concierge and a tour desk with ticket service.",
                "Decorated in a unique style, the air-conditioned guest rooms at the Hotel du Louvre are equipped with satellite TV, a minibar and free Wi-Fi access. Some rooms feature a seating area. All rooms have a private bathroom, some include marble features.",
                "The hotel restaurant, Brasserie du Louvre, has a traditional Parisian decor and serves traditional French cuisine. A buffet breakfast is served every morning. Guests can also enjoy a cocktail and jazz evenings twice a week in the Defender Bar.",
                "The 4 facades and terrace of this hotel overlook the famous Louvre Museum, the Opéra Garnier and the Comédie Française theatre.",
                "Hotel du Louvre is situated 2 minutes from Palais Royal Metro Station, providing direct access to the Champs Elysees and the Place de la Bastille. Public parking is available nearby."
            ],
            "facilities": [
                "Free Wifi",
                "Swimming Pool",
                "Gym",
                "24/7 reception",
                "Concierge",
                "Restaurant",
                "Free Parking",
                "Shoe-Shine",
                "Satellite TV",
                "Room Service"
            ],
            "roomDetails": [{
                "id": 1,
                "room_name": "Basic 2 Bed",
                "room_occupancy": 2,
                "room_price": 88.99,
                "room_description": "Hello World"
            }, {
                "id": 2,
                "room_name": "Basic Family Room",
                "room_occupancy": 4,
                "room_price": 98.99,
                "room_description": "Hello World"

            }, {
                "id": 3,
                "room_name": "Deluxe 2 Bed",
                "room_occupancy": 2,
                "room_price": 109.99,
                "room_description": "Hello World"

            }, {
                "id": 4,
                "room_name": "Deluxe Family Room",
                "room_occupancy": 7,
                "room_price": 112.99,
                "room_description": "Hello World"

            }, {
                "id": 5,
                "room_name": "Bridal Suite",
                "room_occupancy": 2,
                "room_price": 167.99,
                "room_description": "Hello World"

            }, {
                "id": 6,
                "room_name": "President Suite",
                "room_occupancy": 2,
                "room_price": 301.99,
                "room_description": "Hello World"

            }, {
                "id": 7,
                "room_name": "One + One",
                "room_occupancy": 2,
                "room_price": 78.99,
                "room_description": "Hello World"

            }, {
                "id": 8,
                "room_name": "Queen Room",
                "room_occupancy": 2,
                "room_price": 10.00,
                "room_description": "Hello World"

            }, {
                "id": 9,
                "room_name": "Basement 1 Bed",
                "room_occupancy": 2,
                "room_price": 167.99,
                "room_description": "Hello World"

            }, {
                "id": 10,
                "room_name": "Mega XL Suite",
                "room_occupancy": 9,
                "room_price": 412.99,
                "room_description": "Hello World"

            }],
            "reviews": [{
                "review_score": 5,
                "review_content": "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
                "city": "Malcolm Reynolds"
            }]
        };

        return hotelDetails;
    }

    /*
     * JSON Object for a similar hotels nearBy.
     * Gives gives an overview of the hotels and the data requied to be rendered in the UI.
     * @type function
     *
     * @private
     */

    function getSimilarHotelsJSON() {
        var hotels = [{
            "hotel_name": "Hôtel Elysées Flaubert",
            "hotel_img": "hotel1.jpg",
            "hotel_rating": "★★",
            "hotel_review_count": 89,
            "hotel_price": "Rs 12,000",
            "hotel_address": "4.2 KM",
        }, {
            "hotel_name": "Cine De Chef",
            "hotel_img": "hotel2.jpg",
            "hotel_rating": "★★★★★",
            "hotel_review_count": 189,
            "hotel_price": "Rs 6,000",
            "hotel_address": "1.7 KM",
        }, {
            "hotel_name": "Leamon Tree Premium- A Stay With a difference",
            "hotel_img": "hotel3.jpg",
            "hotel_rating": "★★★★",
            "hotel_review_count": 246,
            "hotel_price": "Rs 25,000",
            "hotel_address": "2.2 KM",
        }];

        return hotels;
    }

    /*
     *   takes a roomsObject and creats a Table and attaches to the DOM.
     *   @private
     *   @input : ROOMS JSON Object.
     */
    function populateAccomodation(roomDetails) {

        var roomNode = document.getElementById("roomListNode"),
            currency = getHotelDescriptionJSON().currency,
            room,
            count = 0,
            anode,
            td,
            tr,
            div;

        roomNode.innerHTML = "";

        for (count; count < roomDetails.length; count++) {
            room = roomDetails[count];
            tr = document.createElement("tr");
            tr.setAttribute("class", "one_room");

            anode = document.createElement("a");
            anode.setAttribute("id", room.id);
            anode.setAttribute("href", "javascript:void(0)");
            anode.innerHTML = room.room_name;
            anode.addEventListener("click", showRoomDescription);

            div = document.createElement("div");
            div.innerHTML = room.room_description;

            td = document.createElement("td");
            td.classList.add("room_name");
            td.appendChild(anode);
            td.appendChild(div);

            tr.appendChild(td);

            td = document.createElement("td");
            td.classList.add("room_occupancy");
            td.innerHTML = room.room_occupancy;
            tr.appendChild(td);

            td = document.createElement("td");
            td.classList.add("room_price");
            td.innerHTML = [currency, room.room_price].join(" ");
            tr.appendChild(td);

            td = document.createElement("td");
            td.classList.add("room_quantity");
            td.appendChild(createSelectNodeWithOptions(room));
            tr.appendChild(td);

            roomNode.appendChild(tr);

        }
    }

    /*
        Function to show More details about a room.
        Currently we will have a hard Coded JSON but this can be plugged to A REST API
    */
    function showRoomDescription(event) {
        //event.target.parentElement.parentElement.style.height = 200 + "px";
    }
    /*
        UI Block to show Similar hotels near by a particular hotel.
        Data Received from JSON

        @type : function
        @returns : --NA--
    */

    function showSimilarHotels() {
        var hotels = getSimilarHotelsJSON(),
            node = document.getElementById("similarHotels"),
            outerWrapper,
            count = 0,
            hotel,
            temp,
            div,
            span,
            img,
            h4;

        for (count; count < hotels.length; count++) {
            hotel = hotels[count];

            outerWrapper = document.createElement("div");
            outerWrapper.classList.add("hotelWrapper");

            //Image Block
            div = document.createElement("div");
            div.classList.add("photoFrame");
            outerWrapper.appendChild(div);

            span = document.createElement("span");
            span.classList.add("photoMask");
            div.appendChild(span);

            img = document.createElement("img");
            img.setAttribute("src", "./img/hotels/" + hotel.hotel_img);
            span.appendChild(img);

            //Hotel Info Block
            div = document.createElement("div");
            div.classList.add("cardInfo");
            div.classList.add("clearfix");
            outerWrapper.appendChild(div);

            h4 = document.createElement("h4");
            h4.classList.add("truncate");
            h4.innerHTML = hotel.hotel_name;
            div.appendChild(h4);

            temp = document.createElement("div");
            temp.classList.add("address");
            temp.classList.add("floatLeft");
            temp.innerHTML = hotel.hotel_address + " away";
            div.appendChild(temp);

            temp = document.createElement("div");
            temp.classList.add("address");
            temp.classList.add("floatRight");
            temp.innerHTML = hotel.hotel_price;
            div.appendChild(temp);


            //hotel Meta Information
            div = document.createElement("div");
            div.classList.add("cardsMeta");
            outerWrapper.appendChild(div);

            temp = document.createElement("div");
            temp.classList.add("metaTARating");
            temp.classList.add("floatLeft");

            temp.innerHTML = hotel.hotel_review_count + "<small class='reviewScore'>Review Count</small>";
            div.appendChild(temp);

            temp = document.createElement("div");
            temp.classList.add("stars");
            temp.classList.add("floatRight");

            temp.innerHTML = hotel.hotel_rating + "<small class='reviewScore'>Star rating</small>";
            div.appendChild(temp);

            node.appendChild(outerWrapper);

        }
    }

    /*Function that will create a new Select Node with options as the data
        @input : JSON for data to be shown
        @function

        @private
    */

    function createSelectNodeWithOptions(data) {

        var selectNode,
            optionNode,
            options = [0, 1, 2, 3, 4, 5],
            count = 0;


        selectNode = document.createElement("select");
        selectNode.setAttribute("id", "delux");
        selectNode.setAttribute("name", "delux");
        selectNode.data = data;
        selectNode.previousSelect = 0;
        selectNode.addEventListener("change", calculatePrice);

        for (; count < options.length; count++) {

            optionNode = document.createElement("option");
            optionNode.setAttribute("value", options[count]);
            count === 0 && optionNode.setAttribute("selected", "selected");
            optionNode.innerHTML = options[count];
            selectNode.appendChild(optionNode);
        }

        return selectNode;
    }

    /*
        Function to sort a table based on the tab clicked.

        @public
    */
    function sort(event) {
        var sortOrder = event.target.getAttribute("data-sort-order"),
            toggleOrder,
            roomDetails = getHotelDescriptionJSON().roomDetails,
            typeMap = {
                "occupancy": "room_occupancy",
                "price": "room_price"
            },
            type = event.target.id,
            sortKey = typeMap[type],
            keyType = typeof roomDetails[0][sortKey] === "string",
            comparator = {
                ascending: function(a, b) {
                    return keyType ? a[sortKey].toLowerCase().localeCompare(b[sortKey].toLowerCase()) : a[sortKey] - b[sortKey];
                },
                descending: function(a, b) {
                    return keyType ? b[sortKey].toLowerCase().localeCompare(a[sortKey].toLowerCase()) : b[sortKey] - a[sortKey];
                },
                null: function(a, b) {
                    return keyType ? a[sortKey].toLowerCase().localeCompare(b[sortKey].toLowerCase()) : a[sortKey] - b[sortKey];
                }
            };

        toggleArrow(event.target.children[0]);

        if (sortOrder) {
            toggleOrder = sortOrder === "ascending" ? "descending" : "ascending";
        } else {
            toggleOrder = "ascending";
        }

        roomDetails.sort(comparator[toggleOrder]);
        event.target.setAttribute("data-sort-order", toggleOrder);

        populateAccomodation(roomDetails);
        updateTotalAmount(0, true);
        return false;
    }

    function toggleArrow(node) {
        if (node.classList.contains("downArrow")) {
            node.classList.remove("downArrow");
            node.classList.add("upArrow");
        } else {
            node.classList.remove("upArrow");
            node.classList.add("downArrow");
        }
    }

    function calculatePrice(event) {
        var node = event.target,
            data = node.data,
            quantity = parseInt(node.value, 10),
            rate = data.room_price,
            perviousRoom = node.previousSelect,
            amount = 0;

        if (!isNaN(quantity)) {
            amount = (quantity - perviousRoom) * rate;
            updateTotalAmount(amount, false);
        }
        node.previousSelect = quantity;
    }


    function updateTotalAmount(amount, hardReset) {
        var node = document.getElementById("total_amount"),
            currencySymbol,
            currentValue = parseFloat(node.innerHTML, 10);

        currentValue = hardReset === true ? 0 : currentValue + amount;
        currencySymbol = currentValue === 0 ? " " : getHotelDescriptionJSON().currency;
        node.setAttribute("data-currency", currencySymbol);
        node.innerHTML = currentValue;
    }


    /* Initialize the app and start kick of the lifecycle
        @type function
        @public
    */
    function appInit() {
        SlideShow.show();
        populateAccomodation(getHotelDescriptionJSON().roomDetails);
        showSimilarHotels();
    }

    return {
        init: appInit,
        sort: sort
    };
})();

window.addEventListener("DOMContentLoaded", app.init, false);