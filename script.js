// chuyển tab
function openTabs(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab__tabslinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// lấy dữ liệu từ form

function changeText() {
  var inputs = document.querySelectorAll("#informationform input[type='text']");
  inputs.forEach(function (input) {
    document.getElementById(input.id + "Value").textContent = input.value;
  });
}

function changeLinks() {
  var inputsLinks = document.querySelectorAll("#linkform input[type='text']");
  inputsLinks.forEach(function (input) {
    document.getElementById(input.id + "IconLink").href = input.value;
    console.log(input.value);
  });
}

function changeService(iconId) {
  const icon = document.getElementById(iconId);
  const iconHidden = document.getElementById(iconId + "Hidden");
  if (icon) {
    const currentColor = icon.getAttribute("data-color") || "black";
    const newColor = currentColor === "black" ? "#6b61d1" : "black";

    icon.style.color = newColor;
    icon.style.border = `1px solid ${newColor}`;
    icon.setAttribute("data-color", newColor);

    newColor === "#6b61d1"
      ? iconHidden.classList.remove("hidden")
      : iconHidden.classList.add("hidden");
  }
}
