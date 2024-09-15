
const menuX = 50
const menuY = 50
const topFontSize = 36
const optionsFontSize = 15
const headersFontSize = 11
const larguraMenu = 350
const maxOptions = 15
var scrollerColor = '#ffffff'
var bannerColor1 = '#0066ff'
var bannerColor2 = '#86adf3'
var bgColor = '#000000'
var fontColor = '#ffffff'
var topFontColor = '#ffffff'
var hoverFontColor = '#000000'
var boolIcon = '&#10687;' //'&#11044;'

var exibirLogs = false

var consoles = {
    log(t) {
        if (exibirLogs) { console.log(t) }
    }
}
consoles.log('1')
//---------------------
//não mexer
var addStyle = false
var currentOption = 0
var totalOptions = 0
var loops = 0
var textoInfo = ''
//---------------------

function createMenu(titulo, voids) {

    currentOption = 0
    totalOptions = 0

    if (addStyle == false) {
        const estilo = document.createElement('style')
        estilo.innerText = `
                            *::-webkit-scrollbar{
                                width:0px;
                            } 
                            *{
                                user-select:none;
                                -webkit-tap-highlight-color: transparent;
                                -webkit-touch-callout: none;
                            }
                            input{
                                -webkit-appearance: none;
                                width: 100;
                                background: transparent;
                                height: 20px;
                                border: none;
                            }
                            input::-webkit-slider-runnable-track {
                                background: rgb(134, 133, 133);
                                border-radius: 5px;
                            }
                            input::-webkit-slider-thumb {
                                -webkit-appearance: none;
                                width: 15px;
                                height: 15px;
                                background: #0066ff;
                                cursor: pointer;
                                border-radius: 100%;
                            }
                            
                            `
        document.head.append(estilo)
        addStyle = true
    }



    if (document.getElementById('banner')) {
        document.getElementById('banner').innerHTML = fonteCursiva(rockstarTag(titulo))
    } else {
        const banner = document.createElement('div')
        banner.id = 'banner'
        banner.style.position = 'fixed'
        banner.style.left = menuX + 'px'
        banner.style.top = menuY + 'px'
        banner.style.width = larguraMenu + 'px'
        banner.style.fontSize = topFontSize + 'px'
        // banner.style.fontFamily = 'cursive'
        banner.style.textAlign = 'center'

        banner.style.paddingTop = (topFontSize / 4) + 'px'
        banner.style.paddingBottom = (topFontSize / 4) + 'px'




        banner.style.background = 'linear-gradient(to right,' + bannerColor1 + ', ' + bannerColor2 + ')'
        //banner.style.background = 'linear-gradient(to right,#0066ff, #86adf3)'
        banner.innerHTML = fonteCursiva(rockstarTag(titulo))

        document.body.append(banner)
    }

    //------------------------------
    if (!document.getElementById('headers')) {
        const contador = document.createElement('div')
        contador.id = 'headers'
        contador.style.position = 'fixed'
        contador.style.left = menuX + 'px'
        contador.style.top = (menuY + banner.offsetHeight) + 'px'
        contador.style.width = (larguraMenu - 10) + 'px'

        contador.style.backgroundColor = bgColor
        contador.style.color = fontColor
        contador.style.padding = '5px'
        contador.style.fontSize = headersFontSize + 'px'
        contador.style.fontFamily = 'Segoe UI'
        contador.style.textAlign = 'right'
        contador.innerHTML = '&nbsp;'
        document.body.append(contador)
    } else {
        document.getElementById('headers').innerHTML = ''
    }

    //-------------------------------

    if (document.getElementById('corpo')) {
        document.getElementById('corpo').innerHTML = ''
    } else {
        const corpo = document.createElement('div')
        corpo.id = 'corpo'
        //corpo.className = 'corpo'
        corpo.style.position = 'fixed'
        corpo.style.left = menuX + 'px'
        corpo.style.top = (banner.offsetHeight + menuY + document.getElementById('headers').offsetHeight) + 'px'
        corpo.style.width = larguraMenu + 'px'
        corpo.style.background = bgColor
        corpo.style.color = fontColor
        corpo.style.fontSize = optionsFontSize + 'px'
        corpo.style.fontFamily = 'Segoe UI'
        corpo.style.cursor = 'pointer'
        corpo.style.overflowY = 'auto'

        corpo.style.maxHeight = (25 * maxOptions) + 'px'

        document.body.append(corpo)
    }
    //------------------------------------------------
    voids()

    if (document.getElementById('infoBox')) {
        document.getElementById('infoBox').innerHTML = ''
    } else {
        const infoBox = document.createElement('div')
        infoBox.id = 'infoBox'
        infoBox.style.position = 'fixed'
        infoBox.style.left = menuX + 'px'

        var topo = document.getElementById('corpo').offsetHeight +
            menuY +
            document.getElementById('headers').offsetHeight +
            document.getElementById('banner').offsetHeight + 5

        infoBox.style.top = topo + 'px'

        infoBox.style.width = (larguraMenu - 10) + 'px'
        infoBox.style.background = bgColor
        infoBox.style.color = fontColor
        infoBox.style.padding = '5px'
        infoBox.style.fontSize = (optionsFontSize - 3) + 'px'
        infoBox.style.fontFamily = 'Segoe UI'
        infoBox.style.display = 'none'
        document.body.append(infoBox)
    }
}



