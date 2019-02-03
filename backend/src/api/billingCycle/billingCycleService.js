// * serviços rest
const BillingCycle = require('./billingCycle')

// * metodos http [get, post, put, delete] -> principais
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({
    new: true,
    runValidators: true
})

module.exports = BillingCycle