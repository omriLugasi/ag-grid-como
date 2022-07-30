const columnDefs = [
  { field: "switch",
    ...Romo.switchCell,
    editable: true },
  { field: "checkmark",
    ...Romo.checkmarkCell,
    editable: true },
  { field: "model" },
  { field: "price" }
];

// specify the data
const rowData = [
  { switch: false, checkmark: false, model: "Celica", price: 35000 },
  { switch: false, checkmark: true, model: "Celica", price: 35000 },
  { switch: true, model: "Mondeo", price: 32000 },
  { switch: false, model: "Boxster", price: 72000 }
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
