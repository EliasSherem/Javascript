const sistemaSolar = {
    mercurio: {
      nombre: "mercurio",
      color: "grey",
      temperatura: 350,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/420px-Mercury_in_color_-_Prockter07_centered.jpg",
    },
    venus: {
      nombre: "venus",
      color: "white",
      temperatura: 460,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
    },
    tierra: {
      nombre: "tierra",
      color: "purple",
      temperatura: 14,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/420px-The_Earth_seen_from_Apollo_17.jpg",
    },
    marte: {
      nombre: "marte",
      color: "red",
      temperatura: -46,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/420px-OSIRIS_Mars_true_color.jpg",
    },
    jupiter: {
      nombre: "jupiter",
      color: "brown",
      temperatura: -121,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
    },
    saturno: {
      nombre: "saturno",
      color: "yellow",
      temperatura: -130,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/500px-Saturn_during_Equinox.jpg",
    },
    urano: {
      nombre: "urano",
      color: "blue",
      temperatura: -205,
      imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
    },
    neptuno: {
      nombre: "neptuno",
      color: "blue",
      temperatura: -220,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
    },
    pluton: {
      nombre: "plutón",
      color: "white",
      temperatura: -229,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg/375px-Pluto-01_Stern_03_Pluto_Color_TXT.jpg",
    },
  };

  function displayPlanets() {
    const planet1 = document.getElementById("planet1").value.toLowerCase();
    const planet2 = document.getElementById("planet2").value.toLowerCase();
    const planet3 = document.getElementById("planet3").value.toLowerCase();
    const cardsDiv = document.getElementById("cards");

    // Clear previous results
    cardsDiv.innerHTML = "";

    // Get the planets
    const planets = [planet1, planet2, planet3];
    const displayedPlanets = new Set();

    planets.forEach((planet) => {
      if (!displayedPlanets.has(planet)) {
        if (sistemaSolar[planet]) {
          const planetData = sistemaSolar[planet];
          const card = `
            <div class="card">
              <h1>${planetData.nombre}</h1>
              <img src="${planetData.imagen}" alt="${planetData.nombre}">
              <p><strong>Color:</strong> ${planetData.color}</p>
              <p><strong>Temperature:</strong> ${planetData.temperatura}°C</p>
              <button onclick="this.parentElement.style.backgroundColor='${planetData.color}'">Change Background</button>
            </div>
          `;
          cardsDiv.innerHTML += card;
        } else {
          cardsDiv.innerHTML += `
            <div class="card">
              <h2>Planet not found</h2>
              <p>The planet "${planet}" does not exist in the solar system data.</p>
            </div>
          `;
        }
        displayedPlanets.add(planet);
      }
    });
  }