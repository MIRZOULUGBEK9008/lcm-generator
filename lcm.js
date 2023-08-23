// Create Color Palattes
const colorPalattes = {
  yellow: "#fbf46d",
  lightGreen: "#b4fe98",
  cyan: "#77e4d4",
  blue: "#998ceb",
  maroonFlash: "#ef866e",
  jaffa: "#de7836",
  pantone: "#de7836",
  anzac: "#e4b049",
  fountainBlue: "#67bdc7",
  newYorkPinkLightShade: "#fa9ca0",
  pastelGreenLightShade: "#9df174"
};

// Distructuring Color Palattes
const {
  yellow,
  lightGreen,
  cyan,
  blue,
  maroonFlash,
  jaffa,
  anzac,
  fountainBlue,
  newYorkPinkLightShade,
  pastelGreenLightShade
} = colorPalattes;


const body = document.body;
const table = document.createElement("table");
const colGroup = document.createElement("colgroup");
colGroup.innerHTML = `
  <col span="1" style="background-color: ${yellow};">
  <col span="1" style="background-color: ${pastelGreenLightShade};">
  <col span="1" style="background-color: ${cyan};">
  <col span="1" style="background-color: ${blue};">
  <col span="1" style="background-color: ${maroonFlash};">
  <col span="1" style="background-color: ${jaffa};">
  <col span="1" style="background-color: ${anzac};">
  <col span="1" style="background-color: ${fountainBlue};">
  <col span="1" style="background-color: ${newYorkPinkLightShade};">
  <col span="1" style="background-color: ${lightGreen};">
`;
table.prepend(colGroup);
let cnt = 1;
body.style.cssText = `
  height: 100vh;
  width: 100%;
  margin: 0;
  font-family: "Ubuntu Mono", "Arial", sans-serif;
  font-weight: 600;
  font-size: 20px;
`;
html.style.cssText = `
  heigth: 100%;
`;
table.style.cssText = `
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
  height: 100vh;
`;

for (let tr = 1; tr <= 10; tr++) {
  const tableStyles = `
  text-align: center;
  border: 1px solid black;
  padding: 0;
  width: 10%;
  cursor: pointer;
  user-select: none;
  `;
  const tableRow = document.createElement("tr");
  table.append(tableRow);
  for (let td = 1; td <= 10; td++) {
    const tableData = document.createElement("td");
    tableData.style.cssText = tableStyles;
    tableRow.append(tableData);
    tableData.textContent = cnt;
    cnt++;
  }
}
body.append(table);
const elements = Array.from(table.children);
const findLCM = (number) => {
  for (let el of elements) {
    if (el !== colGroup) {
      for (let elInner of Array.from(el.children)) {
        if (!(elInner.textContent % number)) {
          elInner.textContent = "*";
          elInner.style.pointerEvents = "none";
        }
      }
    }
  }
};
for (let el of elements) {
  if (el !== colGroup) {
    for (let elInner of Array.from(el.children)) {
      elInner.addEventListener("click", () => {
        findLCM(elInner.textContent);
      });
    }
  }
}
