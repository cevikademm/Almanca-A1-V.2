// ============ VERİ — 608 A1 kelimesi + hikâyeler + sayılar ============
// Yeni kelime eklemek için WORDS dizisine aynı biçimde nesne ekleyin:
// {a:'die', w:'Katze /n', t:'Kedi', gd:'Die Katze schläft.', gt:'Kedi uyuyor.', c:'isim'}
// a: artikel (''=yok) · w: kelime (+/çoğul eki, (hal) notu) · c: isim|fiil|sifat|zamir|diger|sayi

const WORDS = [
 {
  "a": "",
  "w": "ab",
  "t": "-den/-dan itibaren",
  "gd": "Ab morgen habe ich frei.",
  "gt": "Yarından itibaren iznim var.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "aber",
  "t": "Fakat, Ama",
  "gd": "Ich komme gern, aber ich habe keine Zeit.",
  "gt": "Memnuniyetle gelirim ama vaktim yok.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "abfahren",
  "t": "kalkmak, Hareket etmek",
  "gd": "Der Zug fährt um acht Uhr ab.",
  "gt": "Tren saat sekizde hareket ediyor.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Abfahrt /en",
  "t": "kalkış",
  "gd": "Vor der Abfahrt trinke ich einen Kaffee.",
  "gt": "Kalkıştan önce bir kahve içiyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "abfliegen",
  "t": "Havalanmak",
  "gd": "Das Flugzeug fliegt um acht Uhr ab.",
  "gt": "Uçak saat sekizde havalanıyor.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Abflug /¨,e",
  "t": "Uçakla kalkış",
  "gd": "Der Abflug ist um zehn Uhr.",
  "gt": "Kalkış saat onda.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "abgeben(Akk.)",
  "t": "Teslim etmek",
  "gd": "Ich muss den Schlüssel abgeben.",
  "gt": "Anahtarı teslim etmeliyim.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "abholen(Akk.)",
  "t": "Birini bir yerden almak",
  "gd": "Ich hole dich um sieben Uhr ab.",
  "gt": "Seni saat yedide alacağım.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Absender",
  "t": "Gönderen",
  "gd": "Der Brief hat keinen Absender.",
  "gt": "Mektubun göndereni yok.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Achtung",
  "t": "Dikkat",
  "gd": "Achtung, das Auto kommt!",
  "gt": "Dikkat, araba geliyor!",
  "c": "isim"
 },
 {
  "a": "",
  "w": "allein",
  "t": "Yalnız",
  "gd": "Mein Kind spielt heute allein.",
  "gt": "Çocuğum bugün yalnız oynuyor.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "alles",
  "t": "Hepsi, Tümü, Her, Bütün",
  "gd": "Das ist alles für heute.",
  "gt": "Bugünlük hepsi bu kadar.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "also",
  "t": "Yani, Demek ki, Şu halde",
  "gd": "Du bist müde, also geh ins Bett.",
  "gt": "Yorgunsun, o halde yatağa git.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "alt",
  "t": "Eski, Yaşlı",
  "gd": "Mein Auto ist schon sehr alt.",
  "gt": "Arabam çok eski.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "an",
  "t": "-in yanına, -in yanında",
  "gd": "Das Bild hängt an der Wand.",
  "gt": "Resim duvarda asılı.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "an sein",
  "t": "Açık olmak",
  "gd": "Das Radio ist noch an.",
  "gt": "Radyo hâlâ açık.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "anbieten(Dat./Akk.)",
  "t": "Teklif etmek, Sunmak",
  "gd": "Kann ich dir einen Tee anbieten?",
  "gt": "Sana çay ikram edebilir miyim?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "ander",
  "t": "Diğer",
  "gd": "Hast du eine andere Farbe?",
  "gt": "Başka bir rengin var mı?",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Anfang /¨e",
  "t": "Başlangıç",
  "gd": "Am Anfang ist alles neu.",
  "gt": "Başlangıçta her şey yeni.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "anfangen",
  "t": "Başlamak",
  "gd": "Der Film fängt um acht an.",
  "gt": "Film saat sekizde başlıyor.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Angebot /e",
  "t": "Teklif",
  "gd": "Das Angebot ist heute sehr gut.",
  "gt": "Teklif bugün çok iyi.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "anklicken(Akk.)",
  "t": "Tıklamak",
  "gd": "Bitte klicken Sie hier an.",
  "gt": "Lütfen buraya tıklayın.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "ankommen",
  "t": "Varmak",
  "gd": "Wann kommen wir in Berlin an?",
  "gt": "Berlin'e ne zaman varıyoruz?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "ankreuzen(Akk.)",
  "t": "Bir x ile işaretlemek",
  "gd": "Bitte kreuzen Sie die Antwort an.",
  "gt": "Lütfen cevabı işaretleyin.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Ankunft /¨e",
  "t": "Varış",
  "gd": "Die Ankunft ist um zehn Uhr.",
  "gt": "Varış saat onda.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "anmachen(Akk.)",
  "t": "Başlamak, Açmak, Hazırlamak",
  "gd": "Ich mache das Licht an.",
  "gt": "Işığı açıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "(sich) anmelden(für+Akk.)",
  "t": "Kayıt olmak",
  "gd": "Ich melde mich für den Kurs an.",
  "gt": "Kursa kayıt oluyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Anmeldung /en",
  "t": "Kayıt",
  "gd": "Die Anmeldung ist am Montag.",
  "gt": "Kayıt pazartesi günü.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Anrede /n",
  "t": "Selamlama",
  "gd": "Die Anrede im Brief ist sehr höflich.",
  "gt": "Mektuptaki selamlama çok kibar.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Anruf /e",
  "t": "Çağrı",
  "gd": "Ich warte auf deinen Anruf.",
  "gt": "Aramanı bekliyorum.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Anrufbeantworter",
  "t": "Telesekreter",
  "gd": "Sprich bitte auf den Anrufbeantworter.",
  "gt": "Lütfen telesekretere konuş.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "anrufen(Akk.)",
  "t": "Telefon etmek",
  "gd": "Ich rufe dich morgen an.",
  "gt": "Seni yarın arayacağım.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Ansage /n",
  "t": "İlan, Anons",
  "gd": "Die Ansage am Bahnhof ist laut.",
  "gt": "Tren istasyonundaki anons çok yüksek.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Arbeit /en",
  "t": "İş",
  "gd": "Meine Arbeit macht mir Spaß.",
  "gt": "İşim bana zevk veriyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "arbeiten",
  "t": "Çalışmak",
  "gd": "Ich arbeite jeden Tag im Büro.",
  "gt": "Her gün ofiste çalışıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "arbeitslos",
  "t": "İşsiz",
  "gd": "Mein Bruder ist seit einem Jahr arbeitslos.",
  "gt": "Kardeşim bir yıldır işsiz.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Arbeitsplatz /¨e",
  "t": "İş yeri",
  "gd": "Mein Arbeitsplatz ist sehr modern.",
  "gt": "İş yerim çok modern.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Arm /e",
  "t": "Kol",
  "gd": "Mein Arm tut weh.",
  "gt": "Kolum ağrıyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "auch",
  "t": "-de/-da, Dahi",
  "gd": "Ich komme auch mit.",
  "gt": "Ben de geliyorum.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "auf",
  "t": "-in üstünde/-in üzerinde",
  "gd": "Das Buch liegt auf dem Tisch.",
  "gt": "Kitap masanın üstünde.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "auf sein",
  "t": "Açık olmak",
  "gd": "Das Fenster ist auf.",
  "gt": "Pencere açık.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Aufgabe /n",
  "t": "Görev",
  "gd": "Die Aufgabe ist nicht schwer.",
  "gt": "Görev zor değil.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "aufhören",
  "t": "Durmak, Bırakmak",
  "gd": "Der Regen hört bald auf.",
  "gt": "Yağmur yakında dinecek.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "aufstehen",
  "t": "Ayağa kalkmak/Kalkmak",
  "gd": "Ich stehe um sechs Uhr auf.",
  "gt": "Saat altıda kalkıyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Aufzug /¨e",
  "t": "Asansör",
  "gd": "Wir nehmen den Aufzug nach oben.",
  "gt": "Yukarıya asansörle çıkıyoruz.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Auge /n",
  "t": "Göz",
  "gd": "Meine Tochter hat blaue Augen.",
  "gt": "Kızımın mavi gözleri var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "aus sein",
  "t": "Bitmek",
  "gd": "Der Film ist gleich aus.",
  "gt": "Film birazdan bitiyor.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "ausmachen(Akk.)",
  "t": "Kapatmak, Söndürmek",
  "gd": "Bitte mach das Licht aus.",
  "gt": "Lütfen ışığı kapat.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Aussage /n",
  "t": "İfade, Beyan",
  "gd": "Deine Aussage ist richtig.",
  "gt": "Senin ifaden doğru.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "aussehen",
  "t": "Görünmek",
  "gd": "Du siehst heute müde aus.",
  "gt": "Bugün yorgun görünüyorsun.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "aussteigen",
  "t": "İnmek",
  "gd": "Ich steige am Bahnhof aus.",
  "gt": "Tren istasyonunda iniyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Ausweis /e",
  "t": "Kimlik",
  "gd": "Zeigen Sie bitte Ihren Ausweis.",
  "gt": "Lütfen kimliğinizi gösterin.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "(sich) ausziehen",
  "t": "Soyunmak",
  "gd": "Ich ziehe mich im Bad aus.",
  "gt": "Banyoda soyunuyorum.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Auto /s",
  "t": "Araba",
  "gd": "Mein Auto ist rot.",
  "gt": "Arabam kırmızı.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Autobahn /en",
  "t": "Otoban",
  "gd": "Wir fahren auf der Autobahn nach Hause.",
  "gt": "Otobandan eve gidiyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Automat /en",
  "t": "Otomat",
  "gd": "Der Automat nimmt keine Karte.",
  "gt": "Otomat kart kabul etmiyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "automatisch",
  "t": "Otomatik",
  "gd": "Die Tür geht automatisch auf.",
  "gt": "Kapı otomatik açılıyor.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Baby /s",
  "t": "Bebek",
  "gd": "Das Baby schläft jetzt.",
  "gt": "Bebek şimdi uyuyor.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Bad /¨er",
  "t": "Banyo",
  "gd": "Das Bad ist sehr klein.",
  "gt": "Banyo çok küçük.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "baden",
  "t": "Banyo yapmak",
  "gd": "Im Sommer baden wir im See.",
  "gt": "Yazın gölde yüzüyoruz.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Bahn /en",
  "t": "Tren",
  "gd": "Ich fahre mit der Bahn zur Arbeit.",
  "gt": "İşe trenle gidiyorum.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Bahnhof /¨e",
  "t": "Tren istasyonu",
  "gd": "Der Bahnhof ist nicht weit.",
  "gt": "Tren istasyonu uzak değil.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Bahnsteig /e",
  "t": "Peron",
  "gd": "Der Zug kommt am Bahnsteig drei an.",
  "gt": "Tren üç numaralı perona geliyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "bald",
  "t": "Yakında",
  "gd": "Bis bald!",
  "gt": "Yakında görüşürüz!",
  "c": "diger"
 },
 {
  "a": "der",
  "w": "Balkon /e",
  "t": "Balkon",
  "gd": "Wir sitzen gern auf dem Balkon.",
  "gt": "Balkonda oturmayı seviyoruz.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Bank /en",
  "t": "Banka",
  "gd": "Ich gehe zur Bank und hole Geld.",
  "gt": "Bankaya gidip para çekiyorum.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Bank /¨e",
  "t": "Bank, Sıra",
  "gd": "Wir sitzen auf der Bank im Park.",
  "gt": "Parktaki sırada oturuyoruz.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "bar",
  "t": "Nakit, Peşin",
  "gd": "Ich bezahle bar.",
  "gt": "Nakit ödüyorum.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Bauch /¨e",
  "t": "Karın",
  "gd": "Mein Bauch tut weh.",
  "gt": "Karnım ağrıyor.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Baum /¨e",
  "t": "Ağaç",
  "gd": "Der Baum ist sehr groß.",
  "gt": "Ağaç çok büyük.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Beamte /n",
  "t": "Devlet memuru",
  "gd": "Der Beamte hilft mir mit dem Formular.",
  "gt": "Memur bana formda yardım ediyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "bedeuten(Akk.)",
  "t": "anlamına gelmek",
  "gd": "Was bedeutet dieses Wort?",
  "gt": "Bu kelime ne anlama geliyor?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "beginnen",
  "t": "Başlamak",
  "gd": "Der Film beginnt um acht Uhr.",
  "gt": "Film saat sekizde başlıyor.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "bei",
  "t": "-de, yanında, -in evinde",
  "gd": "Heute bin ich bei meiner Oma.",
  "gt": "Bugün büyükannemin evindeyim.",
  "c": "diger"
 },
 {
  "a": "das",
  "w": "Bein /e",
  "t": "Bacak",
  "gd": "Mein Bein tut weh.",
  "gt": "Bacağım ağrıyor.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Beispiel /e",
  "t": "Örnek",
  "gd": "Kannst du mir ein Beispiel geben?",
  "gt": "Bana bir örnek verebilir misin?",
  "c": "isim"
 },
 {
  "a": "",
  "w": "bekannt",
  "t": "Tanınmış, Bilinen",
  "gd": "Dieser Sänger ist sehr bekannt.",
  "gt": "Bu şarkıcı çok tanınmış.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Bekannte /n",
  "t": "Tanıdık",
  "gd": "Eine Bekannte von mir wohnt in Berlin.",
  "gt": "Bir tanıdığım Berlin'de oturuyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "bekommen(Akk.)",
  "t": "Verilen bir şeyi almak",
  "gd": "Ich bekomme ein Geschenk zum Geburtstag.",
  "gt": "Doğum günümde bir hediye alıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "benutzen(Akk.)",
  "t": "Kullanmak",
  "gd": "Ich benutze einen Computer.",
  "gt": "Bir bilgisayar kullanıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "besetzt",
  "t": "Meşgul",
  "gd": "Die Toilette ist besetzt.",
  "gt": "Tuvalet meşgul.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "besichtigen(Akk.)",
  "t": "Gezmek, Dolaşmak (sich)",
  "gd": "Wir besichtigen heute die Kirche.",
  "gt": "Bugün kiliseyi geziyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "besser",
  "t": "Daha iyi",
  "gd": "Das Wetter ist heute besser.",
  "gt": "Bugün hava daha iyi.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "best",
  "t": "En iyi",
  "gd": "Das ist mein bester Freund.",
  "gt": "Bu benim en iyi arkadaşım.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "bestellen(Akk.)",
  "t": "Sipariş etmek",
  "gd": "Ich bestelle einen Kaffee.",
  "gt": "Bir kahve sipariş ediyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "besuchen(Akk.)",
  "t": "Ziyaret etmek",
  "gd": "Morgen besuche ich meine Freundin.",
  "gt": "Yarın kız arkadaşımı ziyaret ediyorum.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Bett /en",
  "t": "Yatak",
  "gd": "Das Bett ist sehr bequem.",
  "gt": "Yatak çok rahat.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "bezahlen(Akk.)",
  "t": "Ödemek",
  "gd": "Ich bezahle die Rechnung.",
  "gt": "Hesabı ödüyorum.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Bier /e",
  "t": "Bira",
  "gd": "Er trinkt ein Bier.",
  "gt": "O bir bira içiyor.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Bild /er",
  "t": "Resim",
  "gd": "Das Bild ist sehr schön.",
  "gt": "Resim çok güzel.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "billig",
  "t": "Ucuz",
  "gd": "Die Schuhe sind billig.",
  "gt": "Ayakkabılar ucuz.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "bis",
  "t": "-e kadar, -e dek",
  "gd": "Ich bleibe bis Montag hier.",
  "gt": "Pazartesiye kadar burada kalıyorum.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "bisschen",
  "t": "Biraz",
  "gd": "Ich spreche ein bisschen Deutsch.",
  "gt": "Biraz Almanca konuşuyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "bitte",
  "t": "Lütfen",
  "gd": "Gib mir bitte das Buch.",
  "gt": "Lütfen bana kitabı ver.",
  "c": "diger"
 },
 {
  "a": "die",
  "w": "Bitte /n",
  "t": "Rica",
  "gd": "Ich habe eine Bitte an dich.",
  "gt": "Senden bir ricam var.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Buch /¨,er",
  "t": "Kitap",
  "gd": "Das Buch ist sehr interessant.",
  "gt": "Kitap çok ilginç.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Buchstabe /n",
  "t": "Harf",
  "gd": "Das Wort hat fünf Buchstaben.",
  "gt": "Kelimenin beş harfi var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "buchstabieren(Akk.)",
  "t": "Harf harf okumak, Harflere ayırmak",
  "gd": "Kannst du deinen Namen buchstabieren?",
  "gt": "Adını heceleyebilir misin?",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Bus /se",
  "t": "Otobüs",
  "gd": "Ich fahre mit dem Bus zur Arbeit.",
  "gt": "İşe otobüsle gidiyorum.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Butter",
  "t": "Tereyağı",
  "gd": "Ich kaufe Brot und Butter.",
  "gt": "Ekmek ve tereyağı alıyorum.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Café /s",
  "t": "Kahvehane",
  "gd": "Wir trinken Kaffee im Café.",
  "gt": "Kahvehanede kahve içiyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Chef /s",
  "t": "Patron",
  "gd": "Mein Chef ist heute nicht da.",
  "gt": "Patronum bugün burada değil.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Chefin /nen",
  "t": "Kadın Patron",
  "gd": "Meine Chefin ist sehr nett.",
  "gt": "Kadın patronum çok kibar.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Computer",
  "t": "Bilgisayar",
  "gd": "Mein Computer ist neu.",
  "gt": "Bilgisayarım yeni.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "da",
  "t": "Orada, Burada, Şurada",
  "gd": "Da ist mein Auto.",
  "gt": "İşte arabam orada.",
  "c": "diger"
 },
 {
  "a": "die",
  "w": "Dame /n",
  "t": "Bayan",
  "gd": "Die Dame trägt einen Hut.",
  "gt": "Bayan bir şapka takıyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "daneben",
  "t": "Yanında, Onun yanında",
  "gd": "Der Tisch steht daneben.",
  "gt": "Masa onun yanında duruyor.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Dank",
  "t": "Teşekkür",
  "gd": "Vielen Dank für deine Hilfe.",
  "gt": "Yardımın için çok teşekkürler.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "danke",
  "t": "Teşekkür ederim",
  "gd": "Danke, das ist sehr nett.",
  "gt": "Teşekkür ederim, çok naziksin.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "danken(Dat.)",
  "t": "Teşekkür etmek",
  "gd": "Ich danke dir für das Geschenk.",
  "gt": "Hediye için sana teşekkür ediyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "dann",
  "t": "Bunun üzerine, Ondan sonra, O halde, O zaman, Sonradan",
  "gd": "Zuerst esse ich, dann gehe ich.",
  "gt": "Önce yemek yiyorum, sonra gidiyorum.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "dauern",
  "t": "Devam etmek, Sürmek",
  "gd": "Der Film dauert zwei Stunden.",
  "gt": "Film iki saat sürüyor.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "dein",
  "t": "Senin",
  "gd": "Ist das dein Buch?",
  "gt": "Bu senin kitabın mı?",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "denn",
  "t": "Çünkü",
  "gd": "Ich bleibe zu Hause, denn ich bin krank.",
  "gt": "Evde kalıyorum, çünkü hastayım.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "dich",
  "t": "Seni",
  "gd": "Ich liebe dich.",
  "gt": "Seni seviyorum.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "diese",
  "t": "Bu, Şu",
  "gd": "Diese Tasche ist sehr schön.",
  "gt": "Bu çanta çok güzel.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "dir",
  "t": "Sana",
  "gd": "Ich gebe dir das Buch.",
  "gt": "Sana kitabı veriyorum.",
  "c": "zamir"
 },
 {
  "a": "die",
  "w": "Disco /s",
  "t": "Disko",
  "gd": "Wir tanzen in der Disco.",
  "gt": "Diskoda dans ediyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Doktor",
  "t": "Doktor",
  "gd": "Der Doktor ist sehr freundlich.",
  "gt": "Doktor çok cana yakın.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Doppelzimmer",
  "t": "Çift yataklı oda",
  "gd": "Wir nehmen ein Doppelzimmer im Hotel.",
  "gt": "Otelde çift yataklı bir oda alıyoruz.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Dorf /¨er",
  "t": "Köy",
  "gd": "Meine Großeltern wohnen in einem Dorf.",
  "gt": "Büyükannem ve büyükbabam bir köyde oturuyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "dort /hier hin",
  "t": "Oraya, Buraya",
  "gd": "Stell die Tasche bitte dort hin.",
  "gt": "Lütfen çantayı oraya koy.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "draußen",
  "t": "Dışarıda",
  "gd": "Die Kinder spielen draußen.",
  "gt": "Çocuklar dışarıda oynuyor.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "drucken(Akk.)",
  "t": "Yazdırmak, Basmak",
  "gd": "Ich drucke den Brief.",
  "gt": "Mektubu yazdırıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "drücken(Akk.)",
  "t": "Sıkıştırmak, Bastırmak",
  "gd": "Drücken Sie bitte den Knopf.",
  "gt": "Lütfen düğmeye basın.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Drucker /",
  "t": "=Yazıcı",
  "gd": "Der Drucker ist kaputt.",
  "gt": "Yazıcı bozuk.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "durch",
  "t": "-in arasından/içinden/ortasından",
  "gd": "Wir gehen durch den Park.",
  "gt": "Parkın içinden geçiyoruz.",
  "c": "diger"
 },
 {
  "a": "die",
  "w": "Durchsage /n",
  "t": "Duyuru, Anons",
  "gd": "Ich höre eine Durchsage am Bahnhof.",
  "gt": "İstasyonda bir anons duyuyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "dürfen",
  "t": "İzinli olmak",
  "gd": "Hier darf man nicht rauchen.",
  "gt": "Burada sigara içilmez.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Durst",
  "t": "Susuzluk, Susama",
  "gd": "Ich habe großen Durst.",
  "gt": "Çok susadım.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Dusche /n",
  "t": "Duş",
  "gd": "Die Dusche ist im Bad.",
  "gt": "Duş banyoda.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "(sich) duschen",
  "t": "Duş yapmak",
  "gd": "Am Morgen dusche ich mich.",
  "gt": "Sabahleyin duş yapıyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Ecke /n",
  "t": "Köşe",
  "gd": "Der Tisch steht in der Ecke.",
  "gt": "Masa köşede duruyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Ehefrau /en",
  "t": "Eş",
  "gd": "Seine Ehefrau heißt Anna.",
  "gt": "Eşinin adı Anna.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Ehemann /¨er",
  "t": "Koca",
  "gd": "Mein Ehemann kocht heute das Essen.",
  "gt": "Kocam bugün yemeği pişiriyor.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Ei /er",
  "t": "Yumurta",
  "gd": "Ich esse morgens ein Ei.",
  "gt": "Sabahları bir yumurta yerim.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "eilig",
  "t": "Acele",
  "gd": "Ich habe es sehr eilig.",
  "gt": "Çok acelem var.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "ein",
  "t": "Bir",
  "gd": "Ich kaufe ein Brot.",
  "gt": "Bir ekmek alıyorum.",
  "c": "sayi"
 },
 {
  "a": "",
  "w": "einfach",
  "t": "Basit, Kolay",
  "gd": "Die Aufgabe ist sehr einfach.",
  "gt": "Bu görev çok kolay.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Eingang /¨e",
  "t": "Giriş",
  "gd": "Der Eingang ist hier links.",
  "gt": "Giriş burada solda.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "einkaufen",
  "t": "Alışveriş yapmak",
  "gd": "Wir kaufen heute im Supermarkt ein.",
  "gt": "Bugün süpermarkette alışveriş yapıyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "einladen(Akk.)",
  "t": "Davet etmek",
  "gd": "Ich lade dich zu meinem Geburtstag ein.",
  "gt": "Seni doğum günüme davet ediyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Einladung /en",
  "t": "Davet",
  "gd": "Danke für die Einladung!",
  "gt": "Davet için teşekkürler!",
  "c": "isim"
 },
 {
  "a": "",
  "w": "einmal",
  "t": "Bir kez",
  "gd": "Ich war nur einmal in Berlin.",
  "gt": "Berlin'de sadece bir kez bulundum.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "einsteigen",
  "t": "Binmek",
  "gd": "Wir steigen in den Bus ein.",
  "gt": "Otobüse biniyoruz.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Eintritt /e",
  "t": "Giriş",
  "gd": "Der Eintritt ist frei.",
  "gt": "Giriş ücretsiz.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Einzelzimmer",
  "t": "Tek yataklı oda",
  "gd": "Ich möchte ein Einzelzimmer, bitte.",
  "gt": "Tek yataklı bir oda istiyorum, lütfen.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Empfänger",
  "t": "Alıcı",
  "gd": "Der Empfänger wohnt in Hamburg.",
  "gt": "Alıcı Hamburg'da yaşıyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "empfehlen(Dat./Akk.)",
  "t": "Tavsiye etmek",
  "gd": "Können Sie mir ein Restaurant empfehlen?",
  "gt": "Bana bir restoran tavsiye edebilir misiniz?",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Ende /n",
  "t": "Son",
  "gd": "Am Ende der Straße ist eine Bank.",
  "gt": "Caddenin sonunda bir banka var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "enden",
  "t": "Bitmek, Sona ermek",
  "gd": "Der Film endet um zehn Uhr.",
  "gt": "Film saat onda bitiyor.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "(sich) entschuldigen(für+Akk.)",
  "t": "Özür dilemek",
  "gd": "Ich entschuldige mich für den Fehler.",
  "gt": "Hata için özür dilerim.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Entschuldigung /en",
  "t": "Özür, Özür dileme",
  "gd": "Entschuldigung, wo ist der Bahnhof?",
  "gt": "Affedersiniz, tren istasyonu nerede?",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Ergebnis /se",
  "t": "Sonuç",
  "gd": "Das Ergebnis ist sehr gut.",
  "gt": "Sonuç çok iyi.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "erklären(Dat./Akk.)",
  "t": "Açıklamak",
  "gd": "Können Sie mir das bitte erklären?",
  "gt": "Bana bunu açıklayabilir misiniz, lütfen?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "erlauben(Dat./Akk.)",
  "t": "İzin vermek",
  "gd": "Meine Eltern erlauben mir das nicht.",
  "gt": "Ebeveynlerim buna izin vermiyor.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Erwachsene /n",
  "t": "Yetişkin",
  "gd": "Der Eintritt kostet für einen Erwachsenen zehn Euro.",
  "gt": "Giriş bir yetişkin için on euro.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "erzählen(von+Dat.)",
  "t": "Anlatmak",
  "gd": "Meine Oma erzählt gern Geschichten.",
  "gt": "Babaannem hikaye anlatmayı seviyor.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Essen",
  "t": "Yemek",
  "gd": "Das Essen schmeckt sehr gut.",
  "gt": "Yemek çok lezzetli.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "essen(Akk.)",
  "t": "Yemek yemek",
  "gd": "Wir essen heute Fisch.",
  "gt": "Bugün balık yiyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "fahren",
  "t": "Araç sürmek",
  "gd": "Ich fahre mit dem Auto zur Arbeit.",
  "gt": "İşe arabayla gidiyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Fahrkarte /n",
  "t": "Bilet",
  "gd": "Ich kaufe eine Fahrkarte für den Zug.",
  "gt": "Tren için bir bilet alıyorum.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Fahrrad /¨er",
  "t": "Bisiklet",
  "gd": "Mein Fahrrad ist neu.",
  "gt": "Bisikletim yeni.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "falsch",
  "t": "Yanlış",
  "gd": "Die Antwort ist falsch.",
  "gt": "Cevap yanlış.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Familie /n",
  "t": "Aile",
  "gd": "Meine Familie ist groß.",
  "gt": "Ailem büyük.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Familienname /n",
  "t": "Soyadı",
  "gd": "Wie ist Ihr Familienname?",
  "gt": "Soyadınız nedir?",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Fax /e",
  "t": "Fax",
  "gd": "Ich schicke Ihnen ein Fax.",
  "gt": "Size bir faks gönderiyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "fehlen(Dat.)",
  "t": "Eksik olmak",
  "gd": "Heute fehlt ein Kind in der Schule.",
  "gt": "Bugün okulda bir çocuk eksik.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Fehler",
  "t": "Hata",
  "gd": "Das ist ein kleiner Fehler.",
  "gt": "Bu küçük bir hata.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Feier /n",
  "t": "Kutlama, Tören",
  "gd": "Die Feier ist am Samstag.",
  "gt": "Kutlama cumartesi günü.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "feiern(Akk.)",
  "t": "Kutlamak",
  "gd": "Wir feiern heute meinen Geburtstag.",
  "gt": "Bugün doğum günümü kutluyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "fernsehen",
  "t": "Televizyon izlemek",
  "gd": "Am Abend sehe ich gern fern.",
  "gt": "Akşamları televizyon izlemeyi severim.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "fertig",
  "t": "Bitti, Hazır",
  "gd": "Das Essen ist fertig.",
  "gt": "Yemek hazır.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Feuer",
  "t": "Ateş, Yangın",
  "gd": "Das Feuer ist sehr heiß.",
  "gt": "Ateş çok sıcak.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Fieber",
  "t": "Ateş (Hastalık)",
  "gd": "Mein Kind hat Fieber.",
  "gt": "Çocuğumun ateşi var.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Film /e",
  "t": "Film",
  "gd": "Der Film ist sehr schön.",
  "gt": "Film çok güzel.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "finden(Akk.)",
  "t": "Bulmak",
  "gd": "Ich finde meinen Schlüssel nicht.",
  "gt": "Anahtarımı bulamıyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Firma /en",
  "t": "Firma",
  "gd": "Meine Firma ist in Köln.",
  "gt": "Firmam Köln'de.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Flasche /n",
  "t": "Şişe",
  "gd": "Die Flasche ist leer.",
  "gt": "Şişe boş.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Fleisch",
  "t": "Et",
  "gd": "Ich esse kein Fleisch.",
  "gt": "Et yemiyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "fliegen",
  "t": "Uçmak",
  "gd": "Wir fliegen morgen nach Spanien.",
  "gt": "Yarın İspanya'ya uçuyoruz.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Flughafen /¨",
  "t": "Havalimanı",
  "gd": "Der Flughafen ist sehr groß.",
  "gt": "Havalimanı çok büyük.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Flugzeug /e",
  "t": "Uçak",
  "gd": "Das Flugzeug ist sehr schnell.",
  "gt": "Uçak çok hızlı.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Foto /s",
  "t": "Foto",
  "gd": "Das Foto ist sehr schön.",
  "gt": "Fotoğraf çok güzel.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Frage /n",
  "t": "Soru",
  "gd": "Ich habe eine Frage.",
  "gt": "Bir sorum var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "fragen(Akk.)",
  "t": "Sormak",
  "gd": "Ich frage den Lehrer.",
  "gt": "Öğretmene soruyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Frau /en",
  "t": "Kadın",
  "gd": "Die Frau dort ist meine Mutter.",
  "gt": "Oradaki kadın benim annem.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "frei",
  "t": "Özgür",
  "gd": "Heute bin ich frei.",
  "gt": "Bugün boşum.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Freizeit",
  "t": "Boş zaman",
  "gd": "In meiner Freizeit spiele ich Fußball.",
  "gt": "Boş zamanımda futbol oynarım.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "fremd",
  "t": "Yabancı",
  "gd": "Die Stadt ist mir fremd.",
  "gt": "Bu şehir bana yabancı.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "(sich) freuen(auf+Akk.)",
  "t": "Dört gözle beklemek, sabırsızlıkla beklemek",
  "gd": "Ich freue mich auf das Wochenende.",
  "gt": "Hafta sonunu sabırsızlıkla bekliyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Freund /e",
  "t": "Erkek arkadaş",
  "gd": "Mein Freund kommt heute zu mir.",
  "gt": "Erkek arkadaşım bugün bana geliyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Freundin /nen",
  "t": "Kız arkadaş",
  "gd": "Meine Freundin heißt Anna.",
  "gt": "Kız arkadaşımın adı Anna.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "früher",
  "t": "Önceden, Eskiden",
  "gd": "Früher habe ich in Berlin gewohnt.",
  "gt": "Eskiden Berlin'de yaşıyordum.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Frühstück /e",
  "t": "Kahvaltı",
  "gd": "Das Frühstück ist im Hotel sehr gut.",
  "gt": "Oteldeki kahvaltı çok iyi.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "frühstücken",
  "t": "Kahvaltı etmek",
  "gd": "Wir frühstücken um acht Uhr.",
  "gt": "Saat sekizde kahvaltı ediyoruz.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Führung /en",
  "t": "Yönetim, Liderlik",
  "gd": "Die Führung im Museum beginnt um drei Uhr.",
  "gt": "Müzedeki rehberli tur saat üçte başlıyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "für",
  "t": "için",
  "gd": "Das Geschenk ist für dich.",
  "gt": "Hediye senin için.",
  "c": "diger"
 },
 {
  "a": "der",
  "w": "Fuß /¨e",
  "t": "Ayak",
  "gd": "Mein linker Fuß tut weh.",
  "gt": "Sol ayağım acıyor.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Fußball /¨e",
  "t": "Futbol",
  "gd": "Wir spielen am Samstag Fußball.",
  "gt": "Cumartesi futbol oynuyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Gast /¨e",
  "t": "Misafir",
  "gd": "Heute Abend kommt ein Gast.",
  "gt": "Bu akşam bir misafir geliyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "gebären(Akk.)",
  "t": "Doğurmak",
  "gd": "Meine Schwester hat ein Baby geboren.",
  "gt": "Kız kardeşim bir bebek doğurdu.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "geben(Dat./Akk.)",
  "t": "Vermek",
  "gd": "Kannst du mir das Buch geben?",
  "gt": "Bana kitabı verebilir misin?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "geboren",
  "t": "Doğmuş",
  "gd": "Ich bin in Italien geboren.",
  "gt": "Ben İtalya'da doğdum.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Geburtsjahr /e",
  "t": "Doğum yılı",
  "gd": "Mein Geburtsjahr ist 1990.",
  "gt": "Doğum yılım 1990.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Geburtsort /e",
  "t": "Doğum yeri",
  "gd": "Mein Geburtsort ist Berlin.",
  "gt": "Doğum yerim Berlin.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Geburtstag /e",
  "t": "Doğum günü",
  "gd": "Wann hast du Geburtstag?",
  "gt": "Doğum günün ne zaman?",
  "c": "isim"
 },
 {
  "a": "",
  "w": "gefallen(Dat.)",
  "t": "Hoşuna gitmek",
  "gd": "Das Kleid gefällt mir sehr.",
  "gt": "Elbise çok hoşuma gidiyor.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "gegen",
  "t": "-e karşı",
  "gd": "Wir spielen heute gegen die andere Mannschaft.",
  "gt": "Bugün diğer takıma karşı oynuyoruz.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "gehen",
  "t": "Gitmek",
  "gd": "Ich gehe jetzt nach Hause.",
  "gt": "Şimdi eve gidiyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "gehören(Dat.)",
  "t": "Ait olmak",
  "gd": "Das Buch gehört mir.",
  "gt": "Bu kitap bana ait.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Geld /er",
  "t": "Para",
  "gd": "Ich habe kein Geld dabei.",
  "gt": "Yanımda hiç param yok.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "geöffnet",
  "t": "Açık, Açılmış",
  "gd": "Der Laden ist heute geöffnet.",
  "gt": "Dükkân bugün açık.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Gepäck /e",
  "t": "Bagaj",
  "gd": "Mein Gepäck ist sehr schwer.",
  "gt": "Bagajım çok ağır.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "gerade",
  "t": "Doğru, Düz",
  "gd": "Die Straße ist gerade.",
  "gt": "Yol düz.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "geradeaus",
  "t": "Dosdoğru",
  "gd": "Gehen Sie bitte geradeaus!",
  "gt": "Lütfen dosdoğru gidin!",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "gerne",
  "t": "Memnuniyetle, Seve seve",
  "gd": "Ich trinke gerne Kaffee.",
  "gt": "Seve seve kahve içerim.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Geschäft /e",
  "t": "Dükkan, Mağaza",
  "gd": "Das Geschäft ist heute geschlossen.",
  "gt": "Dükkan bugün kapalı.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Geschenk /e",
  "t": "Hediye",
  "gd": "Ich habe ein Geschenk für dich.",
  "gt": "Senin için bir hediyem var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "geschlossen",
  "t": "Kapalı",
  "gd": "Am Sonntag ist der Laden geschlossen.",
  "gt": "Pazar günü dükkân kapalıdır.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Gespräch /e",
  "t": "Görüşme",
  "gd": "Das Gespräch war sehr nett.",
  "gt": "Görüşme çok hoştu.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "gestern",
  "t": "Dün",
  "gd": "Gestern war ich im Kino.",
  "gt": "Dün sinemadaydım.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Getränk /e",
  "t": "İçecek",
  "gd": "Möchtest du ein kaltes Getränk?",
  "gt": "Soğuk bir içecek ister misin?",
  "c": "isim"
 },
 {
  "a": "",
  "w": "gewinnen(Akk.)",
  "t": "Kazanmak",
  "gd": "Unsere Mannschaft hat das Spiel gewonnen.",
  "gt": "Takımımız maçı kazandı.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Glas /¨er",
  "t": "Bardak",
  "gd": "Ich trinke ein Glas Wasser.",
  "gt": "Bir bardak su içiyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "glauben",
  "t": "İnanmak, Ummak, Sanmak",
  "gd": "Ich glaube, das ist richtig.",
  "gt": "Sanırım bu doğru.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "gleich",
  "t": "Aynı, Birazdan",
  "gd": "Ich komme gleich.",
  "gt": "Birazdan geliyorum.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Gleis /e",
  "t": "Ray, Tren rayı",
  "gd": "Der Zug fährt von Gleis drei ab.",
  "gt": "Tren üç numaralı raydan kalkıyor.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Glück",
  "t": "Şans, Talih",
  "gd": "Viel Glück bei der Prüfung!",
  "gt": "Sınavda bol şans!",
  "c": "isim"
 },
 {
  "a": "",
  "w": "glücklich",
  "t": "Mutlu",
  "gd": "Ich bin heute sehr glücklich.",
  "gt": "Bugün çok mutluyum.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Glückwunsch",
  "t": "Kutlama, Tebrik",
  "gd": "Herzlichen Glückwunsch zum Geburtstag!",
  "gt": "Doğum günün kutlu olsun!",
  "c": "isim"
 },
 {
  "a": "",
  "w": "Grad(Celsius)",
  "t": "Derece",
  "gd": "Heute sind es dreißig Grad.",
  "gt": "Bugün hava otuz derece.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "gratulieren(Dat.)",
  "t": "Tebrik etmek",
  "gd": "Ich gratuliere dir zur Hochzeit.",
  "gt": "Düğünün için seni tebrik ederim.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "grillen",
  "t": "Mangal yapmak",
  "gd": "Im Sommer grillen wir oft im Garten.",
  "gt": "Yazın bahçede sık sık mangal yaparız.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "groß",
  "t": "Büyük",
  "gd": "Das Haus ist sehr groß.",
  "gt": "Ev çok büyük.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Größe /n",
  "t": "Büyüklük, Boyut",
  "gd": "Welche Größe haben Sie?",
  "gt": "Hangi bedeni giyiyorsunuz?",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Gruppe /n",
  "t": "Grup",
  "gd": "Wir lernen in einer kleinen Gruppe.",
  "gt": "Küçük bir grupta öğreniyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Gruß /¨,e",
  "t": "Selam",
  "gd": "Viele Grüße an deine Familie!",
  "gt": "Ailene çok selam!",
  "c": "isim"
 },
 {
  "a": "",
  "w": "gültig",
  "t": "Geçerli",
  "gd": "Mein Ticket ist noch gültig.",
  "gt": "Biletim hâlâ geçerli.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "günstig",
  "t": "Ucuz",
  "gd": "Das Hotel ist sehr günstig.",
  "gt": "Bu otel çok ucuz.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "gut",
  "t": "İyi",
  "gd": "Das Essen schmeckt sehr gut.",
  "gt": "Yemek çok güzel.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Haar /e",
  "t": "Saç",
  "gd": "Sie hat lange Haare.",
  "gt": "Onun uzun saçları var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "haben(Akk.)",
  "t": "Sahip olmak",
  "gd": "Ich habe zwei Kinder.",
  "gt": "İki çocuğum var.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Hähnchen",
  "t": "Piliç, Tavuk",
  "gd": "Zum Mittagessen esse ich ein Hähnchen.",
  "gt": "Öğle yemeğine piliç yiyorum.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Halbpension /en",
  "t": "Yarı pansiyon",
  "gd": "Wir buchen das Zimmer mit Halbpension.",
  "gt": "Odayı yarı pansiyon olarak ayırtıyoruz.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Halle /n",
  "t": "Hol",
  "gd": "Wir spielen in der Halle Tennis.",
  "gt": "Salonda tenis oynuyoruz.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "hallo",
  "t": "Merhaba",
  "gd": "Hallo, wie geht es dir?",
  "gt": "Merhaba, nasılsın?",
  "c": "diger"
 },
 {
  "a": "",
  "w": "halten(Akk.)",
  "t": "Tutmak",
  "gd": "Bitte halten Sie meine Tasche.",
  "gt": "Lütfen çantamı tutun.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Haltestelle /n",
  "t": "Durak",
  "gd": "Der Bus kommt an der Haltestelle.",
  "gt": "Otobüs durağa geliyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Hand /¨e",
  "t": "El",
  "gd": "Gib mir bitte deine Hand.",
  "gt": "Lütfen bana elini ver.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Handy /s",
  "t": "Telefon",
  "gd": "Mein Handy ist kaputt.",
  "gt": "Telefonum bozuk.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Haus /¨er",
  "t": "Ev",
  "gd": "Wir wohnen in einem kleinen Haus.",
  "gt": "Küçük bir evde oturuyoruz.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Hausaufgabe /n",
  "t": "Ev ödevi",
  "gd": "Ich mache jetzt meine Hausaufgaben.",
  "gt": "Şimdi ev ödevimi yapıyorum.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Heimat",
  "t": "Vatan, Yurt",
  "gd": "Meine Heimat ist die Türkei.",
  "gt": "Benim vatanım Türkiye.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "heiraten(Akk.)",
  "t": "Evlenmek",
  "gd": "Im Sommer heiraten wir.",
  "gt": "Yazın evleniyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "helfen(Dat.)",
  "t": "Yardım etmek",
  "gd": "Kannst du mir bitte helfen?",
  "gt": "Bana yardım edebilir misin lütfen?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "hell",
  "t": "Aydınlık, Açık",
  "gd": "Das Zimmer ist sehr hell.",
  "gt": "Oda çok aydınlık.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Herd /e",
  "t": "Ocak",
  "gd": "Der Herd in der Küche ist neu.",
  "gt": "Mutfaktaki ocak yeni.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Herr /en",
  "t": "Bey, Bay",
  "gd": "Herr Müller kommt um neun Uhr.",
  "gt": "Müller Bey saat dokuzda geliyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "herzen(Akk.)",
  "t": "Bağrına basmak, sarılmak",
  "gd": "Die Mutter herzt ihr Kind.",
  "gt": "Anne çocuğunu bağrına basıyor.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "herzlich",
  "t": "İçten, samimi, candan",
  "gd": "Herzlichen Dank für das Geschenk!",
  "gt": "Hediye için çok teşekkürler!",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "heute",
  "t": "Bugün",
  "gd": "Heute bleibe ich zu Hause.",
  "gt": "Bugün evde kalıyorum.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "hier",
  "t": "Burada",
  "gd": "Hier ist mein Pass.",
  "gt": "İşte pasaportum burada.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Hilfe /n",
  "t": "Yardım",
  "gd": "Danke für deine Hilfe.",
  "gt": "Yardımın için teşekkürler.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "hinten",
  "t": "Geride, Arkada",
  "gd": "Mein Platz ist hinten im Bus.",
  "gt": "Yerim otobüsün arkasında.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Hobby /s",
  "t": "Hobi",
  "gd": "Mein Hobby ist Lesen.",
  "gt": "Hobim okumak.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "hoch",
  "t": "Yüksek",
  "gd": "Der Berg ist sehr hoch.",
  "gt": "Dağ çok yüksek.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Hochzeit /en",
  "t": "Düğün",
  "gd": "Wir feiern morgen eine Hochzeit.",
  "gt": "Yarın bir düğün kutluyoruz.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "holen(Akk.)",
  "t": "Almak",
  "gd": "Ich hole das Brot vom Bäcker.",
  "gt": "Ekmeği fırından alıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "hören(Akk.)",
  "t": "Dinlemek",
  "gd": "Ich höre gern Musik.",
  "gt": "Müzik dinlemeyi severim.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Hotel /s",
  "t": "Otel",
  "gd": "Wir schlafen heute im Hotel.",
  "gt": "Bugün otelde uyuyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Hunger",
  "t": "Açlık",
  "gd": "Ich habe großen Hunger.",
  "gt": "Çok açım.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "ich",
  "t": "Ben",
  "gd": "Ich komme aus der Türkei.",
  "gt": "Ben Türkiye'denim.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "ihr /ihm/ihn",
  "t": "Ona",
  "gd": "Ich gebe ihm das Buch.",
  "gt": "Kitabı ona veriyorum.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "immer",
  "t": "Daima, Her zaman",
  "gd": "Sie kommt immer zu spät.",
  "gt": "O her zaman geç gelir.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "in",
  "t": "İçinde",
  "gd": "Die Milch ist in der Küche.",
  "gt": "Süt mutfaktadır.",
  "c": "diger"
 },
 {
  "a": "die",
  "w": "Information /en",
  "t": "Bilgi",
  "gd": "Ich brauche eine Information.",
  "gt": "Bir bilgiye ihtiyacım var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "international",
  "t": "Uluslararası",
  "gd": "Der Flughafen ist international.",
  "gt": "Havalimanı uluslararasıdır.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Internet /s",
  "t": "İnternet",
  "gd": "Ich suche im Internet.",
  "gt": "İnternette arıyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "ja",
  "t": "Evet",
  "gd": "Ja, das ist richtig.",
  "gt": "Evet, bu doğru.",
  "c": "diger"
 },
 {
  "a": "die",
  "w": "Jacke /n",
  "t": "Ceket, Hırka",
  "gd": "Meine Jacke ist warm.",
  "gt": "Ceketim sıcak tutuyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "jed",
  "t": "Her",
  "gd": "Jeden Tag trinke ich Wasser.",
  "gt": "Her gün su içerim.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "jetzt",
  "t": "Şimdi",
  "gd": "Ich gehe jetzt nach Hause.",
  "gt": "Şimdi eve gidiyorum.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Job /s",
  "t": "İş",
  "gd": "Ich habe einen neuen Job.",
  "gt": "Yeni bir işim var.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Jugendliche /n",
  "t": "Genç, delikanlı",
  "gd": "Der Jugendliche spielt Fußball.",
  "gt": "Genç futbol oynuyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "jung",
  "t": "Genç",
  "gd": "Mein Bruder ist noch jung.",
  "gt": "Kardeşim hâlâ genç.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Junge /n",
  "t": "Erkek çocuk",
  "gd": "Der Junge spielt im Garten.",
  "gt": "Erkek çocuk bahçede oynuyor.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Kaffee /s",
  "t": "Kahve",
  "gd": "Ich trinke morgens Kaffee.",
  "gt": "Sabahları kahve içerim.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "kaputt",
  "t": "Bozuk",
  "gd": "Mein Handy ist kaputt.",
  "gt": "Telefonum bozuk.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Karte /n",
  "t": "Kart",
  "gd": "Ich schreibe eine Karte.",
  "gt": "Bir kart yazıyorum.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Kasse /n",
  "t": "Kasa",
  "gd": "Du bezahlst an der Kasse.",
  "gt": "Kasada ödeme yaparsın.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "kaufen(Akk.)",
  "t": "Satın almak",
  "gd": "Ich kaufe Brot und Milch.",
  "gt": "Ekmek ve süt satın alıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "kein",
  "t": "Yok, Olumsuzluk eki",
  "gd": "Ich habe kein Geld.",
  "gt": "Hiç param yok.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "kennen(Akk.)",
  "t": "Tanımak",
  "gd": "Ich kenne diese Frau.",
  "gt": "Bu kadını tanıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "kennenlernen(Akk.)",
  "t": "Tanışmak",
  "gd": "Ich möchte dich kennenlernen.",
  "gt": "Seninle tanışmak istiyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Kindergarten /¨",
  "t": "Ana okulu",
  "gd": "Mein Kind geht in den Kindergarten.",
  "gt": "Çocuğum anaokuluna gidiyor.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Kino /s",
  "t": "Sinema",
  "gd": "Wir gehen heute ins Kino.",
  "gt": "Bugün sinemaya gidiyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Kiosk /e",
  "t": "Büfe",
  "gd": "Ich kaufe Wasser am Kiosk.",
  "gt": "Büfeden su alıyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "klar",
  "t": "net, belli, tabi, berrak, duru, açık",
  "gd": "Das Wasser ist klar.",
  "gt": "Su berraktır.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Klasse /n",
  "t": "Sınıf",
  "gd": "Meine Klasse ist sehr groß.",
  "gt": "Sınıfım çok büyük.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Kleidung /en",
  "t": "Kıyafet",
  "gd": "Die Kleidung ist warm.",
  "gt": "Kıyafet sıcak tutuyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "klein",
  "t": "Küçük",
  "gd": "Das Zimmer ist klein.",
  "gt": "Oda küçük.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "kochen(Akk.)",
  "t": "Pişirmek",
  "gd": "Ich koche heute Suppe.",
  "gt": "Bugün çorba pişiriyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Koffer",
  "t": "Bavul, Valiz",
  "gd": "Mein Koffer ist sehr schwer.",
  "gt": "Bavulum çok ağır.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Kollege /n",
  "t": "Erkek iş arkadaşı",
  "gd": "Mein Kollege ist sehr nett.",
  "gt": "Erkek iş arkadaşım çok kibar.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Kollegin /nen",
  "t": "Kadın iş arkadaşı",
  "gd": "Meine Kollegin kommt aus Berlin.",
  "gt": "Kadın iş arkadaşım Berlin'den.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "kommen",
  "t": "Gelmek",
  "gd": "Ich komme um acht Uhr.",
  "gt": "Saat sekizde geliyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "können",
  "t": "-e bilmek",
  "gd": "Ich kann gut schwimmen.",
  "gt": "İyi yüzebilirim.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Konto /en",
  "t": "Hesap",
  "gd": "Ich habe ein Konto bei der Bank.",
  "gt": "Bankada bir hesabım var.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Kopf /¨e",
  "t": "Kafa",
  "gd": "Mein Kopf tut weh.",
  "gt": "Kafam ağrıyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "kosten(Akk.)",
  "t": "Mal olmak, fiyatı olmak",
  "gd": "Was kostet das Brot?",
  "gt": "Ekmek ne kadar?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "krank",
  "t": "Hasta",
  "gd": "Heute bin ich krank.",
  "gt": "Bugün hastayım.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Kreditkarte /n",
  "t": "Kredi kartı",
  "gd": "Ich bezahle mit der Kredit-Karte.",
  "gt": "Kredi kartıyla ödüyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "kriegen(Akk.)",
  "t": "Elde etmek",
  "gd": "Ich kriege heute einen Brief.",
  "gt": "Bugün bir mektup alıyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Küche /n",
  "t": "Mutfak",
  "gd": "Die Küche ist sehr groß.",
  "gt": "Mutfak çok büyük.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Kuchen",
  "t": "Pasta",
  "gd": "Der Kuchen schmeckt sehr gut.",
  "gt": "Pasta çok lezzetli.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Kugelschreiber",
  "t": "Tükenmez kalem",
  "gd": "Ich schreibe mit dem Kugelschreiber.",
  "gt": "Tükenmez kalemle yazıyorum.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Kühlschrank /¨e",
  "t": "Buzdolabı",
  "gd": "Die Milch ist im Kühlschrank.",
  "gt": "Süt buzdolabında.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Kultur /en",
  "t": "Kültür",
  "gd": "Die Kultur in Deutschland ist interessant.",
  "gt": "Almanya'daki kültür ilginç.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "kulturell",
  "t": "Kültürel",
  "gd": "Die Stadt hat ein kulturelles Programm.",
  "gt": "Şehrin kültürel bir programı var.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "(sich) kümmern(um+Akk.)",
  "t": "İlgilenmek, Önemsemek",
  "gd": "Ich kümmere mich um meine Kinder.",
  "gt": "Çocuklarımla ilgileniyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Kunde /n",
  "t": "Erkek Müşteri",
  "gd": "Der Kunde bezahlt an der Kasse.",
  "gt": "Müşteri kasada ödeme yapıyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Kundin /nen",
  "t": "Kadın Müşteri",
  "gd": "Die Kundin sucht eine Jacke.",
  "gt": "Kadın müşteri bir ceket arıyor.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Kurs /e",
  "t": "Kurs",
  "gd": "Ich besuche einen Deutschkurs.",
  "gt": "Bir Almanca kursuna gidiyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "kurz",
  "t": "Kısa",
  "gd": "Meine Haare sind kurz.",
  "gt": "Saçlarım kısa.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "lachen",
  "t": "Gülmek",
  "gd": "Die Kinder lachen viel.",
  "gt": "Çocuklar çok gülüyor.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Laden /¨",
  "t": "Dükkan, Mağaza",
  "gd": "Der Laden ist heute geschlossen.",
  "gt": "Dükkan bugün kapalı.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "lang",
  "t": "Uzun",
  "gd": "Der Weg ist sehr lang.",
  "gt": "Yol çok uzun.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "lange",
  "t": "Uzun (süre)",
  "gd": "Ich warte schon lange.",
  "gt": "Uzun zamandır bekliyorum.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "langsam",
  "t": "Yavaş",
  "gd": "Bitte sprich langsam.",
  "gt": "Lütfen yavaş konuş.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "laufen",
  "t": "Koşmak",
  "gd": "Ich laufe jeden Morgen im Park.",
  "gt": "Her sabah parkta koşarım.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "laut",
  "t": "Sesli",
  "gd": "Die Musik ist sehr laut.",
  "gt": "Müzik çok sesli.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Leben",
  "t": "Yaşam, Hayat",
  "gd": "Das Leben ist schön.",
  "gt": "Hayat güzeldir.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "leben",
  "t": "Yaşamak",
  "gd": "Ich lebe in Berlin.",
  "gt": "Berlin'de yaşıyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Lebensmittel",
  "t": "Gıda malzemeleri",
  "gd": "Ich kaufe Lebensmittel im Supermarkt.",
  "gt": "Süpermarketten gıda malzemeleri alıyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "legen(Akk.)",
  "t": "Koymak",
  "gd": "Ich lege das Buch auf den Tisch.",
  "gt": "Kitabı masanın üstüne koyuyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Lehrer",
  "t": "Öğretmen (Erkek)",
  "gd": "Mein Lehrer kommt aus Berlin.",
  "gt": "Öğretmenim Berlin'den geliyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Lehrerin /nen",
  "t": "Kadın Öğretmen",
  "gd": "Die Lehrerin ist sehr nett.",
  "gt": "Kadın öğretmen çok nazik.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "leicht",
  "t": "Hafif, Kolay",
  "gd": "Die Tasche ist leicht.",
  "gt": "Çanta hafif.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "leider",
  "t": "Maalesef, Ne yazık ki",
  "gd": "Leider habe ich heute keine Zeit.",
  "gt": "Maalesef bugün vaktim yok.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "leise",
  "t": "Sessiz, Yavaş, Alçak",
  "gd": "Bitte sprich leise!",
  "gt": "Lütfen sessiz konuş!",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "lernen(Akk.)",
  "t": "Öğrenmek",
  "gd": "Ich lerne jeden Tag Deutsch.",
  "gt": "Her gün Almanca öğreniyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "lesen(Akk.)",
  "t": "Okumak",
  "gd": "Am Abend lese ich ein Buch.",
  "gt": "Akşam bir kitap okuyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "letzt",
  "t": "Sonuncu, Geçen",
  "gd": "Letzte Woche war ich krank.",
  "gt": "Geçen hafta hastaydım.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Leute",
  "t": "İnsanlar",
  "gd": "Hier sind viele Leute.",
  "gt": "Burada çok insan var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "lieb",
  "t": "Sevgili",
  "gd": "Liebe Anna, wie geht es dir?",
  "gt": "Sevgili Anna, nasılsın?",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "lieben(Akk.)",
  "t": "Sevmek",
  "gd": "Ich liebe meine Familie.",
  "gt": "Ailemi seviyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "lieber",
  "t": "Tercihen",
  "gd": "Ich trinke lieber Tee.",
  "gt": "Ben tercihen çay içerim.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Lieblings",
  "t": "En çok sevilen",
  "gd": "Was ist dein Lieblingsessen?",
  "gt": "En sevdiğin yemek nedir?",
  "c": "isim"
 },
 {
  "a": "",
  "w": "Lieblings",
  "t": "En çok sevilen",
  "gd": "Blau ist meine Lieblingsfarbe.",
  "gt": "Mavi benim en sevdiğim renk.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "liegen",
  "t": "Yatmak (Pozisyon), Yatay durmak (Sınırsız)",
  "gd": "Das Buch liegt auf dem Tisch.",
  "gt": "Kitap masanın üstünde duruyor.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "links",
  "t": "Sol",
  "gd": "Das Bad ist links.",
  "gt": "Banyo solda.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Lokal /e",
  "t": "Lokal",
  "gd": "Wir essen heute in einem Lokal.",
  "gt": "Bugün bir lokalde yemek yiyoruz.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Lösung /en",
  "t": "Çözüm",
  "gd": "Ich weiß die Lösung nicht.",
  "gt": "Çözümü bilmiyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "lustig",
  "t": "Neşeli, Eğlenceli",
  "gd": "Der Film ist sehr lustig.",
  "gt": "Film çok eğlenceli.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "machen(Akk.)",
  "t": "Yapmak",
  "gd": "Was machst du am Wochenende?",
  "gt": "Hafta sonu ne yapıyorsun?",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Mädchen",
  "t": "Kız",
  "gd": "Das Mädchen spielt im Garten.",
  "gt": "Kız bahçede oynuyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Mail /s",
  "t": "E-Mail",
  "gd": "Ich schreibe dir eine Mail.",
  "gt": "Sana bir e-posta yazıyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "man",
  "t": "Kişi",
  "gd": "Hier darf man nicht rauchen.",
  "gt": "Burada sigara içilmez.",
  "c": "zamir"
 },
 {
  "a": "der",
  "w": "Mann /¨er",
  "t": "Erkek, Adam",
  "gd": "Der Mann liest die Zeitung.",
  "gt": "Adam gazete okuyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "männlich",
  "t": "Erkek, Eril",
  "gd": "Das Wort ist männlich.",
  "gt": "Bu kelime erildir.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Maschine /n",
  "t": "Makine",
  "gd": "Die Maschine ist neu.",
  "gt": "Makine yeni.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Meer /e",
  "t": "Deniz",
  "gd": "Im Sommer fahren wir ans Meer.",
  "gt": "Yazın denize gidiyoruz.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "mehr",
  "t": "Daha çok",
  "gd": "Ich möchte mehr Brot, bitte.",
  "gt": "Daha çok ekmek istiyorum, lütfen.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "mein",
  "t": "Benim",
  "gd": "Das ist mein Auto.",
  "gt": "Bu benim arabam.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "meist",
  "t": "Çoğu",
  "gd": "Die meisten Kinder spielen gern.",
  "gt": "Çoğu çocuk oynamayı sever.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Mensch /en",
  "t": "İnsan",
  "gd": "Jeder Mensch ist anders.",
  "gt": "Her insan farklıdır.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Miete /n",
  "t": "Kira",
  "gd": "Die Miete ist nicht hoch.",
  "gt": "Kira yüksek değil.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "mieten(Akk.)",
  "t": "Kiralamak",
  "gd": "Wir mieten eine Wohnung.",
  "gt": "Bir daire kiralıyoruz.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Milch",
  "t": "Süt",
  "gd": "Ich trinke Kaffee mit Milch.",
  "gt": "Sütlü kahve içiyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "mit",
  "t": "ile",
  "gd": "Ich komme mit dem Bus.",
  "gt": "Otobüsle geliyorum.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "mitbringen(Akk.)",
  "t": "Beraberinde getirmek",
  "gd": "Ich bringe einen Kuchen mit.",
  "gt": "Yanımda bir pasta getiriyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "mitkommen",
  "t": "Birlikte gelmek",
  "gd": "Kommst du heute Abend mit?",
  "gt": "Bu akşam birlikte gelir misin?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "mitmachen",
  "t": "Katılmak, Birlikte yapmak",
  "gd": "Machst du beim Spiel mit?",
  "gt": "Oyuna katılıyor musun?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "mitnehmen(Akk.)",
  "t": "Yanına almak",
  "gd": "Ich nehme den Schirm mit.",
  "gt": "Şemsiyeyi yanıma alıyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Mitte /n",
  "t": "Orta, Merkez",
  "gd": "Das Bett steht in der Mitte.",
  "gt": "Yatak ortada duruyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Möbel",
  "t": "Mobilya",
  "gd": "Die Möbel sind neu.",
  "gt": "Mobilyalar yeni.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "möchten(Akk.)",
  "t": "İstemek",
  "gd": "Ich möchte einen Kaffee.",
  "gt": "Bir kahve istiyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "mögen(Akk.)",
  "t": "Hoşuna gitmek",
  "gd": "Ich mag Schokolade.",
  "gt": "Çikolatayı severim.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "möglich",
  "t": "Mümkün, Olanaklı",
  "gd": "Ist das heute möglich?",
  "gt": "Bu bugün mümkün mü?",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Moment /e",
  "t": "An",
  "gd": "Einen Moment, bitte!",
  "gt": "Bir dakika, lütfen!",
  "c": "isim"
 },
 {
  "a": "",
  "w": "morgen",
  "t": "Yarın",
  "gd": "Morgen gehe ich zur Schule.",
  "gt": "Yarın okula gidiyorum.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "müde",
  "t": "Yorgun",
  "gd": "Ich bin sehr müde.",
  "gt": "Çok yorgunum.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Mund /¨er",
  "t": "Ağız",
  "gd": "Mach den Mund auf!",
  "gt": "Ağzını aç!",
  "c": "isim"
 },
 {
  "a": "",
  "w": "müssen",
  "t": "Zorunda olmak",
  "gd": "Ich muss heute arbeiten.",
  "gt": "Bugün çalışmak zorundayım.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "nach...",
  "t": "-e,-a sonra/göre",
  "gd": "Nach dem Essen trinke ich Tee.",
  "gt": "Yemekten sonra çay içerim.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "nächste /er,es",
  "t": "Sonraki",
  "gd": "Nächste Woche fahre ich nach Hause.",
  "gt": "Gelecek hafta eve gidiyorum.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "nehmen(Akk.)",
  "t": "Almak",
  "gd": "Ich nehme den Bus zur Arbeit.",
  "gt": "İşe otobüsle gidiyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "nein",
  "t": "Hayır, Yok",
  "gd": "Nein, ich komme nicht.",
  "gt": "Hayır, gelmiyorum.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "neu",
  "t": "Yeni",
  "gd": "Ich habe ein neues Handy.",
  "gt": "Yeni bir cep telefonum var.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "nicht",
  "t": "Değil",
  "gd": "Ich bin heute nicht zu Hause.",
  "gt": "Bugün evde değilim.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "nichts",
  "t": "Hiçbir şey",
  "gd": "Ich habe nichts gesagt.",
  "gt": "Hiçbir şey söylemedim.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "nie",
  "t": "Asla",
  "gd": "Ich trinke nie Alkohol.",
  "gt": "Asla alkol içmem.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "noch",
  "t": "Daha, Henüz",
  "gd": "Hast du noch Zeit?",
  "gt": "Hâlâ vaktin var mı?",
  "c": "diger"
 },
 {
  "a": "",
  "w": "normal",
  "t": "Normal",
  "gd": "Das ist ganz normal.",
  "gt": "Bu gayet normal.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Nummer /n",
  "t": "Numara",
  "gd": "Wie ist deine Nummer?",
  "gt": "Numaran nedir?",
  "c": "isim"
 },
 {
  "a": "",
  "w": "nur",
  "t": "Sadece",
  "gd": "Ich habe nur fünf Euro.",
  "gt": "Sadece beş avrom var.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "oben",
  "t": "Yukarıda, Üstte",
  "gd": "Das Buch ist oben im Regal.",
  "gt": "Kitap yukarıda, rafta.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "oder",
  "t": "Veya, Yahut",
  "gd": "Möchtest du Tee oder Kaffee?",
  "gt": "Çay mı yoksa kahve mi istersin?",
  "c": "diger"
 },
 {
  "a": "",
  "w": "öffnen(Akk.)",
  "t": "Açmak",
  "gd": "Bitte öffne das Fenster!",
  "gt": "Lütfen pencereyi aç!",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "oft",
  "t": "Sık sık",
  "gd": "Ich gehe oft ins Kino.",
  "gt": "Sık sık sinemaya giderim.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "ohne",
  "t": "-sız,-siz,-suz,-süz",
  "gd": "Ich trinke den Kaffee ohne Zucker.",
  "gt": "Kahveyi şekersiz içerim.",
  "c": "diger"
 },
 {
  "a": "die",
  "w": "Ordnung /en",
  "t": "Düzen, Tertip",
  "gd": "Mein Zimmer ist in Ordnung.",
  "gt": "Odam düzenli.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Ort /e",
  "t": "Yer",
  "gd": "Das ist ein schöner Ort.",
  "gt": "Burası güzel bir yer.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Papier /e",
  "t": "Kağıt",
  "gd": "Ich brauche ein Blatt Papier.",
  "gt": "Bir kâğıt parçasına ihtiyacım var.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Partner",
  "t": "Eş, Ortak (Eril)",
  "gd": "Mein Partner kocht heute das Essen.",
  "gt": "Eşim bugün yemeği pişiriyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Partnerin /nen",
  "t": "Eş, Ortak (Dişil)",
  "gd": "Meine Partnerin arbeitet im Büro.",
  "gt": "Eşim ofiste çalışıyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Party /s",
  "t": "Parti",
  "gd": "Am Samstag machen wir eine Party.",
  "gt": "Cumartesi günü bir parti veriyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Pass /¨,e",
  "t": "Pasaport",
  "gd": "Mein Pass ist im Koffer.",
  "gt": "Pasaportum bavulda.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Pause /n",
  "t": "Ara, Mola",
  "gd": "Wir machen jetzt eine Pause.",
  "gt": "Şimdi bir mola veriyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Plan /¨,e",
  "t": "Plan",
  "gd": "Hast du heute einen Plan?",
  "gt": "Bugün bir planın var mı?",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Platz /¨,e",
  "t": "Meydan",
  "gd": "Der Platz ist sehr groß.",
  "gt": "Meydan çok büyük.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Pommes frites",
  "t": "Patates kızartması",
  "gd": "Ich esse gern Pommes frites.",
  "gt": "Patates kızartması yemeyi severim.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Post /en",
  "t": "Posta",
  "gd": "Ich bringe den Brief zur Post.",
  "gt": "Mektubu postaneye götürüyorum.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Postleitzahl /en",
  "t": "Posta kodu",
  "gd": "Wie ist deine Postleitzahl?",
  "gt": "Posta kodun nedir?",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Praktikum /Praktika",
  "t": "Staj",
  "gd": "Ich mache ein Praktikum in einer Firma.",
  "gt": "Bir firmada staj yapıyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "praktisch",
  "t": "Pratik",
  "gd": "Die Tasche ist sehr praktisch.",
  "gt": "Çanta çok pratik.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Praxis /en",
  "t": "Pratik",
  "gd": "Ich habe viel Praxis im Kochen.",
  "gt": "Yemek pişirmede çok pratiğim var.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Preis /e",
  "t": "Fiyat",
  "gd": "Wie hoch ist der Preis?",
  "gt": "Fiyat ne kadar?",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Problem /e",
  "t": "Problem",
  "gd": "Ich habe ein Problem mit dem Auto.",
  "gt": "Arabayla bir problemim var.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Prospekt /e",
  "t": "Broşür",
  "gd": "Hier ist ein Prospekt für das Hotel.",
  "gt": "İşte otel için bir broşür.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Prüfung /en",
  "t": "Sınav",
  "gd": "Morgen habe ich eine Prüfung.",
  "gt": "Yarın bir sınavım var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "pünktlich",
  "t": "Zamanında, dakik",
  "gd": "Bitte komm pünktlich!",
  "gt": "Lütfen zamanında gel!",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "Rad fahren",
  "t": "Bisiklet sürmek",
  "gd": "Im Sommer fahre ich gern Rad.",
  "gt": "Yazın bisiklet sürmeyi severim.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "rauchen(Akk.)",
  "t": "Sigara içmek",
  "gd": "Hier darf man nicht rauchen.",
  "gt": "Burada sigara içmek yasaktır.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Raum /¨e",
  "t": "Oda",
  "gd": "Der Raum ist sehr hell.",
  "gt": "Oda çok aydınlık.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Rechnung /en",
  "t": "Fatura",
  "gd": "Die Rechnung ist sehr hoch.",
  "gt": "Fatura çok yüksek.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "recht /s",
  "t": "Sağ",
  "gd": "Gehen Sie bitte nach rechts!",
  "gt": "Lütfen sağa gidin!",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Regen",
  "t": "Yağmur",
  "gd": "Der Regen ist sehr stark.",
  "gt": "Yağmur çok şiddetli.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "regnen",
  "t": "Yağmur yağmak",
  "gd": "Heute regnet es den ganzen Tag.",
  "gt": "Bugün bütün gün yağmur yağıyor.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Reis",
  "t": "Pirinç",
  "gd": "Ich esse Reis mit Gemüse.",
  "gt": "Sebzeli pirinç yiyorum.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Reise /n",
  "t": "Seyahat",
  "gd": "Die Reise nach Berlin war schön.",
  "gt": "Berlin seyahati güzeldi.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Reisebüro /s",
  "t": "Seyahat acentası",
  "gd": "Ich gehe ins Reisebüro.",
  "gt": "Seyahat acentasına gidiyorum.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Reiseführer",
  "t": "Seyahat kılavuzu/rehberi",
  "gd": "Ich kaufe einen Reiseführer für Wien.",
  "gt": "Viyana için bir seyahat rehberi alıyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "reisen",
  "t": "Seyahat etmek",
  "gd": "Im Sommer reisen wir nach Italien.",
  "gt": "Yazın İtalya'ya seyahat ediyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "reparieren(Akk.)",
  "t": "Tamir etmek",
  "gd": "Mein Vater repariert das Fahrrad.",
  "gt": "Babam bisikleti tamir ediyor.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Restaurant /s",
  "t": "Restoran",
  "gd": "Heute Abend gehen wir ins Restaurant.",
  "gt": "Bu akşam restorana gidiyoruz.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Rezeption /en",
  "t": "Resepsiyon",
  "gd": "Die Rezeption ist im Erdgeschoss.",
  "gt": "Resepsiyon zemin kattadır.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "richtig",
  "t": "Doğru",
  "gd": "Deine Antwort ist richtig.",
  "gt": "Cevabın doğru.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "riechen",
  "t": "Koklamak, Kokmak",
  "gd": "Die Blumen riechen sehr gut.",
  "gt": "Çiçekler çok güzel kokuyor.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "ruhig",
  "t": "Rahat, Huzurlu",
  "gd": "Das Zimmer ist sehr ruhig.",
  "gt": "Oda çok huzurlu.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "S-Bahn",
  "t": "Tren",
  "gd": "Ich fahre mit der S-Bahn zur Arbeit.",
  "gt": "İşe trenle gidiyorum.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Saft /¨e",
  "t": "Meyve suyu",
  "gd": "Ich trinke gern Saft am Morgen.",
  "gt": "Sabahları meyve suyu içmeyi severim.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "sagen(Dat./Akk.)",
  "t": "Söylemek, Demek",
  "gd": "Kannst du mir bitte deinen Namen sagen?",
  "gt": "Bana adını söyleyebilir misin?",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Salz /e",
  "t": "Tuz",
  "gd": "Das Essen braucht noch Salz.",
  "gt": "Yemeğin daha tuza ihtiyacı var.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Satz /¨e",
  "t": "Cümle",
  "gd": "Der Satz ist sehr lang.",
  "gt": "Cümle çok uzun.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Schalter",
  "t": "Gişe",
  "gd": "Die Karten kaufe ich am Schalter.",
  "gt": "Biletleri gişeden alıyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "scheinen",
  "t": "Parlamak",
  "gd": "Heute scheint die Sonne.",
  "gt": "Bugün güneş parlıyor.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "schicken(Dat./Akk.)",
  "t": "Göndermek",
  "gd": "Ich schicke dir eine Karte aus Rom.",
  "gt": "Sana Roma'dan bir kart gönderiyorum.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Schild /er",
  "t": "Levha, Tabela",
  "gd": "Auf dem Schild steht der Name der Straße.",
  "gt": "Tabelada sokağın adı yazıyor.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Schinken",
  "t": "Jambon",
  "gd": "Ich esse ein Brot mit Schinken.",
  "gt": "Jambonlu bir ekmek yiyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "schlafen",
  "t": "Uyumak",
  "gd": "Am Wochenende schlafe ich lange.",
  "gt": "Hafta sonu uzun uyurum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "schlecht",
  "t": "Kötü",
  "gd": "Das Wetter ist heute schlecht.",
  "gt": "Bugün hava kötü.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "schließen(Akk.)",
  "t": "Kapatmak, Kilitlemek",
  "gd": "Bitte schließen Sie die Tür!",
  "gt": "Lütfen kapıyı kapatın!",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Schluss /¨e",
  "t": "Son",
  "gd": "Am Schluss singen wir ein Lied.",
  "gt": "Sonunda bir şarkı söylüyoruz.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "schmecken(Dat.)",
  "t": "Tadına bakmak",
  "gd": "Der Kuchen schmeckt sehr gut.",
  "gt": "Pasta çok lezzetli.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "schnell",
  "t": "Hızlı",
  "gd": "Das Auto fährt sehr schnell.",
  "gt": "Araba çok hızlı gidiyor.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "schön",
  "t": "Güzel, Hoş",
  "gd": "Das Wetter ist heute schön.",
  "gt": "Bugün hava güzel.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "schräg",
  "t": "Eğri",
  "gd": "Das Bild hängt schräg an der Wand.",
  "gt": "Resim duvarda eğri duruyor.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Schrank /¨e",
  "t": "Dolap",
  "gd": "Die Kleider sind im Schrank.",
  "gt": "Giysiler dolapta.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "schreiben(Akk.)",
  "t": "Yazmak",
  "gd": "Ich schreibe einen Brief an meine Mutter.",
  "gt": "Anneme bir mektup yazıyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Schuh /e",
  "t": "Ayakkabı",
  "gd": "Meine Schuhe sind neu.",
  "gt": "Ayakkabılarım yeni.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Schule /n",
  "t": "Okul",
  "gd": "Mein Sohn geht in die Schule.",
  "gt": "Oğlum okula gidiyor.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Schüler /",
  "t": "Erkek öğrenci",
  "gd": "Der Schüler liest ein Buch.",
  "gt": "Öğrenci bir kitap okuyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Schülerin /nen",
  "t": "Kız öğrenci",
  "gd": "Die Schülerin lernt Deutsch.",
  "gt": "Öğrenci Almanca öğreniyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Schüssel /n",
  "t": "Kâse, tas",
  "gd": "Die Suppe ist in der Schüssel.",
  "gt": "Çorba kâsenin içinde.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "schwer",
  "t": "Ağır, Zor",
  "gd": "Der Koffer ist sehr schwer.",
  "gt": "Bavul çok ağır.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Schwimmbad /¨er",
  "t": "Yüzme havuzu",
  "gd": "Wir gehen heute ins Schwimmbad.",
  "gt": "Bugün yüzme havuzuna gidiyoruz.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "schwimmen",
  "t": "Yüzmek",
  "gd": "Im Sommer schwimme ich im See.",
  "gt": "Yazın gölde yüzerim.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "See /n",
  "t": "Göl; die See: Deniz",
  "gd": "Wir machen Urlaub am See.",
  "gt": "Göl kenarında tatil yapıyoruz.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "sehen(Akk.)",
  "t": "Görmek, Seyretmek",
  "gd": "Ich sehe einen Vogel im Baum.",
  "gt": "Ağaçta bir kuş görüyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Sehenswürdigkeit /en",
  "t": "Görülmeye değer şey",
  "gd": "In der Stadt gibt es viele Sehenswürdigkeiten.",
  "gt": "Şehirde görülmeye değer çok şey var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "sehr",
  "t": "Çok",
  "gd": "Das Essen ist sehr gut.",
  "gt": "Yemek çok güzel.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "sein",
  "t": "Olmak",
  "gd": "Ich bin müde.",
  "gt": "Yorgunum.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "seit",
  "t": "-den beri",
  "gd": "Ich wohne seit drei Jahren hier.",
  "gt": "Üç yıldır burada oturuyorum.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "selbstständig",
  "t": "Bağımsız",
  "gd": "Meine Schwester ist sehr selbstständig.",
  "gt": "Kız kardeşim çok bağımsız.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "sich",
  "t": "Kendini, Kendine",
  "gd": "Das Kind wäscht sich.",
  "gt": "Çocuk kendini yıkıyor.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "sie",
  "t": "O (Kadın), Onlar",
  "gd": "Sie kommt heute Abend.",
  "gt": "O bu akşam geliyor.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "Sie",
  "t": "Siz (resmi)",
  "gd": "Was möchten Sie trinken?",
  "gt": "Ne içmek istersiniz?",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "sitzen",
  "t": "Oturmak",
  "gd": "Wir sitzen im Garten.",
  "gt": "Bahçede oturuyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "so",
  "t": "Böyle, Böylece, Şöyle",
  "gd": "Das macht man so.",
  "gt": "Bu böyle yapılır.",
  "c": "sifat"
 },
 {
  "a": "das",
  "w": "Sofa /s",
  "t": "Kanepe",
  "gd": "Das Sofa ist sehr bequem.",
  "gt": "Kanepe çok rahat.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "sofort",
  "t": "Hemen, Derhal",
  "gd": "Ich komme sofort.",
  "gt": "Hemen geliyorum.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "sollen",
  "t": "-meli,-malı (lazım vazifesi)",
  "gd": "Du sollst mehr Wasser trinken.",
  "gt": "Daha çok su içmelisin.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Sonne /n",
  "t": "Güneş",
  "gd": "Heute scheint die Sonne.",
  "gt": "Bugün güneş parlıyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "spät",
  "t": "Geç",
  "gd": "Es ist schon spät.",
  "gt": "Saat çoktan geç oldu.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "später",
  "t": "Sonradan, Daha sonra",
  "gd": "Ich rufe dich später an.",
  "gt": "Seni daha sonra ararım.",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Speisekarte /n",
  "t": "Yemek listesi",
  "gd": "Die Speisekarte ist auf dem Tisch.",
  "gt": "Yemek listesi masanın üstünde.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Spiel /e",
  "t": "Oyun",
  "gd": "Das Spiel ist sehr schön.",
  "gt": "Oyun çok güzel.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "spielen",
  "t": "Oynamak",
  "gd": "Die Kinder spielen im Park.",
  "gt": "Çocuklar parkta oynuyor.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Sprache /n",
  "t": "Dil",
  "gd": "Ich lerne eine neue Sprache.",
  "gt": "Yeni bir dil öğreniyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "sprechen(Akk.)",
  "t": "Konuşmak",
  "gd": "Ich spreche ein bisschen Deutsch.",
  "gt": "Biraz Almanca konuşuyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Stadt /¨e",
  "t": "Şehir",
  "gd": "Berlin ist eine große Stadt.",
  "gt": "Berlin büyük bir şehir.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "stehen",
  "t": "Ayakta durmak, Bulunmak",
  "gd": "Wir stehen vor der Tür.",
  "gt": "Kapının önünde duruyoruz.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Stelle /n",
  "t": "Yer, Konum",
  "gd": "Das Buch ist an der falschen Stelle.",
  "gt": "Kitap yanlış yerde.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "stellen(Akk.)",
  "t": "Koymak, Ayar etmek, Kurmak",
  "gd": "Ich stelle die Tasche auf den Tisch.",
  "gt": "Çantayı masanın üstüne koyuyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Stock /¨e",
  "t": "Kat",
  "gd": "Wir wohnen im dritten Stock.",
  "gt": "Üçüncü katta oturuyoruz.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Straße /n",
  "t": "Sokak, Cadde",
  "gd": "Die Straße ist sehr lang.",
  "gt": "Sokak çok uzun.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Straßenbahn /en",
  "t": "Tramvay",
  "gd": "Ich fahre mit der Straßenbahn.",
  "gt": "Tramvayla gidiyorum.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Student /en",
  "t": "Erkek öğrenci",
  "gd": "Der Student lernt für den Test.",
  "gt": "Öğrenci test için ders çalışıyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Studentin /nen",
  "t": "Kız öğrenci",
  "gd": "Die Studentin liest ein Buch.",
  "gt": "Kız öğrenci bir kitap okuyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "studieren",
  "t": "Öğrenim görmek",
  "gd": "Ich studiere in München.",
  "gt": "Münih'te öğrenim görüyorum.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Studium /en",
  "t": "Öğrenim",
  "gd": "Mein Studium ist sehr interessant.",
  "gt": "Öğrenimim çok ilginç.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "suchen(Akk.)",
  "t": "Aramak",
  "gd": "Ich suche meinen Schlüssel.",
  "gt": "Anahtarımı arıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "tanzen",
  "t": "Dans etmek",
  "gd": "Wir tanzen gern.",
  "gt": "Dans etmeyi seviyoruz.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Tasche /n",
  "t": "Çanta",
  "gd": "Meine Tasche ist neu.",
  "gt": "Çantam yeni.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Taxi /s",
  "t": "Taksi",
  "gd": "Wir fahren mit dem Taxi.",
  "gt": "Taksiyle gidiyoruz.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Tee /s",
  "t": "Çay",
  "gd": "Ich trinke gern Tee.",
  "gt": "Çay içmeyi seviyorum.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Teil /e",
  "t": "Kısım",
  "gd": "Ein Teil ist kaputt.",
  "gt": "Bir kısmı bozuk.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "telefonieren(mit+Dat.)",
  "t": "Telefon etmek",
  "gd": "Ich telefoniere mit meiner Mutter.",
  "gt": "Annemle telefonda konuşuyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Termin /e",
  "t": "Randevu",
  "gd": "Ich habe morgen einen Termin.",
  "gt": "Yarın bir randevum var.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Test /s",
  "t": "Test",
  "gd": "Der Test ist sehr leicht.",
  "gt": "Test çok kolay.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "teuer",
  "t": "Pahalı",
  "gd": "Das Auto ist sehr teuer.",
  "gt": "Araba çok pahalı.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Text /e",
  "t": "Metin, Yazı",
  "gd": "Ich lese den Text.",
  "gt": "Metni okuyorum.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Thema /en",
  "t": "Konu",
  "gd": "Das Thema ist interessant.",
  "gt": "Konu ilginç.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Ticket /s",
  "t": "Bilet",
  "gd": "Ich kaufe ein Ticket.",
  "gt": "Bir bilet alıyorum.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Tisch /e",
  "t": "Masa",
  "gd": "Das Essen steht auf dem Tisch.",
  "gt": "Yemek masanın üstünde.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Toilette /n",
  "t": "Tuvalet",
  "gd": "Wo ist die Toilette?",
  "gt": "Tuvalet nerede?",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Torte /n",
  "t": "Pasta",
  "gd": "Die Torte ist sehr süß.",
  "gt": "Pasta çok tatlı.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "tot",
  "t": "Ölü",
  "gd": "Der Baum ist tot.",
  "gt": "Ağaç ölü.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "(sich) treffen(mit+Dat.)",
  "t": "Buluşmak",
  "gd": "Wir treffen uns um acht Uhr.",
  "gt": "Saat sekizde buluşuyoruz.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Treppe /n",
  "t": "Merdiven",
  "gd": "Die Treppe ist sehr steil.",
  "gt": "Merdiven çok dik.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "trinken(Akk.)",
  "t": "İçmek",
  "gd": "Ich trinke ein Glas Wasser.",
  "gt": "Bir bardak su içiyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "tschüss",
  "t": "Hoşçakal",
  "gd": "Tschüss, bis morgen!",
  "gt": "Hoşçakal, yarın görüşürüz!",
  "c": "diger"
 },
 {
  "a": "",
  "w": "tun(Akk.)",
  "t": "Yapmak, Etmek",
  "gd": "Was kann ich für dich tun?",
  "gt": "Senin için ne yapabilirim?",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "über",
  "t": "-in üzerinde, Aşkın",
  "gd": "Die Lampe hängt über dem Tisch.",
  "gt": "Lamba masanın üzerinde asılı.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "übernachten",
  "t": "Gecelemek, Konaklamak",
  "gd": "Wir übernachten im Hotel.",
  "gt": "Otelde geceliyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "überraschen(Akk.)",
  "t": "Şaşırtmak, sürpriz yapmak",
  "gd": "Ich möchte meine Mutter überraschen.",
  "gt": "Annemi şaşırtmak istiyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Uhr /en",
  "t": "Saat",
  "gd": "Meine Uhr ist neu.",
  "gt": "Saatim yeni.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "um...",
  "t": "-in etrafına, -in etrafında",
  "gd": "Wir sitzen um den Tisch.",
  "gt": "Masanın etrafında oturuyoruz.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "umziehen",
  "t": "Taşınmak",
  "gd": "Wir ziehen nächste Woche um.",
  "gt": "Gelecek hafta taşınıyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "und",
  "t": "Ve",
  "gd": "Ich trinke Tee und Kaffee.",
  "gt": "Çay ve kahve içiyorum.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "unser",
  "t": "Bizim",
  "gd": "Das ist unser Haus.",
  "gt": "Bu bizim evimiz.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "unten",
  "t": "Aşağıda",
  "gd": "Die Küche ist unten.",
  "gt": "Mutfak aşağıda.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "unter...",
  "t": "-in Altında",
  "gd": "Die Katze ist unter dem Tisch.",
  "gt": "Kedi masanın altında.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Unterricht",
  "t": "Ders",
  "gd": "Der Unterricht beginnt um neun Uhr.",
  "gt": "Ders saat dokuzda başlıyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "unterschreiben(Akk.)",
  "t": "İmzalamak",
  "gd": "Bitte unterschreiben Sie hier.",
  "gt": "Lütfen burayı imzalayın.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Unterschrift /en",
  "t": "İmza",
  "gd": "Ihre Unterschrift fehlt noch.",
  "gt": "İmzanız hâlâ eksik.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Urlaub /e",
  "t": "Tatil",
  "gd": "Im Urlaub fahren wir ans Meer.",
  "gt": "Tatilde denize gidiyoruz.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "verbieten(Akk.)",
  "t": "Yasaklamak",
  "gd": "Hier ist Rauchen verboten.",
  "gt": "Burada sigara içmek yasaktır.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "verdienen(Akk.)",
  "t": "Para kazanmak",
  "gd": "Ich verdiene genug Geld.",
  "gt": "Yeterince para kazanıyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Verein /e",
  "t": "Dernek, Kurum",
  "gd": "Mein Sohn ist in einem Verein.",
  "gt": "Oğlum bir dernekte.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "verkaufen(Akk.)",
  "t": "Satmak",
  "gd": "Ich verkaufe mein altes Auto.",
  "gt": "Eski arabamı satıyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "vermieten(Akk.)",
  "t": "Kiraya vermek",
  "gd": "Wir vermieten ein Zimmer.",
  "gt": "Bir oda kiraya veriyoruz.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Vermieter",
  "t": "Kiraya veren, Erkek ev sahibi",
  "gd": "Mein Vermieter wohnt im Haus.",
  "gt": "Ev sahibim evde oturuyor.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Vermieterin /nen",
  "t": "Kadın ev sahibi",
  "gd": "Die Vermieterin ist sehr nett.",
  "gt": "Kadın ev sahibi çok hoş.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "verstehen(Akk.)",
  "t": "Anlamak",
  "gd": "Ich verstehe das nicht.",
  "gt": "Bunu anlamıyorum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Verwandte /n",
  "t": "Akraba",
  "gd": "Er ist ein Verwandter von mir.",
  "gt": "O benim bir akrabam.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "viel",
  "t": "Çok",
  "gd": "Ich habe nicht viel Zeit.",
  "gt": "Çok zamanım yok.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "vielleicht",
  "t": "Belki",
  "gd": "Vielleicht komme ich morgen.",
  "gt": "Belki yarın gelirim.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "von...",
  "t": "-den,-dan, lı, li, lu, lü",
  "gd": "Ich komme von der Arbeit.",
  "gt": "İşten geliyorum.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "vor...",
  "t": "-in önünde, -den önce",
  "gd": "Das Auto steht vor dem Haus.",
  "gt": "Araba evin önünde duruyor.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Vorname /n",
  "t": "İsim",
  "gd": "Wie ist dein Vorname?",
  "gt": "Adın ne?",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Vorsicht",
  "t": "Dikkat",
  "gd": "Vorsicht, das Wasser ist heiß!",
  "gt": "Dikkat, su sıcak!",
  "c": "isim"
 },
 {
  "a": "",
  "w": "(sich) vorstellen",
  "t": "Kendini tanıtmak",
  "gd": "Ich möchte mich kurz vorstellen.",
  "gt": "Kısaca kendimi tanıtmak istiyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Vorwahl /en",
  "t": "Şehir kodu",
  "gd": "Wie ist die Vorwahl von Berlin?",
  "gt": "Berlin'in şehir kodu nedir?",
  "c": "isim"
 },
 {
  "a": "",
  "w": "wandern",
  "t": "Yürümek",
  "gd": "Am Wochenende wandern wir gern.",
  "gt": "Hafta sonu severek yürüyüş yaparız.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "wann",
  "t": "Ne zaman",
  "gd": "Wann kommst du nach Hause?",
  "gt": "Ne zaman eve geliyorsun?",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "warten(auf+Akk.)",
  "t": "Beklemek",
  "gd": "Ich warte hier auf dich.",
  "gt": "Seni burada bekliyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "warum",
  "t": "Neden",
  "gd": "Warum bist du so traurig?",
  "gt": "Neden bu kadar üzgünsün?",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "was",
  "t": "Ne",
  "gd": "Was machst du heute?",
  "gt": "Bugün ne yapıyorsun?",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "was für ein",
  "t": "Nasıl bir",
  "gd": "Was für ein Auto hast du?",
  "gt": "Nasıl bir araban var?",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "(sich) waschen",
  "t": "Yıkamak",
  "gd": "Ich wasche mich am Morgen.",
  "gt": "Sabahları yıkanırım.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Wasser",
  "t": "Su",
  "gd": "Ich trinke gern Wasser.",
  "gt": "Severek su içerim.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "weg sein",
  "t": "Gitmiş olmak",
  "gd": "Mein Geld ist weg.",
  "gt": "Param gitti.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "wehtun(Dat.)",
  "t": "Ağrımak",
  "gd": "Mein Kopf tut weh.",
  "gt": "Başım ağrıyor.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "weiblich",
  "t": "Dişil",
  "gd": "Das Wort ist weiblich.",
  "gt": "Bu kelime dişildir.",
  "c": "sifat"
 },
 {
  "a": "der",
  "w": "Wein /e",
  "t": "Şarap",
  "gd": "Ich trinke ein Glas Wein.",
  "gt": "Bir bardak şarap içiyorum.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "weit",
  "t": "Uzak",
  "gd": "Der Bahnhof ist nicht weit.",
  "gt": "İstasyon uzak değil.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "weiter",
  "t": "Daha ileri",
  "gd": "Wir gehen noch ein bisschen weiter.",
  "gt": "Biraz daha ileri gidiyoruz.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "welche",
  "t": "Hangi",
  "gd": "Welche Farbe magst du?",
  "gt": "Hangi rengi seviyorsun?",
  "c": "sifat"
 },
 {
  "a": "die",
  "w": "Welt /en",
  "t": "Dünya",
  "gd": "Sie reist gern durch die Welt.",
  "gt": "O, dünyayı dolaşmayı sever.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "wenig",
  "t": "Az, Biraz",
  "gd": "Ich habe nur wenig Geld.",
  "gt": "Sadece az param var.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "wer",
  "t": "Kim",
  "gd": "Wer ist das?",
  "gt": "Bu kim?",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "werden",
  "t": "Olmak",
  "gd": "Ich werde bald Lehrer.",
  "gt": "Yakında öğretmen olacağım.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Wetter",
  "t": "Hava",
  "gd": "Heute ist das Wetter schön.",
  "gt": "Bugün hava güzel.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "wichtig",
  "t": "Önemli",
  "gd": "Das ist sehr wichtig für mich.",
  "gt": "Bu benim için çok önemli.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "wie",
  "t": "Nasıl",
  "gd": "Wie geht es dir?",
  "gt": "Nasılsın?",
  "c": "diger"
 },
 {
  "a": "",
  "w": "wie viel",
  "t": "Ne kadar",
  "gd": "Wie viel kostet das Brot?",
  "gt": "Ekmek ne kadar?",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "wiederholen(Akk.)",
  "t": "Tekrar etmek",
  "gd": "Bitte wiederholen Sie das Wort.",
  "gt": "Lütfen kelimeyi tekrar edin.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Wiederhören",
  "t": "Tekrar konuşmak üzere",
  "gd": "Vielen Dank und auf Wiederhören!",
  "gt": "Çok teşekkürler, tekrar görüşmek üzere!",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Wiedersehen",
  "t": "Tekrar görüşmek üzere",
  "gd": "Tschüss und auf Wiedersehen!",
  "gt": "Hoşça kal, tekrar görüşmek üzere!",
  "c": "isim"
 },
 {
  "a": "",
  "w": "willkommen",
  "t": "Hoş geldin",
  "gd": "Herzlich willkommen bei uns!",
  "gt": "Bize hoş geldiniz!",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Wind /e",
  "t": "Rüzgar",
  "gd": "Heute weht ein starker Wind.",
  "gt": "Bugün şiddetli bir rüzgar esiyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "wir",
  "t": "Biz",
  "gd": "Wir kommen aus der Türkei.",
  "gt": "Biz Türkiye'den geliyoruz.",
  "c": "zamir"
 },
 {
  "a": "",
  "w": "wissen(Akk.)",
  "t": "Bilmek",
  "gd": "Ich weiß die Antwort nicht.",
  "gt": "Cevabı bilmiyorum.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "wo",
  "t": "Nerede",
  "gd": "Wo wohnst du?",
  "gt": "Nerede oturuyorsun?",
  "c": "diger"
 },
 {
  "a": "",
  "w": "woher",
  "t": "Nereden",
  "gd": "Woher kommst du?",
  "gt": "Nereden geliyorsun?",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "wohin",
  "t": "Nereye",
  "gd": "Wohin gehst du?",
  "gt": "Nereye gidiyorsun?",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "wohnen",
  "t": "İkamet etmek",
  "gd": "Ich wohne in Hamburg.",
  "gt": "Hamburg'da oturuyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Wohnung /en",
  "t": "Daire",
  "gd": "Meine Wohnung ist sehr schön.",
  "gt": "Dairem çok güzel.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "wollen",
  "t": "İstemek",
  "gd": "Ich will heute ins Kino gehen.",
  "gt": "Bugün sinemaya gitmek istiyorum.",
  "c": "fiil"
 },
 {
  "a": "das",
  "w": "Wort /¨er,e",
  "t": "Kelime",
  "gd": "Wie schreibt man dieses Wort?",
  "gt": "Bu kelime nasıl yazılır?",
  "c": "isim"
 },
 {
  "a": "",
  "w": "wunderbar",
  "t": "Muhteşem",
  "gd": "Das Essen ist wunderbar!",
  "gt": "Yemek muhteşem!",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "zahlen",
  "t": "Ödemek",
  "gd": "Ich möchte bitte zahlen.",
  "gt": "Lütfen ödemek istiyorum.",
  "c": "fiil"
 },
 {
  "a": "die",
  "w": "Zeit /en",
  "t": "Zaman",
  "gd": "Ich habe keine Zeit.",
  "gt": "Zamanım yok.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Zeitung /en",
  "t": "Gazete",
  "gd": "Am Morgen lese ich die Zeitung.",
  "gt": "Sabahları gazete okurum.",
  "c": "isim"
 },
 {
  "a": "die",
  "w": "Zigarette /n",
  "t": "Sigara",
  "gd": "Er raucht eine Zigarette.",
  "gt": "O bir sigara içiyor.",
  "c": "isim"
 },
 {
  "a": "das",
  "w": "Zimmer",
  "t": "Oda",
  "gd": "Mein Zimmer ist klein.",
  "gt": "Odam küçük.",
  "c": "isim"
 },
 {
  "a": "der",
  "w": "Zoll",
  "t": "Gümrük",
  "gd": "Am Flughafen gibt es den Zoll.",
  "gt": "Havalimanında gümrük var.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "zu",
  "t": "-e,-a,-de,-da",
  "gd": "Ich gehe zu meiner Freundin.",
  "gt": "Kız arkadaşıma gidiyorum.",
  "c": "diger"
 },
 {
  "a": "",
  "w": "zu sein",
  "t": "Kapalı olmak",
  "gd": "Der Laden ist heute zu.",
  "gt": "Dükkân bugün kapalı.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "zufrieden",
  "t": "Memnun, Tatmin olmuş",
  "gd": "Ich bin mit dem Essen zufrieden.",
  "gt": "Yemekten memnunum.",
  "c": "fiil"
 },
 {
  "a": "der",
  "w": "Zug /¨,e",
  "t": "Tren",
  "gd": "Der Zug kommt um acht Uhr.",
  "gt": "Tren saat sekizde geliyor.",
  "c": "isim"
 },
 {
  "a": "",
  "w": "zurück",
  "t": "Geri",
  "gd": "Ich komme gleich zurück.",
  "gt": "Hemen geri geliyorum.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "zurzeit",
  "t": "Şu ara, Şu sıra",
  "gd": "Zurzeit habe ich viel Arbeit.",
  "gt": "Şu sıralar çok işim var.",
  "c": "sifat"
 },
 {
  "a": "",
  "w": "zusammen",
  "t": "Birlikte",
  "gd": "Wir essen heute zusammen.",
  "gt": "Bugün birlikte yemek yiyoruz.",
  "c": "fiil"
 },
 {
  "a": "",
  "w": "zwischen",
  "t": "-in arasına, -in arasında",
  "gd": "Das Kind sitzt zwischen den Eltern.",
  "gt": "Çocuk ebeveynlerinin arasında oturuyor.",
  "c": "diger"
 }
];

