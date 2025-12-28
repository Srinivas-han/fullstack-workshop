function createLibrary() {
    const books = [];
    const members = [];
    const borrowRecords = [];

    const BORROW_LIMIT_DAYS = 14;

    return {
        // Add a book to library
        addBook(book) {
            const existing = books.find(b => b.isbn === book.isbn);
            if (existing) {
                existing.copies += book.copies;
            } else {
                books.push({ ...book });
            }
        },

        // Add a library member
        addMember(member) {
            members.push({ ...member });
        },

        // Borrow a book
        borrowBook(memberId, isbn) {
            const book = books.find(b => b.isbn === isbn);
            const member = members.find(m => m.id === memberId);

            if (!book || !member || book.copies <= 0) return;

            book.copies--;

            borrowRecords.push({
                memberId,
                isbn,
                title: book.title,
                borrowedAt: new Date(),
                returnedAt: null
            });
        },

        // Return a book
        returnBook(memberId, isbn) {
            const record = borrowRecords.find(
                r => r.memberId === memberId && r.isbn === isbn && r.returnedAt === null
            );

            const book = books.find(b => b.isbn === isbn);

            if (!record || !book) return;

            record.returnedAt = new Date();
            book.copies++;
        },

        // Get available copies of a book
        getAvailableCopies(isbn) {
            const book = books.find(b => b.isbn === isbn);
            return book ? book.copies : 0;
        },

        // Get borrowing history of a member
        getMemberHistory(memberId) {
            return borrowRecords
                .filter(r => r.memberId === memberId)
                .map(r => ({
                    isbn: r.isbn,
                    title: r.title,
                    borrowedAt: r.borrowedAt,
                    returnedAt: r.returnedAt
                }));
        },

        // Get overdue books (not returned within 14 days)
        getOverdueBooks() {
            const now = new Date();

            return borrowRecords.filter(record => {
                if (record.returnedAt !== null) return false;

                const diffDays =
                    (now - record.borrowedAt) / (1000 * 60 * 60 * 24);

                return diffDays > BORROW_LIMIT_DAYS;
            });
        },

        
        searchBooks(keyword) {
            const search = keyword.toLowerCase();

            return books.filter(
                book =>
                    book.title.toLowerCase().includes(search) ||
                    book.author.toLowerCase().includes(search)
            );
        }
    };
}

/*TEST CASE (AS GIVEN)*/

const library = createLibrary();

// Add books
library.addBook({ isbn: '123', title: '1984', author: 'Orwell', copies: 3 });
library.addBook({ isbn: '456', title: 'Dune', author: 'Herbert', copies: 2 });

// Add members
library.addMember({ id: 'M1', name: 'John', email: 'john@example.com' });
library.addMember({ id: 'M2', name: 'Jane', email: 'jane@example.com' });

// Borrow books
library.borrowBook('M1', '123');
library.borrowBook('M2', '123');

console.log(library.getAvailableCopies('123')); 

library.returnBook('M1', '123');

console.log(library.getMemberHistory('M1'));

console.log(library.getOverdueBooks());
console.log(library.searchBooks('orwell'));
