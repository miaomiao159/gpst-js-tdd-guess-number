module.exports = function main(systeminput, userinput) {
    var a = [];
    var b = [];
    var si=systeminput.toString();
    var ui=userinput.toString();
    if(si.length === ui.length) {
        for(let i = 0; i < si.length; i++) {
            if (si[i] == ui[i]) {
                a.push(i);
            }
            else {
                b.push(i);
            }
        }
        return (a.length+'A'+b.length+'B');
    }
    return "";
};