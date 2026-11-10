const chars = [
  {name:"Cameraman 1056", url:"index.html", desc:"Normal Cameraman • Infiltration Squad"},
  {name:"Dark Blue Tied Cameraman", url:"#", desc:"1056's closest companion"},
  {name:"Lucky Cameraman", url:"#", desc:"Infiltration Squad leader"},
  {name:"Cameramen", url:"#", desc:"The Alliance's camera-headed race"}
];

const input = document.getElementById("search");
const box = document.getElementById("searchResults");

input.addEventListener("input", () => {
  const q = input.value.trim().toLowerCase();
  if(!q){ box.classList.remove("show"); box.innerHTML=""; return; }
  const matches = chars.filter(c => (c.name+" "+c.desc).toLowerCase().includes(q));
  box.innerHTML = matches.length
    ? matches.map(c => `<a class="result" href="${c.url}"><b>${c.name}</b><br><small>${c.desc}</small></a>`).join("")
    : `<div class="result">No character found.</div>`;
  box.classList.add("show");
});

document.addEventListener("click", e => {
  if(!e.target.closest(".search-wrap")) box.classList.remove("show");
});