createHook(() => {
    if (totalOptions !== 0) {
        if (document.getElementById('headers')) {
            document.getElementById('headers').innerHTML = currentOption + '/' + totalOptions
        }


        if (document.getElementById('infoBox')) {
            if (textoInfo !== '') {
                document.getElementById('infoBox').innerHTML = textoInfo
                document.getElementById('infoBox').style.display = 'block'
            } else {
                document.getElementById('infoBox').style.display = 'none'
            }
        }
    }

    if (document.getElementById('banner')) {
        document.getElementById('banner').style.color = topFontColor
        document.getElementById('banner').style.left = menuX + 'px'
        document.getElementById('banner').style.top = menuY + 'px'
        document.getElementById('banner').style.width = larguraMenu + 'px'
        document.getElementById('banner').style.fontSize = topFontSize + 'px'
        document.getElementById('banner').style.paddingTop = (topFontSize / 4) + 'px'
        document.getElementById('banner').style.paddingBottom = (topFontSize / 4) + 'px'
        document.getElementById('banner').style.background = 'linear-gradient(to right,' + bannerColor1 + ', ' + bannerColor2 + ')'
    }

    if (document.getElementById('headers')) {
        document.getElementById('headers').style.backgroundColor = bgColor
        document.getElementById('headers').style.left = menuX + 'px'
        document.getElementById('headers').style.top = (menuY + document.getElementById('banner').offsetHeight) + 'px'
        document.getElementById('headers').style.width = (larguraMenu - 10) + 'px'
        document.getElementById('headers').style.fontSize = headersFontSize + 'px'
        document.getElementById('headers').style.color = fontColor
    }
    if (document.getElementById('corpo')) {
        document.getElementById('corpo').style.left = menuX + 'px'
        document.getElementById('corpo').style.top = (banner.offsetHeight + menuY + document.getElementById('headers').offsetHeight) + 'px'
        document.getElementById('corpo').style.width = larguraMenu + 'px'
        document.getElementById('corpo').style.fontSize = optionsFontSize + 'px'
        document.getElementById('corpo').style.maxHeight = (25 * maxOptions) + 'px'
        document.getElementById('corpo').style.background = bgColor
    }
    if (document.getElementById('infoBox')) {
        var topo = document.getElementById('corpo').offsetHeight +
            menuY +
            document.getElementById('headers').offsetHeight +
            document.getElementById('banner').offsetHeight + 5

        document.getElementById('infoBox').style.top = topo + 'px'

        document.getElementById('infoBox').style.width = (larguraMenu - 10) + 'px'
        document.getElementById('infoBox').style.fontSize = (optionsFontSize - 3) + 'px'
    }

})












function addOption(text, info = '', on_click = () => { }) {
    const opt = document.createElement('div')

    //opt.style.width = '190px'
    opt.style.padding = '5px'
    opt.style.background = 'transparent'
    opt.style.color = fontColor
    opt.style.fontSize = optionsFontSize + 'px'
    opt.style.fontFamily = 'Segoe UI'
    opt.style.cursor = 'pointer'
    opt.innerHTML = rockstarTag(text)

    document.getElementById('corpo').append(opt)

    totalOptions++
    var opcaoid = totalOptions;

    var mouseEmCima = false

    opt.addEventListener('mouseleave', () => {
        mouseEmCima = false
    })
    opt.addEventListener('mouseover', () => {
        mouseEmCima = true
    })
    opt.addEventListener('click', (e) => {
        on_click(e)
    })

    createHook(() => {
        if (mouseEmCima) {
            opt.style.background = 'linear-gradient(to right,' + scrollerColor + ', transparent)'
            opt.style.color = hoverFontColor
            currentOption = opcaoid
            textoInfo = rockstarTag(info)
        } else {
            opt.style.background = 'transparent'
            opt.style.color = fontColor
            textoInfo = ''
            currentOption = 0
        }
    }, 1);

    return opt
}











