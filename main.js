images = ["hhttps://th.bing.com/th/id/OIP.b-puCg6YKNsUPTo_1VPkaQHaE8?pid=ImgDet&rs=1", "https://veja.abril.com.br/wp-content/uploads/2021/04/GettyImages-1229893337.jpg","https://static.glamurama.uol.com.br/2020/10/site_elon_musk_getty_images-1024x627.jpg", "https://vidadeempresa.com.br/wp-content/uploads/2020/02/elon-musk.jpg","https://s2.glbimg.com/zMYml02EblUNmgZuKzqanpiqVl0=/smart/e.glbimg.com/og/ed/f/original/2017/03/28/gettyimages-490597798.jpg","https://s2.glbimg.com/zMYml02EblUNmgZuKzqanpiqVl0=/smart/e.glbimg.com/og/ed/f/original/2017/03/28/gettyimages-490597798.jpg","https://th.bing.com/th/id/OIP.pwZY3aBSWjtBqpZizRTmggHaFj?pid=ImgDet&rs=1","https://s2.glbimg.com/PeOuADq7f4aS6qJYZqxQDmThW74=/smart/e.glbimg.com/og/ed/f/original/2020/02/05/gettyimages-1194820610.jpg"];
var i = 0;
 function proximoslide() { 
    if(i == 9) 
    { i=0; } document.getElementById("album").src = images[i];
     i++;
 }