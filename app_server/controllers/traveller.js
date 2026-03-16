const home = (req, res) => {
    res.render('travlr', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    home
};