// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.querySelector('.search-container input');
//     const cards = document.querySelectorAll('.grid-link');
    // const rainbowSixCard = document.querySelector('a[href="Rainbow6.html"]'); 

//     searchInput.addEventListener('input', function(event) {
//         const searchText = event.target.value.trim().toLowerCase();

//         cards.forEach(card => {
//             const cardTitle = card.querySelector('.game-details h3').textContent.toLowerCase();

//             if (cardTitle.includes(searchText)) {
//                 card.style.display = 'block';
//             } 
            
//             else {
//                 card.style.display = 'none';
//             }
//         });

//         // Дополнительно обрабатываем отображение карточки Rainbow Six Siege
//         const rainbowSixTitle = rainbowSixCard.querySelector('.game-details h3').textContent.toLowerCase();
//         if (rainbowSixTitle.includes(searchText)) {
//             rainbowSixCard.style.display = 'block';
//         } else {
//             rainbowSixCard.style.display = 'none';
//         }
//     });
// });








// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.querySelector('.search-container input');
//     const cards = document.querySelectorAll('.grid-link');
//     const noMatchesMsg = document.querySelector('.no-matches-msg');

//     searchInput.addEventListener('input', function(event) {
//         const searchText = event.target.value.trim().toLowerCase();
//         let matches = 0;

//         cards.forEach(card => {
//             const cardTitle = card.querySelector('.game-details h3').textContent.toLowerCase();

//             if (cardTitle.includes(searchText)) {
//                 card.style.display = 'block';
//                 matches++;
//             } else {
//                 card.style.display = 'none';
//             }
//         });

//         if (matches === 0) {
//             noMatchesMsg.style.display = 'block';
//         } else {
//             noMatchesMsg.style.display = 'none';
//         }
//     });
// });








// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.querySelector('.search-container input');
//     const cards = document.querySelectorAll('.grid-link');
//     const rainbowSixCard = document.querySelector('a[href="Rainbow6.html"]');
//     const noMatchesMsg = document.querySelector('.no-matches-msg');

//     searchInput.addEventListener('input', function(event) {
//         const searchText = event.target.value.trim().toLowerCase();
//         let hasMatches = false;

//         cards.forEach(card => {
//             const cardTitle = card.querySelector('.game-details h3').textContent.toLowerCase();

//             if (cardTitle.includes(searchText)) {
//                 card.style.display = 'block';
//                 hasMatches = true;
//             } else {
//                 card.style.display = 'none';
//             }
//         });

//         const rainbowSixTitle = rainbowSixCard.querySelector('.game-details h3').textContent.toLowerCase();
//         if (rainbowSixTitle.includes(searchText)) {
//             rainbowSixCard.style.display = 'block';
//             hasMatches = true;
//         } else {
//             rainbowSixCard.style.display = 'none';
//         }

//         if (!hasMatches) {
//             noMatchesMsg.style.display = 'block';
//         } else {
//             noMatchesMsg.style.display = 'none';
//         }
//     });
// });







document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-container input');
    const cards = document.querySelectorAll('.grid-link');

    searchInput.addEventListener('input', function(event) {
        const searchText = event.target.value.trim().toLowerCase();

        cards.forEach(card => {
            const cardTitle = card.querySelector('.game-details h3').textContent.toLowerCase();

            if (cardTitle.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


