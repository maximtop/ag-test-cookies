;(function () {
    console.log('Hi from the first-party script');

    const date = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const dateString = new Date(date).toUTCString();
    document.cookie = `first-party-no-domain=no-domain; path=/; expires=${dateString}`;
    document.cookie = `first-party-domain-localhost=localhost; domain=localhost; path=/; expires=${dateString}`;
    document.cookie = `first-party-domain-github.io=github.io; domain=github.io; path=/; expires=${dateString}`;
    document.cookie = `first-party-domain-maximtop.github.io=maximtop.github.io; domain=maximtop.github.io; path=/; expires=${dateString}`;
})();

