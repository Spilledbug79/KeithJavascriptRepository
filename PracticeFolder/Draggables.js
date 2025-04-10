// async function fetchData() {
//  return new Promise((resolve, reject) => {
//  setTimeout(() => {
//  const data = 'Sample Data'; resolve(data);
//  }, 1000);
//  });
//  }
//  async function getData() {
//  try {
//  const result = await fetchData();
//  console.log(result);
//  // Outputs: Sample Data
//  }
//  catch (error) {
//  console.error(error);
//  }
//  } getData();


// // fetchData().then(result => {
// // console.log(result);
// // }).catch(error => {
// // console.error('Error:', error);
// // })

// async function getData() {
//  try {
//  const result = await fetchData();
//  console.log(result);
//  }
//  catch (error) {
//  console.error('Error:', error);
//  }
//  }
//  getData();

let lists = document.getElementsByClassName('list');

// let image = document.getElementsByTagName('img')

let rightBox = document.getElementById('right');

let leftBox = document.getElementById('left');


for(let list of lists){

    list.addEventListener('dragstart', function(e){
    let selected = e.target;

    rightBox.addEventListener('dragover', function(e){
    e.preventDefault();
    });

    rightBox.addEventListener('drop', function(e){
    rightBox.appendChild(selected);
    selected = null;
    });
    
    leftBox.addEventListener('dragover', function(e){
    e.preventDefault();
    });

    leftBox.addEventListener('drop', function(e){
    leftBox.appendChild(selected);
    selected = null;
    });
  })
}