function addInt(texto, vari, min, max, info = '', voids = () => { }) {

    var id = totalOptions

    const v = addOption(texto + `
        <div style="color:${fontColor};float:right" id="aumentar_${id}">&nbsp;&nbsp;&#9654;</div>
        <div style="color:${fontColor};float:right" id="var_${id}">&nbsp;${vari}&nbsp;</div>
        <div style="color:${fontColor};float:right" id="diminuir_${id}">&#9664;&nbsp;&nbsp;</div>
        `, info)

    createHook(() => {
        if (document.getElementById('var_' + id)) {
            document.getElementById('var_' + id).innerHTML = '&nbsp;' + vari + '&nbsp;'
        }

    }, 100);

    document.getElementById('diminuir_' + id).addEventListener('click', (e) => {
        e.stopPropagation()
        if (vari == min) {
            vari = max
        } else {
            vari--
        }
        voids(vari)
    })

    document.getElementById('aumentar_' + id).addEventListener('click', (e) => {
        e.stopPropagation()
        if (vari == max) {
            vari = min
        } else {
            vari++
        }
        voids(vari)
    })


    return v
}





function addBool(texto, vari, info = '', voids = () => { }) {
    const v = addOption(texto + '<span style="float:right">&#128308;</span>', info, () => {
        vari = !vari
        voids(vari)
    })
    createHook(() => {
        if (vari) {
            v.innerHTML = rockstarTag(texto + '<span style="float:right;color:lime">' + boolIcon + '</span>')
        } else {
            v.innerHTML = rockstarTag(texto + '<span style="float:right;color:red">' + boolIcon + '</span>')
        }
    });
    return v
}



function rockstarTag(str) {
    var str2 = str.replace('~r~', '<span style="color:red">')
    str2 = str2.replace('~g~', '<span style="color:lime">')
    str2 = str2.replace('~y~', '<span style="color:yellow">')
    str2 = str2.replace('~b~', '<span style="color:cyan">')
    str2 = str2.replace('~p~', '<span style="color:purple">')
    str2 = str2.replace('~s~', '</span>')
    return str2
}

function addSubmenu(texto, submenu_function, info = '', voids = () => { }) {
    const v = addOption(texto + `
    <b style="color:${fontColor};float:right">&#9654;</b>
    `, info, () => {
        textoInfo = ''
        document.getElementById('corpo').innerHTML = ''
        voids()
        submenu_function()
    })
    return v
}

function addSideBox(w, h) {
    const lateral = document.createElement('div')
    lateral.id = 'lateral'
    lateral.style.position = 'fixed'
    lateral.style.left = (menuX + larguraMenu + 5) + 'px'
    lateral.style.top = menuY + 'px'
    lateral.style.width = w + 'px'
    lateral.style.height = h + 'px'
    lateral.style.fontSize = optionsFontSize + 'px'
    lateral.style.fontFamily = 'Segoe UI'
    lateral.style.padding = (optionsFontSize / 4) + 'px'
    lateral.style.backgroundColor = 'black'
    document.body.append(lateral)
}

function addColor(texto, valor, info = '', voids = () => { }) {
    var id = totalOptions
    const v = addOption(texto + `
    <div style="float:right"><input type="color" value="${valor}" id="${id}"></div>
    `, info)

    document.getElementById(id).addEventListener('input', (e) => {
        voids(document.getElementById(id).value)
    })
    return v
}


function addRange(texto, valor, min, max, info = '', voids = () => { }) {
    var id = totalOptions
    const v = addOption(texto + `
    <div style="float:right"><input type="range" style="height:${optionsFontSize - 3}px;" value="${valor}" min="${min}"  max="${max}" id="${id}"></div>
    `, info)

    document.getElementById(id).addEventListener('input', (e) => {
        voids(document.getElementById(id).value)
    })
    return v
}

function addNumber(texto, valor, min, max, info = '', voids = () => { }) {
    var id = totalOptions
    const v = addOption(texto + `
    <div style="float:right"><input type="number" style="height:${optionsFontSize - 3}px;border:1px solid ${fontColor};color:${fontColor};text-align:center" value="${valor}" min="${min}"  max="${max}" id="${id}"></div>
    `, info)

    document.getElementById(id).addEventListener('input', (e) => {
        voids(document.getElementById(id).value)
    })
    return v
}


