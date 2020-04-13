const path = require('path')
const fs = require('fs')
const {
    save
} = require('minimist')(process.argv.slice(2));
const stylus = require('stylus')
const tmpDir = path.resolve()
const tmpStylusFile = path.resolve('./temp/test.stylus')
const tmpCssFile = path.resolve('./temp/test.css')
// console.log(tmpStylusFile);

const stylusStr = fs.readFileSync(tmpStylusFile, 'utf8')
stylus.render(stylusStr, (err, renderedCSS) => {
    if (err) throw err;

    if (save) {
        fs.writeFileSync(tmpCssFile, renderedCSS)
    } else {
        console.log(renderedCSS);
    }
})