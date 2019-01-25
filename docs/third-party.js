; (function () {
    console.log('Hi from the third-party script');

    const date = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const dateString = new Date(date).toUTCString();
    document.cookie = `third-party-domain-github.io=github.io; path=/; domain=github.io; expires=${dateString}`;
    document.cookie = `third-party-no-domain=no-domain; path=/; expires=${dateString}`;
    document.cookie = `third-party-domain-localhost=localhost; path=/; domain=localhost; expires=${dateString}`;
    document.cookie = `third-party-domain-maximtop.github.io=maximtop.github.io; domain=maximtop.github.io; path=/; expires=${dateString}`;
})()

