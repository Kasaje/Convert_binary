let type = document.getElementById("type");
let binary = document.getElementById("binary");
let decimal = document.getElementById("decimal");
let hexadecimal = document.getElementById("hexadecimal");
let to_binary = document.getElementById("to_binary");
let to_decimal = document.getElementById("to_decimal");
let to_hexadecimal = document.getElementById("to_hexadecimal");
let CB = document.getElementById("convert_button");
let result_show = document.getElementById("result_show");
let user_choose_to = "";
let user_choose = "";

function choose_binary() {
  binary.innerHTML = `<a class="btn btn-success" onclick="unchoose_binary()" >Binary</a>`;
  type.innerText = "Type binary code";
  decimal.innerHTML = `<a class="btn btn-primary" onclick="choose_decimal()" >Decimal</a>`;
  hexadecimal.innerHTML = `<a class="btn btn-primary" onclick="choose_hexadecimal()" >Hexadecimal</a>`;
  user_choose = "binary";
  result_show.innerHTML = "";
}

function choose_to_binary() {
  to_binary.innerHTML = `<a class="btn btn-success" onclick="unchoose_to_binary()" >Binary</a>`;
  to_decimal.innerHTML = `<a class="btn btn-primary" onclick="choose_to_decimal()" >Decimal</a>`;
  to_hexadecimal.innerHTML = `<a class="btn btn-primary" onclick="choose_to_hexadecimal()" >Hexadecimal</a>`;
  user_choose_to = "binary";
  CB.innerHTML = `<a class="btn btn-success  w-50" onclick="convert()">Convert</a>`;
  result_show.innerHTML = "";
}

function choose_decimal() {
  decimal.innerHTML = `<a class="btn btn-success" onclick="unchoose_decimal()" >Decimal</a>`;
  type.innerText = "Type decimal code";
  binary.innerHTML = `<a class="btn btn-primary" onclick="choose_binary()" >Binary</a>`;
  hexadecimal.innerHTML = `<a class="btn btn-primary" onclick="choose_hexadecimal()" >Hexadecimal</a>`;
  user_choose = "decimal";
  result_show.innerHTML = "";
}

function choose_to_decimal() {
  to_decimal.innerHTML = `<a class="btn btn-success" onclick="unchoose_to_decimal()" >Decimal</a>`;
  to_binary.innerHTML = `<a class="btn btn-primary" onclick="choose_to_binary()" >Binary</a>`;
  to_hexadecimal.innerHTML = `<a class="btn btn-primary" onclick="choose_to_hexadecimal()" >Hexadecimal</a>`;
  user_choose_to = "decimal";
  CB.innerHTML = `<a class="btn btn-success  w-50" onclick="convert()">Convert</a>`;
  result_show.innerHTML = "";
}

function choose_hexadecimal() {
  hexadecimal.innerHTML = `<a class="btn btn-success" onclick="unchoose_hexadecimal()" >Hexadecimal</a>`;
  type.innerText = "Type hexadecimal code";
  binary.innerHTML = `<a class="btn btn-primary" onclick="choose_binary()" >Binary</a>`;
  decimal.innerHTML = `<a class="btn btn-primary" onclick="choose_decimal()" >Decimal</a>`;
  user_choose = "hexadecimal";
  result_show.innerHTML = "";
}

function choose_to_hexadecimal() {
  to_hexadecimal.innerHTML = `<a class="btn btn-success" onclick="unchoose_to_hexadecimal()" >Hexadecimal</a>`;
  to_binary.innerHTML = `<a class="btn btn-primary" onclick="choose_to_binary()" >Binary</a>`;
  to_decimal.innerHTML = `<a class="btn btn-primary" onclick="choose_to_decimal()" >Decimal</a>`;
  user_choose_to = "hexadecimal";
  CB.innerHTML = `<a class="btn btn-success  w-50" onclick="convert()">Convert</a>`;
  result_show.innerHTML = "";
}

function unchoose_binary() {
  binary.innerHTML = `<a class="btn btn-primary" onclick="choose_binary()" >Binary</a>`;
  type.innerText = "";
  CB.innerHTML = `<a class="btn btn-secondary  w-50 disabled">Convert</a>`;
  result_show.innerHTML = "";
}

