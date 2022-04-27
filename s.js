//document.querySelector("head").innerHTML = `
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
`;
//alert("Arin Web");
function app() {
  
  
  
  var girdi = `
  <!--Meta Verileri-->
  <meta charset="UTF-8">
    <link rel="icon" type="image/png" sizes="16x16" href="data:image/png;base64,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zdAzrFR0m47dT8D/ABrwOpQOW5RCARkfiGxXdI3u1z3FLFOuA0DI+HdIO3Dc5VOs7Pid2B+Dcj21cXArF2ZuO9n8eSIfxZcKMP0fGJ1oIWn/AAMfbn2z7/ljX60+61Oov97N+WKMjDUQRmbHlSIDtZPpTglM0HuV3rSisd+oLDcqdokoYdlQ9g1d42sLqcBrMhREUq5vv//aAAwDAQACAAMAAAAQc888880YM8Mcg488888888880U8888888sM888888880c84408cY8888888888oc8gc888888MU8sY8884c8Ic88888888sk8sY88s8gc8888888888sY8c0sc8088888888888840scM888888888888888808Ec8k88888488488w88I84U8088EQ88Mg8UEMY0884U8888U484gQ8U08o8s8s08Y8c84Y40U4Uc8s088408c8888c88888c88cU8g80oU8888888888888c40s08I088888888888k8gc8M0sY0888888888oc4M888I88M48888888E88888888M08ssww8wkc84Q8888888YQ888888880k888888888sM80448sUc88888/8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAwEBPxBIf//EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQIBAT8QSH//xAApEAEAAQIEBQUBAQEBAAAAAAABEQAhMUFRYSBxgZGhEDBAscHw8dHh/9oACAEBAAE/EH3yaBh2QBo5B5sHRj4q46QeyQ+ajOXfeivwlpkDyaTHKvrXRGwH3EfNRozU/Rr4r/FmUA+YXfMUcxYDdSjErdPoKIe7Q2dxA9MeNDD3AI6AqPYZNOIk6IlFuzL6HnUYWLgdMuTzpLvWJR4ToX48JcSEg6vbqeVCujDIq0bPC50e74ALoe+AMoK54bU2t5ZlWh+Mm1Qbajsq2eWO3wzLgcIcAC60alIhx7XivuUIt4LDfd3b/DEDEDNuNI1C9+9fH/BypOFG42SNx+A3tXFuwR5cCWjvAHX45d8XNy4xy9IwG62pS1Nck0tQ6tPV4YLO6fFIIVk+ADU1hGV38VMJ/KNViGzftXU7AxgHleKwqchQdJJ2NXi2BpyS3GYKGOjoPibmSU5W8zE3+obmZ70QlAzRaGrl1MFE2DMM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">
  <meta http-equiv="content-language" content="tr">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <meta name="theme-color" content="deepskyblue">
  <!--Meta Verileri-->
  <link rel="stylesheet" href="https://cdnweb.netlify.app/style.css" type="text/css" media="all" />
  <title>Arin Web</title>
  `;
  $("head").prepend(girdi);
  var html_text = `
  
  <div class="card-sites">
  <i class="fa fa-discord discord-icon"></i>
  <h1>Arin Web</h1>
  <img class="icon-arin" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGE2YjAxMDAwMDU5MDUwMDAwM2MwYjAwMDA1ZTBiMDAwMGFlMGIwMDAwZWQxNDAwMDBiNzFjMDAwMDA3MWUwMDAwMjkxZTAwMDA2MDFlMDAwMDc5MjkwMDAwAP/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIAUABQAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBQgEAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGqsAAAAAAeydFdfpe8pOft3dYqT02kKu81tCldJ0KOW/y6ljBQCyYIeEAAAAAAAAAB92WQO0LB/c/D9wAAAAAAfl+oryrelfxOW1qVefmAAAAAABsvdfBqZQAA0JvvmnIQX1HqZwWj5K5Fjeqrxc0g55ydTffMM2LoR2RACOSMc16npyhyNgAAAASDxdDH6+wAGqitOkvhGAAAAAABmZQwdI7nly3SxgPN6Rz1GuneejTgAAffxaRMpMACpfmshgAAAAAAAAGcCx7i5XsQuUDQb8ct/jbVTGAAbTpCA2IAK+lXOh+GAAAAAAAAAAAZwLgsrlrog3oPjnLpCCFIM4Hv8FlltfqAjhVkLzgAAAAAAAAAAAASuKZOqUUlY+foc1aq1KrM9BUL08fYFK3NzGeUAAAAAAAAAAAAAE3vPlvps9INDzp1TzKbu/6auUAi3P8Ab9PgAA3ZpH38ABupeVssjTEQZwLHrizCC632eMGTCZbcrZvtCAZvihrXLTAoi96kPTaVbWSAU9W09gQABm/avmBpK86AoU/EE82Ou8x4pHWwuamrrp08tw09cJVnh93hM3RB96Z0EPF1xKBXoUU9HnFgV/NC9gK1sqvj8LIq+0ACkIJY1cgDOJuWLR9jVaT33VtfZQT0+Ynnm9MwKTzaO9P1pGwK6MXDT1wlWeH3eEteB2DW5qwLLrSxiOxuTxgTSFz0u0Cv7Arc01w0LfQBWFSX3QpgH3fdZ7IgfnBM4ZktOq7spsmnt1P4El9tRWMVzixa6Fw09aZXXh9njLcrae1+a8Cxq5npqYxI44LSq28icAVPbFHEU6b5X6KN+Dz8xdS0UQoAAAGcAAAAABnAAAZwH30zSF+gDmy/ebDFq1VtzpNjIiEvHK2JLGgAAAAAAAAAAAAb0tWcfP0AVnUO/wBAM4F6TbnXog+gRvnzqeqSq2cAAAAAAAAAAAGb9hlvgCJS3nwjOAAzcdN+k6hajbjGRRcJ6lo8hTOAAAAAAAAABL8Xqfp9gNaRSk/Z4gAACQ9BcuTIvh+f6D5+hUlZdURQoBvdGYAAAAAANyaex5lMD8/0AfJ8UDsoMAAAAATO8eW5GdDtXtAD5g86HP0Y6o1pzOuyPFaJr5CKpT6yFrJkJS0lvDaEBnf2ABrz2UnrouYAAAAAAB7LepXJ1S58tglYAAAAAAACMVOWLT3hwAAAAAAAAAM4EisGnB0xsuVt4dGqV3RaCA+kmqFecnqsNKXT4KD0RclfRvBnAAAAAAf/xAAtEAABBAEDAgYBBAMBAAAAAAAEAgMFBgEAEBQgQBESEzA0NSEWIiMkFTEzJf/aAAgBAQABBQL30NrcyzCSD2mqsarSam5rFSxrNSTpVSXpyrGJ09ByLWnG1t57scZ4lYdWIc0LXwGNNtoaT7C20OJKgAH9GVZ5GihXxV9sEEQa5HVhpvTLTbKPedbQ6iRrDDujgCAV9knGVZiK0pemGW2G+ydbQ83L1nS0KQr3wQnjnoeGYjk9Ss4Tgiaj2NO2oVOl21Wv1WTr9VlaRbF6atQudDzce/pKkrx1S0SxIokQHwHvdiIx6SfACZBY6T5YQHRtoIc0SU+Sr2ByXh1BWclrUfMBm9RgrJjEzFOxr3tw8a5JECDNCMdEhIDgNydhJK9+MsBQeo6SGkG+glhslmbi3I1/2Y8Nw4qPDaBG6JuwIF0+84+72DTi2XISxJf6TBmix5QFyPK60JytUDGYjhOiwT/n7Wvz2WM4zjON5qOTIiOtqac6qhG+OeizTXnz21amuOrot8b5k9MaIo4xltLLW9pluM33FUlvVTutKXES4WQDuing+kLvKmoACfdW+93Da1NuQx6ZALe2g8gHcEdRRbSEtN72iQ5Z3dVyQ4J+6k4UmTFyGdtSxfMRvPm8GN7ytG8yN3uov52rY/HiN7iX6p/eVIv0JPedH5UVoZrLxCE4SnZxeG2yXskEd40vLTgzuHx9s6PZ45tYa9WZ3sz3ow3ZQcA0aFIjcM32qm96sPvbWvTmKU34nb3dzwG6oqPckX1JyhW8UAqRJ/Sj+v0oRoyvHDYz+N6vg9wUvK8lbY/Og66cQnNUI8JCJLB6aQ7+N7uj+ajp/bvdlf2+qtgcKPt4Holb0z7axyhgsp/nZLUfaHkrsMaycHtSfhm/M2golqPHkbQvK02KSwqIn2js2WH4at6Wvwk97un+rSPib3PPjK9NaA5shbpLLWkZbnIR1tTTu1M+2tv3O1Ocy5Fko9MjVJ+Gb8zVWEwVKXE/OXd4UjEvDvt5Ze2qP3O91+tpPxN7lj/1umLYRDQxb6yiakfxzLiB5HtqZ9tbfudq2xwIZ1fqO6pPwzfmao6ceWaX6ktvSV55NiT5Zrapfc73X6yjq/j3uyf73RVQOUfcj/FWsZ8MhOom4UhlY7+qZ9tLwGZA39JK0JAgx+rFOYKRtSfhm/M1R/8AjKfZb0n51l+72pqPGV3uyv6dJX4F73dv+LdOMqUKhuEhCHVPvbVc/iH3IDamfbWWRLHlYGwK89niXH+ik/DN+Zqj/wDGT+y3pPzrL93tSG/373hf76o76czvamfVh96wgfm2yTSSvoj5IU+IfR6T1UfaHkrM82/K6rs76GrCKA7vUSxxxS84UVqnksMNSCsKP3qD7TBlhcQ7MbVBn04ne4O+eWBe45mPzjYhrD7DqMtud4nGVKBY4we8q9yJHUCRyYre2C8eU7ysi8mV3liOLHbUorotAXLje8qQXHj97qV5WNoorhH4zjON58DgSHdQoOTz04wnG84XzZLeqG8mP3no/EgErGU57j/eq5HcALezG8ON6IQ7IB6c4Une2RX57iqRXqL6LAfz5DpqMl6rO6sYVixQ+QXe2gIhUg8hCW0b2uS4w3UM8sd+LORICbutpdbnoVYC+0goZyRcYaQw1vImNgimEOFk9cLJLjimHUPtbqxhSZuu5RrOPDPYwldU9ptCW0buuJabnZNUiT7NfmFR7ra0uI6JaEHP1IxZICvej40k9cRBDg9Ks4SmxTPOX7cDNLj1suoea6FJwrEhWxSNGwRwus48M+yFCHF6j6yMxpCUoT0OLS0ifm1G592Ilno1yPPYPZ6igRStEVcNenqo/jS61IJ1mAksaxASWdIrchnTNUIzoerCI0LHiC9ZxjATMzMPSK/fFIdFdiLGyRr/AH2ktYWBdGFPGPdlGTRQGo6dDM7GRmwwtSk4Ud24EwYFoO0sL0KcMV7ZJg42DLSOjR00aZ3g8scPpm0mI03bEaTaQs6xZY/WbLH6VaQcactjenrSWrREueRrOfHPvf/EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQMBAT8BSH//xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAECAQE/AUh//8QAQhAAAgEBAwYKBwYGAgMAAAAAAQIDAAQRIBIhIjFBURATIzJAUmFxscEUMEJyc4GhMzRikdHhBVNjgpOiJEOSsvH/2gAIAQEABj8C9fdGrMdwF9aNmce9o1pvCnzvrStSjuSs9sP+P96zWw/4/wB60bWp70rQkhf5kVnszMPwZ6ukRkP4hd0zJgjaRvwigbVIsQ3DSNZ4+NbfIb6ujRUG5Rd6m6RVYbiL6+y4tt8Zuq+yyrIOq2Y1k2iJoz2jo+RZ4y527hQa2txrdRcwrIiRUXco9eUkVXU7CKLWNuJfqnOtZNojK7jsPQwFBJOwUJf4hor/ACxr+dCOFFRBsHQykqh0OsGjL/D/APEfKirqVYawegcVZ1vO07BWV9pPtc+WO9jcK0rShO5NKuTilf6VoWQDves0EP1r7CH61p2VT3PXKwyp3XGtG0Kp3Po1epBG8Y9IZE2yQVxc69zDUfXZKaMY5z7qEUC3DadpxXTS3v1FzmiLKixLvOc1fPK8nefU5UErxn8Jq61Ksy79RoCOTJk6j5jiMU65Sn6Vn0oW5r+syV0Yxz33UsMC5KDDlWh7tyjWaKQchF2c4/P14WQ8fFubWPnV8D6W1DrGFoplDI2sVdnaFuY/qlhh1nWdwpYYRmGs7zvwmGyXSTbW2LRkmcu52noIeJirjURQht1yS7H2NhaGZb0amik1a1brD1AVRexzAVc32753PlhazWFtHU0g293RVs9ta+HUr9X9qvGcYCmqRc6NuNMkgyXU3EY/TZhmGaP9cLWSyNoapHG3s6OtltTcieax9n9sPpsQzjNJ+uKOBPaOc7hSRxi5FFwGD0WA8s40iPZHSRY7Q2mv2Z3jdgZHF6kXEVJCebrU7xha1ONOXMvu4HmbXqUbzTyynKdjeT0lXQ5LKbwaWX2xmcbjg49BykOf+3BFAut2upUQXKouGDi0PJQ6I7Tt6WuUeRk0X/XAVYXg5jU0B9k5u7Zwy2lhmQZK95wSOp5RtFO/pq5Rvkj0G8sEFqUf028vPhh6z6Z+eBYFOjCM/eem8WeZMMn57MFoT2snKHeOCOIa3YLQUahm4WdtSi81JK2t2LdNV15ym8VHKup1DYJ4uo5FQblvbBPvfQ/PofpFokcZV+SEqWzk5WQdfq0G2MlMDn+Yoby8qmfqx3fXBZousxb8v/uNo481ykk0VYXMMxGAwo6oQuVea+8Rfka+8RfkaLBBKv8ATN/0rPwyiy2iNIw3Ndb6l41st8o3tv4c1BmVYV/qa/yrNaIr+41fNHoddc4w2qLubBZZN6latbe6PHBZ03Jf9calxdLLpN5ChakGhLzvewN8I+Ipo4JyiZIzXCvvTfkKC21RInWUXEV6bZLuMAyr19scNo+J5VP77ePD6XbbhNdlaX/WKK2FAF676z8qvMynsKCuItaLHI2b8LV6RZh/x2OcdQ4JF60Z8RgszbnI+lWj3x4YF7Ih4nEC45KLSbyFR2WBrnvDsR9Kz3AuP/F6aNxcym4jhb4R8RT+6vC8bZwj3DuqVB7LEcFo+J5VP77ePApcXpEMs+VLY0Oiuk/acDxWjO45N/I08bc5CVPCnutgi+L5GrR7/lgX4Q88RebM13GSd+6pJpOc5vr0dzyc2rsaltkY0X0X7+FvhHxFP7q8Jln0cq+U37BTufaN/BaPieVT++3jwWttuiPGrWf6hGC0psKA/WrUB1r/AKcKe62CL4o8DVrXtU+OCBt8d31w8a45KHP3nZS2KM6tKTyHBeNdFZecwyH7G308UgudDceBvhHxFNOLQEvAF2TfX3wf4/3rjrS/GFc98mZRRs1k+y9p+tw2j4nlU/vt48Fq95atfxW8cE/w/OrV3jwHCx6sZ8sFnXfJf9KtCb0v+v74LLLuJXAAovJq9+coym7Wp5ZDe7m88PFueSm0T2HZSW2Mfhk8jwN8I+Ip44J3RMkZhXEfxB7webIdnfRtVmZ3u50d9/zGC0fE8qn99vHgtXvLVq+K3jgn+H51au8eA4bVL2BcFlj7GNRDrgrgkO2Mh8HH2qWNFizqHa680lns7hol0mKnMTh4q3TRo92Q+U11/bTplK+SbspdRpnnkWNeLIvY3bqd4XV0yRnU8C2a2NyPsufZ/amtNhtMHGa3jDjP3cM4nmjjJfNlNdsqYqbwXPjwWnj5o47yLsprqtLKb1MjEEd+CYzSJGDHrY3batDxsGQkXEHs4cvbI5Plgyf5aAedQy9RwcEkTanUrTI3OU3HpoA1moYeooGC0S7C5u7uCzvtC5J+WAyDmTDK+e3psd40ItM4LRLtC5u/hnspP9RfPywMyjlItMefTeOYac2f5bMENmBzsctu7hhm2KdLuoEZxgZQOSfSTu6WkXsc5z2UAMwGCWUcy/JXuGDimPKQ6Py2YCo+2TSQ+VEEXEdKvccvJnfs7MDBTysugvnhSX/rOi/dQIN4OA22AfFHn0kWycaC/Zjed+FmU8kmin64vQ5Tpx8ztXAQReDXGwi+zN/r2dHy5LxZl5x39lBUACjMAMHo0R5WUZ+xcaSxG51N4pZk16mXccDJIoZGzEGjLDe1mO3q9/Rct70sw1tv7BSxxKFRcwAwPPLqGobzup5pTe7H1GWM8TZnXfSyxNlIwvBwEMLwdhozfw8Xrti3d1Z+hLNbgUj2R7TQRAFUZgBgZ5GCoovJNZrxAnMXz9Vxct5sza/w9tB0IZTnBGEv9lP1xt765ZNDY66vX3QR6O1zqFB35WfrHUO7CSxuA21xFnN1mX/f1nFy3tZjs6vdSyRMGRtRGEhgCDsNFrPyD9nN/KieK4xOtHnrP6oFYshOtJmoNaTx77tS0FQBVGoDCXkYKozkmjDZ71s3/v67R0oTzozXGWdr967Rj5eBH7SM9ck8kR77xXI2iNveF1Zljbuevu3+wr7t/sKzpGve9craI190E1y0ksn0FchAinfdnx8ZaHyRs3msnmQDUn69AEkDlHG0UI7ZdFL1vZP6dFMdmumm/wBRRktDl28OhhVbjIuo1AZXFS9V/wBegkF+Ml6iZ6K38VD1F8+jgRy5SdR84q61xNGd65xXITo/YDn9Xy8yJ3miLLG0p3nRFEPLkJ1UzDpnJ2mS7cc/jXKJFJ8rq5WysPdes6Tj+0frWuQf2VzpD/ZWZJz/AGj9a5Oysfea6uSjij+tcpaXu3Lo+FZ/X//EACkQAQABAQUHBQEBAAAAAAAAAAERACAhMUFRYXGBkaGxwRAwQNHw4fH/2gAIAQEAAT8h9/bGtKopF1j3VgDb66FO68PmvDFHlCgvWA81fxW8dqmXWCO2tn8UXX5myHkkb9K/Qq3So9Uv8DCtnMQOns7oVpUuk7/Bw6VPfsmcO1aIEwnc5/H1A4w3jlXLnB44vShYzhEPfxeZThoHigHkq/rMG/dPw16NAErUpHGGvb2W6sDgBwfDu5sjkagGzmr3eGmfDAIR+AVTj5DqtAIClyw2aLakAYqwVMhLaOlNRt5g96b1rfFPnP8AVGd+W+jdcjxTobWg+KhBTqd11GXvBJLb9iC6X7nUpHCnZHUfe2oXl33dlZkPTF1W1PAH9uXGv2Ov0Kl3t+HD2d5wEp40qf59KhRb+RrwtGP5pajk1jy67Mdjo+5f3vcFw+6IhzLtdtmC1Os3ZT6FbofM+lKqqyvul1MLDdPyPtWEMJuvD82QNtCVikX8Hb7R7ZiYZy1AexjHOVl9uFxPvax1FvL8FxuyuEptzLsPfaPSzCqnEdTbQ1zkF2p7CWmwMVoIAweG2FhQJcKZQf1ZsbfirExjjsv5FElEJEzsJ2PCRuaS6grJty+NBdc/HnZa6xeHK2a/HS8CjPdH8izovxMzLw5WrqzyQ0fUomQWJOPeFj+X5KTIV7ldx2sGAaRmNTUJZWbh9cLO2wDIfb2LEKaOxylAyQzfkunEBiJRugur+YcbGMy9bc3LHnYwGVLQzeVRnmLQLE3OZg4jxw+Xgah2WnB92CcCgcypmIv7mr+j1/tYo6d7F0BzpnwJab/mRPnMjFy7WIsQXnX1I+kD43SLH9JCnpHzYJ48o8jjYjEkdWePTAVBxYoHYOBs9WkhjbCsa/HF+at8DbaM1gTQ4k+oERwrTkHdN3Sr1EyvAu6xYlgwQOK/pPwzckiARDEs7aXDlmoxO/ty2ys7nRsQKQdHoJ8+wPqxep4RFs5cGXA0OLTWkyMmw/IkFi5Pv18sCh8WR5UFIITL1hNiwdTEppeGbNOPqFAJXKmQHCUci+scmhCg7/rOrlxs3w1PqPixH/JSPmuMrEdyy8/8W8LBT4n0HdrS64Zf0dmyUKdVDmG6gH8fKmRVv5RYNKSeln3/AOevSKftavQvbq1nSwfZ/lDG90U7jJxqEB2B2oXdjZ7G/DdQzC4fkubGhHRWCT+0P4oXuysIXaJfGRaS/Z2pNnSMhuc7+BUCuFdh/ejTKnnZJYKfraet7iM2oGOrRYaF4Pp0in7Wr0uQhTm/1fwqLsRDmYHDHj6jDJjT1xFHFu5nkrr/AJAx6qA1LpYF/oaHd7NhAmq9bIJYL2riM2z8QU5ctWzZUnCu5cDnhyrZUJlleJ2sFP1tPXErgdBd0J402MlfFn06RT9rV6bUVB1WeiGPFgn1A/1RYMhzB9TOx7VhXGtRJoOgsIYN3RL7sxU6FzhkvPCsAiMWv4eXoxqgZEyqKjgU/wANTDhL1KHVZDlG+ipN2UraI+6eNv6W4bPXpFP2tXp+Jo1+Xqsfn2LGbStXNFiLWHJ/VX54cd1gn1HcQfDYUIqAM2lUfF/l2KltC219YuFFJhmPHGoG4GIvxs5epQEMUe7CjBD9rabG2hoBSq4HxY6RT9rV6fiaNfr67H59ixmnQYC6r2LEosk8YPDUmYdPnxYi4kBzh6LYHh+A0PL6rEv+TI8jvYLqk/DIloM8HfUYkUJO0KwCFgTNym7oSYYeiTJwdJfyKZ8rAdrZn6jnYgpFDKKRMyXoboXdSudaLk2CRJWIP5AYWGtXgvBhu5+t/Tok/hsXHbofa/1W0Mdw0gEvH1xqYcSKH+FFtLvmiHKQBrRAZ7vi/rYj5ngxcdD0kxnjO54sQliB6Ptx+bP5Oh4dYsXiwvjXHV9eUR0sF4lxUycu3zcDT48j/p42MgZGxcde3q963Uau56UzIhImfqkkNJB157WXD5cGmO4HHnhxoSwEAZHq3FSskdjc8eNiHnX7bneOFg3TmL7fVKWVCOI/JBQBK1DQoe04O9i5M3oGbl3ss5cB1f1jQhhSJmWHLnuD+8fkvfvXn6B33WFglwq+C48Z8X1ayM0p5HDtusCWBCOCUmeu7b1bNH48WFdCeiiGvAXBY3Sc43PDnbvc/FRWnkosBmCCuShhW2nZ2NvxQE47T9MaH+2hWEIuYzMoVejidmgbPYBybo2u8ofUMM7ApBQhIlT242d5N1IgES5H4IThTWLHA3+h1oBZwEAWMiIAAqd4QTu2vtSBXuYq0eSgNnISJZPA2D0M+9Y25Zp8cuPvzRI0HGq5ed8PJebIpBSpgCmVCMcJa7tPcITvfmev0oMKSq5s3HQkJGpYL5GV4cKmRF+JjSIBEyfZBWDGpgW2X7akHDcOGdXLEAQFk7ByUAU6YG9wd7Zs96+ubeLnaaNBA6q5dEt4pX4HGpV0p5V/WpTir96S5beYrPzu++s7G8/NL8pvE1C/rHSoBR0k6V/WoGPbbmb7asmSzdAzrFR0m47dT8D/ABrwOpQOW5RCARkfiGxXdI3u1z3FLFOuA0DI+HdIO3Dc5VOs7Pid2B+Dcj21cXArF2ZuO9n8eSIfxZcKMP0fGJ1oIWn/AAMfbn2z7/ljX60+61Oov97N+WKMjDUQRmbHlSIDtZPpTglM0HuV3rSisd+oLDcqdokoYdlQ9g1d42sLqcBrMhREUq5vv//aAAwDAQACAAMAAAAQc888880YM8Mcg488888888880U8888888sM888888880c84408cY8888888888oc8gc888888MU8sY8884c8Ic88888888sk8sY88s8gc8888888888sY8c0sc8088888888888840scM888888888888888808Ec8k88888488488w88I84U8088EQ88Mg8UEMY0884U8888U484gQ8U08o8s8s08Y8c84Y40U4Uc8s088408c8888c88888c88cU8g80oU8888888888888c40s08I088888888888k8gc8M0sY0888888888oc4M888I88M48888888E88888888M08ssww8wkc84Q8888888YQ888888880k888888888sM80448sUc88888/8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAwEBPxBIf//EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQIBAT8QSH//xAApEAEAAQIEBQUBAQEBAAAAAAABEQAhMUFRYSBxgZGhEDBAscHw8dHh/9oACAEBAAE/EH3yaBh2QBo5B5sHRj4q46QeyQ+ajOXfeivwlpkDyaTHKvrXRGwH3EfNRozU/Rr4r/FmUA+YXfMUcxYDdSjErdPoKIe7Q2dxA9MeNDD3AI6AqPYZNOIk6IlFuzL6HnUYWLgdMuTzpLvWJR4ToX48JcSEg6vbqeVCujDIq0bPC50e74ALoe+AMoK54bU2t5ZlWh+Mm1Qbajsq2eWO3wzLgcIcAC60alIhx7XivuUIt4LDfd3b/DEDEDNuNI1C9+9fH/BypOFG42SNx+A3tXFuwR5cCWjvAHX45d8XNy4xy9IwG62pS1Nck0tQ6tPV4YLO6fFIIVk+ADU1hGV38VMJ/KNViGzftXU7AxgHleKwqchQdJJ2NXi2BpyS3GYKGOjoPibmSU5W8zE3+obmZ70QlAzRaGrl1MFE2DMM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"/>
  <a href="https://arinweb.epizy.com">Arin Web Sitesine Git</a>
  <a href="https://instagram.com/arin_web">İnstagram</a>
  <a href="https://discord.gg/KUXkM86V">Discord Davet Bağlantısına Git</a>
  <b>Discord</b>
  </div>
  `;
  $("body").html(html_text);
  $("body").append(`<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`);
  //window.location.href="https://arinweb.epizy.com";
}
  //alert('Arin Web');
app();
//setTimeout(app,3000);
