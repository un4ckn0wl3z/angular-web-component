const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/cart-sub-elem/runtime.js',
        './dist/cart-sub-elem/polyfills.js',
        './dist/cart-sub-elem/scripts.js',
        './dist/cart-sub-elem/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/cart-sub.js');
    await fs.copyFile('./dist/cart-sub-elem/styles.css', 'elements/styles.css')
    //await fs.copy('./dist/cart-sub-elem/assets/', 'elements/assets/' )
    
})()