function unchoose_to_binary() {
  to_binary.innerHTML = `<a class="btn btn-primary" onclick="choose_to_binary()" >Binary</a>`;
  CB.innerHTML = `<a class="btn btn-secondary  w-50 disabled">Convert</a>`;
  result_show.innerHTML = "";
}

function unchoose_decimal() {
  decimal.innerHTML = `<a class="btn btn-primary" onclick="choose_decimal()" >Decimal</a>`;
  type.innerText = "";
  CB.innerHTML = `<a class="btn btn-secondary  w-50 disabled">Convert</a>`;
  result_show.innerHTML = "";
}

function unchoose_to_decimal() {
  to_decimal.innerHTML = `<a class="btn btn-primary" onclick="choose_to_decimal()" >Decimal</a>`;
  CB.innerHTML = `<a class="btn btn-secondary  w-50 disabled">Convert</a>`;
  result_show.innerHTML = "";
}

function unchoose_hexadecimal() {
  hexadecimal.innerHTML = `<a class="btn btn-primary" onclick="choose_hexadecimal()" >Hexadecimal</a>`;
  type.innerText = "";
  CB.innerHTML = `<a class="btn btn-secondary  w-50 disabled">Convert</a>`;
  result_binary.innerHTML = "";
}

function unchoose_to_hexadecimal() {
  to_hexadecimal.innerHTML = `<a class="btn btn-primary" onclick="choose_to_hexadecimal()" >Hexadecimal</a>`;
  CB.innerHTML = `<a class="btn btn-secondary  w-50 disabled">Convert</a>`;
  result_binary.innerHTML = "";
}

async function convert() {
  const inputwithspace = await document.getElementById("input").value;
  const input = await inputwithspace.replaceAll(" ", "");
  if (inputwithspace == "" && user_choose == "binary") {
    alert(`Please insert binary code`);
  } else if (inputwithspace == "" && user_choose == "decimal") {
    alert(`Please insert decimal code`);
  } else if (inputwithspace == "" && user_choose == "hexadecimal") {
    alert(`Please insert hexadecimal code`);
  } else if (inputwithspace == "" && user_choose_to == "binary") {
    alert(`Please insert binary code`);
  } else if (inputwithspace == "" && user_choose_to == "decimal") {
    alert(`Please insert decimal code`);
  } else if (inputwithspace == "" && user_choose_to == "hexadecimal") {
    alert(`Please insert hexadecimal code`);
  } else {
    if (user_choose == "binary" && user_choose_to == "decimal") {
      convert_binary(input);
    } else if (user_choose == "binary" && user_choose_to == "hexadecimal") {
      convert_binary_to_hexadecimal(input);
    } else if (user_choose == "decimal" && user_choose_to == "binary") {
      convert_decimal(input);
      // convert_decimal_to_hex(input);
    } else if (user_choose == "decimal" && user_choose_to == "hexadecimal") {
      convert_decimal_to_hex(input);
    } else if (user_choose == "hexadecimal" && user_choose_to == "binary") {
      convert_hexadecimal(input);
      //const hex_to_bi = await convert_hexadecimal(input);
      //convert_binary(hex_to_bi);
    } else if (user_choose == "hexadecimal" && user_choose_to == "decimal") {
      const hex_to_bi = await convert_hexadecimal(input);
      convert_binary(hex_to_bi);
    }
  }
}

async function convert_binary(input_binary) {
  const total = [];
  const array_of_binary = [];
  for (i in await input_binary) {
    if (!(input_binary.charAt(i) == "0" || input_binary.charAt(i) == "1")) {
      total.push(1);
    } else {
      total.push(0);
    }
    array_of_binary.push(parseInt(input_binary.charAt(i)));
  }
  let sum = 0;
  for (j in total) {
    sum += total[j];
  }
  if (sum != 0) {
    alert(`Please insert binary number 0-1`);
    window.location.reload();
  } else {
    const reverse_binary = array_of_binary.reverse();
    let result = 0;
    for (k in reverse_binary) {
      if (reverse_binary[k] == 1) {
        result += 2 ** k;
      } else {
        continue;
      }
    }
    result_show.innerHTML = `Decimal code is ${result}`;
    return result;
  }
}

