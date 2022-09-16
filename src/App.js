import "./styles.css";
import { useState } from "react";

var movies = {
  Action: [
    {
      name: "The Lord of the Rings: The Return of the King",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      stars: "9/10"
    },
    {
      name: "The Dark Knight",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      stars: "8.8/10"
    },
    {
      name: "City of God",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
      description:
        "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
      stars: "8.8/10"
    }
  ],
  Fiction: [
    {
      name: "Inception",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      stars: "8.8/10"
    },
    {
      name: "Interstellar",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
      description:
        " team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      stars: "8.6/10"
    },
    {
      name: "The Prestige",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UY209_CR0,0,140,209_AL_.jpg",
      description:
        "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      stars: "8.5/10"
    }
  ],
  Horror: [
    {
      name: "Shaun of the Dead",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
      description:
        "The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse.",
      stars: "7.9/10"
    },
    {
      name: "Let the Right One In",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UY209_CR3,0,140,209_AL_.jpg",
      description:
        "Oskar, an overlooked and bullied boy, finds love and revenge through Eli, a beautiful but peculiar girl.",
      stars: "7.8/10"
    },
    {
      name: "I Saw the Devil",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjRmNjc5MTYtYjc3My00ZjNiLTg4YjUtMTQ0ZTFkZmMxMDUzXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_UY209_CR8,0,140,209_AL_.jpg",
      description:
        "A secret agent exacts revenge on a serial killer through a series of captures and releases.",
      stars: "7.7/10"
    }
  ]
};

let genre = Object.keys(movies);

export default function App() {
  const [group, setGroup] = useState("Action");

  function clickHandler(e) {
    let moviegroup = e.target.innerText.split(" ").join("");
    setGroup(moviegroup);
  }
  return (
    <div className="App">
      <h1
        style={{
          border: "2px solid black",
          padding: "2rem"
        }}
      >
        Different genres of Movies
      </h1>
      <div className="genres">
        <button
          onClick={clickHandler}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            display: "inline-block",
            padding: "1rem",
            margin: "1rem",
            backgroundColor: "black",
            color: "white"
          }}
        >
          Action
        </button>
        <button
          onClick={clickHandler}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            display: "inline-block",
            padding: "1rem",
            margin: "1rem",
            backgroundColor: "black",
            color: "white"
          }}
        >
          Fiction
        </button>
        <button
          onClick={clickHandler}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            display: "inline-block",
            padding: "1rem",
            margin: "1rem",
            backgroundColor: "black",
            color: "white"
          }}
        >
          Horror
        </button>
        <ul>
          {genre.map((app, index) => {
            return (
              <li key={movies[group][index].name}>
                <div className="details">
                  <h2>{movies[group][index].name}</h2>
                  <div className="one-side">
                    <img src={movies[group][index].image} alt="" />
                    <h2>{movies[group][index].description}</h2>
                  </div>
                  <h2>Stars: {movies[group][index].stars}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
