// reverse string with delay 2 seconds;

const input = "hello world!";
console.log(input);
setTimeout(() => {
  const reversed = input.split(" ").reverse().join("");
  console.log(`reversed: ${reversed}`);
}, 2000);

// 2. Random Number Generator with Delay and Progress Indication:
function randomNumGenerator(delay) {
  let remaining = delay;
  const setInt = setInterval(() => {
    console.log("Time remaining: " + remaining + " seconds");
    remaining--;
    if (remaining < 1) {
      clearInterval(setInt);
      var randomNumber = Math.random();
      console.log("Generated random number: " + randomNumber);
    }
  }, 1000);
}
const delay = 3;
randomNumGenerator(delay);


// 3. Build a feature for Store's Inventory.

function storeItemsPrice(items){
    let exchangeRate=80;

   const newPrice= items.map((item)=>{
        let rupees=item.price*exchangeRate;

        return {
            name:item.name,
            price:`${rupees} INR`
        }
    })
     console.log(newPrice);
    return newPrice;

}

const storeItems=[
    {name:"item 1", price:10},
    {name:"item 2", price:20},
    {name:"item 3", price:50},
    {name:"item 4", price:5},
]
const converted=storeItemsPrice(storeItems)

console.log("converted to rupees");
converted.forEach(element => {
    
   console.log(element.name +":"+element.price);
});


// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
const allBooks= document.querySelector(".allBooks");
const filtered= document.querySelector(".filtered");
function booksWithAuthors(books){


    // Filtering and Capitalizing:
    const filteredBooks =books.filter(c=>c.year>=2010)
    filteredBooks.map(book=>{
        let cap=book.author.toUpperCase()
        filtered.innerHTML +=`<li>${book.title} <span class="author">author: ${cap}</span> <span class="year">year:${book.year}</span></li>`
    })
   

    // mapping all the books
    books.map((book)=>{
     allBooks.innerHTML +=`<li>title: ${book.title} <span class="author">author: ${book.author}</span> <span class="year">year: ${book.year}</span></li>`;
    })

}

// books
const books=[
    {id:1,title:"spare",author:"prince harry", year:2023},
    {id:2,title:"The Story of India",author:" Michael Wood", year:2007},
    {id:3,title:"Queen of Fire",author:" Anthony Ryan", year:2015},
    {id:4,title:"The Legend of Birsa Munda",author:" Ankita Verma, Tuhin A. Sinha", year:2022},
    {id:5,title:"Mamata: Beyond 2021",author:"Jaẏanta Ghoshāla", year:2022},
    {id:6,title:"Catch-22",author:" Joseph Heller", year:1961},
    {id:7,title:"Great Expectations",author:"Charles Dickens", year:1860},

]

booksWithAuthors(books)


// 5. URL validation.
function validateUrl(url) {
    const pattern = /^https?:\/\/[\w\-.]+\.[a-zA-Z]+$/;
    if (pattern.test(url)) {
      console.log(`The URL '${url}' is valid.`);
    } else {
      console.log(`The URL '${url}' is invalid.`);
    }
  }

  // Example usage:
  const urls = [
    "http://www.example.com",
    "https://www.example.com",
    "https://123.example.com",
    "https://www.example123.com",
    "https://www.example.com123",
    "http://example",
    "example.com"
  ];
  
  for (const url of urls) {
    validateUrl(url);
  }


// 6. LinkedIn Profile URL Validator.  

function validateLinkedInProfileUrl(url) {
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if (pattern.test(url)) {
      console.log(`The LinkedIn profile URL '${url}' is valid.`);
    } else {
      console.log(`The LinkedIn profile URL '${url}' is invalid.`);
    }
  }
  
  // Example usage:
  const profileUrls = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane-smith",
    "https://www.linkedin.com/in/123john-doe",
    "https://www.linkedin.com/in/john_doe",
    "https://www.linkedin.com/in/johndoe12345678901234567890",
    "https://www.linkedin.com/in/johndoe!",
    "https://www.linkedin.com/profile/johndoe",
    "https://www.linkedin.com/in/johndoe/",
  ];
  
  for (const url of profileUrls) {
    validateLinkedInProfileUrl(url);
  }
  
  