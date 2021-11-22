import Mongoose from "mongoose"

const Schema = new Mongoose.Schema ({
    title: { 
        type: String,
        required: true
    },
    content: { 
        type: String, 
        required: true
    }
}, 
{ 
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    } 
});

export default Mongoose.model("Article", Schema)