function Book(title,author,genre, price){
    this.title = title
    this.author = author
    this.genre = genre
    this.price = price
    Book.prototype.getBookInfo = function(){
        console.log(`title: ${this.title}, Author's name: ${this.author}, genre: ${this.genre}, Price: ₹${this.price}`)
    }

}

function Author(name, birthyear,nationality){
    this.name = name
    this.birthyear = birthyear
    this.nationality = nationality
   

}

let p = new Book("think like a monk", "Jay shetty", "Indian", 400)
let Q = new Author("Jay shetty",2003,"Indian" )
p.getBookInfo()
