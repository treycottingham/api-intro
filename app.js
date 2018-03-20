const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('.characters')
const attributeSection = document.querySelector('.attributes')

function getLuke() {
  fetch (baseUrl + 'people/1')
    .then(function(response){
      return response.json()
  })
    .then(function(data){
      var name = data.name
      var skywalker = document.createElement('h2')
      
      skywalker.innerText = name
      skywalker.className= "characters"

      characterSection.prepend(skywalker)

      var hair = data.hair_color
      var height = data.height
      
      var hairLI = document.createElement('li')
      hairLI.innerText = hair
      
      var heightLI = document.createElement('li')
      heightLI.innerText = height
      attributeSection.appendChild(hairLI)
      attributeSection.appendChild(heightLI)
    })
}

function getCharacters() {
  fetch (baseUrl + 'people')
    .then(function(response){
      return response.json()
  })
    .then(function(people){
      var character = people.results
      for (let i = 0; i < character.length; i++) {
        var person = people.results[i]
        var name = person.name
        var hair = person.hair_color
        var height = person.height
        var h2 = document.createElement('h2')
        var ul = document.createElement('ul')
        var hairLI = document.createElement('li')
        var heightLI = document.createElement('li')
        hairLI.innerText = hair
        heightLI.innerText = height
        h2.textContent = name
        characterSection.appendChild(h2)
        characterSection.appendChild(ul)
        ul.appendChild(heightLI)
        ul.appendChild(hairLI)
      }
    })
  }

getCharacters()
//getLuke()


// Modify the getCharacters function to append a section for each character
  // Container element (<div> or <section>)
  // <h3> with the character's name
  // <ul> with  <li>s for hair color and height