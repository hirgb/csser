const fs = require('fs')
const path = require('path')
const readlineSync = require('readline-sync');
const Log = require('log4cli').default
const argv = require('minimist')(process.argv.slice(2));
const publish = argv.publish ? true : false
const stylus = require('stylus');

const libDir = path.resolve('./lib/');
const publishDir = path.resolve('./publish/');
const readmePath = path.resolve('./README.md');
const packagePath = path.resolve('./scripts/package.json');

function render(str, compress = true) {
    return new Promise((resolve, reject) => {
        stylus.render(str, {
            compress
        }, function (err, css) {
            if (err) reject(err);
            resolve(css)
        });
    })
}

async function renderFile(originFile, targetDir) {
    const fileName = path.basename(originFile).split('.')[0]
    const stylusStr = fs.readFileSync(originFile, 'utf8')
    const compressedCSS = await render(stylusStr).catch(err => {
        throw err
    })
    const renderedCSS = await render(stylusStr, false).catch(err => {
        throw err
    })
    const compressedFilePath = path.resolve(targetDir, `${fileName}.min.css`);
    fs.writeFileSync(compressedFilePath, compressedCSS)
    Log.info(`Write: ${compressedFilePath}`)

    const renderedFilePath = path.resolve(targetDir, `${fileName}.css`);
    fs.writeFileSync(renderedFilePath, renderedCSS)
    Log.info(`Write: ${renderedFilePath}`)
}

async function renderDirectory(libDir, targetDir) {
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir)
        Log.info(`Create: ${targetDir}`)
    }

    let files = fs.readdirSync(libDir);
    for (const file of files) {
        const origin = path.resolve(libDir, file)
        const target = path.resolve(targetDir, file)
        const stat = fs.lstatSync(origin)
        if (stat.isFile()) {
            await renderFile(origin, targetDir)
        } else if (stat.isDirectory()) {
            await renderDirectory(origin, target)
        }
    }
}

async function run() {
    Log.info('Start')
    //删除publish目录
    fs.rmdirSync(publishDir, {
        recursive: true
    })
    Log.info(`Delete: ${publishDir}`)
    if (!fs.existsSync(publishDir)) {
        fs.mkdirSync(publishDir)
        Log.info(`Create: ${publishDir}`)
    }

    await renderDirectory(libDir, publishDir)

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
    }
    Log.success('Done');
}

(async () => {
    await run();
})();