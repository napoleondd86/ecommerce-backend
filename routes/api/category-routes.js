const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

////////////////// WORKS ///////////////////
// find all categories
router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll({
      include: { model: Product }, // THIS INCLUDES ASSOCIATED PRODUCTS
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});
///////////////// WORKS ///////////////
// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: {model: Product}
    })
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err)
  }
});

///////////////////// WORKS  /////////////////////
// create a new category
router.post('/', async (req, res) => {
  try{
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err)
  }
});

/////////////////////////// WORKS ////////////////////
// update a category by its `id` value
router.put('/:id',  (req, res) => {
  Category.update(
    req.body, 
    {
      where: {
        id: req.params.id
      }
    }
  ).then((updatedCategory) => {
    res.json(updatedCategory);
  }).catch((err) => res.json(err))
});

///////////////// WORKS //////////////
// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({message: "No category found with this id!"});
      return
    }
    res.status(200).json(categoryData);
    } catch(err) {
      res.status(500).json(err)
    }
});

module.exports = router;
