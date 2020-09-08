var nama = 'laju';
var peran = 'jagoan';


if (nama  != ''){
     if (peran == 'ksatria'){
        console.log("Selamat datang di Dunia Proxytia, " + nama);
        console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
    } else if (peran == 'tabib' ) {
        console.log('Selamat datang di Dunia Proxytia,'+ nama);
        console.log("Halo Tabib " + nama + ",kamu akan membantu temanmu yang terluka.!");

    } else if (peran == 'penyihir') {
        console.log('Selamat datang di Dunia Proxytia,'+ nama);
        console.log("Halo Penyihir " + nama + ",ciptakan keajaiban yang membantu kemenanganmu!");
    }  else {
        console.log('pilih peran');
    }
} else { 
    console.log('nama harus diisi');
}




 

 