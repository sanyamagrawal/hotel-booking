// you can enter your JS here!
function getSimilarHotels() {
    var hotels = [{
        "hotel_name": "Hôtel Elysées Flaubert",
        "hotel_rating": 3,
        "hotel_desc": "Hôtel Elysées Flaubert is situated in the heart of Paris, just 1 km from the famous Arc de Triomphe. It offers modern, spacious accommodation and a conservatory with exotic plants.",
        "hotel_review_count": 89,
        "hotel_review_score": 9.7,
        "hotel_price": 12000
    }, {
        "hotel_name": "Hôtel Elysées Flaubert",
        "hotel_rating": 3,
        "hotel_desc": "Hôtel Elysées Flaubert is situated in the heart of Paris, just 1 km from the famous Arc de Triomphe. It offers modern, spacious accommodation and a conservatory with exotic plants.",
        "hotel_review_count": 89,
        "hotel_review_score": 9.7,
        "hotel_price": 12000
    }, {
        "hotel_name": "Hôtel Elysées Flaubert",
        "hotel_rating": 3,
        "hotel_desc": "Hôtel Elysées Flaubert is situated in the heart of Paris, just 1 km from the famous Arc de Triomphe. It offers modern, spacious accommodation and a conservatory with exotic plants.",
        "hotel_review_count": 89,
        "hotel_review_score": 9.7,
        "hotel_price": 12000
    }];

    return hotels;
}

function showSimilarHotels() {
    var hotels = getSimilarHotels(),
        node = document.getElementById("similarHotels"),
        outerWrapper,
        count = 0,
        hotel,
        div;

    for (count; count < hotels.length; count++) {
        hotel = hotels[count];

        outerWrapper = document.createElement("div");
        outerWrapper.classList.add("hotelWrapper");

        div = document.createElement("div");
        div.classList.add("hotelName");
        div.innerHTML = hotel.hotel_name;
        outerWrapper.appendChild(div);

        div = document.createElement("div");
        div.classList.add("hotelRating");
        div.innerHTML = hotel.hotel_rating;
        outerWrapper.appendChild(div);

        div = document.createElement("div");
        div.classList.add("hotelDesc");
        div.innerHTML = hotel.hotel_desc;
        outerWrapper.appendChild(div);

        div = document.createElement("div");
        div.classList.add("hotelEeviewCount");
        div.innerHTML = hotel.hotel_review_count;
        outerWrapper.appendChild(div);

        div = document.createElement("div");
        div.classList.add("hotelReviewScore");
        div.innerHTML = hotel.hotel_review_score;
        outerWrapper.appendChild(div);

        div = document.createElement("div");
        div.classList.add("hotelPrice");
        div.innerHTML = hotel.hotel_price;
        outerWrapper.appendChild(div);

        node.appendChild(outerWrapper);

    }
}

function getHotelDescription() {

    var hotelDetails = {
        "name": "Hotel Fantastique",
        "rating": 5,
        "address": "72b Rue de Awesome, 75001, Paris, France",
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
            "room_name": "Deluxe 2 Bed",
            "room_occupancy": 2,
            "room_price": 88.99,
            "room_description": "Hello World"

        }, {
            "id": 3,
            "room_name": "Basic 2 Bed",
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
            "room_name": "Basic 2 Bed",
            "room_occupancy": 2,
            "room_price": 88.99,
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



window.addEventListener('DOMContentLoaded', appInit, false);

function appInit() {
    populateAccomodation(getHotelDescription().roomDetails)
}

function populateAccomodation(roomDetails) {

    var roomNode = document.getElementById("roomListNode"),
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
        tr.setAttribute("class", "row");

        anode = document.createElement("a");
        anode.setAttribute("id", room.id);
        anode.setAttribute("href", "javascript:void(0)");
        anode.innerHTML = room.room_name;
        anode.addEventListener("click", showRoomDescription);

        div = document.createElement("div");
        div.innerHTML = room.room_description;

        td = document.createElement("td");
        td.classList.add("roomName");
        td.appendChild(anode);
        td.appendChild(div);

        tr.appendChild(td);

        td = document.createElement("td");
        td.classList.add("roomOccupancy");
        td.innerHTML = room.room_occupancy;
        tr.appendChild(td);

        td = document.createElement("td");
        td.classList.add("roomPrice");
        td.innerHTML = room.room_price;
        tr.appendChild(td);

        td = document.createElement("td");
        td.classList.add("roomPrice");
        td.innerHTML = room.room_price;
        tr.appendChild(td);



        roomNode.appendChild(tr);

    }
}

function showRoomDescription(event) {
    var node = event.target.parentElement.parentElement.style.height = 100 + "px";
}

function dataSort(event) {

}

function sort(event) {
    var sortOrder = event.target.getAttribute("data-sort-order"),
        toggleOrder,
        roomDetails = getHotelDescription().roomDetails,
        typeMap = {
            "occupancy": "room_occupancy",
            "price": "room_price"
        },
        type = event.target.parentElement.id;
        sortKey = typeMap[type],
        keyType = typeof roomDetails[0][sortKey] === 'string',
        comparator = {
            ascending: function(a, b) {
                return typeof a[sortKey] === "string" ? a[sortKey].toLowerCase().localeCompare(b[sortKey].toLowerCase()) : a[sortKey] - b[sortKey];
            },
            descending: function(a, b) {
                return typeof a[sortKey] === "string" ?b[sortKey].toLowerCase().localeCompare(a[sortKey].toLowerCase()) : b[sortKey] - a[sortKey];
            },
            null: function(a, b) {
                return typeofa[sortKey]  === "string" ? a[sortKey].toLowerCase().localeCompare(b[sortKey].toLowerCase()) : a[sortKey] - b[sortKey];
            }
        };


    if (sortOrder) {
        toggleOrder = sortOrder === "ascending" ? "descending" : "ascending";
    } else {
        toggleOrder = "ascending";
    }

    roomDetails.sort(comparator[toggleOrder]);
    event.target.setAttribute("data-sort-order", toggleOrder);

    populateAccomodation(roomDetails);

    return false;
}