// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const tableContainer = document.getElementById('table-container');

let table = '<table>';

table += '<tr><th>Name</th><th>action</th></tr>';

for (let i = 0; i <= 5000; i++) {
  table += `<tr><td>Dummy${i}</th><td><input
  type="file"
  id="fileElem${i}"
  style="display:none" />
<button id="fileSelect${i}" type="button" onclick="handleClick(${i})">Select some files</button>
</td></tr>`;
  //makeArray.push({ id: i, name: `Dummy ${i}` });
}

table += '</table>';
tableContainer.innerHTML = table;
