function getQueryVariable(variable) {
  console.log("search->", window.location);
  return (
    decodeURIComponent(
      // eslint-disable-next-line no-useless-concat
      (new RegExp("[?|&]" + variable + "=" + "([^&;]+?)(&|#|;|$)").exec(
        window.location.search
      ) || [, ""])[1].replaceAll("-", " ")
    ) || null
  );
}

export function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default getQueryVariable;
