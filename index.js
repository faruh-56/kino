
const API_KEY = "1318597a"

async function fetchData(title) {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t="${title}"`)
    const data = await response.json()
    return data
  }
  
  console.log(fetchData());
  
  
  
  const searchInputElement = document.querySelector('#movie-search-input')
  const searchButtonElement = document.querySelector("#movie-search-button")
  
   
  let movieTitleValue = ''
  let movie = null
  
  searchButtonElement.addEventListener('click', async () => {
    const searchResultsContainer = document.querySelector('.search-results')
    searchResultsContainer.innerHTML = ""
    
    
  
    movieTitleValue = searchInputElement.value
    movie = await fetchData(movieTitleValue)
    const cardElementTemplate = `
    <div class="card" style="width: 18rem">
        <img
        src="${movie.Poster}"
        class="card-img-top"
        alt="${movie.Title} movie poster"
        />
        <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">${movie.Plot}</p>
            <a
                href="#"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >
                Подробнее
            </a>
        </div>
    </div>`
    
   
    console.log(searchResultsContainer.children)
    
    searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate)
  })
  
  
  const ModalElement = document.getElementById('exampleModal')
  
  ModalElement.addEventListener('show.bs.modal', event => {
    document.querySelector('#modalLabel').textContent = movie.Title
    document.querySelector("#title").textContent= movie.Title
    document.querySelector('#modalImage').src = movie.Poster
    document.querySelector('#actors').textContent = movie.Actors
    document.querySelector('#plot').textContent = movie.Plot
    document.querySelector('#rating').textContent = movie.Rating
    document.querySelector('#release').textContent = movie.Released
  
    
  
  })
  
  
  
  const modalBoxesElement = document.querySelector("#modal-boxes")
  
 
  


  // const a = [1, 2, 3]
  // console.log(a[2]);
  // console.log(a.at(0));
  
  

