# Cyber Bookcase

## Introduction
Cyber Bookcase is a virtual bookshelf generator designed to showcase your annual reading list. By configuring a simple JSON file, you can create a visually appealing bookshelf to display your reading achievements.

## Features
- Categorize books by year.
- Customize book colors, sizes, and bindings.
- Automatically generate bookshelf layouts.
- Responsive design for different screen sizes.

## Usage
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/CyberBookcase.git
    cd CyberBookcase
    ```

2. Open the `index.html` file in your browser to view the bookshelf.

3. Configure the `booklist.json` file to add books to the bookshelf. Below are the parameters:
    - `title`: Book title.
    - `author`: Author name.
    - `titleColor`: Color of the book title.
    - `pages`: Number of pages (affects book thickness).
    - `color`: Book cover color.
    - `format`: Book size (affects book height).
    - `packaging`: Binding type (`P` for paperback, `H` for hardcover).
    - `classifications`: Book category.

4. Save your changes and refresh the browser to see the updated bookshelf.

## Example
Here is an example bookshelf:

![Example Bookshelf](https://via.placeholder.com/800x400.png?text=Example+Bookshelf)

## File Structure

CyberBookcase/ 
├── booklist.json # Book configuration file 
├── index.html # Main HTML file 
├── css/ 
│ └── style.css # Stylesheet 
├── js/ 
│ └── main.js # JavaScript logic 
└── README.md # Project documentation

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
If you have any questions or suggestions, feel free to contact me:
- Email: dodio12138@gamil.com