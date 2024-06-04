function enkripsi() {
  let plain = document.getElementById("inputText").value;
  let key = parseInt(document.getElementById("inputKey").value);
  let Hasil = document.getElementById("output");
  Hasil.innerHTML = "";

  if (isNaN(key) || key < 0 || key > 25) {
    Hasil.innerHTML = "<p>Masukkan kunci yang valid (0-25).</p>";
    return;
  }

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

  Hasil.innerHTML = `<p> Hasil Enkripsi dengan Key ${key} : ${teksEnkripsi} </p>`;
}