const STORIES = [
 {
  "t": "Der Morgen von Anna",
  "tt": "Anna'nın Sabahı",
  "lvl": "A1.1",
  "l": [
   [
    "Anna wohnt in Berlin.",
    "Anna Berlin'de oturuyor."
   ],
   [
    "Sie ist dreißig Jahre alt und arbeitet in einem Büro.",
    "O otuz yaşında ve bir ofiste çalışıyor."
   ],
   [
    "Jeden Morgen steht sie um sechs Uhr auf.",
    "Her sabah saat altıda kalkıyor."
   ],
   [
    "Zuerst geht sie ins Bad. Sie duscht und wäscht ihr Gesicht.",
    "Önce banyoya gidiyor. Duş alıyor ve yüzünü yıkıyor."
   ],
   [
    "Dann zieht sie sich an. Heute trägt sie eine blaue Hose.",
    "Sonra giyiniyor. Bugün mavi bir pantolon giyiyor."
   ],
   [
    "In der Küche macht sie das Licht an.",
    "Mutfakta ışığı açıyor."
   ],
   [
    "Sie trinkt einen Kaffee und isst ein Brot mit Butter.",
    "Bir kahve içiyor ve tereyağlı bir ekmek yiyor."
   ],
   [
    "Ihr Mann schläft noch, denn er arbeitet nachts.",
    "Kocası hâlâ uyuyor, çünkü geceleri çalışıyor."
   ],
   [
    "Um sieben Uhr geht Anna aus dem Haus.",
    "Saat yedide Anna evden çıkıyor."
   ],
   [
    "Draußen ist es kalt und es regnet.",
    "Dışarısı soğuk ve yağmur yağıyor."
   ],
   [
    "Anna nimmt ihre Jacke und wartet auf den Bus.",
    "Anna ceketini alıyor ve otobüsü bekliyor."
   ],
   [
    "Der Bus kommt um zehn nach sieben. Anna ist müde, aber zufrieden.",
    "Otobüs yediyi on geçe geliyor. Anna yorgun ama memnun."
   ]
  ],
  "v": [
   [
    "aufstehen",
    "kalkmak"
   ],
   [
    "duschen",
    "duş almak"
   ],
   [
    "(sich) anziehen",
    "giyinmek"
   ],
   [
    "die Küche",
    "mutfak"
   ],
   [
    "das Licht",
    "ışık"
   ],
   [
    "müde",
    "yorgun"
   ]
  ]
 },
 {
  "t": "Im Supermarkt",
  "tt": "Süpermarkette",
  "lvl": "A1.1",
  "l": [
   [
    "Am Samstag geht Anna in den Supermarkt.",
    "Cumartesi günü Anna süpermarkete gidiyor."
   ],
   [
    "Sie braucht Brot, Milch, Eier und Käse.",
    "Ekmeğe, süte, yumurtaya ve peynire ihtiyacı var."
   ],
   [
    "Der Supermarkt ist groß und heute sehr voll.",
    "Süpermarket büyük ve bugün çok kalabalık."
   ],
   [
    "Anna nimmt einen Wagen und geht langsam durch die Regale.",
    "Anna bir araba alıyor ve rafların arasından yavaşça geçiyor."
   ],
   [
    "Das Obst ist billig, aber das Fleisch ist teuer.",
    "Meyve ucuz, ama et pahalı."
   ],
   [
    "„Entschuldigung, wo finde ich den Zucker?\", fragt sie.",
    "\"Affedersiniz, şekeri nerede bulurum?\" diye soruyor."
   ],
   [
    "„Dort hinten, neben dem Salz\", antwortet der Verkäufer.",
    "\"Şurada arkada, tuzun yanında\" diye cevaplıyor satıcı."
   ],
   [
    "Anna kauft auch Äpfel, Kartoffeln und eine Flasche Wasser.",
    "Anna ayrıca elma, patates ve bir şişe su alıyor."
   ],
   [
    "An der Kasse wartet sie zehn Minuten.",
    "Kasada on dakika bekliyor."
   ],
   [
    "Alles kostet zusammen einundzwanzig Euro.",
    "Hepsi birlikte yirmi bir euro tutuyor."
   ],
   [
    "Sie bezahlt bar und bekommt einen Kassenbon.",
    "Nakit ödüyor ve bir fiş alıyor."
   ],
   [
    "Dann geht sie nach Hause. Die Taschen sind schwer.",
    "Sonra eve gidiyor. Çantalar ağır."
   ]
  ],
  "v": [
   [
    "brauchen",
    "ihtiyaç duymak"
   ],
   [
    "billig",
    "ucuz"
   ],
   [
    "teuer",
    "pahalı"
   ],
   [
    "bezahlen",
    "ödemek"
   ],
   [
    "die Kasse",
    "kasa"
   ],
   [
    "schwer",
    "ağır / zor"
   ]
  ]
 },
 {
  "t": "Der Weg zur Arbeit",
  "tt": "İşe Giden Yol",
  "lvl": "A1.2",
  "l": [
   [
    "Anna fährt jeden Tag mit dem Bus und mit der U-Bahn.",
    "Anna her gün otobüsle ve metroyla gidiyor."
   ],
   [
    "Der Weg dauert etwa vierzig Minuten.",
    "Yol yaklaşık kırk dakika sürüyor."
   ],
   [
    "Heute hat der Bus Verspätung.",
    "Bugün otobüs gecikmeli."
   ],
   [
    "Anna ruft ihre Kollegin an: „Ich komme später, tut mir leid.\"",
    "Anna iş arkadaşını arıyor: \"Daha geç geleceğim, üzgünüm.\""
   ],
   [
    "Im Bahnhof kauft sie schnell eine Fahrkarte.",
    "İstasyonda hızlıca bir bilet alıyor."
   ],
   [
    "Die U-Bahn ist voll. Anna findet keinen Platz.",
    "Metro kalabalık. Anna yer bulamıyor."
   ],
   [
    "Ein Mann steht auf und sagt: „Bitte, setzen Sie sich.\"",
    "Bir adam ayağa kalkıyor ve diyor ki: \"Buyurun, oturun.\""
   ],
   [
    "„Danke schön, das ist sehr nett\", sagt Anna.",
    "\"Çok teşekkürler, çok naziksiniz\" diyor Anna."
   ],
   [
    "Um neun Uhr kommt sie im Büro an.",
    "Saat dokuzda ofise varıyor."
   ],
   [
    "Ihr Chef ist nicht böse. Er sagt: „Kein Problem.\"",
    "Patronu kızgın değil. \"Sorun değil\" diyor."
   ],
   [
    "Anna macht den Computer an und liest ihre E-Mails.",
    "Anna bilgisayarı açıyor ve e-postalarını okuyor."
   ],
   [
    "Die Arbeit beginnt.",
    "İş başlıyor."
   ]
  ],
  "v": [
   [
    "dauern",
    "sürmek"
   ],
   [
    "anrufen",
    "telefonla aramak"
   ],
   [
    "die Fahrkarte",
    "bilet"
   ],
   [
    "ankommen",
    "varmak"
   ],
   [
    "der Chef",
    "patron"
   ],
   [
    "nett",
    "kibar / hoş"
   ]
  ]
 },
 {
  "t": "Beim Arzt",
  "tt": "Doktorda",
  "lvl": "A1.2",
  "l": [
   [
    "Am Montag hat Anna Kopfschmerzen und Fieber.",
    "Pazartesi günü Anna'nın başı ağrıyor ve ateşi var."
   ],
   [
    "Sie ruft in der Praxis an und bekommt einen Termin.",
    "Muayenehaneyi arıyor ve bir randevu alıyor."
   ],
   [
    "Im Wartezimmer sitzen viele Leute.",
    "Bekleme odasında çok kişi oturuyor."
   ],
   [
    "Nach zwanzig Minuten sagt die Sprechstundenhilfe: „Frau Meyer, bitte!\"",
    "Yirmi dakika sonra hemşire: \"Bayan Meyer, buyurun!\" diyor."
   ],
   [
    "„Guten Tag. Was fehlt Ihnen?\", fragt der Arzt.",
    "\"İyi günler. Şikâyetiniz nedir?\" diye soruyor doktor."
   ],
   [
    "„Mein Kopf tut weh und ich bin sehr müde.\"",
    "\"Başım ağrıyor ve çok yorgunum.\""
   ],
   [
    "Der Arzt untersucht sie und misst das Fieber.",
    "Doktor onu muayene ediyor ve ateşini ölçüyor."
   ],
   [
    "„Sie haben eine Erkältung. Das ist nicht schlimm.\"",
    "\"Soğuk algınlığınız var. Ciddi değil.\""
   ],
   [
    "„Nehmen Sie diese Tabletten dreimal am Tag.\"",
    "\"Bu tabletleri günde üç kez alın.\""
   ],
   [
    "„Trinken Sie viel Wasser und bleiben Sie im Bett.\"",
    "\"Bol su için ve yatakta kalın.\""
   ],
   [
    "Anna geht in die Apotheke und holt die Medikamente.",
    "Anna eczaneye gidip ilaçları alıyor."
   ],
   [
    "Nach drei Tagen geht es ihr wieder gut.",
    "Üç gün sonra tekrar iyileşiyor."
   ]
  ],
  "v": [
   [
    "der Termin",
    "randevu"
   ],
   [
    "wehtun",
    "ağrımak"
   ],
   [
    "die Erkältung",
    "soğuk algınlığı"
   ],
   [
    "die Tablette",
    "tablet / hap"
   ],
   [
    "die Apotheke",
    "eczane"
   ],
   [
    "schlimm",
    "kötü / ciddi"
   ]
  ]
 },
 {
  "t": "Die neue Wohnung",
  "tt": "Yeni Ev",
  "lvl": "A1.2",
  "l": [
   [
    "Anna und ihr Mann suchen eine neue Wohnung.",
    "Anna ve kocası yeni bir ev arıyorlar."
   ],
   [
    "Die alte Wohnung ist klein und sehr laut.",
    "Eski ev küçük ve çok gürültülü."
   ],
   [
    "Im Internet finden sie eine Anzeige.",
    "İnternette bir ilan buluyorlar."
   ],
   [
    "Die Wohnung hat drei Zimmer, eine Küche und ein Bad.",
    "Ev üç odalı, bir mutfak ve bir banyosu var."
   ],
   [
    "Sie liegt im dritten Stock und hat einen Balkon.",
    "Üçüncü katta ve bir balkonu var."
   ],
   [
    "Die Miete kostet siebenhundert Euro im Monat.",
    "Kira ayda yedi yüz euro."
   ],
   [
    "Am Nachmittag besichtigen sie die Wohnung.",
    "Öğleden sonra evi geziyorlar."
   ],
   [
    "Das Wohnzimmer ist hell und der Balkon ist groß.",
    "Oturma odası aydınlık ve balkon büyük."
   ],
   [
    "„Mir gefällt die Wohnung sehr\", sagt Anna.",
    "\"Bu ev çok hoşuma gidiyor\" diyor Anna."
   ],
   [
    "Ihr Mann fragt: „Ist der Bahnhof weit?\" — „Nein, nur fünf Minuten zu Fuß.\"",
    "Kocası soruyor: \"İstasyon uzak mı?\" — \"Hayır, yürüyerek sadece beş dakika.\""
   ],
   [
    "Sie unterschreiben den Vertrag am Freitag.",
    "Cuma günü sözleşmeyi imzalıyorlar."
   ],
   [
    "Im nächsten Monat ziehen sie um.",
    "Gelecek ay taşınıyorlar."
   ]
  ],
  "v": [
   [
    "suchen",
    "aramak"
   ],
   [
    "die Miete",
    "kira"
   ],
   [
    "der Stock",
    "kat"
   ],
   [
    "gefallen",
    "hoşuna gitmek"
   ],
   [
    "weit",
    "uzak"
   ],
   [
    "umziehen",
    "taşınmak"
   ]
  ]
 },
 {
  "t": "Im Restaurant",
  "tt": "Restoranda",
  "lvl": "A1.2",
  "l": [
   [
    "Am Abend gehen Anna und Peter in ein Restaurant.",
    "Akşam Anna ve Peter bir restorana gidiyorlar."
   ],
   [
    "Ein Kellner bringt die Speisekarte.",
    "Bir garson menüyü getiriyor."
   ],
   [
    "„Was möchten Sie trinken?\", fragt er.",
    "\"Ne içmek istersiniz?\" diye soruyor."
   ],
   [
    "„Ein Glas Wein, bitte\", sagt Anna. Peter nimmt ein Bier.",
    "\"Bir kadeh şarap lütfen\" diyor Anna. Peter bir bira alıyor."
   ],
   [
    "Als Vorspeise essen sie eine Suppe.",
    "Başlangıç olarak çorba içiyorlar."
   ],
   [
    "Anna bestellt Fisch mit Kartoffeln und Salat.",
    "Anna patatesli ve salatalı balık sipariş ediyor."
   ],
   [
    "Peter isst lieber Fleisch mit Reis.",
    "Peter daha çok pilavlı et yemeyi tercih ediyor."
   ],
   [
    "Das Essen schmeckt sehr gut.",
    "Yemek çok lezzetli."
   ],
   [
    "Nach dem Essen möchten sie noch einen Kaffee.",
    "Yemekten sonra bir de kahve istiyorlar."
   ],
   [
    "„Die Rechnung, bitte!\", sagt Peter.",
    "\"Hesap lütfen!\" diyor Peter."
   ],
   [
    "Alles kostet dreiundvierzig Euro. Sie bezahlen mit Karte.",
    "Hepsi kırk üç euro tutuyor. Kartla ödüyorlar."
   ],
   [
    "Draußen ist der Himmel klar und die Nacht ist warm.",
    "Dışarıda gökyüzü açık ve gece ılık."
   ]
  ],
  "v": [
   [
    "der Kellner",
    "garson"
   ],
   [
    "bestellen",
    "sipariş etmek"
   ],
   [
    "schmecken",
    "tadı ... olmak"
   ],
   [
    "die Rechnung",
    "hesap"
   ],
   [
    "lieber",
    "daha çok / tercihen"
   ],
   [
    "klar",
    "açık / net"
   ]
  ]
 },
 {
  "t": "Das Wochenende",
  "tt": "Hafta Sonu",
  "lvl": "A1.2",
  "l": [
   [
    "Am Wochenende arbeitet Anna nicht.",
    "Hafta sonu Anna çalışmıyor."
   ],
   [
    "Am Samstag schläft sie lange, bis zehn Uhr.",
    "Cumartesi uzun uyuyor, saat ona kadar."
   ],
   [
    "Danach frühstückt sie mit ihrem Mann auf dem Balkon.",
    "Sonra kocasıyla balkonda kahvaltı ediyor."
   ],
   [
    "Das Wetter ist schön: Die Sonne scheint und es ist warm.",
    "Hava güzel: Güneş parlıyor ve hava sıcak."
   ],
   [
    "Am Nachmittag besuchen sie ihre Freunde.",
    "Öğleden sonra arkadaşlarını ziyaret ediyorlar."
   ],
   [
    "Sie spielen Karten und hören Musik.",
    "Kâğıt oynuyorlar ve müzik dinliyorlar."
   ],
   [
    "Am Sonntag machen sie einen Spaziergang im Park.",
    "Pazar günü parkta yürüyüş yapıyorlar."
   ],
   [
    "Viele Kinder spielen dort mit einem Ball.",
    "Orada birçok çocuk topla oynuyor."
   ],
   [
    "Anna sitzt auf einer Bank und liest ein Buch.",
    "Anna bir bankta oturup kitap okuyor."
   ],
   [
    "Um sechs Uhr fahren sie mit dem Fahrrad nach Hause.",
    "Saat altıda bisikletle eve gidiyorlar."
   ],
   [
    "Am Abend sehen sie zusammen einen Film.",
    "Akşam birlikte bir film izliyorlar."
   ],
   [
    "Morgen ist wieder Montag, aber heute ist es egal.",
    "Yarın yine pazartesi, ama bugün önemli değil."
   ]
  ],
  "v": [
   [
    "besuchen",
    "ziyaret etmek"
   ],
   [
    "das Wetter",
    "hava durumu"
   ],
   [
    "scheinen",
    "parlamak / görünmek"
   ],
   [
    "der Spaziergang",
    "yürüyüş"
   ],
   [
    "zusammen",
    "birlikte"
   ],
   [
    "egal",
    "fark etmez"
   ]
  ]
 },
 {
  "t": "Die Reise",
  "tt": "Yolculuk",
  "lvl": "A1.2",
  "l": [
   [
    "Im Sommer machen Anna und Peter Urlaub.",
    "Yazın Anna ve Peter tatil yapıyorlar."
   ],
   [
    "Sie fliegen nach Spanien. Der Flug dauert drei Stunden.",
    "İspanya'ya uçuyorlar. Uçuş üç saat sürüyor."
   ],
   [
    "Am Flughafen zeigen sie ihre Pässe.",
    "Havalimanında pasaportlarını gösteriyorlar."
   ],
   [
    "Der Abflug ist um sieben Uhr, die Ankunft um zehn.",
    "Kalkış saat yedide, varış onda."
   ],
   [
    "Das Hotel liegt direkt am Meer.",
    "Otel doğrudan denizin kıyısında."
   ],
   [
    "Ihr Zimmer hat ein großes Fenster und einen Blick auf das Wasser.",
    "Odalarının büyük bir penceresi ve suya bakan bir manzarası var."
   ],
   [
    "Jeden Morgen schwimmen sie im Meer.",
    "Her sabah denizde yüzüyorlar."
   ],
   [
    "Mittags essen sie Fisch und trinken kaltes Wasser.",
    "Öğlenleri balık yiyip soğuk su içiyorlar."
   ],
   [
    "Am dritten Tag besuchen sie eine alte Stadt.",
    "Üçüncü gün eski bir şehri geziyorlar."
   ],
   [
    "Anna kauft eine Postkarte und schreibt an ihre Mutter.",
    "Anna bir kartpostal alıp annesine yazıyor."
   ],
   [
    "„Liebe Mama, hier ist es wunderbar. Bis bald!\"",
    "\"Sevgili anne, burası harika. Yakında görüşürüz!\""
   ],
   [
    "Nach zwei Wochen fahren sie zurück. Sie sind glücklich.",
    "İki hafta sonra dönüyorlar. Mutlular."
   ]
  ],
  "v": [
   [
    "der Urlaub",
    "tatil"
   ],
   [
    "der Flug",
    "uçuş"
   ],
   [
    "die Ankunft",
    "varış"
   ],
   [
    "das Meer",
    "deniz"
   ],
   [
    "zurückfahren",
    "geri dönmek"
   ],
   [
    "glücklich",
    "mutlu"
   ]
  ]
 }
];

