import express from "express"; 
const routes = express.Router(); 

routes.get("/", (req, res) => {

        res.render("home"); 

})

routes.get("/speciality", (req, res) => {
    let name: string = req.query.name as string; 
    let price: string = req.query.price as string; 
    let imageSrc; 
    if (name == "Supreme") {
        imageSrc = "https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw141e010b/images/project/WLRECIP-8636/supreme-pizza-recipe.jpg?sw=800&sh=800"
    } else if (name == "Veggie") {
        imageSrc = "https://www.tasteofhome.com/wp-content/uploads/2018/01/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b-4.jpg?fit=700,1024"
    } else {
        imageSrc = "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg"
    }

    res.render("speciality", {name, price, imageSrc}); 
})

routes.get("/review", (req,res)=> {
    res.render("review"); 
})

routes.post("/review-thanks", (req, res) => {
    let name: string = req.body.name;
    let comment: string = req.body.comment;
    let rating = req.body.rating;
    

    res.render("review-thanks", {name, comment, rating});
})










// const pets1 = ["dog", "cat", "lion"]
// const myObj = {
//     name: "anu", 
//     age: 3200
// }
// const example = "Howdy!"; 
// const example2 = "anime"; 
// Another way to render
//res.render("home", {example: "NBA!", example2: "Kevin Durant"});
//res.render("home", {pets});  

// const pets = [{name: "Bo", fame: "The Obamas"},
//               {name: "Toto", fame: "Wizard of Oz"},
//             {name: "Dart", fame: "Stranger Things"}]

// res.render("home", {pets}); 
// let filter = req.query.filter; 

// const bool = true; 

// res.render("home", {bool})
// routes.get("/contact", (req, res) => {

//     res.render("contact")
// })

// routes.get("/contact/:employee", (req, res) => {
//     let employee = req.params.employee;
//     res.render("contact", {employee})
// })

// routes.post("/form", (req,res) => { // also GET Method
//     res.render("form"); 
//     console.log(req.body.hungry); 
// })

// routes.get("home", )

export default routes; 