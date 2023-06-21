import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    id: String,
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

/**
 * 
 * /**
* Paste one or more documents here
*/
// {
//     "_id": "64931599275625fbb4b336ae",
//         "title" : "Hawa Mahal",
//             "message" : "Cultural, Vibrant and the picturesque image of the capital.",
//                 "creator" : "Riham",
//                     "tags" : "Jaipur"
//     "seletedFile" : "Rishabh Jain",
//         "likeCount" : 0,
//             "createdAt" : 12-04 - 2002
// }
//  */