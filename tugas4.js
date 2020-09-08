var hari = 31; 
var bulan = 12; 
var tahun = 1985;


if (hari >= 1 && hari <= 31) {
    if (tahun >= 1900 && tahun <= 2200) {
        if (bulan >= 1 && bulan <= 12) {
            switch (bulan) {
                case 1:
                    bulan = "januari"
                    break;
                case 2:
                    bulan = "februari"
                    break;
                case 3:
                        bulan = "Maret"
                        break;
                case 4:
                        bulan = "Mei"
                        break;
                case 5:
                            bulan = "April"
                            break;
                case 6:
                            bulan = "fJuni"
                            break;
                            case 7:
                    bulan = "juli"
                    break;
                case 8:
                    bulan = "Agustus"
                    break; 
                    case 9:
                    bulan = "September"
                    break;
                case 10:
                    bulan = "Oktober"
                    break;
                    case 11:
                    bulan = "November"
                    break;
                case 12:
                    bulan = "Desember"
                    break;       
                    default:
                    break;
            }
            console.log(hari + " - " + bulan + " - " + tahun)
        } else {
            console.log('bulan salah')
        }
    } else {
        console.log('tahun salah')
    }
     
} else {
    console.log('format tanggal salah')
}

// if (hari 1 >= 31 ){
// switch(hari) {
//  case 0: hari = "Minggu"; break;
//  case 1: hari = "Senin"; break;
//  case 2: hari = "Selasa"; break;
//  case 3: hari = "Rabu"; break;
//  case 4: hari = "Kamis"; break;
//  case 5: hari = "Jum'at"; break;
//  case 6: hari = "Sabtu"; break;
// }switch(bulan) {
//  case 0: bulan = "Januari"; break;
//  case 1: bulan = "Februari"; break;
//  case 2: bulan = "Maret"; break;
//  case 3: bulan = "April"; break;
//  case 4: bulan = "Mei"; break;
//  case 5: bulan = "Juni"; break;
//  case 6: bulan = "Juli"; break;
//  case 7: bulan = "Agustus"; break;
//  case 8: bulan = "September"; break;
//  case 9: bulan = "Oktober"; break;
//  case 10: bulan = "November"; break;
//  case 11: bulan = "Desember"; break;
// }var tampilhari = "Tanggal: " + hari + ", " + bulan + " " + tahun;
// var tampilWaktu = "Jam: " + jam + ":" + menit + ":" + detik;console.log(tampilhari);
// console.log(tampilWaktu);


