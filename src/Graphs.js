import React from "react";
// const friends = {
//   Paul: ["Bob", "Jenny", "Sandy"],
//   Bob: ["Sandy"],
//   Jenny: ["Paul", "Sandy"],
//   Sandy: ["Paul", "Jenny"]
// };

class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
    this.visited = false;
  }
  addFriend(friend) {
    this.friends.push(friend);
  }
  showFriends() {
    return `${this.name}'s freinds are: ${this.friends
      .map(x => x.name)
      .join(", ")}`;
  }

  displayNetwork() {
    let toReset = [this];
    let queue = [this];
    this.visited = true;
    while (queue) {
      let currentVertex = queue.shift();
      currentVertex.friends.map(friend => {
        console.log("friend", friend);
        if (typeof currentVertex.friends === "undefined")
          console.log("undefined");
        if (!friend.visited) {
          try {
            toReset.push(friend);
            queue.push(friend);
            friend.visited = true;
          } catch (e) {
            console.log(e);
          }
        }
      });
    }
    toReset.forEach(node => (node.visited = false));
  }
}
const Paul = new Person("Paul");

const Bob = new Person("Bob");
const Jenny = new Person("Jenny");
Paul.addFriend(Bob);
Paul.addFriend(Jenny);
Jenny.addFriend(Paul);
Bob.addFriend(Paul);
Jenny.addFriend(Bob);
Bob.addFriend(Jenny);

class City {
  constructor(name) {
    this.name = name;
    this.routes = {};
  }
  addRoute(city, price) {
    this.routes[city] = price;
  }
}
const Toronto = new City("Toronto");
const Korea = new City("Korea");
const Vietnam = new City("Vietnam");
Toronto.addRoute(Korea.name, 800);
Toronto.addRoute(Vietnam.name, 1000);
// console.log(Toronto.routes);
function dijkstra(startingCity, otherCities) {
  let routesFromCity = {};
  routesFromCity[startingCity] = [0, startingCity];
  otherCities.forEach(
    city => (routesFromCity[city] = [parseFloat(Infinity), null])
  );
  let visitedCities = [];
  let currentCity = startingCity;
  while (currentCity) {
    visitedCities.push(currentCity);
    console.log(visitedCities, currentCity);
    currentCity.routes.map(x =>
      routesFromCity[x.city[0] > x.price + routesFromCity[currentCity][0]]
        ? (routesFromCity[x.city] = [
            x.price + routesFromCity[currentCity][0],
            currentCity
          ])
        : console.log("huh?")
    );
  }
  currentCity = null;
  let cheapestRouteFromCurrentCity = parseFloat(Infinity);
  // console.log(routesFromCity);
  routesFromCity.forEach(x =>
    x.price[0] < cheapestRouteFromCurrentCity && !visitedCities.includes(x.city)
      ? ((cheapestRouteFromCurrentCity = x.price[0]), (currentCity = x.city))
      : "huh?"
  );
  return routesFromCity;
}
// const routes = dijkstra(Toronto, [Korea, Vietnam]);
// routes.map(x => console.log(`${x.city} ${x.price[0]}`));

export const Graphs = (
  <div>
    <div>{Paul.friends.map(x => x.name)}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
  </div>
);
