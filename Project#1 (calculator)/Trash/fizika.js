function manZili(){
    var masivi = [];
    var s = 0;
    for(var i = 0; i < 1; i++){
        var el = parseInt(prompt('შემოიყვანეთ v-ს მნიშვნელობა'));
        masivi.push(el);
        var el = parseInt(prompt('შემოიყვანეთ t-ს მნიშვნელობა'));
        masivi.push(el);
    }
    var v = masivi[0];
    var t = masivi[1];
    var s = v * t;
    alert('თქვენს მიერ შემოყვანილი v-ს მნიშვნელობაა ' + v + ' კმ/სთ; ' + 't-ს მნიშვნელობაა ' + t + ' სთ' + '; ხოლო s-ს მნიშვნელობაა ' + s + ' კმ');
}
function sichqare(){
    var masivi = [];
    var v = 0;
    for(var i = 0; i < 1; i++){
        var el = parseInt(prompt('შემოიყვანეთ s-ს მნიშვნელობა'));
        masivi.push(el);
        var el = parseInt(prompt('შემოიყვანეთ t-ს მნიშვნელობა'));
        masivi.push(el);
    }
    var s = masivi[0];
    var t = masivi[1];
    var v = s / t;
    alert('თქვენს მიერ შემოყვანილი s-ს მნიშვნელობაა ' + s + 'კმ' +  '; t-ს მნიშვნელობაა' + t + 'სთ' + '; ხოლო v-ს მნიშვნელობაა ' + v + 'კმ/სთ');
}
function dro(){
    var masivi = [];
    var t = 0;
    for(var i = 0; i < 1; i++){
        var el = parseInt(prompt('შემოიყვანეთ s-ს მნიშვნელობა'));
        masivi.push(el);
        var el = parseInt(prompt('შემოიყვანეთ v-ს მნიშვნელობა'));
        masivi.push(el);
    }
    var s = masivi[0];
    var v = masivi[1];
    var t = s / v;
    alert('თქვენს მიერ შემოყვანილი s-სა მნიშვნელობაა' + s + 'კმ' + '; v-ს მნიშვნელობაა' + v + 'კმ/სთ' + '; ხოლო t-ს მნიშვნელობაა ' + t + 'სთ');
}
function masa(){
    var masivi = [];
    var m = 0;
    for(var i = 0; i < 1; i++){
        var el = parseInt(prompt('შემოიყვანეთ რო-ს მნიშვნელობა'));
        masivi.push(el);
        var el = parseInt(prompt('შემოიყვანეთ v-ს მნიშვნელობა'));
        masivi.push(el);
    }
    var v = masivi[0];
    var რო = masivi[1];
    var m = რო * v;
    alert('თქვენს მიერ შემოყვანილი რო-ს მნიშვნელობაა ' + რო + 'კგ/მ3' + '; v-ს მნიშვნელობაა' + v + 'მ3' + '; ხოლო m-ის მნიშვნელობაა ' + m + 'კგ');
}
function simkvrive(){
    var masivi = [];
    var რო = 0;
    for(var i = 0; i < 1; i++){
        var el = parseInt(prompt('შემოიყვანეთ m-ს მნიშვნელობა'));
        masivi.push(el);
        var el = parseInt(prompt('შემოიყვანეთ v-ს მნიშვნელობა'));
        masivi.push(el);
    }
    var m = masivi[0];
    var v = masivi[1];
    var რო = m / v;
    alert('თქვენს მიერ შემოყვანილი m-ს მნიშვნელობაა ' + m + 'კგ' + '; v-ს მნიშვნელობაა ' + v + 'მ3' + '; ხოლო რო-ს მნიშვნელობაა ' + რო + 'კგ/მ3');
}
function moculoba(){
    var masivi = [];
    var v = 0;
    for(var i = 0; i < 1; i++){
        var el = parseInt(prompt('შემოიყვანეთ m-ს მნიშვნელობა'));
        masivi.push(el);
        var el = parseInt(prompt('შემოიყვანეთ რო-ს მნიშვნელობა'));
        masivi.push(el);
    }
    var m = masivi[0];
    var რო = masivi[1];
    var v = m / რო;
    alert('თქვენს მიერ შემოყვანილი m-ს მნიშვნელობაა ' + m + 'კგ' + '; რო-ს მნიშვნელობაა ' + რო + 'კგ/მ3' + '; ხოლო v-ს მნიშვნელობაა ' + v + 'მ3');
}
function sixiste(){
    var masivi = [];
    var k = 0;
    for(var i = 0; i < 1; i++){
        var el = parseInt(prompt('შემოიყვანეთ fდრ-ის მნიშვნელობა'));
        masivi.push(el);
        var el = parseInt(prompt('შემოიყვანეთ დელტა L-ს მნიშვნელობა'));
        masivi.push(el);
    }
    var fდრ = masivi[0];
    var დელტა  = masivi[1];
    var k = fდრ/დელტა ;
    alert('თქვენს მიერ შემოყვანილი fდრ-ის მნიშვნელობაა ' + fდრ +  ' ნ' + '; დელტა L-ს მნიშვნელობაა ' + დელტა  + ' მ' + '; ხოლო k-ს მნიშვნელობაა ' + k + ' ნ/მ');
}
function fdr(){
    var masivi = [];
    var fდრ = 0;
    for(var i = 0; i < 1; i++){
        var el = parseInt(prompt('შემოიყვანეთ დელტა L-ის მნიშვნელობა'));
        masivi.push(el);
        var el = parseInt(prompt('შემოიყვანეთ k-ს მნიშვნელობა'));
        masivi.push(el);
    }
    var დელტა  = masivi[0];
    var k = masivi[1];
    var fდრ = დელტა  * k;
    alert('თქვენს მიერ შემოყვანილი დელტა L-ს მნიშვნელობაა ' + დელტა  + ' მ' + '; k-ს მნიშვნელობაა' + k + 'ნ/მ' + '; ხოლო fდრ-ის მნიშვნელობაა ' + fდრ + 'ნ');
}
function delta(){
    var masivi = [];
    var delta = 0;
    for(var i = 0; i < 1; i++){
        var el = parseInt(prompt('შემოიყვანეთ fდრ-ის მნიშვნელობა'));
        masivi.push(el);
        var el = parseInt(prompt('შემოიყვანეთ k-ს მნიშვნელობა'));
        masivi.push(el);
    }
    var fდრ = masivi[0];
    var k  = masivi[1];
    var delta = fდრ/k ;
    alert('თქვენს მიერ შემოყვანილი fდრ-ის მნიშვნელობაა ' + fდრ +  ' ნ' + '; k-ს მნიშვნელობაა ' + k + ' ნ/მ' + '; ხოლო დელტა L-ს მნიშვნელობაა ' + delta + ' მ');
}