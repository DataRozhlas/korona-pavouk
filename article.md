title: "Jak se šířil koronavirus mezi nakaženými z Česka"
perex: "Nakažených novým typem koronaviru v Česku přibývá. Ve středu odpoledne úřady oznámily, že jich je 75. Za zlomový je označován případ nemocného řidiče Uberu, u něhož byla nákaza potvrzena v pondělí. Na rozdíl od většiny ostatních totiž v poslední době nepobýval v postižených oblastech. V úterý večer pak bylo v Praze mezi nakaženými už osm lidí bez cestovatelské anamnézy. Server iROZHLAS.cz zmapoval, jak se pacienti nakazili. U některých ale dosud nejsou známy ani základní údaje."
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/2020-03-10t135936z_1_200311-115347_ako.JPG?itok=Iau76S6C
coverimg_note: "Foto: iROZHLAS.cz"
styles: []
libraries: [highcharts, 'https://code.highcharts.com/modules/networkgraph.js', 'https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.min.js'] #jquery, d3, highcharts, datatables
options: [] #wide, noheader (, nopic)
---

První případy nákazy se v Česku objevily 1. března, a to u lidí, kteří se vrátili z Itálie z oblastí zasažených koronavirem. 

Hygienici začali dohledávat okruh osob, se kterými nakažení přišli do kontaktu. Dotyční museli následně zůstat v domácí čtrnáctidenní karanténě. Všichni pozitivně testovaní pacienti přitom měli cestovatelskou anamnézu.

_Server iROZHLAS.cz se pokusil zmapovat vazby mezi nakaženými, prohlédnout si je můžete v následující aplikaci._

<wide>
<div id="corona_spider"></div>
</wide>

## Zlomový případ

Za zlomový označil epidemiolog a náměstek ministra zdravotnictví Roman Prymula v pořadí 38. případ. Šlo o řidiče přepravní společnosti Uber, který měl pozitivní výsledky na nový typ koronaviru v pondělí 9. března. V posledních dnech přitom nebyl v zahraničí a neměl ani spojitost s žádným do té doby známým případem.

<left>
<p>Ve středu odpoledne bylo v Česku známých celkem 75 lidí s koronavirem. Dva z nich jsou ve vážném stavu – 84letá žena leží na jednotce intenzivní péče v nemocnici v Brně, muž ve středním věku pak v pražské Nemocnici Na Bulovce. Nejvíce nakažených je momentálně v Praze, následují Ústecký a Středočeský kraj. Světová zdravotnická organizace (WHO) ve středu oznámila, že šíření koronaviru lze považovat za pandemii.<p>
</left>

Podle hygieniků je tak velmi těžké dohledat, od koho se nakazil. „Máme podezření na osoby německé národnosti, které ubytovával. Ministerstvo zdravotnictví řeší v současné době jejich dohledání a vyšetření, protože jsou už dávno zpátky v Německu,“ popsala situaci během tiskové konference šéfka pražských hygieniků Zdeňka Jágrová.

Řidič jezdil s potížemi tři dny, během nichž přišel do kontaktu s 90 lidmi, dalších šest měl potom ve svém nejbližším okolí. „Máme už kontaktní e-maily a telefony na všechny, které vezl, postupně je vyřizujeme,“ dodala.

## Dynamické šíření

Dosud největší nárůst v šíření koronaviru zaznamenalo Česko v úterý 10. března, kdy přibylo v 25 nových případů. Většina z nich si přivezla nemoc z dovolené. V Praze se ale objevilo osm nakažených, kteří v zahraničí nebyli. 

„Vidíme, že bohužel dochází k dynamickému nárůstu, tak musíme opatření udělat hned na začátku, ne až za pár dní nebo týdnů jako to udělala třeba Itálie, kde se pak už velmi těžko s tou epidemií něco dělá,“ popsal ministr zdravotnictví Adam Vojtěch (za ANO) Radiožurnálu.

Vláda v návaznosti na šíření koronaviru přijala řadu opatření - do odvolání zrušila akce s účastí nad 100 lidí a uzavřela základní, střední, vyšší odborné a vysoké školy. Mateřské školy zatím fungovat mohou, některé ale přesto svůj provoz přerušily.

_Nakažení ve vybraných zemích. Data mají asi jeden den zpoždění._

<link rel="stylesheet" href="https://data.irozhlas.cz/corona-map/style.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/8.0.0/highcharts.js"></script>

<wide><div id="corona_eu"></div></wide>
<script src="https://data.irozhlas.cz/corona-map/pocitadlo-eu.js"></script>