# bingo-card-generator

A random generator of bingo or 4-in-a-row cards for use in a classroom.

###How can I change this to use my own expressions?
You can change the expressions being displayed by editing the list of expressions located in js/bingo.js at the top of the file. All mathematical expressions are written using LaTEX, and rendered using the [KaTEX library](https://github.com/Khan/KaTeX) on page load with [jQuery](http://www.jquery.org). 

If you want to change the number of rows or columns on the card, you'll need to adjust the number of <td></td> or <tr></tr> elements in the table inside the index.html file. You can adjust the widths using the css/bingo.css file to keep things looking pretty.


###Can I make it so that the LaTEX isn't typeset for everything in each cell of the table?
Sure. Right now, all HTML elements with the class **.bingoEntry** are rendered using KaTEX. Every table cell has this class, so everything inside is rendered as math type. You could remove this class from the table elements and instead add it to <span> tags inside the cells where you want the rendering to occur.

If you are doing this with non-mathematical content and don't want any KaTEX rendering, you can delete or comment out this line from bingo.js:
'''
katex.render(e.innerHTML, e);
'''

There are other more complete and efficient ways to remove KaTEX from the project, but this will be enough for a quick fix.

