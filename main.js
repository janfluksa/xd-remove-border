var {Rectangle, Color} = require("scenegraph");

function removeBorder (selection) {
    
    let s = selection;

    if (s.items.length < 1) {
        console.log("Remove border plugin: Select the object first.")
    }

    for (let i=0;i<s.items.length;i++) {
        s.items[i].strokeEnabled = false;
    }
}

module.exports = {
    commands: {
        removeBorder: removeBorder
    }
};
