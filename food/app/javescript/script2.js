const exportWord = new URLSearchParams(window.location.search);
let word = exportWord.get('word');
const showData = document.querySelector('#showData');
const loader = document.querySelector('.loader');
const searchInput = document.querySelector('#searchInput');

async function getData(q) {
  let data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${q}`);
  let result = await data.json();
  loader.style.display = 'none';
  display(result.recipes);
  searchData(result.recipes);
}
getData(word);

function display(data) {
  let box = ``;
  for (let i = 0; i < data.length; i++) {
    box += `
       <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
         <div class="card">
             <img height='250px' src="${
               data[i].image_url
             }" class="card-img-top" alt="img" />
           <div class="card-body">
             <h5 class="card-title">${data[i].title
               .split(' ')
               .splice(1, 2)
               .join(' ')}</h5>
             <p class="card-text">
               Some quick example text to build on the card title and make up
               the bulk of the card's content.
            </p>
               <a target='_blank' href="${
                 data[i].source_url
               }" class="btn btn-primary w-50 bg-success">visit</a>
           </div>
         </div>
       </div>
       `;
  }
  showData.innerHTML = box;
}

function searchData(data) {
  searchInput.addEventListener('keydown', function () {
    let box2 = ``;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].title.toLowerCase().includes(searchInput.value.toLowerCase())
      ) {
        box2 += `
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <div class="card">
      <img height='250px' src="${
        data[i].image_url
      }" class="card-img-top" alt="img" />
        <div class="card-body">
        <h5 class="card-title">${data[i].title
          .split(' ')
          .splice(1, 2)
          .join(' ')}</h5>
          <p class="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
          </p>
          <a target='_blank' href="${
            data[i].source_url
          }" class="btn btn-primary w-50 bg-success">visit</a>
            </div>
            </div>
            </div>
            `;
      }
    }
    showData.innerHTML = box2;
  });
}

searchData();