const NUMBERS = [
 [
  "0",
  "null",
  "sıfır"
 ],
 [
  "1",
  "eins",
  "bir"
 ],
 [
  "2",
  "zwei",
  "iki"
 ],
 [
  "3",
  "drei",
  "üç"
 ],
 [
  "4",
  "vier",
  "dört"
 ],
 [
  "5",
  "fünf",
  "beş"
 ],
 [
  "6",
  "sechs",
  "altı"
 ],
 [
  "7",
  "sieben",
  "yedi"
 ],
 [
  "8",
  "acht",
  "sekiz"
 ],
 [
  "9",
  "neun",
  "dokuz"
 ],
 [
  "10",
  "zehn",
  "on"
 ],
 [
  "11",
  "elf",
  "on bir"
 ],
 [
  "12",
  "zwölf",
  "on iki"
 ],
 [
  "13",
  "dreizehn",
  "on üç"
 ],
 [
  "14",
  "vierzehn",
  "on dört"
 ],
 [
  "15",
  "fünfzehn",
  "on beş"
 ],
 [
  "16",
  "sechzehn",
  "on altı"
 ],
 [
  "17",
  "siebzehn",
  "on yedi"
 ],
 [
  "18",
  "achtzehn",
  "on sekiz"
 ],
 [
  "19",
  "neunzehn",
  "on dokuz"
 ],
 [
  "20",
  "zwanzig",
  "yirmi"
 ],
 [
  "21",
  "einundzwanzig",
  "yirmi bir"
 ],
 [
  "30",
  "dreißig",
  "otuz"
 ],
 [
  "40",
  "vierzig",
  "kırk"
 ],
 [
  "50",
  "fünfzig",
  "elli"
 ],
 [
  "60",
  "sechzig",
  "altmış"
 ],
 [
  "70",
  "siebzig",
  "yetmiş"
 ],
 [
  "80",
  "achtzig",
  "seksen"
 ],
 [
  "90",
  "neunzig",
  "doksan"
 ],
 [
  "100",
  "hundert",
  "yüz"
 ],
 [
  "101",
  "hunderteins",
  "yüz bir"
 ],
 [
  "200",
  "zweihundert",
  "iki yüz"
 ],
 [
  "1000",
  "tausend",
  "bin"
 ],
 [
  "1.000.000",
  "eine Million",
  "bir milyon"
 ],
 [
  "1.",
  "erste",
  "birinci"
 ],
 [
  "2.",
  "zweite",
  "ikinci"
 ],
 [
  "3.",
  "dritte",
  "üçüncü"
 ],
 [
  "4.",
  "vierte",
  "dördüncü"
 ],
 [
  "7.",
  "siebte",
  "yedinci"
 ],
 [
  "20.",
  "zwanzigste",
  "yirminci"
 ]
];
