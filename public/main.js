const columnDefs = [
  { field: "bool",
    ...Romo.switchCell,
    editable: true },
  { field: "model" },
  { field: "price" }
];

// specify the data
const rowData = [
  { bool: false, model: "Celica", price: 35000 },
  { bool: true, model: "Mondeo", price: 32000 },
  { bool: false, model: "Boxster", price: 72000 }
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);
});
