import Article from "../models/Article.js"

const store = async (req, res) => {
    try {
        const newArticle = new Article({
            title   : req.body.title,
            content : req.body.content
        })
        
        const article = await newArticle.save()

        return res.status(200).json({
            success : true,
            message : 'Article ' + article.title + ' berhasil dibuat'
        })
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error
        })
    }
}

export default { store }