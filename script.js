
function promeni(value) {
    const zakon = document.getElementsByClassName("zakon");
    const pa = document.getElementsByClassName("pa");
    const hr = document.getElementsByClassName("hr");
    const nekretnine = document.getElementsByClassName("nekretnine");
    const tm = document.getElementsByClassName("tm");
    const porez = document.getElementsByClassName("porez");

    if (value == "srbija") {
        zakon[0].innerHTML = "<h2>Zakon</h2><p>Dozvoljeno je gajiti samo sorte konoplje koje pripadaju vrsti konoplje (Cannabis sativa L) koje su upisane u Registar sorti poljoprivredenog bilja u skladu sa zakonom kojim se uređuje priznavanje sorti poljoprivrednog bilja i čiji je sadržaj supstanci iz grupe tetrahidrokanabinola manji od <b>0,3%.</b> <br> Za setvu, obavezno je koristiti seme konoplje koje je proizvedeno, dorađeno,upakovano, deklarisano i obeleženo u skladu sa zakonom kojim se uređuje seme.Dok je za proizvodnju semena za dalje razmnožavanje obavezno da je upisano u Registar proizvođača semena i rasada u skladu sa zakonom kojim se uređuje seme. </p> ";

        pa[0].innerHTML = " <h2>Poslovni aspekt</h2><p>Površina <b>88.499 km²</b><br>Obradivo zemljište <b>2.579.000 ha</b><br> Stanovništvo : <b> 6 844 million</b> <br>Diplomirani studenti 2020 : <b>45.406</b></p>";

        porez[0].innerHTML = "<h2>Porez</h2><p> <b>Porez na zarade i socijalni doprinosi</b> <br>10% (dodatnih 10% na deo godišnje neto zarade između 25.000 i 75.000 EUR, 15% na deo godišnje neto zarade preko 75.000 EUR) <br><b>Doprinosi za obavezno socijalno osiguranje (ukupno na teret zaposlenog i poslodavca, osnovicu čini bruto zarada) </b><br>36,55% do mesečne osnovice 3.500 EUR, preko navedeg iznosa doprinosi se ne plaćaju. <br><b> Stope poreza na dobit pravnih lica  </b> <br>15%, s tim što efektivna stopa može biti znatno niža ako firme ispune uslove za različite vrste poreskih pogodnosti. <br><b> Porez na dodatu vrijednost </b> <br>Opšta stopa 20%, posebna stopa 10%.</p>";

        hr[0].innerHTML = "<h2>Ljudski resursi</h2><p>Minimalna neto zarada: <b> € 288,14 </b>	<Br>Minimalna bruto zarada: <b> € 404,62 </b> <Br>Prosečna neto zarada:	<b> € 641,67 </b> <Br>Prosečna bruto zarada:<b> € 886,13 </b>	 <Br>	</p>";

        document.getElementById("zastava").src="Serbia.png";

        nekretnine[0].innerHTML = " <h2>Nekretnine</h2><p>Kupovina poslovnog prostora: <b> 2448,54 €/m2 </b> <Br>Mesečno Iznajmljivanje:	<b> 13,82 €/m2 </b><Br>Kupovina magacina:	<b> 759,00 €/m2 </b><Br>Mesečno Iznajmljivanje:	<b> 4,88 €/m2 </b><Br> </p>";

        tm[0].innerHTML = " <h2>Transportne mogućnosti</h2><p>Drumski &#10004; <br>	Železnički &#10004;<br>	Rečni &#10004;<br>	Pomorski  	&#9932;<br>	Avio &#10004;<br></p>";

    } else if (value == "hrvatska") {
        zakon[0].innerHTML = "<h2>Zakon</h2> <p>Legalno je uzgajati industrijsku konoplju (Cannabis sativa L) u industrijsku svrhu, čijije sadržaj supstanci iz grupe tetrahidrokanabinola manji od <b> 0,2%.</b> Dozvola koja se izdaje vredi za jednu setvenu sezonu. <br> Setva se mora obaviti sertifikovanimsemenom čije sorte se nalaze na Zajedničkoj sortnoj listi Evropske unije i nijeuvrštena u Popis droga, psihoaktivnih supstanci i biljaka iz kojih se može dobitidroga.</p>";

        pa[0].innerHTML = "<h2>Poslovni aspekt</h2><p> Površina : <b> 56.594 km² </b> <br>Obradivo zemljište: <b> 823.000 ha </b> <br> Stanovništvo: <b> 3.899 million </b> <br> Diplomirani studenti 2020: <b> 33.357</b> </p>";

        porez[0].innerHTML = "<h2>Porez</h2><p> <b>Porez na zarade i socijalni doprinosi: </b><br>24% za godišnji prihod do 50.000 EUR, do 36% na godišnji prihod preko 50.000 EUR(prilikom obračuna godišnjeg prihoda u obzir se uzimaju poreski odbici i poreske olakšice); <br><b>Doprinosi za obavezno socijalno osiguranje (ukupno na teret zaposlenog i poslodavca, osnovicučini bruto zarada):</b> <br> 36,50%, s tim što se doprinosi za PIO od 20% plaćaju najviše do mesečne osnovice od 7.000EUR; <br><b>Stope poreza na dobit pravnih lica : </b> <br> 10% ukoliko su u poreskom periodu ostvareni prihodi do 995807.80e, 18% ukoliko su ujednaki ili veći od 995807.80e <br><b>Porez na dodatu vrijednost </b> <br>Opšta stopa 25%, posebne stopa 13% <br></p>";

        hr[0].innerHTML = "<h2>Ljudski resursi</h2><p> Minimalna neto zarada :<b> € 497,78 </b> <br>Minimalna bruto zarada: <b> € 622,23 </b> <br>Prosečna neto zarada: <b> € 1.001,00</b> <br>Prosečna bruto zarada: <b> € 1.359,94</b></p>"; 

        document.getElementById("zastava").src="Croatia.png";

        nekretnine[0].innerHTML = "<h2>Nekretnine</h2><p>Kupovina poslovnog prostora: <b>2376,54€/m2</b><br>Iznajmljivanje poslovnog prostora: <b>11,50€/m2</b><br>Kupovina magacina :<b> 703,00€/m2  </b><br>Iznajmljivanje magacina:<b> 5,00€/m2 </b><br></p>";

        tm[0].innerHTML = "<h2>Transportne mogućnosti</h2><p>Drumski &#10004; <br>	Železnički &#10004;<br>	Rečni &#10004;<br>	Pomorski  	 &#10004;<br>	Avio &#10004;<br></p>";  
        
    }else if (value == "crnagora") {
        zakon[0].innerHTML = "<h2>Zakon</h2><p>Dozvoljeno je gajenje konoplje u industrijske svrhe, uz dozvolu za gajenje konoplje i zaključen ugovor o otkupu celokupnog roda sa licem registrovanim za promet konoplje, u skladu sa zakonom. <br> Uvoz, izvoz i tranzit mogu vršiti pravna lica koja imaju dozvolu za proizvodnju i promet, na osnovu posebne dozvole koju izdaje Ministarstvo.</p>";

        pa[0].innerHTML = "<h2>Poslovni aspekt</h2><p>Površina: <b> 13.812 km² </b>  <br>Obradivo zemljište:<b> 189.900 ha </b><br>Stanovništvo: <B>620.173</b><br>Diplomirani studenti 2020: <b>3.044</b></p>";

        porez[0].innerHTML = "<h2>Porez</h2><p><b> Porez na zarade i socijalni doprinosi </b> <br> 9% na zaradu do prosječne, 11% na dio zarade iznad prosječne. <br> <b> Doprinosi za obavezno socijalno osiguranje (ukupno na teret zaposlenog i poslodavca, osnovicu čini bruto zarada)</b> <br> 32,30%, s tim što se doprinosi za PIO od 20,50% plaćaju najviše do godišnje osnovice od 53.858 EUR (za 2020 godinu). <br><b> Stope poreza na dobit pravnih lica </b> <br> 9%, nezavisno od visine Prihoda <br><b> Porez na dodatu vrijednost</b> <br>Opšta stopa 21%, posebna stopa 7%</p>";

        hr[0].innerHTML = "<h2>Ljudski resursi</h2><p>Minimalna neto zarada : <b>€ 450,00 </b> <br>Minimalna bruto zarada: <b>€ 532,54 </b><br>Prosečna neto zarada: <b>€ 886,00 </b> <br>Prosečna bruto zarada:<b>€ 718,00</b><br></p>";

        document.getElementById("zastava").src="Montenegro.png";

        nekretnine[0].innerHTML = "<h2>Nekretnine</h2><p>Kupovina poslovnog prostora : <b>1651,11 €/m2</b><br>Iznajmljivanje poslovnog prostora : <b>11,20€/m2 </b> <br>Kupovina magacina : <b>550,00€/m2</b><br>Iznajmljivanje magacina : <b>3,82€/m2</b></p>";

        tm[0].innerHTML = "<h2>Transportne mogućnosti</h2><p>Drumski &#10004; <br>	Železnički &#10004;<br>	Rečni &#9932;<br>	Pomorski &#10004;  	<br>	Avio &#10004;<br></p>";  
        
    }else if (value == "makedonija") {
        zakon[0].innerHTML = "<h2>Zakon</h2><p>U Severnoj Makedoniji dozvoljeno je gajenje konoplje samo za medicinske svrhe, dok se pitanje uzgoja konoplje u svrhe industrije jos promatrazbog prethodno praćenih skandala zloupotrebe uzgoja.</p>";

        pa[0].innerHTML = "<h2>Poslovni aspekt</h2><p>Površina:<b> 25.713 km² </b> <br> Obradivo zemljište:<b> 418.000 ha </b> <br> Stanovništvo:<b> 2.065 million</b> <br>Diplomirani studenti 2020:<b> 7.750 </b> <br></p>";

        porez[0].innerHTML = "<h2>Porez</h2><p><b> Porez na zarade i socijalni doprinosi: </b> <br>10%<b> Doprinosi za obavezno socijalno osiguranje (ukupno na teret zaposlenog i poslodavca, osnovicu čini bruto zarada) </b> <br>  28% do mesečne osnovice od 16 prosječnih plata, preko toga se ne plaćaju <br><b> Stope poreza na dobit pravnih lica </b><br>10%, s tim što se kompanije sa godišnim prihodom do 500.000 EUR mogu osloboditi plaćanja poreza, dok kompanije sa godišnim prihodom između 500.000 i 1.000.000 EUR mogu izabrati da porez plaćaju po stopi od 1% od ostvarenog prihoda <br><b> Porez na dodatu vrijednost </b> <br>Opšta stopa 18%, posebna stopa 5%</p>";

        hr[0].innerHTML = "<h2>Ljudski resursi</h2><p>Minimalna neto zarada : <b>€ 293,88  </b> <br>Minimalna bruto zarada: <b>€ 428,77 </b> <br>Prosečna neto zarada: € <b>517,20 </b> <br>Prosečna bruto zarada:€ <b>733,92 </b> <br></p>";

        document.getElementById("zastava").src="Macedonia.png";

        nekretnine[0].innerHTML = "<h2>Nekretnine</h2><p>Kupovina poslovnog prostora : <b>1652,25 €/m2 </b> <br> Iznajmljivanje poslovnog prostora : <b>10,17€/m2 </b> <br>Kupovina magacina : <b>630,00€/m2 </b> <br>Iznajmljivanje magacina : <b>4,33€/m2 </b> <br></p>";

        tm[0].innerHTML = "<h2>Transportne mogućnosti</h2><p>Drumski &#10004; <br>	Železnički &#10004;<br>	Rečni 	&#9932;<br>	Pomorski  	&#9932;<br>	Avio &#10004;<br></p>";  
        
    }else if (value == "bih") {
        zakon[0].innerHTML = "<h2>Zakon</h2><p>Industrijska konoplja može se uzgajati, čiji sadržaj tetrahidrokanabinola (THC) u suvoj materiji biljke ne prelazi <b> 0,2% </b> i čija sorta je upisana u Sortnu listu u skladu sa propisima o sjemenu poljoprivrednog bilja. Izdaje se za površinu od minimalno jednog hektara i važi jednu setvenu sezonu. <br> Zahtev za izdavanje odobrenja za uzgoj industrijske konoplje mogu podneti pravna lica, fizička lica i preduzetnici upisani u Registar poljoprivrednih gazdinsta.</p>";

        pa[0].innerHTML = "<h2>Poslovni aspekt</h2><p>Površina: <b> 51.209 km²</b> <br> Obradivo zemljište: <b> 747.000 ha</b> <br> Stanovništvo: <b> 3.263 million</b> <br>Diplomirani studenti 2020: <b> 12.705</b> <br></p>";

        porez[0].innerHTML = "<h2>Porez</h2><p><b>Porez na zarade i socijalni doprinosi</b> <br>10%<b><br> Doprinosi za obavezno socijalno osiguranje (ukupno na teret zaposlenog i poslodavca, osnovicu čini bruto zarada)</b> <br> Bosna i Hercegovina – Federacija BiH 41,50%,Republika Srpska 32,80% <b> <br> Stope poreza na dobit pravnih lica</b> <br>10%, nezavisno od visine prihoda<b> Porez na dodatu vrijednost</b> <br>Opšta stopa 17%, nije propisana posebna stopa</p>";

        hr[0].innerHTML = "<h2>Ljudski resursi</h2><p>Minimalna neto zarada : <b> € 277,40</b> <br>Minimalna bruto zarada <b> € 421,63</b> <br>Prosečna neto zarada: <b> € 584,45</b> <br>Prosečna bruto zarada: <b> € 896,95</b> <br></p>";

        document.getElementById("zastava").src="Bosnia.png";

        nekretnine[0].innerHTML = "<h2>Nekretnine</h2><p>Kupovina poslovnog prostora : <b> 1416,26€/m2 </b> <br>Iznajmljivanje poslovnog prostora : <b> 9,60 €/m2 </b> <br>Kupovina magacina : <b> 510,57€/m2 </b> <br>Iznajmljivanje magacina : <b> 3,64€/m2 </b> <br></p>";

        tm[0].innerHTML = " <h2>Transportne mogućnosti</h2><p>Drumski &#10004; <br>	Železnički &#10004;<br>	Rečni &#10004;<br>	Pomorski  	&#9932;<br>	Avio &#10004;<br></p>";
        
    }else if (value == "slovenija") {
        zakon[0].innerHTML = "<h2>Zakon</h2><p>Dozvoljeno je uzgajanje konoplje za proizvodnju semena za dalju reprodukciju, za dobijanje ulja, za dobijanje supstanci za kozmetiku i za proizvodnju vlakana. <br> Uzgajivač mora podneti zahtev Ministarstvu poljoprivrede, šumarstva i prehrane za dobijanje dozvole. Sadržaj tetrahidrokanabinola ne sme prelaziti <b> 0,2% </b> u suvoj materiji.</p>";

        pa[0].innerHTML = "<h2>Poslovni aspekt</h2><p>Površina: <b> 20.273 km² </b> <br>Obradivo zemljište: <b>181.780 ha </b> <br> Stanovništvo: <b>2.107 million </b> <br>Diplomirani studenti 2020: <b>16.000 </b> <br></p>";

        porez[0].innerHTML = "<h2>Porez</h2><p><b>Porez na zarade i socijalni doprinosi: </b> <br> 16% za godišnju osnovicu od 8,500 EUR (ako je osnovica veća od ovog iznosa) do 50% za godišnju osnovicu preko 72.000 EUR<br> <b>Doprinosi za obavezno socijalno osiguranje (ukupno na teret zaposlenog i poslodavca, osnovicu čini bruto zarada):</b> <br> 38,20%<br><b>Stope poreza na dobit pravnih lica : </b> <br>Slovenija 19% (investicioni i penzioni fondovi se mogu osloboditi plaćanja poreza uz ispunjenje određenih uslova)<br><b>Porez na dodatu vrijednost </b> <br>Opšta stopa 22%, posebna stopa 9,50%</p>";

        hr[0].innerHTML = "<h2>Ljudski resursi</h2><p>Minimalna neto zarada :<b> € 749,72</b> <br>Minimalna bruto zarada : <b> € 1.074,43</b> <br>Prosečna neto zarada :<b> €1.304,01</b> <br>Prosečna bruto zarada :<b> € 2.007,94</b> <br></p>";

        document.getElementById("zastava").src="Slovenia.png";

        nekretnine[0].innerHTML = "<h2>Nekretnine</h2>Kupovina poslovnog prostora : <b>2092,08€/m2 </b> <br>Iznajmljivanje poslovnog prostora : <b>12,26€/m2 </b> <br>Kupovina magacina : <b>702,31€/m2 </b> <br>Iznajmljivanje magacina : <b>6,00€/m2  </b> <br><p></p>";

        tm[0].innerHTML = "<h2>Transportne mogućnosti</h2><p>Drumski &#10004; <br>	Železnički &#10004;<br>	Rečni &#9932;<br>	Pomorski  &#10004;	<br>	Avio &#10004;<br></p>";  
        
    }
    

}

function kalkulator(value) {
    const kriterijum = document.getElementsByClassName("kriterijum");


    if (value == "kratko") {
        document.getElementById("zastavica").src = "Croatia.png";
        kriterijum[0].innerHTML = " <p>Glavna razlika između Srbije i Hrvatske, je cena poljoprivrednog zemljišta koja je znatno manja. </br>Ako firma želi da se investicija što pre isplati, Hrvatska je u tom slučaju favorit.  </p>";

    } else if (value == "dugo") {
        kriterijum[0].innerHTML = " <p>Srbija kao največa zemlja u regionu, sa najviše obradivog zemljista, čini raskrsnicu izmedju </br> zemalja u regionu sto je čini pogodnom za ulaganje. </br> Cene radne snage su medju nižima u regionu.</p>";
        document.getElementById("zastavica").src = "Serbia.png";
    }
}

