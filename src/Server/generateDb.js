//to recreate the fake db - db.json for every server restart

const fs = require("fs");
const path = require("path");
const places = [
    {
        id: 1,
        title: "Agra",
        ptofattraction: "Taj-mahal"
    },

    {
        id: 2,
        title: "Goa",
        ptofattraction: "Beaches"
    },
    {
        id:3,
        title:"Amritsar",
        ptofattraction:"Golden Temple"
    }


]

const data = JSON.stringify({places});
const fpath = "/Users/shivani.kokil/Documents/React/reactdemo/src/Server/db.json";

fs.writeFile(fpath,data,function(err){
    err?console.log(err) : console.log("looks fine");
})