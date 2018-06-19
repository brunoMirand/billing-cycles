const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true }) // returns new object and run validations also on PUT, not just POST.

BillingCycle.route('count', (req, res) => {
    BillingCycle.count((error, value) => {
        if (error) {
           res.status(500).json({ errors: [error]}) 
        } else {
            res.json({value})
        }
    })
})

module.exports = BillingCycle