async function convert_decimal(input_decimal) {
  let sum = 0;
  let check_one = parseInt(input_decimal);
  if (check_one == "0") {
    result_show.innerHTML = `Binary code is 0`;
  }
  if (check_one == "1") {
    result_show.innerHTML = "Binary code is 1";
  } else {
    for (f in input_decimal) {
      if (
        !(
          input_decimal.charAt(f) == "0" ||
          input_decimal.charAt(f) == "1" ||
          input_decimal.charAt(f) == "2" ||
          input_decimal.charAt(f) == "3" ||
          input_decimal.charAt(f) == "4" ||
          input_decimal.charAt(f) == "5" ||
          input_decimal.charAt(f) == "6" ||
          input_decimal.charAt(f) == "7" ||
          input_decimal.charAt(f) == "8" ||
          input_decimal.charAt(f) == "9"
        )
      ) {
        sum += 1;
      }
    }
    if (sum != 0) {
      alert(`Please try again, insert decimal code.`);
      window.location.reload();
    } else {
      let input_number = parseInt(input_decimal);
      let result_decimal = "";
      while (input_number >= 2) {
        result_decimal += input_number % 2;
        input_number = Math.floor(input_number / 2);
        if (Math.floor(input_number == 1)) {
          result_decimal += "1";
        }
      }
      let array_of_decimal = [];
      let result_decimal_string = result_decimal.toString();
      for (i in result_decimal_string) {
        array_of_decimal.push(result_decimal_string.charAt(i));
      }
      let str_result_decimal = array_of_decimal.reverse();
      str_result_decimal = str_result_decimal.toString();
      let result = await str_result_decimal.replaceAll(",", "");
      result_show.innerHTML = `Binary code is ${result}`;
      return result;
    }
  }
}

async function convert_decimal_to_hex(input_decimal) {
  let sum = 0;
  const check_one = parseInt(input_decimal);
  if (check_one == "0") {
    result_show.innerHTML = `Binary code is 0`;
  } else if (check_one == "1") {
    result_show.innerHTML = `Binary code is 1`;
  } else {
    for (f in input_decimal) {
      if (
        !(
          input_decimal.charAt(f) == "0" ||
          input_decimal.charAt(f) == "1" ||
          input_decimal.charAt(f) == "2" ||
          input_decimal.charAt(f) == "3" ||
          input_decimal.charAt(f) == "4" ||
          input_decimal.charAt(f) == "5" ||
          input_decimal.charAt(f) == "6" ||
          input_decimal.charAt(f) == "7" ||
          input_decimal.charAt(f) == "8" ||
          input_decimal.charAt(f) == "9"
        )
      ) {
        sum += 1;
      }
    }
    if (sum != 0) {
      alert(`Please try again, insert decimal code.`);
      window.location.reload();
    } else {
      let input_number = parseInt(input_decimal);
      let result_decimal = "";
      while (input_number >= 2) {
        result_decimal += input_number % 2;
        input_number = Math.floor(input_number / 2);
        if (Math.floor(input_number == 1)) {
          result_decimal += "1";
        }
      }
      let array_of_decimal = [];
      let result_decimal_string = result_decimal.toString();
      for (i in result_decimal_string) {
        array_of_decimal.push(result_decimal_string.charAt(i));
      }
      let str_result_decimal = array_of_decimal.reverse();
      str_result_decimal = str_result_decimal.toString();
      let result = await str_result_decimal.replaceAll(",", "");

      // Reuse Code
      let B_to_H = [];
      let loop_of_4bit = 4;
      let x = 0;
      let y = 0;
      let array_of_binary = [];
      let visual_array = [];

      for (i in result) {
        array_of_binary.push(await result.charAt(i));
      }

      array_of_binary.reverse();
      while (array_of_binary.length >= 1) {
        if (array_of_binary.length >= 4) {
          {
            while (x < 4) {
              visual_array.push(array_of_binary[x]);
              x += 1;
            }
            x = 0;
            visual_array.reverse();
            let visual_array_tostring = visual_array.toString();
            visual_array_tostring = visual_array_tostring.replaceAll(",", "");
            if ((await convert_binary_h_lego(visual_array_tostring)) == "10") {
              B_to_H.push("A");
            } else if (
              (await convert_binary_h_lego(visual_array_tostring)) == "11"
            ) {
              B_to_H.push("B");
            } else if (
              (await convert_binary_h_lego(visual_array_tostring)) == "12"
            ) {
              B_to_H.push("C");
            } else if (
              (await convert_binary_h_lego(visual_array_tostring)) == "13"
            ) {
              B_to_H.push("D");
            } else if (
              (await convert_binary_h_lego(visual_array_tostring)) == "14"
            ) {
              B_to_H.push("E");
            } else if (
              (await convert_binary_h_lego(visual_array_tostring)) == "15"
            ) {
              B_to_H.push("F");
            } else {
              B_to_H.push(await convert_binary_h_lego(visual_array_tostring));
            }
            visual_array = [];
          }
        } else if (array_of_binary.length <= 3) {
          array_of_binary.reverse();
          loop_of_4bit = array_of_binary.length;
          let b_to_h_tostring = array_of_binary.toString();
          b_to_h_tostring = b_to_h_tostring.replaceAll(",", "");
          B_to_H.push(await convert_binary_h_lego(b_to_h_tostring));
          break;
        }

        while (y < loop_of_4bit) {
          array_of_binary.shift();
          y += 1;
        }
        y = 0;
      }
      B_to_H.reverse();
      let result_binary_to_hexadecimal = B_to_H.toString();
      result_binary_to_hexadecimal =
        await result_binary_to_hexadecimal.replaceAll(",", "");
      result_show.innerHTML = `Hexadecimal code is ${result_binary_to_hexadecimal}`;
    }
  }
}

