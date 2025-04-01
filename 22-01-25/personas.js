let personas = [
    {
      name: "Bridgette McGuire",
      picture: "https://randomuser.me/api/portraits/women/33.jpg",
      age: 23,
      email: "bridgettemcguire@kidgrease.com",
      address: "811 Lawrence Avenue, Saddlebrooke, Ohio, 6224",
      eyeColor: "blue",
    },
    {
      name: "Melinda Wheeler",
      picture: "https://randomuser.me/api/portraits/women/3.jpg",
      age: 39,
      email: "melindawheeler@eclipto.com",
      address: "726 Luquer Street, Muse, New York, 9303",
      eyeColor: "green",
    },
    {
      name: "Ward Fulton",
      picture: "https://randomuser.me/api/portraits/men/30.jpg",
      age: 31,
      email: "wardfulton@qaboos.com",
      address: "978 Victor Road, Sims, American Samoa, 9727",
      eyeColor: "green",
    },
    {
      name: "Tessa Sellers",
      picture: "https://randomuser.me/api/portraits/women/77.jpg",
      age: 35,
      email: "tessasellers@austex.com",
      address: "107 Blake Court, Faxon, Idaho, 8763",
      eyeColor: "brown",
    },
    {
      name: "Kimberley Roberson",
      picture: "https://randomuser.me/api/portraits/women/68.jpg",
      age: 25,
      email: "kimberleyroberson@eventex.com",
      address: "419 Carlton Avenue, Succasunna, Illinois, 8699",
      eyeColor: "green",
    },
    {
      name: "Eleanor Stafford",
      picture: "https://randomuser.me/api/portraits/women/30.jpg",
      age: 35,
      email: "eleanorstafford@protodyne.com",
      address: "570 Columbus Place, Emory, Guam, 5306",
      eyeColor: "blue",
    },
    {
      name: "Crane Harris",
      picture: "https://randomuser.me/api/portraits/men/3.jpg",
      age: 39,
      email: "craneharris@jetsilk.com",
      address: "350 Montieth Street, Titanic, West Virginia, 9450",
      eyeColor: "brown",
    },
  ];


function display(n) {
    let card = document.getElementById("card");
    let filteredPersonas = String(n).trim() === "" 
        ? personas 
        : personas.filter(person => person.name.toLowerCase().includes(String(n).toLowerCase()));
    if (filteredPersonas.length > 0) {
        card.innerHTML = filteredPersonas.map(person => `
            <div class="person-card">
                <img src="${person.picture}" alt="${person.name}">
                <h2>${person.name}</h2>
                <p>Age: ${person.age}</p>
                <p>Email: ${person.email}</p>
                <p>Address: ${person.address}</p>
                <p>Eye Color: ${person.eyeColor}</p>
            </div>
        `).join('');
    } else {
        card.innerHTML = `<p>No matches found for "${n}".</p>`;
    }
}
    

