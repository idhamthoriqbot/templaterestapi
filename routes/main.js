__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'Multi prefix',
            namabot: 'DZXBOT',
            namaowner: 'Dhamz',
            instagram: 'dhamz._',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
