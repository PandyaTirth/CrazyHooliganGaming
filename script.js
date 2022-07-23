document.addEventListener("click", function (e) {
  // Hamburger menu
  if (e.target.classList.contains("hamburger-toggle")) {
    e.target.children[0].classList.toggle("active");
  }
});
// Scroll to top
var mybutton = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Dynamic data in modal + open modal using onclick function
function openNewGameModal(gameName){
  if(gameName == "overwatch2"){
    document.getElementById("gameTitle").innerHTML = "Overwatch 2";
    document.getElementById("releaseYear").innerHTML = "2022";
    document.getElementById("developer").innerHTML = "Blizzard Entertainment";
  }
  else if(gameName == "warframe"){
    document.getElementById("gameTitle").innerHTML = "Warframe";
    document.getElementById("releaseYear").innerHTML = "2020";
    document.getElementById("developer").innerHTML = "Digital Extremes";
  }
  else if(gameName == "outlast2"){
    document.getElementById("gameTitle").innerHTML = "Outlast 2";
    document.getElementById("releaseYear").innerHTML = "2017";
    document.getElementById("developer").innerHTML = "Red Barrels";
  }
  else if(gameName == "gothamKnights"){
    document.getElementById("gameTitle").innerHTML = "Gotham Knights";
    document.getElementById("releaseYear").innerHTML = "2022";
    document.getElementById("developer").innerHTML = "WB Games Montréal";
  }
  else if(gameName == "ghostwireTokyo"){
    document.getElementById("gameTitle").innerHTML = "Ghostwire : Tokyo";
    document.getElementById("releaseYear").innerHTML = "2022";
    document.getElementById("developer").innerHTML = "Tango Gameworks";
  }
  else if(gameName == "forspoken"){
    document.getElementById("gameTitle").innerHTML = "Forspoken";
    document.getElementById("releaseYear").innerHTML = "2022";
    document.getElementById("developer").innerHTML = "Luminous Engine";
  }
  else if(gameName == "eldenRing"){
    document.getElementById("gameTitle").innerHTML = "Elden Ring";
    document.getElementById("releaseYear").innerHTML = "2022";
    document.getElementById("developer").innerHTML = "FromSoftware Inc.";
  }
  else if(gameName == "farCry6"){
    document.getElementById("gameTitle").innerHTML = "Far Cry 6";
    document.getElementById("releaseYear").innerHTML = "2021";
    document.getElementById("developer").innerHTML = "Ubisoft";
  }
  else if(gameName == "sniperElite5"){
    document.getElementById("gameTitle").innerHTML = "Sniper Elite 5";
    document.getElementById("releaseYear").innerHTML = "2022";
    document.getElementById("developer").innerHTML = "Rebellion Developments";
  }
  else if(gameName == "justCause4"){
    document.getElementById("gameTitle").innerHTML = "Just Cause 4";
    document.getElementById("releaseYear").innerHTML = "2018";
    document.getElementById("developer").innerHTML = "Avalanche Studios Group";
  }
  else if(gameName == "diabloImmortal"){
    document.getElementById("gameTitle").innerHTML = "Diablo Immortal";
    document.getElementById("releaseYear").innerHTML = "2022";
    document.getElementById("developer").innerHTML = "Blizzard Entertainment";
  }
  else if(gameName == "sifu"){
    document.getElementById("gameTitle").innerHTML = "Sifu";
    document.getElementById("releaseYear").innerHTML = "2022";
    document.getElementById("developer").innerHTML = "Sloclap";
  }
  let myModal = new bootstrap.Modal(document.getElementById('gameInfo'), {});
  myModal.show();
}

