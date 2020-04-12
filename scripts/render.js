const path = require('path')
const fs = require('fs')
const stylus = require('stylus')
const tmpDir = path.resolve()
const tmpStylusFile = path.resolve('./temp/test.stylus')
// console.log(tmpStylusFile);

const stylusStr = fs.readFileSync(tmpStylusFile, 'utf8')
stylus.render(stylusStr, (err, renderedCSS) => {
    if (err) throw err;

    console.log(renderedCSS);
})