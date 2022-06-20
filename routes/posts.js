var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');


const { Post} = require('../models');
const v = new Validator;
/* GET users listing. */

router.post('/', async (req, res) => {
    const schema = {
        nama: 'string',
        jenis: 'string',
        informasi: 'string|optional'
    }
      const validate = v.validate(req.body, schema);

      if(validate.length){
       return res
       .status(400)
       .json(validate);
      }
      const post = await Post.create(req.body);
      res.json(post);
  });

  router.put('/:id',async  (req, res) => {
    const id = req.params.id;
    let post = await Post.findByPk(id);
    if(!post){
       return res.json({message : 'Data post tidak ditemukan'});
      }

      const schema = {
        nama: 'string|optional',
        jenis: 'string|optional',
        informasi: 'string|optional'
    }
      const validate = v.validate(req.body, schema);

      if(validate.length){
       return res
       .status(400)
       .json(validate);
      }
    post = await post.update(req.body);
    res.json(post);
  });

  router.get('/',async  (req, res) => {
    const post = await Post.findAll();
    return res.json(post);

    });
    router.get('/:id',async  (req, res) => {
        const id = req.params.id;
        const post = await Post.findByPk(id);
        if(!post){
            return res.json({});
           }
        return res.json(post);
        });

        router.delete('/:id',async  (req, res) => {
            const id = req.params.id;
            let post = await Post.findByPk(id);
            if(!post){
               return res.json({message : 'Data post tidak ditemukan'});
              }
              await  post.destroy();
            return res.json(
                {message : 'Data berhasil dihapus'}
                );
            });
    
module.exports = router;
