const books = document.getElementsByClassName('books')[0];

document.addEventListener('DOMContentLoaded', function () {
    // 读取JSON文件
    fetch('https://dodio12138.github.io/CyberBookcase/booklist.json')
        .then(response => response.json())
        .then(data => {

            // 循环处理每一本书
            const dataSheet = Object.values(data)[0];
            for (const key in dataSheet) {
                if (dataSheet.hasOwnProperty(key)) {
                    const book = dataSheet[key];

                    // 创建一个新的div元素
                    const bookDiv = document.createElement('div');
                    bookDiv.classList.add('book');

                    const titleDiv = document.createElement('div');
                    titleDiv.classList.add('title');
                    titleDiv.innerHTML = `${book.title}`;
                    titleDiv.style.color = book.titleColor;

                    let coverHeight = 0;
                    if(book.hasOwnProperty('packaging')){
                        if(book.packaging=='H'){
                            coverHeight = 5;
                            const darkenedColor = darkenColor(book.color, 5);
                            bookDiv.style.background = `linear-gradient(to right, ${darkenedColor}, ${book.color}, ${darkenedColor}`;
                        }else{
                            bookDiv.style.background = book.color;
                        }
                    }else{
                        bookDiv.style.background = book.color;
                    }
                    //const width = (Math.pow(book.pages, 1 / 1.2) + 100) / 150
                    const width = book.pages/250;
                    bookDiv.style.width = `${width}%`;
                    const height = 50/185 * (book.format + coverHeight);
                    bookDiv.style.height = `${height}%`;

                    // 将新的div元素添加到容器中
                    bookDiv.appendChild(titleDiv);
                    books.appendChild(bookDiv);

                    const bookDivWidth = bookDiv.offsetWidth;
                    const bookDivHeight = bookDiv.offsetHeight;
                    // 计算字体大小为元素宽度的50%
                    const fontSize = Math.min((bookDivHeight/bookDivWidth + 10), (bookDivWidth * 0.3) + 2) + 'px';
                    titleDiv.style.fontSize = fontSize;
                }
            }
        })
        .catch(error => console.error('Error reading JSON file:', error));
});

function darkenColor(color, percent) {
    // 解析颜色值为RGB
    const hex = color.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // 计算变暗后的RGB值
    const newR = Math.round(r * (1 - percent / 100));
    const newG = Math.round(g * (1 - percent / 100));
    const newB = Math.round(b * (1 - percent / 100));

    // 转换为16进制颜色值
    const result = `#${(newR << 16 | newG << 8 | newB).toString(16).padStart(6, '0')}`;

    return result;
}
