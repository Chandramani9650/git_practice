function getinfo(name){
    this.Author = function(name, birthyear, nationality){
        this.name = name
        this.birthyear = birthyear
        this.nationality = nationality
        console.log(`name: ${name}, birthyear: ${birthyear}, nationality: ${nationality}`)
        
        
    }
    this.Book = function(title, genre, price){
        this.title = title
        this.genre = genre
        this.price = price
        console.log(this)
    }
    
  
   
   
}
let p = new getinfo("pankaj")
p.Author("rahul", 2021, "hindu")
p.Book("world is going into heven","siya publication", 123 )