async function convert_hexadecimal(input_hexadecimal) {
  let sum = 0;
  for (i in input_hexadecimal) {
    if (
      !(
        input_hexadecimal.charAt(i) == "0" ||
        input_hexadecimal.charAt(i) == "1" ||
        input_hexadecimal.charAt(i) == "2" ||
        input_hexadecimal.charAt(i) == "3" ||
        input_hexadecimal.charAt(i) == "4" ||
        input_hexadecimal.charAt(i) == "5" ||
        input_hexadecimal.charAt(i) == "6" ||
        input_hexadecimal.charAt(i) == "7" ||
        input_hexadecimal.charAt(i) == "8" ||
        input_hexadecimal.charAt(i) == "9" ||
        input_hexadecimal.charAt(i) == "A" ||
        input_hexadecimal.charAt(i) == "B" ||
        input_hexadecimal.charAt(i) == "C" ||
        input_hexadecimal.charAt(i) == "D" ||
        input_hexadecimal.charAt(i) == "E" ||
        input_hexadecimal.charAt(i) == "F" ||
        input_hexadecimal.charAt(i) == "a" ||
        input_hexadecimal.charAt(i) == "b" ||
        input_hexadecimal.charAt(i) == "c" ||
        input_hexadecimal.charAt(i) == "d" ||
        input_hexadecimal.charAt(i) == "e" ||
        input_hexadecimal.charAt(i) == "f"
      )
    ) {
      sum += 1;
    }
  }
  if (sum != 0) {
    alert(`Please try again, insert hexadecimal code 0-9, A-F`);
    window.location.reload();
  } else {
    let result = "";
    for (i in input_hexadecimal) {
      if (input_hexadecimal.charAt(i) == "0") {
        result += "0000";
      } else if (input_hexadecimal.charAt(i) == "1") {
        result += "0001";
      } else if (input_hexadecimal.charAt(i) == "2") {
        result += "0010";
      } else if (input_hexadecimal.charAt(i) == "3") {
        result += "0011";
      } else if (input_hexadecimal.charAt(i) == "4") {
        result += "0100";
      } else if (input_hexadecimal.charAt(i) == "5") {
        result += "0101";
      } else if (input_hexadecimal.charAt(i) == "6") {
        result += "0110";
      } else if (input_hexadecimal.charAt(i) == "7") {
        result += "0111";
      } else if (input_hexadecimal.charAt(i) == "8") {
        result += "1000";
      } else if (input_hexadecimal.charAt(i) == "9") {
        result += "1001";
      } else if (input_hexadecimal.charAt(i) == "A") {
        result += "1010";
      } else if (input_hexadecimal.charAt(i) == "B") {
        result += "1011";
      } else if (input_hexadecimal.charAt(i) == "C") {
        result += "1100";
      } else if (input_hexadecimal.charAt(i) == "D") {
        result += "1101";
      } else if (input_hexadecimal.charAt(i) == "E") {
        result += "1110";
      } else if (input_hexadecimal.charAt(i) == "F") {
        result += "1111";
      } else if (input_hexadecimal.charAt(i) == "a") {
        result += "1010";
      } else if (input_hexadecimal.charAt(i) == "b") {
        result += "1011";
      } else if (input_hexadecimal.charAt(i) == "c") {
        result += "1100";
      } else if (input_hexadecimal.charAt(i) == "d") {
        result += "1101";
      } else if (input_hexadecimal.charAt(i) == "e") {
        result += "1110";
      } else if (input_hexadecimal.charAt(i) == "f") {
        result += "1111";
      }
    }
    result_show.innerHTML = `Binary code is ${result}`;
    return result;
  }
}

