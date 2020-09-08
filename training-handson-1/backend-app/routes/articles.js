const express = require('express');
const mongoose = require('mongoose');

const Article = mongoose.model('Article');
const articlesRouter = express.Router();

articlesRouter.route('/')
.get((req, res, next) => {
    let selection = 'author title abstract body imageUrl';
    selection += req.query.include === 'comments' ? ' comments' : '';
    Article
        .find()
        .select(selection)
        .then(articles => res.status(200).json(articles))
        .catch(err => next(err));
})
.post((req, res, next) => {
    // const selection = 'author title abstract body imageUrl';
    Article
    .create(
        req.body
    )
    .then(article => res.status(201).json(article))
    .catch(err => next(err));
})

articlesRouter.route('/:id')
.get((req, res, next) => {
    let selection = 'author title abstract body imageUrl comments';
    Article
        .findById(req.params.id)
        .select(selection)
        .then(article => res.status(200).json(article))
        .catch(err => next(err));
})
.patch((req, res, next) => {
    let selection = 'author title abstract body imageUrl comments';
    Article
        .findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        )
        .select(selection)
        .then(article => res.status(200).json(article))
        .catch(err => next(err));
})
.delete((req, res, next) => {
    Article
        .findByIdAndRemove(req.params.id)
        .then(resp => res.status(204).send(''))
        .catch(err => next(err));
});

articlesRouter.route('/:id/comments')
.post((req, res, next) => {
    Article
        .findById(req.params.id)
        .then(article => {
            article.comments.push(req.body);
            article.save()
            .then(resp => res.status(204).send(''))
            .catch(err => next(err));
        })
        .catch(err => next(err));
})


module.exports = articlesRouter;