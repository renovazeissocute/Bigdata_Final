const Coffee = require('../models/coffee');

const coffee_index = (req, res) => {
    Coffee.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('coffee', { coffees: result, title: 'Coffee Menu' });
        })
        .catch(err => {
            console.log(err);
        });
}

const coffee_details = (req, res) => {
    const id = req.params.id;
    Coffee.findById(id)
        .then(result => {
            res.render('details', { coffee: result, title: 'Coffee Details' });
        })
        .catch(err => {
            console.log(err);
            res.render('404', { title: 'Blog not found' });
        });
}

const coffee_create_get = (req, res) => {
    res.render('create', { title: 'Add Coffee' });
}

const coffee_create_post = (req, res) => {
    const coffee = new Coffee(req.body);
    coffee.save()
        .then(result => {
            res.redirect('/coffees');
        })
        .catch(err => {
            console.log(err);
        });
}

const coffee_update_get = (req, res, next) => {
    const id = req.params.id;
    Coffee.findById(id)
        .then(result => {
            res.render('edit', { coffee: result, title: 'Edit blog' });
        })
        .catch(err => {
            console.log(err);
            res.render('404', { title: 'Blog not found' });
        });
}

const coffee_update_post = (req, res) => {
    const coffee = new Coffee(req.body);
    coffee.save()
        .then(result => {
            const id = req.params.id;
            Coffee.findByIdAndDelete(id)
                .then(result => {
                    res.json({ redirect: '/coffees' });
                })
                .catch(err => {
                    console.log(err);
                });
            res.redirect('/coffees');
        })
        .catch(err => {
            console.log(err);
        });
}

const coffee_delete = (req, res) => {
    const id = req.params.id;
    Coffee.findByIdAndDelete(id)
        .then(result => {
            res.render('delete', { coffee: result });
            res.json({ redirect: '/coffees' });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    coffee_index,
    coffee_details,
    coffee_create_get,
    coffee_create_post,
    coffee_update_get,
    coffee_update_post,
    coffee_delete
}