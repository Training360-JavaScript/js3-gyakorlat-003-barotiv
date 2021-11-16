const cookieHandler = {
    getAll() {
        const cookies = document.cookie.split("; ").map((item) => item.split("="));
        return Object.fromEntries(cookies);
    },

    toSessionStorage() {
        const cookies = this.getAll();
        for (let key in cookies) {
            sessionStorage.setItem(key, cookies[key]);
        }
    },

    flush() {
        const cookies = document.cookie.split("; ").map((item) => item.split("="));
        cookies.forEach(
            (item) => (document.cookie = `${item[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`)
        );
    },
};

export {
    cookieHandler
};