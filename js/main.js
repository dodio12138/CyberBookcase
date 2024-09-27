const bookcase = document.getElementById('bookcase');

document.addEventListener('DOMContentLoaded', function () {
    // 读取JSON文件
    fetch('https://dodio12138.github.io/CyberBookcase/booklist.json')
    // fetch('../booklist.json')
        .then(response => response.json())
        .then(data => {

            // 循环处理每一本书
            for (const bookrow in data) {
                const dataSheet = data[bookrow];
                //创建 caserow Div
                const caserowDiv = document.createElement('div');
                caserowDiv.classList.add('caserow');

                // 创建 books div
                const booksDiv = document.createElement('div');
                booksDiv.classList.add('books');

                //创建分类TAB div
                const tabDiv = document.createElement('div');
                tabDiv.classList.add('tab');
                const tabtitleDiv = document.createElement('div');
                tabtitleDiv.classList.add('tabtitle');
                tabtitleDiv.innerHTML = bookrow;
                tabDiv.appendChild(tabtitleDiv);
                booksDiv.appendChild(tabDiv);
                
                //每本书的div
                for (const key in dataSheet) {
                    if (dataSheet.hasOwnProperty(key)) {
                        const book = dataSheet[key];

                        // 创建 book div
                        const bookDiv = document.createElement('div');
                        bookDiv.classList.add('book');

                        //创建 title div
                        const titleDiv = document.createElement('div');
                        titleDiv.classList.add('title');
                        titleDiv.innerHTML = `${book.title}`;
                        titleDiv.style.color = book.titleColor;

                        let coverHeight = 0;
                        if (book.hasOwnProperty('packaging')) {
                            if (book.packaging == 'H') {
                                coverHeight = 5;
                                const darkenedColor = darkenColor(book.color, 5);
                                bookDiv.style.background = `linear-gradient(to right, ${darkenedColor}, ${book.color}, ${darkenedColor}`;
                            } else {
                                bookDiv.style.background = book.color;
                            }
                        } else {
                            bookDiv.style.background = book.color;
                        }
                        //const width = (Math.pow(book.pages, 1 / 1.2) + 100) / 150
                        const width = book.pages / 250;
                        bookDiv.style.width = `${width}%`;
                        const height = 50 / 185 * (book.format + coverHeight);
                        bookDiv.style.height = `${height}%`;

                        // 将新的div元素添加到容器中
                        bookDiv.appendChild(titleDiv);
                        booksDiv.appendChild(bookDiv);

                        // 计算字体大小为元素宽度的50%
                        const fontSize =  Math.min(0.5 * book.pages/30, 12) + 'px';
                        titleDiv.style.fontSize = fontSize;
                    }
                }

                caserowDiv.appendChild(booksDiv);

                //创建casebottom div
                const casebottomDiv = document.createElement('div');
                casebottomDiv.classList.add('casebottom');
                caserowDiv.appendChild(casebottomDiv);

                bookcase.appendChild(caserowDiv);

                const bookschildgroup = booksDiv.children;
                let totalWidth = 0;
                for (var i = 0; i < bookschildgroup.length; i++) {
                    var child = bookschildgroup[i];
                    totalWidth += child.offsetWidth;
                }              
                casebottomDiv.style.width = totalWidth + 200 +'px';
                
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
