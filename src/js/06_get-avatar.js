'use strict';
/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */


function getImage(e){
  const myFile = e.currentTarget.files[0];
  if(!myFile) return; 
  //Method inside file reader to get the file with an URL
  fr.readAsDataURL(myFile);
  //If image size is larger than 80KB, compress it, otherwise leave the original
  if(myFile.size >= 80000){
    //Method
    fr.onload = function (e) {
      //Create image element and add URL to src
      const imgElement = document.createElement("img");
      imgElement.src = e.target.result;
      //Method to compress image with URL
      imgElement.onload = function(e) {
        //Create a canvas
        const canvas = document.createElement("canvas");
        //Set maximum width
        const maxWidth = 150;
        //Ratio to resize height proportionally
        const scaleSize = maxWidth / e.target.width;
        //Set canvas width and size
        canvas.width = maxWidth;
        canvas.height = e.target.height * scaleSize;
        //Create canvas context
        const ctx = canvas.getContext("2d");
        //Draw image into canvas, position and axes
        ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
        //Get encoded value to get it compressed and show it
        const srcEncoded = ctx.canvas.toDataURL(e.target, 'image/jpeg');
        //Set values to the compressed URL
        profileImage.style.backgroundImage = `url(${srcEncoded})`;
        profilePreview.style.backgroundImage = `url(${srcEncoded})`;
        data.photo = srcEncoded;
        localStorage.setItem('datainputs', JSON.stringify(data));
      }
    }
  }else{
    //If image is not larger than 80KB, then take the original file to set values
    fr.addEventListener('load', writeImage);
  }
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result ;
  localStorage.setItem('datainputs', JSON.stringify(data));
}


/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);