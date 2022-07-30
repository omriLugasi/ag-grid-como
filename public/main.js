const columnDefs = [
  {
    field: "switch",
    ...Romo.switchCell,
    editable: true
  },
  {
    field: "checkmark",
    ...Romo.checkmarkCell,
    editable: true
  },
  {
    field: "hyperLinkHref",
    ...Romo.hyperLinkCell,
    cellRendererParams: {
      props: {
        text: 'This is your link',
      },
    },
    editable: true
  },

];

// specify the data
const rowData = [
  {
    switch: false,
    checkmark: false,
    hyperLinkHref: 'http://google.com'
  }
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
