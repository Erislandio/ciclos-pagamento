// * serviços rest
const BillingCycle = require('./billingCycle')

// * metodos http [get, post, put, delete] -> principais
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({
    new: true,
    runValidators: true
})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})
module.exports = BillingCycle