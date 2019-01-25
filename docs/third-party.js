; (function () {
    console.log('Hi from the third-party script');

    const date = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const dateString = new Date(date).toUTCString();
    document.cookie = `script=third-party; path=/; domain=github.com; expires=${dateString}`;
})()

