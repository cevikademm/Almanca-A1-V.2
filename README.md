# A1 Almanca — Kelime Ezber Uygulaması

608 A1 kelimesi (Leitner aralıklı tekrar sistemi), tür listeleri ve 8 bölümlük A1 hikâyesi.
Tüm veri `app/js/data.js` içinde — **veritabanı yok**, ilerleme tarayıcının/Electron'un
localStorage'ında saklanır.

## Klasör yapısı
```
a1-almanca-app/
├── main.js              → Electron başlatıcı (pencere ayarları burada)
├── package.json         → proje tanımı ve derleme ayarları
└── app/
    ├── index.html       → arayüz iskeleti (3 sekme: Ezber / Listeler / Hikâye)
    ├── css/style.css    → tüm görünüm
    ├── js/data.js       → 608 kelime + hikâyeler + sayılar (düzenlenebilir veri)
    ├── js/app.js        → oturum motoru, kutu sistemi, listeler, okuyucu
    └── assets/icon.png  → uygulama simgesi
```

## 1) Geliştirme (VS Code)
Önce [Node.js](https://nodejs.org) kurulu olmalı (LTS sürüm yeterli).

```bash
cd a1-almanca-app
npm install      # ilk seferde (electron indirir, birkaç dakika sürebilir)
npm start        # uygulamayı pencerede açar
```

Kodda değişiklik yapınca pencereyi `Ctrl+R` ile yenilemeniz yeterli.

## 2) Masaüstü uygulaması olarak kurmak
```bash
npm run dist
```
`dist/` klasörüne kurulum dosyası çıkar:
- Windows → `A1 Almanca Setup 1.0.0.exe` (çalıştır → Başlat menüsü + masaüstü kısayolu)
- macOS  → `.dmg`
- Linux  → `.AppImage`

## 3) Electron istemiyorsanız (en hafif yol)
`app/index.html` dosyasını Chrome/Edge ile açın → adres çubuğundaki
**"Uygulamayı yükle"** simgesine tıklayın. Masaüstü kısayolu oluşur, kendi
penceresinde açılır. (Dosyayı `npx serve app` ile sunarsanız PWA kurulumu
daha sorunsuz olur.)

## Geliştirme notları
- **Yeni kelime eklemek:** `data.js` içindeki `WORDS` dizisine nesne ekleyin;
  uygulama sayıyı otomatik algılar (sıralama `S.order` göçüyle korunur).
- **Tekrar parametreleri:** `app.js` başındaki `REP`, `MIN_REPS` (=10),
  `WRONG_TRIGGER` (=5) ve `BOX_DAYS` sabitlerinden ayarlanır.
- **İlerlemeyi sıfırlamak:** uygulama içindeki "Tüm ilerlemeyi sıfırla"
  ya da DevTools → `localStorage.removeItem('a1de_v2')`.
- Kelime verisi *Almanca-Türkçe Kelime Kitabı* PDF'inin A1 bölümünden çıkarılmıştır.
