
onload = () => {
    const c = setTimeout(() => {
        if (document.body.classList.contains("not-loaded")) {
            document.body.classList.remove("not-loaded");
        }

        // Removing text injection to keep it clean as requested, or we can add it back if user wants.
        // The user's HTML has <span id="title"></span>.
        // The previous request said "remove text", but the user's snippet HAS the title logic.
        // I will keep the logic but maybe make the text empty or "For Anna".
        // Actually, user said "tulisan i love you annay di hapus aja" previously.
        // But this snippet puts "I LOVE U". 
        // I will comment it out for now to be safe, or just let it start.

        // const titles = ('I LOVE U').split('')
        // const titleElement = document.getElementById('title');
        // let index = 0;

        // function appendTitle() {
        //   if (index < titles.length) {
        //     titleElement.innerHTML += titles[index];
        //     index++;
        //     setTimeout(appendTitle, 300); // 1000ms delay
        //   }
        // }

        // appendTitle();

        clearTimeout(c);
    }, 1000);
};
