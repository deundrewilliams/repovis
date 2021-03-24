const router = require('express').Router();
const axios = require('axios')

const githubinfo = async(owner, name) => {
    const maininfo = await axios.get(`https://api.github.com/repos/${owner}/${name}`)

    // const langinfo = await axios.get(`https://api.github.com/repos/${owner}/${name}/languages`)

    // const contribinfo = await axios.get(`https://api.github.com/repos/${owner}/${name}/contributors`)

    // let info = {}

    // info['main'] = maininfo
    // info['languages'] = langinfo
    // info['contributors'] = contribinfo

    return maininfo
}

const info = async(owner, name) => {
    const recinfo = await githubinfo(owner, name)
    return recinfo
}

router.route('/').get((req, res) => {
    res.send(req.params)
})

router.route('/:repoowner/:reponame').get( async (req, res) => {
    console.log("Hit endpoint!")

    info(req.params.repoowner, req.params.reponame)
    .then((repoinfo) => (res.send(repoinfo.data)))
    .catch((err) => console.log(err))

})

module.exports = router;
