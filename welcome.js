document.addEventListener("DOMContentLoaded", async function () {
    const db = window.db;
    const booksCollection = window.firestoreCollection(db, "books");

    // Fetch books from Firestore
    async function loadBooks() {
        const booksSnapshot = await window.getFirestoreDocs(booksCollection);
        const booksContainer = document.querySelector(".books-container");
        booksContainer.innerHTML = ""; // Clear existing books

        booksSnapshot.forEach((doc) => {
            const book = doc.data();
            booksContainer.innerHTML += `
                <div class="book-card">
                    <img src="${book.image}" alt="${book.title}">
                    <h3>${book.title}</h3>
                    <p>by ${book.author}</p>
                    <div class="book-details">
                        <p><strong>Genre:</strong> ${book.genre}</p>
                        <p><strong>Published:</strong> ${book.year}</p>
                        <p><strong>Description:</strong> ${book.description}</p>
                    </div>
                </div>`;
        });
    }

    await loadBooks();
});
