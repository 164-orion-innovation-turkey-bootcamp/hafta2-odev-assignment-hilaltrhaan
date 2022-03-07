let ingredient = { //Bileşenler listesi tanımlandı.
  pickle: 5,
  bread: 4,
  drink: 5,
  onion: 5,
  meatball: 5,
  chicken: 5,
  frenchFries: 5,
  tomato: 5,
  sauce: 5,
};

async function orderTake(time, job) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(job());
    }, time);
  });
}
/*********Stok kontrolü yapıldı*******/
orderTake(1000, () => console.log("Siparişinizi Oluşturunuz.")).then(
  async () => {
    if (Object.values(ingredient).every((element) => element === 0)) {
      //Tüm malzemeler 0 olduğunda çalışır
      return orderTake(3000, () => {}).then(() => {
        console.log("Stok Yok!");
      });
    } else if (Object.values(ingredient).some((element) => element === 0)) {
      //Herhangi bir malzeme bittiğinde çalışır
      return orderTake(3000, () => {}).then(() => {
        console.log("Malzeme eksiği var sipariş iptal edildi.");
      });
    } else {
      return orderTake(2000, () => {
        //Tüm stoklar varsa çalışır
        console.log("Stok mevcut siparişe devam ediliyor.");
      });
    }
  }
);

/*******Köfte mi Tavuk mu sorgusu*******/
var readline = require("readline"); //ReadLine ile konsolda okuma yapıldı.
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

orderTake(4000, () => {}).then(async () => {
  rl.question(
    "Köfte istiyorsanız 1 yazın\nTavuk istiyorsanız 2 yazın\n",
    (answer) => {
      if (answer == "1") { //Köfte seçildiğinde çalışan kod bloğu
        console.log("İstenilen: Köfte");



        return orderTake(1000, () => {}).then(async () => { //Köftenin pişme derecesi Degree() ile sağlandı.
          rl.question(
            "Köftenizi nasıl istersiniz? 1-Az pişmiş / 2-Orta pişmiş / 3-Çok Pişmiş\n",
            (message) => Degree(message)
          );



          return orderTake(5000, () => {}).then(async () => {//Ektra eklenecek olan bileşenler Extra() ile sağlandı.
            rl.question(
              "Ekstra malzeme ister misiniz? 1-Patates Kızartması / 2-İçecek / 3-Sos /4-Patates kızartması&içecek /5-Patates kızartması&Sos /6-İçecek&Sos /7-Hepsi\n",
              (item) => Extra(item)  //Bu fonksşyon 105.satırdan çağrıldı.
            );
          });
        });


      } else { //Tavuk seçildiğinde çalışan kod bloğu
        console.log("İstenilen: Tavuk");
        orderTake(1000, () =>
          console.log("Tavuklu burgeriniz hazırlanıyor...Süre:2 sn")
        );



        return orderTake(3000, () => {}).then(async () => {
          rl.question(
            "Ekstra malzeme ister misiniz? 1-Patates Kızartması / 2-İçecek / 3-Sos /4-Patates kızartması&içecek /5-Patates kızartması&Sos /6-İçecek&Sos /7-Hepsi\n",
            (item) => Extra(item)
          );
        });
      }
    }
  );
});
/*****Köftenin Pişme Derecesi (Az-Orta-Çok) */
function Degree(result) {
  function get_ready() {
    console.log("Hamburger Hazırlanıyor...Süre:2 sn");
  }
  switch (result) {
    case "1":
      console.log("istenilen köfte derecesi az pişmiş.");
      setTimeout(get_ready, 2000);
      break;
    case "2":
      console.log("istenilen köfte derecesi orta pişmiş.");
      setTimeout(get_ready, 2000);
      break;
    case "3":
      console.log("istenilen köfte derecesi çok pişmiş.");
      setTimeout(get_ready, 2000);
      break;
    default:
      break;
  }
}

/*********Ekstra menüye eklenecek olan seçenekler *******/
function Extra(choice) {
  function get_ready() {
    console.log("Hamburger menünüz hazır afiyet olsun.");
  }
  switch (choice) {
    case "1":
      console.log("Patates kızartması ekleniyor... Süre:5 sn");
      setTimeout(get_ready, 5000);
      break;
    case "2":
      console.log("İçecek ekleniyor...Süre:2 sn");
      setTimeout(get_ready, 2000);
      break;
    case "3":
      console.log("Sos ekleniyor...Süre:1 sn");
      setTimeout(get_ready, 1000);
      break;
    case "4":
      console.log("Patates kızartması ve içecek ekleniyor...Süre:7 sn");
      setTimeout(get_ready, 7000);
      break;
    case "5":
      console.log("Patates kızartması ve sos ekleniyor...Süre:6 sn");
      setTimeout(get_ready, 6000);
      break;
    case "6":
      console.log("İçecek ve sos ekleniyor...Süre:3 sn");
      setTimeout(get_ready, 3000);
      break;
    case "7":
      console.log("Ekstra malzemelerin hepsi ekleniyor...Süre:8 sn");
      setTimeout(get_ready, 8000);
      break;
    default:
      break;
  }
  rl.close();
}
