window.addEventListener ('load', function(){
   //window arriba
   //codigo
   var imagenes = ['img/referentesnacional7.jpeg',
   'img/referentesnacional8.jpg',
   'img/referentesnacional0.jpeg',
   'img/referentesnacional1.jpeg',
   'img/referentesnacional2.jpeg',
   'img/referentesnacional3.jpeg',
   'img/referentesnacional4.jpeg',
   'img/referentesnacional5.jpeg',
   'img/referentesnacional6.jpeg'
];

   var indiceDeImagenes = 1;
   var tiempo = 2000;

   document.slider.src = imagenes[0]; 

   function cambiarImagenes (){
   document.slider.src = imagenes[indiceDeImagenes]; 

   if (indiceDeImagenes < 8){
      indiceDeImagenes++;
   } else {
      indiceDeImagenes = 0;
   }
};
setInterval(cambiarImagenes, tiempo);

//window abajo
});
