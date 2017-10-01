// Require mongoose
//foo
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
// var ArticleSchema = new Schema({
var RecipeSchema = new Schema({
  // title is a required string
  // recipename: {
  //   type: String,
  //   required: true
  // },
  // // link is a required string
  // instruction: {
  //   type: String,
  //   required: true
  // },
  // ytvideo: {
  //   type: String,
  //   required: false
  // },
  // // This only saves one note's ObjectId, ref refers to the Note model
  // // for one-to-many, change this to an array
  // ingredient: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Ingredient"
  description : {
    type: String,
    required: false
  },
  story : {
    type: String,
    required: false
  },
  color : {
    type: String,
    required: false
  },
  rating : {
    type: Number,
    required: false,
  },
  skill : {
      id : {
        type: String,
        required: false
      },
      name : {
        type: String,
        required: false
      },
      value : {
        type: Number,
        required: false
      },
  },
  videos : [ 
      {
          video : {
            type: String,
            required: false
          },
          type : {
            type: String,
            required: false
          }
      }, 
      {
          video : {
            type: String,
            required: false
          },
          type : {
            type: String,
            required: false
          }
      }
  ],
  isAlcoholic : {
    type: Boolean,
    required: false
  },
  isCarbonated : {
    type: Boolean,
    required: false
  },
  isHot : {
    type: Boolean,
    required: false
  },
  tags : [ 
    {
        tag : {
          type: String,
          required: false
        },
        tag : {
          type: String,
          required: false
        }
    }
],
  servedIn : {
      id : {
        type: String,
        required: false
      },
      text : {
        type: String,
        required: false
      }
  },
  ingredients : [ 
      {
          type : {
            type: String,
            required: false
          },
          id : {
            type: String,
            required: false
          },
          text : {
            type: String,
            required: false
          },
          textPlain : {
            type: String,
            required: false
          }
      }, 
      {
        type : {
          type: String,
          required: false
        },
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        },
        textPlain : {
          type: String,
          required: false
        }
      }, 
      {
        type : {
          type: String,
          required: false
        },
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        },
        textPlain : {
          type: String,
          required: false
        }
      }, 
      {
        type : {
          type: String,
          required: false
        },
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        },
        textPlain : {
          type: String,
          required: false
        }
      }
  ],
  tastes : [ 
      {
          id : {
            type: String,
            required: false
          },
          text : {
            type: String,
            required: false
          }
      }, 
      {
          id : {
            type: String,
            required: false
          },
          text : {
            type: String,
            required: false
          },
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        },
      }
  ],
  occasions : [ 
      {
          id : {
            type: String,
            required: false
          },
          text : {
            type: String,
            required: false
          }
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }
  ],
  tools : [ 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }
  ],
  drinkTypes : [ 
    {
        drinkType : {
          type: String,
          required: false
        }
    }, 
    {
      drinkType : {
        type: String,
        required: false
        },
    }, 
    {
      drinkType : {
        type: String,
        required: false
      },
    }
],
  actions : [ 
      {
          id : {
            type: String,
            required: false
          },
          text : {
            type: String,
            required: false
          }
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }, 
      {
        id : {
          type: String,
          required: false
        },
        text : {
          type: String,
          required: false
        }
      }
  ],
  brands : [
    {
      brand: {
        type: String,
        required: false
      }
    }

  ],
  languageBranch : {
    type: String,
    required: false
  },
  id : {
    type: String,
    required: true
  },
  name : {
    type: String,
    required: true
  },
  descriptionPlain : {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  // for one-to-many, change this to an array
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// Create the Article model with the ArticleSchema
var Recipe = mongoose.model("Recipe", RecipeSchema);

// Export the model
module.exports = Recipe;
