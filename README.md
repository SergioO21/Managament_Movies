# PLD JS Classes - Objects

[Original Notion](https://magnetic-myrtle-0ac.notion.site/PLD-JS-Classes-Objects-d1b11e0b75ba4b57ba7cd139bd5ddb0b)

Build a small Movies application which will allow us to create a list of movies, delete them and display the entries..all this is done using 2 classes and objects.

Requirements.

Database must be an Array with the following Structure. It must have at least 4 records by default.

    let defaultMovies = [ 
    	{
    		title: 'Jurassic Park',
    		director: 'John Doe',
    		year: '1990'
    	}, 
    	{
    		title: 'The Dead Pool',
    		director: 'Mathew Albison',
    		year: '2014' 
    	}
    ]
We will have a Class called movies. The constructor of this class will accept 3 params. The constructor will also add the item at the end of the array as needed.

    constructor(title, director, year)

This will create a new object of the class movie and add the information to the above array.
___

We need another class, this one handles all the movies, this one can be called MoviesManager or something similar.

Inside that class we have a couple of functions.

    // remove all movies from the array and destroys all objects.
    remove_all_movies() 
    
    // Search for a movie in the array and checks if a object with that movie name
    // already exists in memory, if not, it creates the object.
    search_movie(query_string)
    
    // Search for a movie title, if object already exists, return the object y not, creates // the object and returns it.
    get_movie(movie_title)
    
    // Deletes the object if it's created, and removes the movie from the array. 
    delete_movie(movie_title)

This class will create a single object, this is called a singleton, extra kudos if you implement a singleton.
- [JavaScript Singleton](https://www.dofactory.com/javascript/design-patterns/singleton)

Singleton is considered an anti-pattern, but is widely used.
- [Why is Singleton considered an anti-pattern?](https://stackoverflow.com/questions/12755539/why-is-singleton-considered-an-anti-pattern)

For this you must build the white board.

___

## Extra Mile:
I recommend studying design patters. Those will give you all an edge above other developers when looking for a Job.
- [JavaScript Design Patterns](https://www.dofactory.com/javascript/design-patterns/)

And for your entertainment, here is a rare picture of Juanma and Carlos sitting one next to the other.

![Juanma and Carlos](https://www.tonica.la/__export/1564511195367/sites/debate/img/2019/07/30/austin.jpg_554688468.jpg)
