setInterval(refeshText, 5);
function refeshText() {
    document.getElementById("output").innerText = (document.getElementById("input").innerText||"")
        .replace(/⬛/g, `${document.getElementById("black").value||"⬛"}`)
        .replace(/🟨/g, `${document.getElementById("yellow").value||"🟨"}`)
        .replace(/🟩/g, `${document.getElementById("green").value||"🟩"}`)
}

function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById("output").innerText);
}