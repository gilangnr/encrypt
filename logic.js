function enkripsi() {
  let plain = document.getElementById("inputText").value;
  let Hasil = document.getElementById("output");
  Hasil.innerHTML = "";
  // logic

  for (let key = 0; key < 26; key++) {
    let teksEnkripsi = "";
    for (let i = 0; i < plain.length; i++) {
      let charCode = plain.charCodeAt(i);
      let enkripsiCharCode;

      if (charCode >= 65 && charCode <= 90) {
        enkripsiCharCode = ((charCode - 65 + key) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        enkripsiCharCode = ((charCode - 97 + key) % 26) + 97;
      } else {
        enkripsiCharCode = charCode;
      }

      teksEnkripsi += String.fromCharCode(enkripsiCharCode);
    }
    Hasil.innerHTML += `<p> Key ${key} : ${teksEnkripsi} </p>`;
  }
}
