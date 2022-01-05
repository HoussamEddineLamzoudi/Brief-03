let cont_c = document.createElement("div");
let d_e = document.createElement("div");
let d_h = document.createElement("div");
let d_es = document.createElement("div");
let d_d = document.createElement("div");

let aff = document.createElement("div");
aff.className = "aff_zon";
let aff_p = document.createElement("p");
aff.id = "aff_res";





let elec = document.createElement("input");
let hyp = document.createElement("input");
let esn = document.createElement("input");
let dsl = document.createElement("input");
let sub = document.createElement("input");

let lab_e = document.createElement("label");
let lab_h = document.createElement("label");
let lab_es = document.createElement("label");
let lab_d = document.createElement("label");

let t_elec = document.createTextNode("Electrique");
let t_hyp = document.createTextNode("Hybride");
let t_esn = document.createTextNode("Essence");
let t_dsl = document.createTextNode("Diesel");


// tiiiiiiiiiiime

let frm = document.querySelector(".form_");
let cont = document.querySelector(".cont");

let sel = document.querySelector(".select_tp");

// let debu = document.querySelector("#debu");
// let fin = document.querySelector("#fin");

// let dateDebut = debu.valueAsDate;
// let dateFin = fin.valueAsDate;

// let duree = (dateFin - dateDebut)/86400000;



// console.log(duree, fin.valueAsDate, debu.valueAsDate);

const duration = new URLSearchParams(document.location.search).get("duration") ?? 1;

// console.log("duration est: ", duration);
let R = 0;



cont_c.className = "alm_ch";

d_e.className = "d_e";
d_h.className = "d_h";
d_es.className = "d_es";
d_d.className = "d_d";

elec.setAttribute("type", "radio");
elec.setAttribute("name", "alm");
elec.setAttribute("value", "elec");
elec.id = "elec";

hyp.setAttribute("type", "radio");
hyp.setAttribute("name", "alm");
hyp.setAttribute("value", "hyp");
hyp.id = "hyp";

esn.setAttribute("type", "radio");
esn.setAttribute("name", "alm");
esn.setAttribute("value", "esn");
esn.id = "esn";

dsl.setAttribute("type", "radio");
dsl.setAttribute("name", "alm");
dsl.setAttribute("value", "dsl");
dsl.id = "dsl";

sub.setAttribute("type", "submit");
sub.setAttribute("value", "save");
sub.id = "sub";
console.log (sub);

lab_e.setAttribute("for", "elec");
lab_h.setAttribute("for", "hyp");
lab_es.setAttribute("for", "esn");
lab_d.setAttribute("for", "dsl");

lab_e.appendChild(t_elec);
lab_h.appendChild(t_hyp);
lab_es.appendChild(t_esn);
lab_d.appendChild(t_dsl);

d_e.appendChild(elec);
d_e.appendChild(lab_e);

d_h.appendChild(hyp);
d_h.appendChild(lab_h);

d_es.appendChild(esn);
d_es.appendChild(lab_es);

d_d.appendChild(dsl);
d_d.appendChild(lab_d);


// console.log (lab_e);
console.log ("r", R);

sel.addEventListener("change", function () {
    let val = sel.value;
    cont_c.innerHTML = "";
    switch (val) {
        case "Moto":
            cont_c.appendChild(d_e);
            cont_c.appendChild(d_es);
            cont.appendChild(cont_c);
            cont.appendChild(sub);

            R=10;
            break;
        case "Citadine":
            cont_c.appendChild(d_e);
            cont_c.appendChild(d_h);
            cont_c.appendChild(d_es);
            cont_c.appendChild(d_d);
            cont.appendChild(cont_c);
            cont.appendChild(sub);

            R=12;
            break;
        case "Compact":
            cont_c.appendChild(d_h);
            cont_c.appendChild(d_es);
            cont_c.appendChild(d_d);
            cont.appendChild(cont_c);
            cont.appendChild(sub);

            R=14;
            break;
        case "Utilitaire":
            cont_c.appendChild(d_d);
            cont.appendChild(cont_c);
            cont.appendChild(sub);

            R=16;
            console.log(R);
            break;
        case "Engin":
            cont_c.appendChild(d_es);
            cont_c.appendChild(d_d);
            cont.appendChild(cont_c);
            cont.appendChild(sub);

            R=900;
            break;
        case "Camion":
            cont_c.appendChild(d_d);
            cont.appendChild(cont_c);
            cont.appendChild(sub);

            R=250;
            R += (R*19)/100;
            console.log(R);
            break;
        case "Berline":
            cont_c.appendChild(d_h);
            cont_c.appendChild(d_es);
            cont_c.appendChild(d_d);
            cont.appendChild(cont_c);
            cont.appendChild(sub);

            R=20;
            R += (R*19)/100;
            break;
    
        default:
            break;
    }
});


frm.addEventListener("submit", function (e) {
    e.preventDefault();
    let val2 = document.querySelector("input[name='alm']:checked").value;
    console.log(val2);

    let aff_res ;

    switch (val2) {
        case "elec":
            R += (R*5)/100;
            R *= duration;

            aff_res = `${R} $`;
            aff_p.innerHTML = aff_res;
            aff.appendChild(aff_p);
            break;

        case "hyp":
            R += (R*9)/100;
            R *= duration;
            
            aff_res = `${R} $`;
            aff_p.innerHTML = aff_res;
            aff.appendChild(aff_p);
            break;

        case "esn":
            R += (R*14)/100;
            R *= duration;
            
            aff_res = `${R} $`;
            aff_p.innerHTML = aff_res;
            aff.appendChild(aff_p);
            break;

        case "dsl":
            R += (R*21)/100;
            R *= duration;

            aff_res = `${R} $`;
            aff_p.innerHTML = aff_res;
            aff.appendChild(aff_p);
            break;
       
    
        default:
            break;
    }
    swal(aff_res);

})


