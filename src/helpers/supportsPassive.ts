let supportsPassive = false;

try {
    // @ts-ignore
    window.addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', {
            get: function() {
                supportsPassive = true;
            },
        })
    );
} catch (e) {
    // ok
}

export {supportsPassive};
