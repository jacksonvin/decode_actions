//Sun Jul 26 2026 13:45:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var FjC_oHp = Object['defineProperty'],
  rhTXpm0,
  fng0d4F,
  mZNHMw,
  wr8KPs,
  i07IrYp,
  xoZfVEG,
  Qhp6lXX,
  tp02ba;
function VlWtNq() {
  return globalThis;
}
function UGyox5r() {
  return global;
}
function Pw2S_c0() {
  return window;
}
function aWe_qc() {
  return new Function('return this')();
}
function YqukEd(FjC_oHp = [VlWtNq, UGyox5r, Pw2S_c0, aWe_qc], raFbxhl, rhTXpm0 = [], fng0d4F = 0x0, mZNHMw) {
  raFbxhl = raFbxhl;
  try {
    raFbxhl = Object
    rhTXpm0.push(''.__proto__.constructor.name)
  } catch (e) {}
  OGTgdpR: for (fng0d4F = fng0d4F; fng0d4F < FjC_oHp["length"]; fng0d4F++) try {
    raFbxhl = FjC_oHp[fng0d4F]();
    for (mZNHMw = 0; mZNHMw < rhTXpm0["length"]; mZNHMw++) if (typeof raFbxhl[rhTXpm0[mZNHMw]] === "undefined") {
      continue OGTgdpR;
    }
    return raFbxhl;
  } catch (e) {}
  return raFbxhl || this;
}
rhTXpm0 = YqukEd() || {}
fng0d4F = rhTXpm0.TextDecoder
mZNHMw = rhTXpm0.Uint8Array
wr8KPs = rhTXpm0.Buffer
i07IrYp = rhTXpm0.String || String
xoZfVEG = rhTXpm0.Array || Array
function kHxZm8(...FjC_oHp) {
  return FjC_oHp[FjC_oHp["length"] - 0x1];
}
function iW64aM(KsXcff, FjC_oHp) {
  switch (tp02ba) {
    case 0xc:
      return KsXcff + FjC_oHp;
    case 0x11:
      return KsXcff - FjC_oHp;
    case 49:
      return KsXcff / FjC_oHp;
    case -42:
      return KsXcff * FjC_oHp;
    case 53:
      return !KsXcff;
  }
}
function ydUpSk3(KsXcff) {
  return kHxZm8(KsXcff = tp02ba + (tp02ba = KsXcff, 0), KsXcff);
}
tp02ba = tp02ba;
const r9OzVB = require('crypto-js');
class RF5PkQ5 {
  constructor() {
    this.domWindow = ''
    this.aar2 = ''
    this.num = 0x0
  }
  ["wait"](KsXcff) {
    return new Promise(FjC_oHp => setTimeout(FjC_oHp, KsXcff));
  }
  ["generateVariable"](FjC_oHp = '', rhTXpm0 = '', fng0d4F = '') {
    var g527Gu9, vEki5fs, JQZZ8b, t0wJsib;
    const FerNkj = ["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"];
    let VlWtNq = iW64aM(Date["now"](), parseInt(fng0d4F), ydUpSk3(0xc));
    if (typeof FjC_oHp != "object") {
      var UGyox5r = "parse";
      FjC_oHp = JSON[UGyox5r](FjC_oHp);
    }
    let Pw2S_c0 = kHxZm8(FjC_oHp["nowTime"] = VlWtNq, iW64aM(rhTXpm0, VlWtNq, tp02ba = 0xc));
    const aWe_qc = Pw2S_c0["substring"](0x0, iW64aM(Pw2S_c0["length"], 5, tp02ba = 0x11));
    let YqukEd = '';
    for (let t0wJsib = 0; t0wJsib < aWe_qc["length"]; t0wJsib++) {
      let Rzy98v = aWe_qc["charCodeAt"](t0wJsib),
        _sJl7g = Rzy98v % 10,
        bVJjaq = FerNkj[_sJl7g][t0wJsib];
      YqukEd += bVJjaq;
    }
    g527Gu9 = YqukEd["length"]
    vEki5fs = Math["floor"](iW64aM(g527Gu9, 0x18, ydUpSk3(0x31)))
    JQZZ8b = ''
    for (t0wJsib = 0; t0wJsib < 24; t0wJsib++) {
      var QebLyA, z_A9ky, bh0pKX, o8B8n4, gUTuKD, QC1YJNq;
      QebLyA = iW64aM(t0wJsib + 1, vEki5fs, ydUpSk3(-42))
      if (t0wJsib === 0x17) {
        QebLyA = g527Gu9;
      }
      z_A9ky = YqukEd["substring"](iW64aM(t0wJsib, vEki5fs, ydUpSk3(-0x2a)), QebLyA)
      bh0pKX = []
      for (o8B8n4 = 0x0; o8B8n4 < z_A9ky["length"]; o8B8n4++) {
        bh0pKX["push"](z_A9ky["charCodeAt"](o8B8n4))
      }
      gUTuKD = bh0pKX["reduce"](function (FjC_oHp, rhTXpm0) {
        return iW64aM(FjC_oHp, rhTXpm0, ydUpSk3(0xc));
      }, 0x0)
      QC1YJNq = Math["floor"](iW64aM(gUTuKD, bh0pKX["length"], ydUpSk3(49)))
      JQZZ8b += String["fromCharCode"](QC1YJNq)
    }
    const fMSt93j = kHxZm8(YqukEd = JQZZ8b, this["genTokenKey"](YqukEd)),
      hT_Uomn = r9OzVB["enc"]["Utf8"]["parse"](fMSt93j),
      eGgvwR = r9OzVB["enc"]["Utf8"]["parse"](''),
      Jg4REr = r9OzVB["AES"]["encrypt"](JSON["stringify"](FjC_oHp), hT_Uomn, {
        iv: eGgvwR,
        ["mode"]: r9OzVB["mode"]["ECB"],
        ["padding"]: r9OzVB["pad"]["Pkcs7"]
      });
    return Jg4REr["toString"]();
  }
  ["genTokenKey"](FjC_oHp) {
    const mZNHMw = kHxZm8(FjC_oHp = FjC_oHp["split"]('')["reverse"]()["join"](''), new Uint8Array(12)),
      wr8KPs = new TextEncoder()["encode"](FjC_oHp);
    for (let i07IrYp = 0x0; i07IrYp < wr8KPs["length"]; i07IrYp += 2) {
      let Qhp6lXX = wr8KPs[i07IrYp] << 5 | wr8KPs[i07IrYp + 1] & 0xff;
      Qhp6lXX %= 63
      mZNHMw[i07IrYp >> 0x1] = Qhp6lXX
    }
    let g527Gu9 = '';
    for (let i07IrYp = 0x0; i07IrYp < mZNHMw["length"]; i07IrYp++) {
      g527Gu9 += iW64aM(mZNHMw[i07IrYp], 0x100, ydUpSk3(0xc))["toString"](0x2)["slice"](1)
    }
    let O1GDvo2 = '',
      tp02ba = '';
    for (let i07IrYp = 0; i07IrYp < 0x10; i07IrYp++) {
      if (i07IrYp !== 0x0 && true) {
        const UGyox5r = iW64aM(i07IrYp, 0x6, ydUpSk3(-42)),
          Pw2S_c0 = g527Gu9["substring"](UGyox5r, iW64aM(UGyox5r, 0x6, ydUpSk3(12)));
        let aWe_qc = parseInt(Pw2S_c0, 2);
        const YqukEd = tp02ba["split"]('');
        for (let r9OzVB = 0x0; r9OzVB < YqukEd["length"]; r9OzVB++) if (YqukEd[r9OzVB] === '1') {
          aWe_qc = (aWe_qc >> 6 - r9OzVB | aWe_qc << r9OzVB) & 0x3f;
        }
        tp02ba = (aWe_qc & 0x3f)["toString"](0x2)["padStart"](6, '0');
      } else {
        tp02ba = g527Gu9["substring"](0, 6);
      }
      O1GDvo2 += tp02ba;
    }
    for (let i07IrYp = 0; i07IrYp < 12; i07IrYp++) {
      const UGyox5r = iW64aM(i07IrYp, 8, ydUpSk3(-0x2a));
      mZNHMw[i07IrYp] = parseInt(O1GDvo2["substring"](UGyox5r, iW64aM(UGyox5r, 0x8, ydUpSk3(0xc))), 2);
    }
    const _sJl7g = btoa(String["fromCharCode"]["apply"](null, mZNHMw));
    return _sJl7g;
  }
  async ["loadH5Sdk"]() {
    try {
      const t0wJsib = require('jsdom'),
        {
          ["JSDOM"]: O1GDvo2
        } = t0wJsib;
      let FerNkj = this["getUA"](),
        tp02ba = new t0wJsib["ResourceLoader"]({
          ["userAgent"]: FerNkj,
          ["referrer"]: "https://eco.jr.jd.com/"
        }),
        VlWtNq = new t0wJsib["VirtualConsole"](),
        UGyox5r = {
          ["url"]: "https://eco.jr.jd.com/baitiao_lottery/#/?actNo=211213202243400000003999&channel=w01",
          ["referrer"]: "https://eco.jr.jd.com/",
          ["userAgent"]: "Mozilla/5.0 (Linux; Android 10; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/89.0.4389.90 Mobile Safari/537.36",
          ["runScripts"]: "dangerously",
          ["resources"]: tp02ba,
          ["includeNodeLocations"]: true,
          ["storageQuota"]: 0x989680,
          ["pretendToBeVisual"]: true,
          ["virtualConsole"]: VlWtNq
        };
      const Pw2S_c0 = new O1GDvo2("<body>\n  <script src=\"https://jrsecstatic.jdpay.com/jr-sec-dev-static/aar2.min.js\"></script>\n  <script src=\"https://m.jr.jd.com/common/jssdk/jrbridge/2.0.0/jrbridge.js\"></script>\n  <script src=\"//gia.jd.com/m.html\"></script>\n  <script src=\"//gias.jd.com/js/m.js\"></script>\n  </body>", UGyox5r);
      await this["wait"](parseInt(iW64aM(Math["random"]() * 0x9c4, 0x5dc, ydUpSk3(0xc)), 0xa))
      this["domWindow"] = Pw2S_c0["window"]
    } catch (e) {}
  }
  async ["getJdEid"]() {
    try {
      return new Promise(async FjC_oHp => {
        if (this["num"] % 0xf == 0x0) {
          this["domWindow"] = ''
          this["aar2"] = ''
        }
        if (iW64aM(this["domWindow"], tp02ba = 0x35)) {
          await this["loadH5Sdk"]()
          await this["wait"](parseInt(iW64aM(Math["random"]() * 0x1f4, 0x15e, tp02ba = 0xc), 10))
          this["num"] += 1
        }
        let mZNHMw = this["domWindow"]["getJdEid"]();
        if (iW64aM(this["aar2"], tp02ba = 0x35)) {
          var wr8KPs = ["AAR2"];
          let i07IrYp = kHxZm8(await this["domWindow"][wr8KPs[0x0]]["init"](), new this["domWindow"]["AAR2"]());
          this["aar2"] = i07IrYp;
        } else {
          var xoZfVEG = "num";
          this[xoZfVEG] += 0x1;
        }
        let Qhp6lXX = {
          ["getJdEid"]: mZNHMw,
          ["aar2"]: this["aar2"]
        };
        FjC_oHp(Qhp6lXX || '');
      });
    } catch (e) {
      return '';
    }
  }
  ["getUA"]() {
    let fng0d4F = ["Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/98.0.4758.85 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPad; CPU OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/98.0.4758.85 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.163 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPod; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.163 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.163 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.163 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.163 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1"],
      mZNHMw = parseInt(iW64aM(Math["random"](), fng0d4F["length"], tp02ba = -0x2a)),
      wr8KPs = fng0d4F[mZNHMw];
    return wr8KPs;
  }
  ["v2_x"](FjC_oHp) {
    const WIc4UO = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let rhTXpm0 = '';
    for (let fng0d4F = 0; fng0d4F < FjC_oHp; fng0d4F++) {
      const FjC_oHp = Math["floor"](iW64aM(Math["random"](), WIc4UO["length"], tp02ba = -42));
      rhTXpm0 += WIc4UO[FjC_oHp];
    }
    return iW64aM(rhTXpm0, new Date()["getTime"](), ydUpSk3(0xc));
  }
  ["v2_enc_req"](FjC_oHp) {
    const wr8KPs = r9OzVB["enc"]["Utf8"]["parse"]("Hd5W5ONsYKmGm9QA"),
      i07IrYp = r9OzVB.enc.Utf8.parse("2JjUvJEAsA2Yog=="),
      xoZfVEG = r9OzVB["enc"]["Utf8"]["parse"](FjC_oHp),
      Qhp6lXX = r9OzVB.AES.encrypt(xoZfVEG, wr8KPs, {
        iv: i07IrYp,
        mode: r9OzVB.mode.CBC,
        padding: r9OzVB.pad.Pkcs7
      });
    return r9OzVB["enc"]["Base64"]["stringify"](Qhp6lXX["ciphertext"]);
  }
  ["v2_dec_res"](KsXcff) {
    try {
      var FjC_oHp = ["Hd5W5ONsYKmGm9QA"];
      const WIc4UO = r9OzVB["enc"]["Utf8"]["parse"](FjC_oHp[0x0]),
        rhTXpm0 = r9OzVB.enc.Utf8.parse("2JjUvJEAsA2Yog=="),
        fng0d4F = r9OzVB["enc"]["Base64"]["parse"](KsXcff),
        mZNHMw = r9OzVB.enc.Base64.stringify(fng0d4F),
        wr8KPs = r9OzVB.AES.decrypt(mZNHMw, WIc4UO, {
          iv: rhTXpm0,
          mode: r9OzVB.mode.CBC,
          padding: r9OzVB.pad.Pkcs7
        });
      return r9OzVB["enc"]["Utf8"]["stringify"](wr8KPs)["toString"]();
    } catch (KsXcff) {
      console["log"](KsXcff["message"]);
    }
  }
  ["sign_h5"](FjC_oHp, rhTXpm0) {
    let xoZfVEG = kHxZm8(FjC_oHp["userId"] && (FjC_oHp["userId"] = FjC_oHp["userId"] || '', FjC_oHp.id = FjC_oHp.id || '', FjC_oHp["buyerNick"] = FjC_oHp["buyerNick"] || ''), Math["floor"](iW64aM(0xf423f, Math["random"](), ydUpSk3(-42)))),
      Qhp6lXX = iW64aM(Date["now"]() + '', xoZfVEG, tp02ba = 0xc),
      g527Gu9 = /[^\u4e00-\u9fa5\w]/g,
      vEki5fs = JSON["stringify"](FjC_oHp["method"])["replace"](g527Gu9, ''),
      JQZZ8b = rhTXpm0,
      t0wJsib = iW64aM("actid" + FjC_oHp.id + "buyernick" + FjC_oHp["buyerNick"] + "sysmethod" + vEki5fs + "timestamp", Qhp6lXX, ydUpSk3(12)),
      O1GDvo2 = r9OzVB["HmacSHA256"](t0wJsib, JQZZ8b),
      FerNkj = r9OzVB["enc"]["Hex"]["stringify"](O1GDvo2),
      VlWtNq = {};
    return kHxZm8(VlWtNq["sysParams"] = {
      ["sign"]: FerNkj,
      ["timestamp"]: Qhp6lXX,
      ["sysmethod"]: vEki5fs
    }, VlWtNq["sysParams"]);
  }
  ["getUrlKeyValue"](FjC_oHp, WIc4UO) {
    var rhTXpm0 = "(^|[&?])",
      fng0d4F,
      mZNHMw;
    if (iW64aM(WIc4UO, tp02ba = 0x35)) {
      WIc4UO = '';
    }
    fng0d4F = new RegExp(iW64aM(rhTXpm0 + FjC_oHp, "=([^&]*)(&|$)", ydUpSk3(0xc)))
    mZNHMw = ''["match"](fng0d4F)
    if (mZNHMw != null) {
      return decodeURIComponent(mZNHMw[0x2]);
    }
    return '';
  }
  ["getprizenames"]() {
    return {
      0x0: "谢谢参与",
      [1]: "优惠券",
      0x2: '京豆',
      0x3: '实物',
      0x4: '积分',
      0x5: "专享价",
      0x6: '红包',
      [7]: "礼品卡",
      [8]: "京东e卡",
      [9]: "PLUS会员卡",
      0xa: "爱奇艺会员卡",
      0xb: "自营令牌促销",
      0xc: "京元宝"
    };
  }
}
module["exports"] = new RF5PkQ5();