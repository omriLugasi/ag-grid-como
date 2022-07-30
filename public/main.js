const columnDefs = [
  { field: "make",
    ...Romo.switchCell,
    editable: true },
  { field: "model" },
  { field: "price" }
];

// specify the data
const rowData = [
  { make: "22/07/22", model: "Celica", price: 35000 },
  { make: "22/07/22", model: "Mondeo", price: 32000 },
  { make: "22/07/22", model: "Boxster", price: 72000 }
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
