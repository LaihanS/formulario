
  const user = require("../model/models/userModel")


exports.Getregister = (req, res, next) => {
    res.render("user/formulario", {
      pageTitle: "Register",
    });
  };

  exports.Getsearch = (req, res, next) => {
    res.render("search/search", {
      pageTitle: "Búsqueda",
      buscaractive: true,
    });
  };

  exports.PostSearch = (req, res, next) => {
    const userID = parseInt(req.body.search)
    
    user.findAll({ where: {id: userID } })
    .then((userio) => {
      if (!userio) {res.redirect("/")}
      
      const user =  userio.map((userio) => userio.dataValues);
      res.render("search/search", {
        pageTitle: "Búsqueda",
        buscaractive: true, 
        user: user,
        hasuser: user.length > 0
        });

        console.log(user)

        
    }).catch((err)  => {
      console.log(err)
    })
   
  };

  exports.PostCreateUser = (req, res, next) => {
      const username = req.body.name
      const email = req.body.mail
      const telefono = req.body.telefono
      var imagen = req.file

      user.create({
          nombre: username,
          imagepath: "/" + imagen.path,
          email: email,
          telefono: telefono,
      }).then((result) => {
          res.redirect("/");
        })
    };
  