function appendValue(val) {
      document.getElementById("result").value += val;
    }

    function clearResult() {
      document.getElementById("result").value = "";
    }

    function deleteLast() {
      let current = document.getElementById("result").value;
      document.getElementById("result").value = current.slice(0, -1);
    }

    function calculateResult() {
      try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
      } catch (e) {
        document.getElementById("result").value = "Error";
      }
    }