async function convert_binary_h_lego(input_binary) {
  const total = [];
  const array_of_binary = [];
  for (i in await input_binary) {
    if (!(input_binary.charAt(i) == "0" || input_binary.charAt(i) == "1")) {
      total.push(1);
    } else {
      total.push(0);
    }
    array_of_binary.push(parseInt(input_binary.charAt(i)));
  }
  let sum = 0;
  for (j in total) {
    sum += total[j];
  }
  if (sum != 0) {
    alert(`Please insert binary number 0-1`);
    window.location.reload();
  } else {
    let reverse_binary = array_of_binary.reverse();
    let result = 0;
    for (k in reverse_binary) {
      if (reverse_binary[k] == 1) {
        result += (2 ** k);
      } else {
        continue;
      }
    }
    return result;
  }
}

async function convert_binary_to_hexadecimal(input_binary) {
  let B_to_H = [];
  let loop_of_4bit = 4;
  let x = 0;
  let y = 0;
  let array_of_binary = [];
  let visual_array = [];

  for (i in input_binary) {
    array_of_binary.push(await input_binary.charAt(i));
  }

  array_of_binary.reverse();
  while (array_of_binary.length >= 1) {
    if (array_of_binary.length >= 4) {
      {
        while (x < 4) {
          visual_array.push(array_of_binary[x]);
          x += 1;
        }
        x = 0;
        visual_array.reverse();
        let visual_array_tostring = visual_array.toString();
        visual_array_tostring = visual_array_tostring.replaceAll(",", "");
        if ((await convert_binary_h_lego(visual_array_tostring)) == "10") {
          B_to_H.push("A");
        } else if (
          (await convert_binary_h_lego(visual_array_tostring)) == "11"
        ) {
          B_to_H.push("B");
        } else if (
          (await convert_binary_h_lego(visual_array_tostring)) == "12"
        ) {
          B_to_H.push("C");
        } else if (
          (await convert_binary_h_lego(visual_array_tostring)) == "13"
        ) {
          B_to_H.push("D");
        } else if (
          (await convert_binary_h_lego(visual_array_tostring)) == "14"
        ) {
          B_to_H.push("E");
        } else if (
          (await convert_binary_h_lego(visual_array_tostring)) == "15"
        ) {
          B_to_H.push("F");
        } else {
          B_to_H.push(await convert_binary_h_lego(visual_array_tostring));
        }
        visual_array = [];
        
      }
    } else if (array_of_binary.length <= 3) {
      array_of_binary.reverse();
      loop_of_4bit = array_of_binary.length;
      let b_to_h_tostring = array_of_binary.toString();
      b_to_h_tostring = b_to_h_tostring.replaceAll(",", "");
      B_to_H.push(await convert_binary_h_lego(b_to_h_tostring));
      break;
    }

    while (y < loop_of_4bit) {
      array_of_binary.shift();
      y += 1;
    }
    y = 0;
  }
  B_to_H.reverse();
  let result_binary_to_hexadecimal = B_to_H.toString();
  result_binary_to_hexadecimal = await result_binary_to_hexadecimal.replaceAll(",","");
  result_show.innerHTML = `Hexadecimal code is ${result_binary_to_hexadecimal}`;
}
