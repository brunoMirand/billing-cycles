const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true }) // returns new object and run validations also on PUT, not just POST.

module.exports = BillingCycle