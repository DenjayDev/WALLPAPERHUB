document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("site-search");
    const searchButton = document.querySelector(".search-btn");

    if (!searchInput || !searchButton) {
        return;
    }

    const runSearch = () => {
        const query = searchInput.value.trim();

        if (!query) {
            window.location.href = "homepage.html";
            return;
        }

        const params = new URLSearchParams({ q: query });
        window.location.href = `homepage.html?${params.toString()}`;
    };

    searchButton.addEventListener("click", (event) => {
        event.preventDefault();
        runSearch();
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            runSearch();
        }
    });
});