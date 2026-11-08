// ============================================================
// ASCII ARTS — v0.3
// ============================================================
// Las paletas por defecto se aplican vía LOGO_PALETTE_DEFAULT
// y se pueden sobrescribir por-ASCII con THEMES.

const ASCII_ARTS = {
  arch: `                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++o$2oooooooo$1oooo/\`
         ./$2ooosssso++osssssso$1+\`
$2       .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/`,

  ubuntu: `                             ....
              $1.',:clooo:  $2.:looooo:.
           $1.;looooooooc  $2.oooooooooo'
        $1.;looooool:,''.  $2:ooooooooooc
       $1;looool;.         $2'oooooooooo,
      $1;clool'             $2.cooooooc.  $1,,
         $1...                $2......  $1.:oo,
  $2.;clol:,.                        $1.loooo'
 $2:ooooooooo,                        $1'ooool
$2'ooooooooooo.                        $1loooo.
$2'ooooooooool                         $1coooo.
 $2,loooooooc.                        $1.loooo.
   $2.,;;;'.                          $1;ooooc
       $1...                         $1,ooool.
    $1.cooooc.              $2..',,'.  $1.cooo.
      $1;ooooo:.           $2;oooooooc.  $1:l.
       $1.coooooc,..      $2coooooooooo.
         $1.:ooooooolc:. $2.ooooooooooo'
           $1.':loooooo;  $2,oooooooooc
               $1..';::c'  $2.;loooo:'`,

  debian: `        $2_,met$$$$$$$$$$gg.
     ,g$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$P.
   ,g$$$$P""       """Y$$$$.".
  ,$$$$P'              \`$$$$$$.
',$$$$P       ,ggs.     \`$$$$b:
\`d$$$$'     ,$P"'   $1.$2    $$$$$$
 $$$$P      d$'     $1,$2    $$$$P
 $$$$:      $$$.   $1-$2    ,d$$$$'
 $$$$;      Y$b._   _,d$P'
 Y$$$$.    $1\`.$2\`"Y$$$$$$$$P"'
 \`$$$$b      $1"-.__
  $2\`Y$$$$b
   \`Y$$$$.
     \`$$$$b.
       \`Y$$$$b.
         \`"Y$$b._
             \`""""`,

  fedora: `             .',;::::;,'.
         .';:cccccccccccc:;,.
      .;cccccccccccccccccccccc;.
    .:cccccccccccccccccccccccccc:.
  .;ccccccccccccc;$2.:dddl:.$1;ccccccc;.
 .:ccccccccccccc;$2OWMKOOXMWd$1;ccccccc:.
.:ccccccccccccc;$2KMMc$1;cc;$2xMMc$1;ccccccc:.
,cccccccccccccc;$2MMM.$1;cc;$2;WW:$1;cccccccc,
:cccccccccccccc;$2MMM.$1;cccccccccccccccc:
:ccccccc;$2oxOOOo$1;$2MMM000k.$1;cccccccccccc:
cccccc;$20MMKxdd:$1;$2MMMkddc.$1;cccccccccccc;
ccccc;$2XMO'$1;cccc;$2MMM.$1;cccccccccccccccc'
ccccc;$2MMo$1;ccccc;$2MMW.$1;ccccccccccccccc;
ccccc;$20MNc.$1ccc$2.xMMd$1;ccccccccccccccc;
cccccc;$2dNMWXXXWM0:$1;cccccccccccccc:,
cccccccc;$2.:odl:.$1;cccccccccccccc:,.
ccccccccccccccccccccccccccccc:'.
:ccccccccccccccccccccccc:;,..
 ':cccccccccccccccc::;,.`,

  mint: `MMMMMMMMMMMMMMMMMMMMMMMMMmds.
MMMMMMMMMMMMMMMMMMMMMMMMNMMMMNNdy.
MMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMNy.
MMMMMMMM$2................$1MMMMMMMMMMMMM.
MMMMMMMM$2:dddddddddddddddd$1MMMMMMMMMMMM.
MMMMMMMM$2:dddddddddddddddd$1MMMMMMMMMMMM.
MMMMMMMM$2:dddddddddddddddd$1MMMMMMMMMMMM.
MMMMMMMM$2:dddddddd$1MMMMMMMMMMMMMMMMMMMMM.
MMMMMMMM$2:dddddddd$1MMMMMMMMMMMMMMMMMMMMM.
MMMMMMMM$2:dddddddd$1MMMMMMMMMMMMMMMMMMMMM.
MMMMMMMM$2:dddddddd$1MMMMMMMM$2dddddddd$1MMMMM.
MMMMMMMM$2:dddddddd$1MMMMMMMM$2dddddddd$1MMMMM.
MMMMMMMM$2:dddddddd$1MMMMMMMM$2dddddddd$1MMMMM.
MMMMMMMM$2:dddddddd$1MMMMMMMM$2dddddddd$1MMMMM.
MMMMMMMM$2:dddddddd$1MMMMMMMM$2dddddddd$1MMMMM.
MMMMMMMM$2:dddddddd$1MMMMMMMM$2dddddddd$1MMMMM.
MMMMMMMM$2......$1MMMMMMMMMMM$2dddddddd$1MMMMM.
MMMMMMMMMMMMMMMMMMMMMMMMM$2dddddddd$1MMMMM.
MMMMMMMMMMMMMMMMMMMMMMMMM$2dddddddd$1MMMMM.
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.`,

  opensuse: `           $2.;ldkO0000Okdl;.
       .;d00xl:^''''''^:ok00d;.
     .d00l'                'o00d.
   .d0Kd'$1  Okxol:;,.          $2:O0d
  .OK$1KKK0kOKKKKKKKKKKOxo:,      $2lKO.
 ,0K$1KKKKKKKKKKKKKKK0P^$2,,,$1^dx:$2    ;00,
.OK$1KKKKKKKKKKKKKKKk'$2.oOPPb.$1'0k.$2   cKO.
:KK$1KKKKKKKKKKKKKKK: $2kKx..dd $1lKd$2   'OK:
dKK$1KKKKKKKKKOx0KKKd $2^0KKKO' $1kKKc$2   dKd
dKK$1KKKKKKKKKK;.;oOKx,..$2^$1..;kKKK0.$2  dKd
:KK$1KKKKKKKKKK0o;...^cdxxOK0O/^^'  $2.0K:
 kKK$1KKKKKKKKKKKKK0x;,,......,;od  $2lKk
 '0K$1KKKKKKKKKKKKKKKKKKKK00KKOo^  $2c00'
  'kK$1KKOxddxkOO00000Okxoc;''   $2.dKk'
    l0Ko.                    .c00l'
     'l0Kk:.              .;xK0l'
        'lkK0xl:;,,,,;:ldO0kl'
            '^:ldxkkkkxdl:^'`,

  alpine: `       .hddddddddddddddddddddddh.
      :dddddddddddddddddddddddddd:
     /dddddddddddddddddddddddddddd/
    +dddddddddddddddddddddddddddddd+
  \`sdddddddddddddddddddddddddddddddds\`
 \`ydddddddddddd++hdddddddddddddddddddy\`
.hddddddddddd+\`  \`+ddddh:-sdddddddddddh.
hdddddddddd+\`      \`+y:    .sddddddddddh
ddddddddh+\`   \`//\`   \`.\`     -sddddddddd
ddddddh+\`   \`/hddh/\`   \`:s-    -sddddddd
ddddh+\`   \`/+/dddddh/\`   \`+s-    -sddddd
ddd+\`   \`/o\` :dddddddh/\`   \`oy-    .yddd
hdddyo+ohddyosdddddddddho+oydddy++ohdddh
.hddddddddddddddddddddddddddddddddddddh.
 \`yddddddddddddddddddddddddddddddddddy\`
  \`sdddddddddddddddddddddddddddddddds\`
    +dddddddddddddddddddddddddddddd+
     /dddddddddddddddddddddddddddd/
      :dddddddddddddddddddddddddd:
       .hddddddddddddddddddddddh.`,

  gentoo: `         -/oyddmdhs+:.
     -o$2dNMMMMMMMMNNmhy+$1-\`
   -y$2NMMMMMMMMMMMNNNmmdhy$1+-
 \`o$2mMMMMMMMMMMMMNmdmmmmddhhy$1/\`
 om$2MMMMMMMMMMMN$1hhyyyo$2hmdddhhhd$1o\`
.y$2dMMMMMMMMMMd$1hs++so/s$2mdddhhhhdm$1+\`
 oy$2hdmNMMMMMMMN$1dyooy$2dmddddhhhhyhN$1d.
  :o$2yhhdNNMMMMMMMNNNmmdddhhhhhyym$1Mh
    .:$2+sydNMMMMMNNNmmmdddhhhhhhmM$1my
       /m$2MMMMMMNNNmmmdddhhhhhmMNh$1s:
    \`o$2NMMMMMMMNNNmmmddddhhdmMNhs$1+\`
  \`s$2NMMMMMMMMNNNmmmdddddmNMmhs$1/.
 /N$2MMMMMMMMNNNNmmmdddmNMNdso$1:\`
+M$2MMMMMMNNNNNmmmmdmNMNdso$1/-
yM$2MNNNNNNNmmmmmNNMmhs+/$1-\`
/h$2MMNNNNNNNNMNdhs++/$1-\`
\`/$2ohdmmddhys+++/:$1.\`
  \`-//////:--.`,

  manjaro: `██████████████████  ████████
██████████████████  ████████
██████████████████  ████████
██████████████████  ████████
████████            ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████`,

  kali: `..............
            ..,;:ccc,.
          ......''';lxO.
.....''''..........,:ld;
           .';;;:::;,,.x,
      ..'''.            0Xxoc:,.  ...
  ....                ,ONkc;,;cokOdc',.
 .                   OMo           ':$2dd$1o.
                    dMc               :OO;
                    0M.                 .:o.
                    ;Wd
                     ;XO,
                       ,d0Odlc;,..
                           ..',;:cdOOd::,.
                                    .:d;.':;.
                                       'd,  .'
                                         ;l   ..
                                          .o
                                            c
                                            .'
                                             .`,

  void: `                __.;=====;.__
            _.=+==++=++=+=+===;.
             -=+++=+===+=+=+++++=_
        .     -=:\`\`     \`--==+=++==.
       _vi,    \`            --+=++++:
      .uvnvi.       _._       -==+==+.
     .vvnvnI\`    .;==|==;.     :|=||=|.
$2+QmQQm$1pvvnv;$2 _yYsyQQWUUQQQm #QmQ#$1:$2QQQWUV$QQm.
 $2-QQWQW$1pvvo$2wZ?.wQQQE$1==<$2QWWQ/QWQW.QQWW$1(:$2 jQWQE
  $2-$QQQQmmU'  jQQQ$1@+=<$2QWQQ)mQQQ.mQQQC$1+;$2jWQQ@'
   $2-$WQ8Y$1nI:$2   QWQQwgQQWV$1\`$2mWQQ.jQWQQgyyWW@!
     $1-1vvnvv.     \`~+++\`        ++|+++
      +vnvnnv,                 \`-|===
       +vnvnvns.           .      :=-
        -Invnvvnsi..___..=sv=.     \`
          +Invnvnvnnnnnnnnvvnn;.
            ~|Invnvnvvnvvvnnv}+
               -~|{*l}*|~`,

  nixos: `          $1▗▄▄▄       $2▗▄▄▄▄    ▄▄▄▖
          $1▜███▙       $2▜███▙  ▟███▛
           $1▜███▙       $2▜███▙▟███▛
            $1▜███▙       $2▜██████▛
     $1▟█████████████████▙ $2▜████▛     $3▟▙
    $1▟███████████████████▙ $2▜███▙    $3▟██▙
           $6▄▄▄▄▖           $2▜███▙  $3▟███▛
          $6▟███▛             $2▜██▛ $3▟███▛
         $6▟███▛               $2▜▛ $3▟███▛
$6▟███████████▛                  $3▟██████████▙
$6▜██████████▛                  $3▟███████████▛
      $6▟███▛ $5▟▙               $3▟███▛
     $6▟███▛ $5▟██▙             $3▟███▛
    $6▟███▛  $5▜███▙           $3▝▀▀▀▀
    $6▜██▛    $5▜███▙ $4▜██████████████████▛
     $6▜▛     $5▟████▙ $4▜████████████████▛
           $5▟██████▙         $4▜███▙
          $5▟███▛▜███▙         $4▜███▙
         $5▟███▛  ▜███▙         $4▜███▙
         $5▝▀▀▀    ▀▀▀▀▘         $4▀▀▀▘`,

  popos: `             /////////////
         /////////////////////
      ///////$2*767$1////////////////
    //////$27676767676*$1//////////////
   /////$276767$1//$27676767$1//////////////
  /////$2767676$1///$2*76767$1///////////////
 ///////$2767676$1///$276767$1.///$27676*$1///////
/////////$2767676$1//$276767$1///$2767676$1////////
//////////$276767676767$1////$276767$1/////////
///////////$276767676$1//////$27676$1//////////
////////////,$27676$1,///////$2767$1///////////
/////////////*$27676$1///////$276$1////////////
///////////////$27676$1////////////////////
 ///////////////$27676$1///$2767$1////////////
  //////////////////////$2'$1////////////
   //////$2.7676767676767676767,$1//////
    /////$2767676767676767676767$1/////
      ///////////////////////////
         /////////////////////
             /////////////`,

  android: `         -o          o-
          +hydNNNNdyh+
        +mMMMMMMMMMMMMm+
      \`dMM$2m:$1NMMMMMMN$2:m$1MMd\`
      hMMMMMMMMMMMMMMMMMMh
  ..  yyyyyyyyyyyyyyyyyyyy  ..
.mMMm\`MMMMMMMMMMMMMMMMMMMM\`mMMm.
:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:
:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:
:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:
:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:
-MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM-
 +yy+ MMMMMMMMMMMMMMMMMMMM +yy+
      mMMMMMMMMMMMMMMMMMMm
      \`/++MMMMh++hMMMM++/\`
          MMMMo  oMMMM
          MMMMo  oMMMM
          oNMm-  -mMNs`,

  macos: `                     ..'
                 ,xNMM.
               .OMMMMo
               lMM"
     .;loddo:.  .olloddol;.
   cKMMMMMMMMMMNWMMMMMMMMMM0:
 $2.KMMMMMMMMMMMMMMMMMMMMMMMWd.
 XMMMMMMMMMMMMMMMMMMMMMMMX.
$3;MMMMMMMMMMMMMMMMMMMMMMMM:
:MMMMMMMMMMMMMMMMMMMMMMMM:
$4.MMMMMMMMMMMMMMMMMMMMMMMMX.
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.
 $5'XMMMMMMMMMMMMMMMMMMMMMMMMMMk
  'XMMMMMMMMMMMMMMMMMMMMMMMMK.
    $6kMMMMMMMMMMMMMMMMMMMMMMd
     ;KMMMMMMMWXXWMMMMMMMk.
       "cooc*"    "*coo'"`,

  parrot: `  \`:oho/-\`
\`mMMMMMMMMMMMNmmdhy-
 dMMMMMMMMMMMMMMMMMMs\`
 +MMsohNMMMMMMMMMMMMMm/
 .My   .+dMMMMMMMMMMMMMh.
  +       :NMMMMMMMMMMMMNo
           \`yMMMMMMMMMMMMMm:
             /NMMMMMMMMMMMMMy\`
              .hMMMMMMMMMMMMMN+
                  \`\`-NMMMMMMMMMd-
                     /MMMMMMMMMMMs\`
                      mMMMMMMMsyNMN/
                      +MMMMMMMo  :sNh.
                      \`NMMMMMMm     -o/
                       oMMMMMMM.
                       \`NMMMMMM+
                        +MMd/NMh
                         mMm -mN\`
                         /MM  \`h:
                          dM\`   .
                          :M-
                           d:
                           -+
                            -`,

  adelie: `                 $3 ,-^-___
$3                /\\\///
$2refined.$1       /\\\\//
$2reliable.$1     /\\\///
$2ready.$1       /\\/////\
        __///\\\\/////\
$3     _//////\\\\\\\////
$1   ///////$3\\\\\\\\\\//
          //////$1\\\\\/
          /////\\\\\/
          /////$3\\\\/
         /\\///\\\/
         /\\\/$1\\/
         /\\\\//
        //////
      /// $3\\\\\`
};

// ============================================================
// COLORES ANSI -> CSS
// ============================================================
const ANSI_COLORS = {
  '30': '#000000', '31': '#cc0000', '32': '#4e9a06', '33': '#c4a000',
  '34': '#3465a4', '35': '#75507b', '36': '#06989a', '37': '#d3d7cf',
  '90': '#555753', '91': '#ef2929', '92': '#8ae234', '93': '#fce94f',
  '94': '#729fcf', '95': '#ad7fa8', '96': '#34e2e2', '97': '#eeeeec'
};

// Paleta por defecto para placeholders $1..$9 cuando el ASCII no trae THEME propio
const LOGO_PALETTE_DEFAULT = ['32', '36', '33', '31', '35', '34', '37', '92', '96'];

// Temas por-ASCII (sobrescriben la paleta por defecto)
const THEMES = {
  arch:     ['36', '34'], // cyan, azul
  ubuntu:   ['31', '33'], // naranja->rojo, amarillo (aprox)
  mint:     ['32', '37'], // verde, blanco
  fedora:   ['34', '94'], // azul, azul-brillante
  opensuse: ['32', '92'], // verde, verde-brillante
  gentoo:   ['35', '95'], // morado, morado-brillante
  nixos:    ['34', '36', '35', '31', '32', '94'], // azul, cyan, morado, rojo, verde, azul-brillante
  popos:    ['36', '33'], // cyan, amarillo
  android:  ['32', '92'], // verde, verde-brillante
  macos:    ['37', '31', '33', '32', '36', '34'] // blanco, rojo, amarillo, verde, cyan, azul
};

// Colores de la columna de información
const INFO_STYLE = {
  user:  '#8ae234',
  at:    '#d3d7cf',
  sep:   '#555753',
  label: '#729fcf',
  value: '#d3d7cf'
};

// ============================================================
// ESTADO
// ============================================================
const STORAGE_KEY = 'fastfetch-web-v03';

const state = {
  ascii: null,
  data: {
    user: 'usuario',
    host: 'iPhone',
    os: 'iOS 17.4',
    kernel: 'Darwin 23.4.0',
    uptime: '2 hours, 15 mins',
    shell: 'zsh 5.9',
    terminal: 'Safari Web Terminal',
    cpu: 'Apple A17 Pro',
    memory: '8192MiB / 8192MiB'
  },
  customThemes: {} // { asciiName: ['32','36',...] }
};

// ============================================================
// PERSISTENCIA
// ============================================================
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ascii: state.ascii,
      data: state.data,
      customThemes: state.customThemes
    }));
  } catch (e) { /* ignorar */ }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed.ascii && ASCII_ARTS[parsed.ascii]) state.ascii = parsed.ascii;
    if (parsed.data) Object.assign(state.data, parsed.data);
    if (parsed.customThemes) state.customThemes = parsed.customThemes;
  } catch (e) { /* ignorar */ }
}

// ============================================================
// REFERENCIAS DOM
// ============================================================
const output = document.getElementById('output');
const input = document.getElementById('cmdInput');
const previewBox = document.getElementById('preview-box');

// ============================================================
// HELPERS DE SALIDA
// ============================================================
function print(text, cls = '') {
  const div = document.createElement('div');
  div.className = 'line ' + cls;
  div.textContent = text;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ============================================================
// CONSTRUCCIÓN DEL FASTFETCH
// ============================================================

function getPalette(asciiName) {
  return state.customThemes[asciiName] || THEMES[asciiName] || LOGO_PALETTE_DEFAULT;
}

function colorizeLogo(artText, palette) {
  let html = escapeHTML(artText);
  html = html.replace(/\$(\d)/g, (match, num) => {
    const idx = Number(num) - 1;
    const colorCode = palette[idx] || '37';
    const hex = ANSI_COLORS[colorCode] || '#d3d7cf';
    return `</span><span style="color:${hex}">`;
  });
  return `<span style="color:${ANSI_COLORS['37']}">${html}</span>`;
}

function infoLine(label, value) {
  return `<span style="color:${INFO_STYLE.label}">${escapeHTML(label)}</span>` +
         `<span style="color:${INFO_STYLE.value}">: ${escapeHTML(value)}</span>`;
}

function buildFastfetchHTML() {
  const d = state.data;
  const artLines = ASCII_ARTS[state.ascii].split('\n');
  const palette = getPalette(state.ascii);
  const infoLines = [
    `<span style="color:${INFO_STYLE.user}">${escapeHTML(d.user)}</span>` +
    `<span style="color:${INFO_STYLE.at}">@</span>` +
    `<span style="color:${INFO_STYLE.user}">${escapeHTML(d.host)}</span>`,
    `<span style="color:${INFO_STYLE.sep}">-------------------</span>`,
    infoLine('OS',       d.os),
    infoLine('Host',     d.host),
    infoLine('Kernel',   d.kernel),
    infoLine('Uptime',   d.uptime),
    infoLine('Shell',    d.shell),
    infoLine('Terminal', d.terminal),
    infoLine('CPU',      d.cpu),
    infoLine('Memory',   d.memory)
  ];

  const maxLines = Math.max(artLines.length, infoLines.length);
  const artWidth = Math.max(...artLines.map(l => stripPlaceholders(l).length));

  let html = '';
  for (let i = 0; i < maxLines; i++) {
    const rawArt = (artLines[i] || '');
    const stripped = stripPlaceholders(rawArt);
    const padded = stripped.padEnd(artWidth, ' ');
    // Reponemos los placeholders después de padEnd: para simplificar,
    // hacemos padEnd sobre el arte SIN placeholders y luego coloreamos
    // la versión completa. Para no romper el ancho, usamos la versión completa.
    const coloredArt = colorizeLogo(rawArt.padEnd(artWidth + countPlaceholders(rawArt), ' '), palette);
    const info = infoLines[i] || '';
    html += `<div class="ff-line"><span class="ff-art">${coloredArt}</span><span class="ff-info">   ${info}</span></div>`;
  }
  return html;
}

function stripPlaceholders(str) {
  return str.replace(/\$\d/g, '');
}

function countPlaceholders(str) {
  const m = str.match(/\$\d/g);
  return m ? m.length : 0;
}

function buildFastfetchPlainText() {
  const d = state.data;
  const artLines = ASCII_ARTS[state.ascii].split('\n').map(stripPlaceholders);
  const infoLines = [
    `${d.user}@${d.host}`,
    '-------------------',
    `OS: ${d.os}`,
    `Host: ${d.host}`,
    `Kernel: ${d.kernel}`,
    `Uptime: ${d.uptime}`,
    `Shell: ${d.shell}`,
    `Terminal: ${d.terminal}`,
    `CPU: ${d.cpu}`,
    `Memory: ${d.memory}`
  ];
  const maxLines = Math.max(artLines.length, infoLines.length);
  const artWidth = Math.max(...artLines.map(l => l.length));
  let out = '';
  for (let i = 0; i < maxLines; i++) {
    out += (artLines[i] || '').padEnd(artWidth, ' ') + '   ' + (infoLines[i] || '') + '\n';
  }
  return out;
}

function renderPreview() {
  previewBox.innerHTML = buildFastfetchHTML();
  previewBox.style.display = 'block';
}

// ============================================================
// COMANDOS
// ============================================================
const commands = {
  help() {
    print('Comandos disponibles:', 'dim');
    print('  help                          - Muestra esta ayuda');
    print('  list-ascii                    - Lista los ASCII disponibles');
    print('  download <nombre>             - "Descarga" un ASCII (con progreso)');
    print('  set <campo> <valor>           - Configura un dato');
    print('  fields                        - Lista los campos configurables');
    print('  preview                       - Previsualiza el resultado');
    print('  theme                         - Ver temas configurados');
    print('  theme <ascii> <c1> [c2...]    - Cambiar paleta de un ASCII');
    print('  theme reset <ascii>           - Resetear paleta de un ASCII');
    print('  export png|txt|pdf            - Exporta el resultado');
    print('  save                          - Guardar config (auto-save activo)');
    print('  reset                         - Borrar config guardada');
    print('  clear                         - Limpia la terminal');
  },

  'list-ascii'() {
    print('ASCII disponibles en el repositorio (simulado):', 'dim');
    Object.keys(ASCII_ARTS).forEach(k => print('  • ' + k));
    print('Usa: download <nombre>', 'dim');
  },

  download(args) {
    const name = args[0];
    if (!name) return print('Uso: download <nombre>', 'error');
    if (!ASCII_ARTS[name]) return print(`ASCII "${name}" no encontrado. Prueba list-ascii.`, 'error');

    print(`Conectando al repositorio fastfetch-web...`, 'dim');
    print(`Descargando ${name}...`);

    // Barra de progreso animada
    const bar = document.createElement('div');
    bar.className = 'line progress';
    output.appendChild(bar);

    let pct = 0;
    const totalSteps = 25;
    const interval = setInterval(() => {
      pct += 100 / totalSteps;
      const filled = Math.round(pct / 5);
      const empty = 20 - filled;
      const filledStr = '█'.repeat(filled);
      const emptyStr = '░'.repeat(empty);
      const speed = (Math.random() * 4 + 1).toFixed(1);
      bar.textContent = `  [${filledStr}${emptyStr}] ${Math.min(100, Math.round(pct))}%  ${speed} MB/s`;
      window.scrollTo(0, document.body.scrollHeight);

      if (pct >= 100) {
        clearInterval(interval);
        state.ascii = name;
        saveState();
        print(`✓ ${name} descargado correctamente.`, 'success');
      }
    }, 60);
  },

  fields() {
    print('Campos configurables (set <campo> <valor>):', 'dim');
    Object.keys(state.data).forEach(k => print('  • ' + k));
  },

  set(args) {
    const [key, ...rest] = args;
    const value = rest.join(' ');
    if (!key || !value) return print('Uso: set <campo> <valor>', 'error');
    if (!(key in state.data)) return print(`Campo "${key}" no existe. Usa fields.`, 'error');
    state.data[key] = value;
    saveState();
    print(`✓ ${key} = ${value}`, 'success');
  },

  preview() {
    if (!state.ascii) return print('Primero descarga un ASCII: download <nombre>', 'error');
    renderPreview();
    print('Previsualización generada abajo ↓', 'dim');
  },

  theme(args) {
    // theme                          -> listar
    // theme reset <ascii>            -> resetear
    // theme <ascii> <c1> [c2...]     -> asignar
    if (args.length === 0) {
      print('Temas configurados:', 'dim');
      Object.keys(ASCII_ARTS).forEach(name => {
        const pal = getPalette(name);
        const source = state.customThemes[name] ? 'custom' : (THEMES[name] ? 'default' : 'fallback');
        print(`  • ${name.padEnd(12)} [${pal.join(', ')}]  (${source})`);
      });
      print('', 'dim');
      print('Cambiar:  theme <ascii> <c1> [c2...]', 'dim');
      print('Resetear: theme reset <ascii>', 'dim');
      print('Colores: 30-37 (normal), 90-97 (brillante)', 'dim');
      return;
    }

    if (args[0] === 'reset') {
      const name = args[1];
      if (!name || !ASCII_ARTS[name]) return print('Uso: theme reset <ascii>', 'error');
      delete state.customThemes[name];
      saveState();
      print(`✓ Tema de ${name} reseteado.`, 'success');
      return;
    }

    const name = args[0];
    const colors = args.slice(1);
    if (!ASCII_ARTS[name]) return print(`ASCII "${name}" no existe.`, 'error');
    if (colors.length === 0) return print('Uso: theme <ascii> <c1> [c2...]', 'error');

    const valid = colors.every(c => /^(3[0-7]|9[0-7])$/.test(c));
    if (!valid) return print('Colores inválidos. Usa 30-37 o 90-97.', 'error');

    state.customThemes[name] = colors;
    saveState();
    print(`✓ Tema de ${name} actualizado: [${colors.join(', ')}]`, 'success');
  },

  save() {
    saveState();
    print('✓ Configuración guardada.', 'success');
  },

  reset() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    state.ascii = null;
    state.customThemes = {};
    state.data = {
      user: 'usuario', host: 'iPhone', os: 'iOS 17.4',
      kernel: 'Darwin 23.4.0', uptime: '2 hours, 15 mins',
      shell: 'zsh 5.9', terminal: 'Safari Web Terminal',
      cpu: 'Apple A17 Pro', memory: '8192MiB / 8192MiB'
    };
    previewBox.style.display = 'none';
    print('✓ Configuración borrada.', 'success');
  },

  async export(args) {
    const type = args[0];
    if (!state.ascii) return print('Primero descarga un ASCII y haz preview.', 'error');
    if (!['png', 'txt', 'pdf'].includes(type)) return print('Uso: export png|txt|pdf', 'error');

    renderPreview();
    await new Promise(r => setTimeout(r, 100));

    if (type === 'txt') return exportTxt();
    if (type === 'png') return exportPng();
    if (type === 'pdf') return exportPdf();
  },

  clear() {
    output.innerHTML = '';
    previewBox.style.display = 'none';
  }
};

// ============================================================
// EXPORTS
// ============================================================
function exportTxt() {
  const text = buildFastfetchPlainText();
  const blob = new Blob([text], { type: 'text/plain' });
  downloadBlob(blob, 'fastfetch.txt');
  print('✓ fastfetch.txt descargado', 'success');
}

async function exportPng() {
  const canvas = await html2canvas(previewBox, {
    backgroundColor: '#161b22',
    scale: 2
  });
  canvas.toBlob(blob => {
    downloadBlob(blob, 'fastfetch.png');
    print('✓ fastfetch.png descargado', 'success');
  });
}

function exportPdf() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  doc.setFont('courier', 'normal');
  doc.setFontSize(9);
  const text = buildFastfetchPlainText();
  const lines = doc.splitTextToSize(text, 540);
  doc.text(lines, 30, 40);
  doc.save('fastfetch.pdf');
  print('✓ fastfetch.pdf descargado', 'success');
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ============================================================
// INPUT
// ============================================================
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const raw = input.value.trim();
    input.value = '';
    if (!raw) return;

    print(`fastfetch@safari:~$ ${raw}`);
    const [cmd, ...args] = raw.split(/\s+/);
    if (commands[cmd]) {
      try { commands[cmd](args); }
      catch (err) { print('Error: ' + err.message, 'error'); }
    } else {
      print(`comando no encontrado: ${cmd}. Escribe 'help'.`, 'error');
    }
  }
});

document.getElementById('terminal').addEventListener('click', () => input.focus());

// ============================================================
// INICIALIZACIÓN
// ============================================================
loadState();

print('fastfetch-web-terminal v0.3', 'success');
print('Escribe "help" para ver los comandos.', 'dim');
if (state.ascii) print(`(config restaurada: ASCII "${state.ascii}" cargado)`, 'dim');
print('');
