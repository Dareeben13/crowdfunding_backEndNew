const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const {Blog, IpSchema} = require("../modles/blog");
const Likes = require("../modles/likes");
const {errorHandler} = require("../helpers/dbErrorHandler");
var ip = require('ip');

exports.blogById = (req, res, next, id) => {
    Blog.findById(id).populate("userId").exec((err, blog) => {
        if (err || !blog) {
            return res.status(400).json({error: " blog not found"});
        }
        req.blog = blog;
        next();
    });
};

exports.read = (req, res) => {
    req.blog.image = undefined;
    return res.json(req.blog);
};

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({error: "File could not be uploaded"});
        }
        // check for all fields
        const {
            title,
            description,
            status,
            userId,
            image

        } = fields;

        if (!title || !description || !userId) {
            return res.status(400).json({error: " All fields are required "});
        }

        let blog = new Blog(fields);
        if (files.image) {
            console.log("FILES PHOTO", files.image);
            blog.image.data = fs.readFileSync(files.image.path);
            blog.image.contentType = files.image.type;
            blog.image.path = files.image.path;
            blog.image.name = files.image.name;
        }

        blog.save((err, result) => {
            if (err) {
                return res.status(400).json(err);
            }
            res.json(result);
        });
    });
};

exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({error: "File could not be uploaded"});
        }

        let blog = req.blog;
        blog = _.extend(blog, fields);

        if (files.image) {
            console.log("FILES PHOTO", files.image);
            blog.image.data = fs.readFileSync(files.image.path);
            blog.image.contentType = files.image.type;
            blog.image.path = files.image.path;
            blog.image.name = files.image.name;
        }

        blog.save((err, result) => {
            if (err) {
                return res.status(400).json({error: errorHandler(err)});
            }
            res.json(result);
        });
    });
};

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Blog.find().select("-image").sort([[sortBy, order]]).limit(limit).populate("userId").exec((err, blog) => {
        if (err) {
            return res.status(400).json({error: "blog not found"});
        }
        res.json(blog);
    });
};

exports.listB = (req, res) => {
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Blog.find({status: 1}).select("-image").sort([[sortBy, order]]).limit(limit).populate("userId").exec((err, blog) => {
        if (err) {
            return res.status(400).json({error: "blog not found"});
        }
        res.json(blog);
    });
};


exports.remove = (req, res) => {
    let blog = req.blog;
    blog.remove((err, deletedblog) => {
        if (err) {
            return res.status(400).json({error: errorHandler(err)});
        }
        res.json({message: "blog deleted succesfully"});
    });
};

exports.file = (req, res, next) => {
    if (req.blog.image.data) {
        res.set("Content-Type", req.blog.image.contentType);
        return res.send(req.blog.image.data);
    }
    next();
};


exports.readID = (req, res) => {
    Blog.find({_id: req.blog._id}).populate('userId').select("-image").exec((err, blog) => {
        if (err) {
            return res.status(400).json({error: "blog not found"});
        };
        res.json(blog);
    });

};


// exports.likesnow = (req, res) => {
// let ipAddress = ip.address();
//     Blog.findOne({
//         _id: req.blog._id
//     }, (err, blog) => {
//         if (err || !blog) {
//             return res.status(400).json({error: 'blog not found'});
//         }
//         blog.likes += 1;
       
       
//         // blog.ipAddress = ipAddress;
//         blog.save((err, blog) => {
//             if (err) {
//                 console.log('Blog UPDATE ERROR', err);
//                 return res.status(400).json({error: 'Blog update failed'});
//             }
//             blog.image = undefined;
//             res.json(blog);
//         });
//     });
// };



exports.likesnow = (req, res) => {
  let ipAddress = ip.address();
  const likes = new Likes();
  
  likes.ip = ipAddress
  likes.blog = req.params.blogId
  likes.save((err, likes) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }

    res.json({
      likes
    });
  });
};




exports.likeListRelated = (req, res) => {
  Likes.find({ blog: req.blog._id  })
    .populate('blog', '-image')

  .exec((err, project ) =>{
     if (err) {
         return res.status(400).json({
             error: "Blog not found"
         });
     };
     res.json(project);
  });

};



exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 3;
    let skip = parseInt(req.body.skip);
    let findArgs = { status: 1  };
  
    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);
  
    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
           
                findArgs[key] = req.body.filters[key];
            
        }
     
    }
  
    Blog.find(findArgs)
        .select("-image")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Blog not found"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
  };
  





