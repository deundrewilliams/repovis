const router = require('express').Router();
const axios = require('axios')

const githubinfo = async(owner, name) => {
    const info = await axios.get(`https://api.github.com/repos/${owner}/${name}`)
    return info
}

const info = async(owner, name) => {
    const recinfo = await githubinfo(owner, name)
    return recinfo
}


router.route('/:repoowner/:reponame').get( async (req, res) => {
    console.log("Hit endpoint!")

    info(req.params.repoowner, req.params.reponame)
    .then((repoinfo) => (res.send(repoinfo.data)))
    .catch((err) => console.log(err))

})

module.exports = router;
