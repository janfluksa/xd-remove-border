var {Rectangle, Color} = require("scenegraph");

function removeBorder (selection) {
    
    let s = selection;

    if (s.items.length < 1) {
        console.log("Remove border plugin: Select the object first.");
    }

    for (let i=0;i<s.items.length;i++) {
        s.items[i].strokeEnabled = false;
    }
}

function scaleToHalf (selection, Matrix) {
    
    let s = selection;

    if (s.items.length < 1) {
        console.log("Remove border plugin: Select the object first.");
    }

    for (let i=0;i<s.items.length;i++) {
        s.items[i].resize( s.items[i].width/2 , s.items[i].height/2 );
    }
}

module.exports = {
    commands: {
        removeBorder: removeBorder,
        scaleToHalf: scaleToHalf,
    }
};