function addText(texto, valor, placeholder, info = '', voids = () => { }) {
    var id = totalOptions
    const v = addOption(texto + `
    <div style="float:right">
    <input type="text" style="height:${optionsFontSize - 3}px;border:1px solid ${fontColor};color:${fontColor}" value="${valor}" placeholder="${placeholder}"  id="${id}">
    </div>
    `, info)

    document.getElementById(id).addEventListener('input', (e) => {
        voids(document.getElementById(id).value)
    })
    return v
}


function add2Color(texto, valor1, valor2, info = '', voids = () => { }) {
    var id = totalOptions
    const v = addOption(texto + `
    <div style="float:right"><input type="color" value="${valor2}" id="2${id}"></div>
    <div style="float:right"><input type="color" value="${valor1}" id="1${id}"></div>
    `, info)

    document.getElementById('1' + id).addEventListener('input', (x, y) => {
        voids(document.getElementById('1' + id).value, document.getElementById('2' + id).value)
    })
    document.getElementById('2' + id).addEventListener('input', (x, y) => {
        voids(document.getElementById('1' + id).value, document.getElementById('2' + id).value)
    })
    return v
}

function addBreak(texto = '') {
    const opt = document.createElement('div')

    //opt.style.width = '190px'
    opt.style.padding = '5px'
    opt.style.background = bgColor
    opt.style.color = fontColor
    opt.style.fontSize = optionsFontSize + 'px'
    opt.style.fontFamily = 'Segoe UI'
    opt.style.cursor = 'pointer'
    opt.style.textAlign = 'center'

    if (texto !== '') {
        opt.innerHTML = '--&nbsp;' + rockstarTag(texto) + '&nbsp;--'
    } else {
        opt.innerHTML = '' + rockstarTag(texto) + '&nbsp;&nbsp;'
    }



    document.getElementById('corpo').append(opt)

    totalOptions++

    opt.addEventListener('mouseover', () => {
        opt.style.background = 'transparent'
        opt.style.backgroundColor = 'transparent'
    })
    return opt
}

function addInfo(texto = '', centerText = false) {
    const opt = document.createElement('div')
    opt.style.padding = '10px'
    opt.style.background = bgColor
    opt.style.color = fontColor
    opt.style.fontSize = optionsFontSize + 'px'
    opt.style.fontFamily = 'Segoe UI'
    opt.style.cursor = 'pointer'
    opt.style.textAlign = 'center'
    centerText ? opt.style.textAlign = 'center' : opt.style.textAlign = 'left'
    opt.innerHTML = '' + rockstarTag(texto) + '&nbsp;&nbsp;'
    document.getElementById('corpo').append(opt)
    return opt
}

function addButton(texto, btnText, info = '', voids = () => { }) {
    const v = addOption(texto)

    const div = document.createElement('div')
    div.style.float = 'right'

    const bt = document.createElement('button')
    bt.innerHTML = btnText
    bt.style.cursor = 'pointer'
    bt.style.fontSize = (optionsFontSize - 3) + 'px'
    bt.style.color = fontColor
    bt.style.border = '1px solid ' + fontColor

    div.append(bt)
    v.append(div)

    bt.addEventListener('click', () => {
        voids()
    })
    return v
}

function addTextAndButton(texto, impText, btnText, info = '', voids = () => { }) {
    const v = addOption(texto)

    const div = document.createElement('div')
    div.style.float = 'right'

    const imp = document.createElement('input')
    imp.style.cursor = 'pointer'
    imp.style.border = '1px solid ' + fontColor
    imp.style.height = (optionsFontSize - 3) + 'px'
    imp.style.fontSize = (optionsFontSize - 3) + 'px'
    imp.style.width = (optionsFontSize * 5) + 'px'
    imp.value = impText
    imp.style.color = fontColor

    const bt = document.createElement('button')
    bt.innerHTML = btnText
    bt.style.cursor = 'pointer'
    bt.style.border = '1px solid ' + fontColor
    bt.style.fontSize = (optionsFontSize - 3) + 'px'
    bt.style.marginLeft = '3px'
    bt.style.color = fontColor

    div.append(imp)
    div.append(bt)
    v.append(div)

    bt.addEventListener('click', () => {
        voids(imp.value)
    })
    return v
}

function createHook(voids, time = 1) {
    loops++
    setInterval(() => {
        voids()
    }, time)
}

function fonteCursiva(s) {
    var a = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
    ]
    var ponteiro = 120016//ponteiro fixo
    for (let i = 0; i < s.length; i++) {
        for (let i2 = 0; i2 < a.length; i2++) {
            if (s[i] === a[i2]) {
                s = s.replace(s[i], '&#' + (ponteiro + i2) + ';')
            }
        }
    }
    return s;
}