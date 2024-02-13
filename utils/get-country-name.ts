export const getCountryName = (shortName: string) => {
    // ? Australia & Oceania Country Codes
    if (shortName === "as" || shortName.includes("as")) return "American Samoa";
    if (shortName === "au" || shortName.includes("au")) return "Australia";
    if (shortName === "fj" || shortName.includes("fj")) return "Fiji";
    if (shortName === "pf" || shortName.includes("pf")) return "French Polynesia";
    if (shortName === "gu" || shortName.includes("gu")) return "Guam";
    // ---
    if (shortName === "ki" || shortName.includes("ki")) return "Kiribati";
    if (shortName === "fm" || shortName.includes("fm")) return "Micronesia";
    if (shortName === "nr" || shortName.includes("nr")) return "Nauru";
    if (shortName === "nc" || shortName.includes("nc")) return "New Caledonia";
    if (shortName === "nz" || shortName.includes("nz")) return "New Zealand";
    // ---
    if (shortName === "pw" || shortName.includes("pw")) return "Palau";
    if (shortName === "pg" || shortName.includes("pg")) return "Papua New Guinea";
    if (shortName === "ws" || shortName.includes("ws")) return "Samoa";
    if (shortName === "tk" || shortName.includes("tk")) return "Tokelau";
    if (shortName === "to" || shortName.includes("to")) return "Tonga";
    // ---
    if (shortName === "tv" || shortName.includes("tv")) return "Tuvalu";
    if (shortName === "vu" || shortName.includes("vu")) return "Vanuatu";

    // ? Asia Country Codes
    if (shortName === "af" || shortName.includes("af")) return "Afghanistan";
    if (shortName === "az" || shortName.includes("az")) return "Azerbaijan";
    if (shortName === "bh" || shortName.includes("bh")) return "Bahrain";
    if (shortName === "bd" || shortName.includes("bd")) return "Bangladesh";
    if (shortName === "bt" || shortName.includes("bt")) return "Bhutan";
    // ---
    if (shortName === "bn" || shortName.includes("bn")) return "Brunei Darussalam";
    if (shortName === "kh" || shortName.includes("kh")) return "Cambodia";
    if (shortName === "cn" || shortName.includes("cn")) return "China";
    if (shortName === "cx" || shortName.includes("cx")) return "Christmas Island";
    if (shortName === "cy" || shortName.includes("cy")) return "Cyprus";
    // ---
    if (shortName === "ge" || shortName.includes("ge")) return "Georgia";
    if (shortName === "hk" || shortName.includes("hk")) return "Hong Kong";
    if (shortName === "in" || shortName.includes("in")) return "India";
    if (shortName === "id" || shortName.includes("id")) return "Indonesia";
    if (shortName === "ir" || shortName.includes("ir")) return "Iran";
    // ---
    if (shortName === "iq" || shortName.includes("iq")) return "Iraq";
    if (shortName === "il" || shortName.includes("il")) return "Israel";
    if (shortName === "jp" || shortName.includes("jp")) return "Japan";
    if (shortName === "jo" || shortName.includes("jo")) return "Jordan";
    if (shortName === "kz" || shortName.includes("kz")) return "Kazakhstan";
    // ---
    if (shortName === "kr" || shortName.includes("kr")) return "South Korea";
    if (shortName === "kw" || shortName.includes("kw")) return "Kuwait";
    if (shortName === "kg" || shortName.includes("kg")) return "Kyrgyzstan";
    if (shortName === "la" || shortName.includes("la")) return "Lao";
    if (shortName === "lb" || shortName.includes("lb")) return "Lebanon";
    // ---
    if (shortName === "mo" || shortName.includes("mo")) return "Macao";
    if (shortName === "my" || shortName.includes("my")) return "Malaysia";
    if (shortName === "mv" || shortName.includes("mv")) return "Maldives";
    if (shortName === "mn" || shortName.includes("mn")) return "Mongolia";
    if (shortName === "mm" || shortName.includes("mm")) return "Myanmar";
    // ---
    if (shortName === "np" || shortName.includes("np")) return "Nepal";
    if (shortName === "om" || shortName.includes("om")) return "Oman";
    if (shortName === "pk" || shortName.includes("pk")) return "Pakistan";
    if (shortName === "ps" || shortName.includes("ps")) return "Palestinian";
    if (shortName === "ph" || shortName.includes("ph")) return "Philippines";
    // ---
    if (shortName === "qa" || shortName.includes("qa")) return "Qatar";
    if (shortName === "sa" || shortName.includes("sa")) return "Saudi Arabia";
    if (shortName === "sg" || shortName.includes("sg")) return "Singapore";
    if (shortName === "lk" || shortName.includes("lk")) return "Sri Lanka";
    if (shortName === "sy" || shortName.includes("sy")) return "Syrian";
    // ---
    if (shortName === "tw" || shortName.includes("tw")) return "Taiwan";
    if (shortName === "tj" || shortName.includes("tj")) return "Tajikistan";
    if (shortName === "th" || shortName.includes("th")) return "Thailand";
    if (shortName === "tr" || shortName.includes("tr")) return "Turkey";
    if (shortName === "tm" || shortName.includes("tm")) return "Turkmenistan";
    // ---
    if (shortName === "ae" || shortName.includes("ae")) return "United Arab Emirates";
    if (shortName === "uz" || shortName.includes("uz")) return "Uzbekistan";
    if (shortName === "vn" || shortName.includes("vn")) return "Vietnam";
    if (shortName === "ye" || shortName.includes("ye")) return "Yemen";

    // ? Europe Country Codes
    if (shortName === "al" || shortName.includes("al")) return "Albania";
    if (shortName === "ad" || shortName.includes("ad")) return "Andorra";
    if (shortName === "am" || shortName.includes("am")) return "Armenia";
    if (shortName === "at" || shortName.includes("at")) return "Austria";
    if (shortName === "by" || shortName.includes("by")) return "Belarus";
    // ---
    if (shortName === "be" || shortName.includes("be")) return "Belgium";
    if (shortName === "ba" || shortName.includes("ba")) return "Bosnia and Herzegovina";
    if (shortName === "bg" || shortName.includes("bg")) return "Bulgaria";
    if (shortName === "hr" || shortName.includes("hr")) return "Croatia";
    if (shortName === "cz" || shortName.includes("cz")) return "Czech Republic";
    // ---
    if (shortName === "dk" || shortName.includes("dk")) return "Denmark";
    if (shortName === "ee" || shortName.includes("ee")) return "Estonia";
    if (shortName === "fi" || shortName.includes("fi")) return "Finland";
    if (shortName === "fr" || shortName.includes("fr")) return "France";
    if (shortName === "de" || shortName.includes("de")) return "Germany";
    // ---
    if (shortName === "gr" || shortName.includes("gr")) return "Greece";
    if (shortName === "gg" || shortName.includes("gg")) return "Guernsey";
    if (shortName === "va" || shortName.includes("va")) return "Vatican";
    if (shortName === "hu" || shortName.includes("hu")) return "Hungary";
    if (shortName === "is" || shortName.includes("is")) return "Iceland";
    // ---
    if (shortName === "ie" || shortName.includes("ie")) return "Ireland";
    if (shortName === "it" || shortName.includes("it")) return "Italy";
    if (shortName === "lv" || shortName.includes("lv")) return "Latvia";
    if (shortName === "li" || shortName.includes("li")) return "Liechtenstein";
    if (shortName === "lt" || shortName.includes("lt")) return "Lithuania";
    // ---
    if (shortName === "lu" || shortName.includes("lu")) return "Luxembourg";
    if (shortName === "mk" || shortName.includes("mk")) return "Macedonia";
    if (shortName === "mt" || shortName.includes("mt")) return "Malta";
    if (shortName === "md" || shortName.includes("md")) return "Moldova";
    if (shortName === "mc" || shortName.includes("mc")) return "Monaco";
    // ---
    if (shortName === "me" || shortName.includes("me")) return "Montenegro";
    if (shortName === "nl" || shortName.includes("nl")) return "Netherlands";
    if (shortName === "no" || shortName.includes("no")) return "Norway";
    if (shortName === "pl" || shortName.includes("pl")) return "Poland";
    if (shortName === "pt" || shortName.includes("pt")) return "Portugal";
    // ---
    if (shortName === "ro" || shortName.includes("ro")) return "Romania";
    if (shortName === "ru" || shortName.includes("ru")) return "Russian Federation";
    if (shortName === "rs" || shortName.includes("rs")) return "Serbia";
    if (shortName === "sk" || shortName.includes("sk")) return "Slovakia";
    if (shortName === "si" || shortName.includes("si")) return "Slovenia";
    // ---
    if (shortName === "es" || shortName.includes("es")) return "Spain";
    if (shortName === "se" || shortName.includes("se")) return "Sweden";
    if (shortName === "ch" || shortName.includes("ch")) return "Switzerland";
    if (shortName === "ua" || shortName.includes("ua")) return "Ukraine";
    if (shortName === "gb" || shortName.includes("gb")) return "United Kingdom";

    // ? North America
    if (shortName === "ai" || shortName.includes("ai")) return "Anguilla";
    if (shortName === "ca" || shortName.includes("ca")) return "Canada";
    if (shortName === "cu" || shortName.includes("cu")) return "Cuba";
    if (shortName === "do" || shortName.includes("do")) return "Dominican Republic";
    if (shortName === "sv" || shortName.includes("sv")) return "El Salvador";
    // ---
    if (shortName === "gd" || shortName.includes("gd")) return "Grenada";
    if (shortName === "gp" || shortName.includes("gp")) return "Guadeloupe";
    if (shortName === "gt" || shortName.includes("gt")) return "Guatemala";
    if (shortName === "ht" || shortName.includes("ht")) return "Haiti";
    if (shortName === "hn" || shortName.includes("hn")) return "Honduras";
    // ---
    if (shortName === "jm" || shortName.includes("jm")) return "Jamaica";
    if (shortName === "mx" || shortName.includes("mx")) return "Mexico";
    if (shortName === "ni" || shortName.includes("ni")) return "Nicaragua";
    if (shortName === "pa" || shortName.includes("pa")) return "Panama";
    if (shortName === "us" || shortName.includes("us") || shortName.includes("US")) return "USA";

    // ? Sourh America
    if (shortName === "ar" || shortName.includes("ar")) return "Argentina";
    if (shortName === "bo" || shortName.includes("bo")) return "Bolivia";
    if (shortName === "br" || shortName.includes("af")) return "Brazil";
    if (shortName === "cl" || shortName.includes("cl")) return "Chile";
    if (shortName === "co" || shortName.includes("co")) return "Colombia";
    if (shortName === "gy" || shortName.includes("gy")) return "Guyana";
    if (shortName === "py" || shortName.includes("py")) return "Paraguay";
    if (shortName === "pe" || shortName.includes("pe")) return "Peru";
    if (shortName === "sr" || shortName.includes("sr")) return "Suriname";
    if (shortName === "uy" || shortName.includes("uy")) return "Uruguay";
    if (shortName === "ve" || shortName.includes("ve")) return "Venezuela";
    else return "International";
};