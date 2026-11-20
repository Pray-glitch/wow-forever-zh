// DC 重點：職業選單（11/19）。新增職業時只要在 C 加一行，所有頁面的選單都會跟著有。
(function(){
 var C=[["paladin.html","聖騎士"],["shaman.html","薩滿"],["warlock.html","術士"],["priest.html","牧師"]];
 var cur=location.pathname.split('/').pop()||'index.html';
 var st=document.createElement('style');
 st.textContent='#clsmenu select{font:inherit;color:var(--gold);background:#17130f;border:1px solid var(--gold2);border-radius:8px;padding:0 6px;cursor:pointer}#clsmenu select:focus{outline:2px solid var(--gold)}';
 document.head.appendChild(st);
 var el=document.getElementById('clsmenu');if(!el)return;
 var s=document.createElement('select');s.setAttribute('aria-label','選擇職業');
 C.forEach(function(c){var o=document.createElement('option');o.value=c[0];o.textContent=c[1];if(c[0]==cur)o.selected=true;s.appendChild(o)});
 s.onchange=function(){location.href=s.value};
 el.appendChild(s);
 try{localStorage.setItem('dc_last',cur)}catch(e){}
})();
