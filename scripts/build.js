const fs = require('fs')
const path = require('path')
const readlineSync = require('readline-sync');
const Log = require('log4cli').default
const argv = require('minimist')(process.argv.slice(2));
const publish = argv.publish ? true : false
const stylus = require('stylus');

const libDir = path.resolve('./src/lib/');
const publishDir = path.resolve('./publish');
const readmePath = path.resolve('./README.md');
const packagePath = path.resolve('./scripts/package.json');

function render(str) {
    return new Promise((resolve, reject) => {
        stylus.render(str, {
            // filename: 'nesting.css'
            compress: true
        }, function (err, css) {
            if (err) reject(err);
            resolve(css)
        });
    })
}

async function run() {
    Log.info('Start')
    //删除publish目录
    fs.rmdirSync(publishDir, {
        recursive: true
    })
    Log.info(`Delete: ${publishDir}`)

    let files = fs.readdirSync(libDir);
    for (const file of files) {
        const filePath = path.resolve(libDir, file)
        const fileName = file.split('.')[0]
        // console.log(filePath);
        const stylusStr = fs.readFileSync(filePath, 'utf8')
        const renderedCSS = await render(stylusStr).catch(err => {
            throw err
        })
        if (!fs.existsSync(publishDir)) {
            fs.mkdirSync(publishDir)
            Log.info(`Create: ${publishDir}`)
        }
        const outputFilePath = path.resolve(publishDir, `${fileName}.min.css`);
        fs.writeFileSync(outputFilePath, renderedCSS)
        Log.info(`Write: ${outputFilePath}`)
    }

    //准备readme和package.json
    if (publish) {
        fs.copyFileSync(readmePath, path.resolve(publishDir, 'README.md'));
        Log.info('Copy: README.md')
        const packageObj = JSON.parse(fs.readFileSync(packagePath))
        console.log('Current version is: ' + packageObj.version);
        let va = packageObj.version.split('.').map(i => parseInt(i))
        let guessVersion = `${va[0]}.${va[1]}.${va[2]+1}`
        let velidateVersion = false
        let inputVersion = '';
        while (!velidateVersion) {
            const version = readlineSync.question(`Please input a new version number (${guessVersion}):`) || guessVersion;
            if (/^\d+\.\d+\.\d+$/.test(version)) {
                inputVersion = version
                velidateVersion = true
            }
        }
        packageObj.version = inputVersion
        const packageJSON = JSON.stringify(packageObj, null, 4)
        fs.writeFileSync(packagePath, packageJSON)
        fs.writeFileSync(path.resolve(publishDir, 'package.json'), packageJSON)
        Log.info(`Write: package.json`)
        Log.success('Done');
    }
}

(async () => {
    await run();
})();