module.exports = function(models) {


    const index = function(req, res, next) {
        var allshoes = req.body
        models.shoeSchema.find({}, function(err, allshoes) {
            if (err) {
                return next(err)
            }
            res.send(allshoes)
        })

    }

    const shoes = function(req, res, next) {
        var stock = req.body
        console.log(stock);

            models.shoeSchema.create({
              brand:stock.brand,
              color:stock.color,
              price:stock.price,
              size:stock.size,
              in_stock:stock.in_stock
            }, function (err, results) {
              if (err) {
              return next(err)
              }
              res.json(results)
            })

    }

    const findbrand = function(req, res, next) {
        var brand = req.params.brandname
        models.shoeSchema.find({
            brand: brand
        }, function(err, results) {
            if (err) {
                return next(err)
            }
            res.json(results)
        })
    }

    const Sizes = function(req, res, next) {
        var size = req.params.size
        models.shoeSchema.find({
            size: size
        }, function(err, results) {
            if (err) {
                return next(err)

            }
            res.json(results)
        })
    }
    const brandSize = function (req, res, next) {
      var brand = req.params.brandname
      var size = req.params.size
    models.shoeSchema.find({brand:brand,size:size}, function(err, results){
      if (err) {
        return next(err)
      }
      res.json(results)
    })

    }
    const soldid = function (req, res, next) {
      var soldId = req.params.id;
      models.shoeSchema.findOneAndUpdate({_id:soldId},{$inc:{in_stock:-1}},{upsert:false}, function (err, results) {
        if (err) {
          return next(err)
        }
        res.json(results)
      })

    }

    return {
        index,
        shoes,
        findbrand,
        Sizes,
        brandSize,
        soldid
    }
}