function openGameCategoryModal(gameTypeName){
  if(gameTypeName == "gta5"){
    document.getElementById("gameTypeTitle").innerHTML = "Grand Theft Auto V";
    document.getElementById("gameReleaseYear").innerHTML = "2013";
    document.getElementById("gameDeveloper").innerHTML = "Rockstar Games";
  }
  else if(gameTypeName == "dyingLight"){
    document.getElementById("gameTypeTitle").innerHTML = "Dying Light";
    document.getElementById("gameReleaseYear").innerHTML = "2015";
    document.getElementById("gameDeveloper").innerHTML = "Techland";
  }
  else if(gameTypeName == "cyberpunk2077"){
    document.getElementById("gameTypeTitle").innerHTML = "Cyberpunk 2077";
    document.getElementById("gameReleaseYear").innerHTML = "2020";
    document.getElementById("gameDeveloper").innerHTML = "CD Projekt";
  }
  else if(gameTypeName == "metalGearSolid"){
    document.getElementById("gameTypeTitle").innerHTML = "Metal Gear Solid";
    document.getElementById("gameReleaseYear").innerHTML = "2015";
    document.getElementById("gameDeveloper").innerHTML = "Konami Digital Entertainment";
  }
  else if(gameTypeName == "assassinsCreedOrigins"){
    document.getElementById("gameTypeTitle").innerHTML = "Assassin's Creed : Origins";
    document.getElementById("gameReleaseYear").innerHTML = "2017";
    document.getElementById("gameDeveloper").innerHTML = "Ubisoft";
  }
  else if(gameTypeName == "godOfWar"){
    document.getElementById("gameTypeTitle").innerHTML = "God Of War";
    document.getElementById("gameReleaseYear").innerHTML = "2022";
    document.getElementById("gameDeveloper").innerHTML = "Santa Monica Studio";
  }
  else if(gameTypeName == "mortalKombat11"){
    document.getElementById("gameTypeTitle").innerHTML = "Mortal Kombat 11";
    document.getElementById("gameReleaseYear").innerHTML = "2022";
    document.getElementById("gameDeveloper").innerHTML = "NetherRealm Studios";
  }
  else if(gameTypeName == "theWitcher"){
    document.getElementById("gameTypeTitle").innerHTML = "The Witcher";
    document.getElementById("gameReleaseYear").innerHTML = "2015";
    document.getElementById("gameDeveloper").innerHTML = "CD Projekt";
  }
  else if(gameTypeName == "metroExodus"){
    document.getElementById("gameTypeTitle").innerHTML = "Metro : Exodus";
    document.getElementById("gameReleaseYear").innerHTML = "2019";
    document.getElementById("gameDeveloper").innerHTML = "4A Games";
  }
  else if(gameTypeName == "tombRaider"){
    document.getElementById("gameTypeTitle").innerHTML = "Tomb Raider";
    document.getElementById("gameReleaseYear").innerHTML = "2019";
    document.getElementById("gameDeveloper").innerHTML = "Eidos-Montréal";
  }
  else if(gameTypeName == "callOfDutyGhosts"){
    document.getElementById("gameTypeTitle").innerHTML = "Call of Duty : Ghosts";
    document.getElementById("gameReleaseYear").innerHTML = "2013";
    document.getElementById("gameDeveloper").innerHTML = "Infinity Ward";
  }
  else if(gameTypeName == "halo5"){
    document.getElementById("gameTypeTitle").innerHTML = "Halo 5";
    document.getElementById("gameReleaseYear").innerHTML = "2015";
    document.getElementById("gameDeveloper").innerHTML = "343 Industries";
  }
  else if(gameTypeName == "devilMayCry5"){
    document.getElementById("gameTypeTitle").innerHTML = "Devil May Cry 5";
    document.getElementById("gameReleaseYear").innerHTML = "2020";
    document.getElementById("gameDeveloper").innerHTML = "Capcom";
  }
  else if(gameTypeName == "deathStranding"){
    document.getElementById("gameTypeTitle").innerHTML = "Death Stranding";
    document.getElementById("gameReleaseYear").innerHTML = "2019";
    document.getElementById("gameDeveloper").innerHTML = "Kojima Productions";
  }
  else if(gameTypeName == "lifeIsStrange"){
    document.getElementById("gameTypeTitle").innerHTML = "Life is Strange";
    document.getElementById("gameReleaseYear").innerHTML = "2015";
    document.getElementById("gameDeveloper").innerHTML = "Square Enix";
  }
  else if(gameTypeName == "diablo3"){
    document.getElementById("gameTypeTitle").innerHTML = "Diablo 3";
    document.getElementById("gameReleaseYear").innerHTML = "2012";
    document.getElementById("gameDeveloper").innerHTML = "Blizzard Entertainment";
  }
  else if(gameTypeName == "ageOfEmpires4"){
    document.getElementById("gameTypeTitle").innerHTML = "Age of Empires 4";
    document.getElementById("gameReleaseYear").innerHTML = "2011";
    document.getElementById("gameDeveloper").innerHTML = "Relic Entertainment";
  }
  else if(gameTypeName == "minecraft"){
    document.getElementById("gameTypeTitle").innerHTML = "Minecraft";
    document.getElementById("gameReleaseYear").innerHTML = "2011";
    document.getElementById("gameDeveloper").innerHTML = "Mojang Studios";
  }
  else if(gameTypeName == "amongUs"){
    document.getElementById("gameTypeTitle").innerHTML = "Among Us";
    document.getElementById("gameReleaseYear").innerHTML = "2018";
    document.getElementById("gameDeveloper").innerHTML = "InnerSloth LLC";
  }
  else if(gameTypeName == "dota2"){
    document.getElementById("gameTypeTitle").innerHTML = "Dota 2";
    document.getElementById("gameReleaseYear").innerHTML = "2013";
    document.getElementById("gameDeveloper").innerHTML = "Valve Corporation";
  }
  else if(gameTypeName == "valorant"){
    document.getElementById("gameTypeTitle").innerHTML = "Valorant";
    document.getElementById("gameReleaseYear").innerHTML = "2019";
    document.getElementById("gameDeveloper").innerHTML = "Riot Games";
  }
  else if(gameTypeName == "csgo"){
    document.getElementById("gameTypeTitle").innerHTML = "Counter Strike : Global Offensive";
    document.getElementById("gameReleaseYear").innerHTML = "2012";
    document.getElementById("gameDeveloper").innerHTML = "Valve Corporation";
  }
  else if(gameTypeName == "apexLegends"){
    document.getElementById("gameTypeTitle").innerHTML = "Apex Legends";
    document.getElementById("gameReleaseYear").innerHTML = "2019";
    document.getElementById("gameDeveloper").innerHTML = "Respawn Entertainment";
  }
  else if(gameTypeName == "pubg"){
    document.getElementById("gameTypeTitle").innerHTML = "Player Unknown Battlegrounds";
    document.getElementById("gameReleaseYear").innerHTML = "2016";
    document.getElementById("gameDeveloper").innerHTML = "PUBG Corporation";
  }
  let myModal = new bootstrap.Modal(document.getElementById('gameTypeInfo'), {});
  myModal.show();
}