# TDD MOOC Game Of Life exercise

A command line application which takes the name of a .rle file and an integer as input, and then runs the specified amount of iterations on the pattern in the .rle file. It outputs the resulting pattern to a new .rle named [name of your file]_out.rle.

Use by first running 

    npm install 
    
and then running 

    node . --file filename.rle --iterations 5
    
it only simulates in the bounds of the x and y dimensions provided in the .rle file. I was going to refactor it to work with a boundless gameboard, but started to run low on time. 

# Tests

Run tests with

    npm run test


