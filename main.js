var isCollapsed = true;
function expandMenu() {
    var btn = document.getElementById('btnExp');
    var nav = document.getElementById('mainNav');
    if(isCollapsed) {
        btn.innerText = 'COLLAPSE';
        nav.style.display = 'block';
        isCollapsed = false;
    }else {
        btn.innerText = 'EXPAND';
        nav.style.display = 'none';
        isCollapsed = true;
    }
}