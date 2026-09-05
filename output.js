//Sat Sep 05 2026 14:37:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const wxcode = require("./wxcode"),
  fs = require("fs"),
  path = require("path"),
  crypto = require("crypto"),
  https = require("https"),
  http = require("http"),
  {
    URL
  } = require("url"),
  NOTICE_SWITCH = 1,
  CONCURRENCY_SWITCH = 1,
  APPID = "wx6b6c5243359fe265",
  ZBS_BASE_URL = "https://www.kozbs.com",
  ZBS_LOGIN_URL = ZBS_BASE_URL + "/demo/wx/auth/login_by_weixin",
  ZBS_SIGN_URL = ZBS_BASE_URL + "/demo/wx/home/signDay",
  ZBS_KNOWN_SIGN_URL = ZBS_BASE_URL + "/demo/wx/home/sign",
  args = process.argv.slice(2),
  getArg = _0x523687 => {
    const _0x36abf3 = args.indexOf("--" + _0x523687);
    return _0x36abf3 !== -1 && args[_0x36abf3 + 1] ? args[_0x36abf3 + 1] : null;
  },
  cmdWxid = getArg("wxid"),
  isDebug = args.includes("--debug"),
  wxidList = cmdWxid || process.env.TXX_WXID || "",
  scriptName = path.basename(__filename, ".js"),
  TOKEN_CACHE_FILE = path.join(__dirname, scriptName + "_tokens.json");
function parseWxidList(_0x2f26a9) {
  if (!_0x2f26a9) return [];
  return _0x2f26a9.split("\n").map(_0x5123b0 => _0x5123b0.trim()).filter(_0x4be831 => _0x4be831.length > 0).filter(_0x12e20c => !_0x12e20c.startsWith("#"));
}
function parseWxidLine(_0x418304) {
  _0x418304 = _0x418304.trim();
  if (!_0x418304) return {
    "wxid": null,
    "nickname": null
  };
  if (_0x418304.includes(":")) {
    const _0xa6ffd6 = _0x418304.split(":", 2);
    return {
      "wxid": _0xa6ffd6[0].trim(),
      "nickname": _0xa6ffd6[1].trim()
    };
  } else return {
    "wxid": _0x418304,
    "nickname": null
  };
}
function randomDelay(_0x138ac3 = 0.5, _0x534a74 = 2) {
  const _0x5af186 = Math.random() * (_0x534a74 - _0x138ac3) + _0x138ac3;
  return new Promise(_0x4d0096 => setTimeout(_0x4d0096, _0x5af186 * 1000));
}
function generateZBSHeaders() {
  return {
    "Host": "www.kozbs.com",
    "Connection": "keep-alive",
    "content-type": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090a13) XWEB/14185",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Referer": "https://servicewechat.com/wx6b6c5243359fe265/163/page-frame.html"
  };
}
function httpRequest(_0x3e0bf1, _0x581fbd = {}) {
  return new Promise((_0x346f76, _0xd646c7) => {
    {
      const _0x5dd658 = new URL(_0x3e0bf1),
        _0x4c1bde = _0x5dd658.protocol === "https:",
        _0x3f33cc = _0x4c1bde ? https : http,
        _0xbf9f2a = {
          "hostname": _0x5dd658.hostname,
          "port": _0x5dd658.port || (_0x4c1bde ? 443 : 80),
          "path": _0x5dd658.pathname + _0x5dd658.search,
          "method": _0x581fbd.method || "GET",
          "headers": _0x581fbd.headers || {}
        },
        _0x53b79b = _0x3f33cc.request(_0xbf9f2a, _0x350358 => {
          let _0x4b3e13 = "";
          _0x350358.on("data", _0x2cad08 => {
            _0x4b3e13 += _0x2cad08;
          });
          _0x350358.on("end", () => {
            try {
              {
                const _0x2aa896 = JSON.parse(_0x4b3e13);
                _0x346f76({
                  "statusCode": _0x350358.statusCode,
                  "data": _0x2aa896,
                  "headers": _0x350358.headers
                });
              }
            } catch (_0x3b2a09) {
              _0x346f76({
                "statusCode": _0x350358.statusCode,
                "data": _0x4b3e13,
                "headers": _0x350358.headers
              });
            }
          });
        });
      _0x53b79b.on("error", _0x146a22 => {
        _0xd646c7(_0x146a22);
      });
      _0x53b79b.setTimeout(_0x581fbd.timeout || 30000, () => {
        _0x53b79b.destroy();
        _0xd646c7(new Error("Request timeout"));
      });
      _0x581fbd.body && _0x53b79b.write(typeof _0x581fbd.body === "string" ? _0x581fbd.body : JSON.stringify(_0x581fbd.body));
      _0x53b79b.end();
    }
  });
}
function generateDeviceId() {
  const _0x27f8f6 = require("os"),
    _0x239018 = _0x27f8f6.hostname(),
    _0x1ac1ee = _0x239018 + "-node-script",
    _0x239a81 = crypto.createHash("md5").update(_0x1ac1ee).digest("hex").substring(0, 16);
  return _0x239a81;
}
class ZhibaishuoAutoSign {
  constructor(_0x5b620c, _0x28fba5 = null, _0x4cf9d5 = false) {
    this.wxid = _0x5b620c;
    this.appid = APPID;
    this.nickname = _0x28fba5 || _0x5b620c.slice(-4);
    this.forceSign = _0x4cf9d5;
    this.wxCode = null;
    this.openid = null;
    this.token = null;
    this.userId = null;
    this.currentIntegral = 0;
    this.signSuccess = false;
    this.alreadySigned = false;
    this.preIntegral = 0;
    this.signCount = 0;
    this.userLogout = false;
    this.headers = generateZBSHeaders();
    this.remarkName = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x5b620c) : this.nickname;
    isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 初始化ZhibaishuoAutoSign"), this.forceSign && console.log("[DEBUG] [" + this.remarkName + "] 已开启强制签到模式"));
  }
  ["loadTokenCache"]() {
    try {
      {
        if (!fs.existsSync(TOKEN_CACHE_FILE)) {
          if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] Token缓存文件不存在");
          return false;
        }
        const _0x4271b7 = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8")),
          _0x11b0e3 = _0x4271b7[this.wxid];
        if (!_0x11b0e3) {
          if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 没有找到该账号的缓存");
          return false;
        }
        this.token = _0x11b0e3.token || null;
        this.userId = _0x11b0e3.userId ? parseInt(_0x11b0e3.userId, 10) : null;
        if (this.token && this.userId) return console.log("[" + this.remarkName + "] 成功加载缓存Token"), true;else {
          if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 缓存Token不完整");
          return false;
        }
      }
    } catch (_0x274501) {
      console.log("[" + this.remarkName + "] 加载Token失败: " + _0x274501.message);
      return false;
    }
  }
  ["saveTokenCache"]() {
    try {
      if (!this.token || !this.userId) {
        console.log("[" + this.remarkName + "] 没有有效Token可保存");
        return false;
      }
      let _0x1e0c72 = {};
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        try {
          _0x1e0c72 = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
        } catch (_0xd73a67) {
          if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 现有缓存文件格式错误，将重新创建");
        }
      }
      _0x1e0c72[this.wxid] = {
        "token": this.token,
        "userId": this.userId
      };
      fs.writeFileSync(TOKEN_CACHE_FILE, JSON.stringify(_0x1e0c72, null, 2), "utf8");
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] Token已保存到文件: " + TOKEN_CACHE_FILE);
      return true;
    } catch (_0x9bbc22) {
      console.log("❌ [" + this.remarkName + "] 保存缓存失败: " + _0x9bbc22.message);
      return false;
    }
  }
  async ["getCodeFromServer"]() {
    try {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 正在获取微信code...");
      await randomDelay(1, 3);
      const _0x57c52f = await wxcode.getWxCode(this.wxid, this.appid);
      if (!_0x57c52f.success) return console.log("❌ [" + this.remarkName + "] 获取授权码失败：" + _0x57c52f.error), null;
      this.wxCode = _0x57c52f.code;
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取授权码成功：" + this.wxCode.substring(0, 10) + "...");
      return this.wxCode;
    } catch (_0x3a21be) {
      console.log("❌ [" + this.remarkName + "] 获取code时出错: " + _0x3a21be.message);
      return null;
    }
  }
  async ["loginWithCode"](_0x5a166e) {
    try {
      const _0x534255 = {
        "code": _0x5a166e,
        "userInfo": {
          "nickName": "微信用户",
          "gender": 0,
          "language": "",
          "city": "",
          "province": "",
          "country": "",
          "avatarUrl": "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"
        },
        "shareUserId": 1
      };
      console.log("[" + this.remarkName + "] 正在使用code登录: " + _0x5a166e.substring(0, 10) + "...");
      await randomDelay();
      const _0x3120e6 = await httpRequest(ZBS_LOGIN_URL, {
        "method": "POST",
        "headers": this.headers,
        "body": JSON.stringify(_0x534255)
      });
      if (_0x3120e6.statusCode === 200 && _0x3120e6.data.errno === 0) {
        const _0x2bb5b9 = _0x3120e6.data.data;
        this.token = _0x2bb5b9.token || null;
        const _0x324c7b = _0x2bb5b9.userInfo || {};
        this.userId = _0x324c7b.userId ? parseInt(_0x324c7b.userId, 10) : null;
        if (this.token && this.userId) {
          console.log("[" + this.remarkName + "] 登录成功! user_id: " + this.userId);
          if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取到token: " + this.token.substring(0, 10) + "...");
          this.saveTokenCache();
          return true;
        } else return console.log("[" + this.remarkName + "] 登录成功但缺少必要信息"), false;
      } else return console.log("[" + this.remarkName + "] 登录失败:", _0x3120e6.data), false;
    } catch (_0x2c2dd8) {
      console.log("❌ [" + this.remarkName + "] 登录过程中出错: " + _0x2c2dd8.message);
      return false;
    }
  }
  async ["signIn"]() {
    try {
      {
        if (!this.token || !this.userId) return console.log("[" + this.remarkName + "] 未登录，无法签到"), false;
        const _0x34aae1 = JSON.parse(JSON.stringify(this.headers));
        _0x34aae1["X-Dts-Token"] = this.token;
        console.log("[" + this.remarkName + "] 正在获取签到状态，user_id: " + this.userId);
        await randomDelay();
        const _0x2e3d20 = await httpRequest(ZBS_SIGN_URL + "?userId=" + this.userId, {
          "method": "GET",
          "headers": _0x34aae1
        });
        if (_0x2e3d20.statusCode === 200 && _0x2e3d20.data.errno === 0) {
          {
            const _0x2b1d33 = _0x2e3d20.data.data;
            this.preIntegral = _0x2b1d33.integral || 0;
            this.signCount = _0x2b1d33.signCount || 0;
            const _0x39b6fd = _0x2b1d33.isSign || 0;
            this.currentIntegral = this.preIntegral;
            console.log("[" + this.remarkName + "] 当前积分: " + this.preIntegral + ", 已签到天数: " + this.signCount + ", 今日是否已签到: " + (_0x39b6fd === 1 ? "是" : "否"));
            if (_0x39b6fd === 1) {
              this.alreadySigned = true;
            }
            if (_0x39b6fd === 1 && !this.forceSign) return this.signSuccess = false, console.log("📌 [" + this.remarkName + "] 今日已完成签到! 当前积分: " + this.preIntegral + ", 已签到天数: " + this.signCount), true;else {
              {
                _0x39b6fd === 1 && this.forceSign ? console.log("📍 [" + this.remarkName + "] 今日已签到，但启用了强制模式，将再次执行签到请求") : console.log("📍 [" + this.remarkName + "] 今日未签到，开始执行签到操作...");
                const _0x28ad28 = await this.tryKnownSignMethod();
                if (_0x28ad28) {
                  this.signSuccess = true;
                  return true;
                } else {
                  console.log("❌ [" + this.remarkName + "] 签到失败");
                  this.currentIntegral = this.preIntegral;
                  return false;
                }
              }
            }
          }
        } else {
          console.log("❌ [" + this.remarkName + "] 获取签到状态失败:", _0x2e3d20.data);
          String(_0x2e3d20.data).includes("未登录") && console.log("[" + this.remarkName + "] Token可能已失效，将在下次执行时重新获取");
          return false;
        }
      }
    } catch (_0x52b4e9) {
      console.log("❌ [" + this.remarkName + "] 签到过程中出错: " + _0x52b4e9.message);
      return false;
    }
  }
  async ["tryKnownSignMethod"]() {
    try {
      {
        console.log("[" + this.remarkName + "] 尝试使用已知有效的签到方法...");
        const _0x46f5e4 = JSON.parse(JSON.stringify(this.headers));
        _0x46f5e4["X-Dts-Token"] = this.token;
        if (!this.userId) {
          console.log("[" + this.remarkName + "] userId为空，无法签到");
          return false;
        }
        const _0x26a08d = "userId=" + this.userId,
          _0x2c7a7b = ZBS_KNOWN_SIGN_URL + "?" + _0x26a08d;
        await randomDelay(1, 2);
        console.log("[" + this.remarkName + "] 📤 签到请求: GET " + _0x2c7a7b);
        console.log("[" + this.remarkName + "] 📋 请求头:", JSON.stringify(_0x46f5e4, null, 2));
        const _0x27eb8d = await httpRequest(_0x2c7a7b, {
          "method": "GET",
          "headers": _0x46f5e4
        });
        console.log("[" + this.remarkName + "] 📥 响应状态码: " + _0x27eb8d.statusCode);
        console.log("[" + this.remarkName + "] 📥 响应头:", JSON.stringify(_0x27eb8d.headers, null, 2));
        console.log("[" + this.remarkName + "] 📥 响应数据:", JSON.stringify(_0x27eb8d.data, null, 2));
        return _0x27eb8d.statusCode === 200 && _0x27eb8d.data.errno === 0 ? await this.checkIfSignedSuccessfully() : (console.log("[" + this.remarkName + "] ❌ 签到方法返回错误"), false);
      }
    } catch (_0x4d29b7) {
      console.log("❌ [" + this.remarkName + "] 使用已知签到方法出错: " + _0x4d29b7.message);
      return false;
    }
  }
  async ["checkIfSignedSuccessfully"]() {
    try {
      const _0x5b54f2 = JSON.parse(JSON.stringify(this.headers));
      _0x5b54f2["X-Dts-Token"] = this.token;
      await randomDelay(1, 2);
      const _0xc73bf = await httpRequest(ZBS_SIGN_URL + "?userId=" + this.userId, {
        "method": "GET",
        "headers": _0x5b54f2
      });
      if (_0xc73bf.statusCode === 200 && _0xc73bf.data.errno === 0) {
        {
          const _0x152f39 = _0xc73bf.data.data,
            _0x4edff4 = _0x152f39.integral || 0,
            _0x91533e = _0x152f39.signCount || 0;
          this.currentIntegral = _0x4edff4;
          if (_0x4edff4 > this.preIntegral) {
            const _0x513b83 = _0x4edff4 - this.preIntegral;
            console.log("✅ [" + this.remarkName + "] 签到确实成功了! 积分: " + this.preIntegral + " → " + _0x4edff4 + " (+" + _0x513b83 + "), 已签到天数: " + _0x91533e);
            return true;
          } else {
            if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 签到可能失败，积分未增加: " + _0x4edff4 + ", 已签到天数: " + _0x91533e);
            return false;
          }
        }
      } else return console.log("❌ [" + this.remarkName + "] 获取签到状态失败:", _0xc73bf.data), false;
    } catch (_0x1712e2) {
      console.log("❌ [" + this.remarkName + "] 检查签到状态出错: " + _0x1712e2.message);
      return false;
    }
  }
  ["getCurrentIntegral"]() {
    return this.currentIntegral;
  }
  async ["getIntegralGoodsList"]() {
    try {
      if (!this.token || !this.userId) {
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 未登录，无法获取商品列表");
        return null;
      }
      const _0xd97eca = JSON.parse(JSON.stringify(this.headers));
      _0xd97eca["X-Dts-Token"] = this.token;
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 正在获取积分商城商品列表...");
      await randomDelay(0.5, 1.5);
      const _0x408a3c = await httpRequest(ZBS_GOODS_LIST_URL + "?userId=" + this.userId, {
        "method": "GET",
        "headers": _0xd97eca
      });
      if (_0x408a3c.statusCode === 200 && _0x408a3c.data.errno === 0) {
        {
          const _0x1e9f03 = _0x408a3c.data.data.goodsList || [];
          if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 成功获取商品列表，共 " + _0x1e9f03.length + " 个商品");
          return _0x1e9f03;
        }
      } else {
        console.log("[" + this.remarkName + "] 获取商品列表失败:", _0x408a3c.data);
        return null;
      }
    } catch (_0x3a796b) {
      console.log("[" + this.remarkName + "] 获取商品列表出错: " + _0x3a796b.message);
      return null;
    }
  }
  async ["run"]() {
    try {
      const _0x3a7745 = this.loadTokenCache();
      if (_0x3a7745) {
        console.log("[" + this.remarkName + "] 使用缓存Token尝试签到");
        const _0x4422fa = await this.signIn();
        if (_0x4422fa) return console.log("🎉 [" + this.remarkName + "] 使用缓存Token签到成功"), true;
        console.log("[" + this.remarkName + "] 缓存Token签到失败，尝试重新获取Token");
      }
      const _0x36e32e = await this.getCodeFromServer();
      if (!_0x36e32e) return console.log("❌ [" + this.remarkName + "] 无法获取微信code，退出"), false;
      const _0x4da109 = await this.loginWithCode(_0x36e32e);
      if (!_0x4da109) return console.log("❌ [" + this.remarkName + "] 登录失败，退出"), false;
      const _0x124bf0 = await this.signIn();
      return _0x124bf0 ? (console.log("🎉 [" + this.remarkName + "] 自动签到流程完成"), true) : (console.log("❌ [" + this.remarkName + "] 签到失败"), false);
    } catch (_0x2f6af2) {
      console.log("❌ [" + this.remarkName + "] 脚本执行出错：" + _0x2f6af2.message);
      isDebug && console.error(_0x2f6af2);
      return false;
    }
  }
}
async function processMultipleAccounts(_0x49f9a4, _0x8c7986 = false) {
  const _0x58d88e = {},
    _0x574823 = {};
  let _0x2c3507 = 0,
    _0x2df359 = 0,
    _0x4cfb91 = 0,
    _0x18209a = 0,
    _0x565339 = 0,
    _0x20b676 = 0;
  const _0x10747d = [];
  for (const _0x9a61de of _0x49f9a4) {
    {
      const {
        wxid: _0x2addff,
        nickname: _0x322ee8
      } = parseWxidLine(_0x9a61de);
      _0x2addff && (_0x10747d.push(_0x2addff), _0x322ee8 && (_0x574823[_0x2addff] = _0x322ee8));
    }
  }
  const _0x265a33 = [...new Set(_0x10747d)],
    _0x5a7c16 = _0x265a33.length;
  if (CONCURRENCY_SWITCH === 1) {
    console.log("🚀 并发模式已启用，同时处理 " + _0x5a7c16 + " 个账号");
    const _0x33ec3d = _0x265a33.map((_0x4693b1, _0x1a3387) => {
      return (async () => {
        {
          const _0x4dbe15 = _0x574823[_0x4693b1] || null;
          console.log("\n" + "=".repeat(60));
          console.log("[" + (_0x1a3387 + 1) + "/" + _0x5a7c16 + "]" + (_0x4dbe15 ? " " + _0x4dbe15 : ""));
          console.log("" + "=".repeat(60));
          const _0x371b92 = new ZhibaishuoAutoSign(_0x4693b1, _0x4dbe15, _0x8c7986);
          try {
            const _0x379dee = await _0x371b92.run(),
              _0x3c3e14 = _0x371b92.remarkName;
            if (_0x379dee) {
              _0x2c3507++;
              const _0x8eab9c = _0x371b92.getCurrentIntegral();
              _0x20b676 += _0x8eab9c;
              if (_0x371b92.signSuccess) {
                {
                  _0x2df359++;
                  const _0xea7ff7 = _0x371b92.signCount;
                  _0x58d88e[_0x3c3e14] = "✅ 成功 (积分: " + _0x8eab9c + ", 签到天数: " + _0xea7ff7 + ")";
                }
              } else {
                if (_0x371b92.alreadySigned) {
                  {
                    _0x4cfb91++;
                    const _0x5caf98 = _0x371b92.signCount;
                    _0x58d88e[_0x3c3e14] = "📌 已签到 (积分: " + _0x8eab9c + ", 签到天数: " + _0x5caf98 + ")";
                  }
                } else {
                  const _0x884644 = _0x371b92.signCount;
                  _0x58d88e[_0x3c3e14] = "✓ 完成 (积分: " + _0x8eab9c + ", 签到天数: " + _0x884644 + ")";
                }
              }
            } else {
              _0x18209a++;
              _0x371b92.userLogout ? (_0x565339++, _0x58d88e[_0x3c3e14] = "❌ 失败 (用户已退出微信)") : _0x58d88e[_0x3c3e14] = "❌ 失败";
            }
          } catch (_0x22ad11) {
            {
              _0x18209a++;
              const _0x4daad6 = String(_0x22ad11.message).trim(),
                _0x24f185 = _0x371b92.remarkName;
              _0x58d88e[_0x24f185] = _0x4daad6 ? "❌ 失败 (" + _0x4daad6.substring(0, 30) + ")" : "❌ 失败 (未知错误)";
              console.log("处理账号 " + _0x24f185 + " 时发生错误: " + _0x22ad11.message);
            }
          }
        }
      })();
    });
    await Promise.all(_0x33ec3d);
  } else {
    console.log("⏳ 顺序模式：逐个处理 " + _0x5a7c16 + " 个账号");
    for (let _0x4895a4 = 0; _0x4895a4 < _0x265a33.length; _0x4895a4++) {
      {
        const _0x3c476e = _0x265a33[_0x4895a4],
          _0x372f54 = _0x574823[_0x3c476e] || null;
        console.log("\n" + "=".repeat(60));
        console.log("[" + (_0x4895a4 + 1) + "/" + _0x5a7c16 + "]" + (_0x372f54 ? " " + _0x372f54 : ""));
        console.log("" + "=".repeat(60));
        const _0x1f65c9 = new ZhibaishuoAutoSign(_0x3c476e, _0x372f54, _0x8c7986);
        try {
          {
            const _0x1ea513 = await _0x1f65c9.run(),
              _0x82be58 = _0x1f65c9.remarkName;
            if (_0x1ea513) {
              _0x2c3507++;
              const _0x28cfe1 = _0x1f65c9.getCurrentIntegral();
              _0x20b676 += _0x28cfe1;
              if (_0x1f65c9.signSuccess) {
                _0x2df359++;
                const _0xf1b793 = _0x1f65c9.signCount;
                _0x58d88e[_0x82be58] = "✅ 成功 (积分: " + _0x28cfe1 + ", 签到天数: " + _0xf1b793 + ")";
              } else {
                if (_0x1f65c9.alreadySigned) {
                  _0x4cfb91++;
                  const _0x42901d = _0x1f65c9.signCount;
                  _0x58d88e[_0x82be58] = "📌 已签到 (积分: " + _0x28cfe1 + ", 签到天数: " + _0x42901d + ")";
                } else {
                  const _0x5aa5bc = _0x1f65c9.signCount;
                  _0x58d88e[_0x82be58] = "✓ 完成 (积分: " + _0x28cfe1 + ", 签到天数: " + _0x5aa5bc + ")";
                }
              }
            } else {
              {
                _0x18209a++;
                if (_0x1f65c9.userLogout) _0x565339++, _0x58d88e[_0x82be58] = "❌ 失败 (用户已退出微信)";else {
                  _0x58d88e[_0x82be58] = "❌ 失败";
                }
              }
            }
          }
        } catch (_0x43573e) {
          {
            _0x18209a++;
            const _0x56b37b = String(_0x43573e.message).trim(),
              _0x11032b = _0x1f65c9.remarkName;
            _0x58d88e[_0x11032b] = _0x56b37b ? "❌ 失败 (" + _0x56b37b.substring(0, 30) + ")" : "❌ 失败 (未知错误)";
            console.log("处理账号 " + _0x11032b + " 时发生错误: " + _0x43573e.message);
          }
        }
        if (_0x4895a4 < _0x5a7c16 - 1) {
          {
            const _0x2c84f0 = Math.random() * 50 + 20;
            console.log("等待 " + _0x2c84f0.toFixed(2) + " 秒后处理下一账号...");
            await new Promise(_0x429cde => setTimeout(_0x429cde, _0x2c84f0 * 1000));
          }
        }
      }
    }
  }
  return {
    "results": _0x58d88e,
    "success": _0x2c3507,
    "total": _0x5a7c16,
    "totalIntegral": _0x20b676,
    "signSuccess": _0x2df359,
    "alreadySigned": _0x4cfb91,
    "failed": _0x18209a,
    "userLogout": _0x565339
  };
}
async function main() {
  const _0x2e76e6 = Date.now();
  console.log("=====================================================");
  console.log("🚀 植白说签到 - " + new Date().toLocaleString());
  console.log("=====================================================");
  if (isDebug) {
    console.log("[DEBUG] 调试模式已开启");
    console.log("[DEBUG] APPID: " + APPID);
  }
  if (!wxidList) {
    {
      console.log("❌ 未设置环境变量 TXX_WXID");
      return;
    }
  }
  const _0x23d800 = cmdWxid ? [cmdWxid] : parseWxidList(wxidList);
  if (_0x23d800.length === 0) {
    console.log("❌ 没有找到有效的wxid");
    return;
  }
  const _0x27584f = args.includes("--force"),
    _0x460af2 = await processMultipleAccounts(_0x23d800, _0x27584f),
    {
      results: _0x10ffce,
      success: _0x1dc16a,
      total: _0x401dee,
      totalIntegral: _0x21f6cb,
      signSuccess: _0x4c3ba6,
      alreadySigned: _0x3da855,
      failed: _0x1fab6d,
      userLogout: _0x1a744c
    } = _0x460af2;
  console.log("\n=====================================================");
  console.log("📝 签到结果:");
  for (const [_0x50fb63, _0x35489d] of Object.entries(_0x10ffce)) {
    console.log("  " + _0x50fb63 + ": " + _0x35489d);
  }
  const _0x9bd319 = ((Date.now() - _0x2e76e6) / 1000).toFixed(2);
  console.log("\n⏱ 耗时: " + _0x9bd319 + "秒 | 完成: " + new Date().toLocaleString());
  console.log("=====================================================");
  let _0x3a1b1e = "📝 签到结果汇总:\n";
  for (const [_0x5109b3, _0x1c04ea] of Object.entries(_0x10ffce)) {
    _0x3a1b1e += "  " + _0x5109b3 + ": " + _0x1c04ea + "\n";
  }
  _0x3a1b1e += "\n📊 成功率: " + _0x1dc16a + "/" + _0x401dee + " (" + (_0x1dc16a / _0x401dee * 100).toFixed(1) + "%)\n";
  _0x3a1b1e += "📊 新签到: " + _0x4c3ba6 + "/" + _0x401dee + "\n";
  _0x3a1b1e += "📊 已签到: " + _0x3da855 + "/" + _0x401dee + "\n";
  _0x3a1b1e += "💰 总积分: " + _0x21f6cb;
  notice = _0x3a1b1e;
  NOTICE_SWITCH && notice && (await sendMsg(notice));
  process.exit(_0x1dc16a === _0x401dee ? 0 : _0x401dee - _0x1dc16a);
}
let notice = "";
function print(_0x3ad6fd, _0x1d1eb5 = false) {
  let _0x4a7cf3 = "" + _0x3ad6fd;
  console.log(_0x4a7cf3);
  NOTICE_SWITCH && _0x1d1eb5 && (notice += _0x4a7cf3 + "\n");
}
async function sendMsg(_0x2a6aa8) {
  try {
    let _0x4c4ad7 = "";
    try {
      _0x4c4ad7 = require("./sendNotify");
    } catch (_0x49fdb5) {
      try {
        _0x4c4ad7 = require("../sendNotify");
      } catch (_0x4a217c) {
        console.log("❌ 未找到sendNotify模块，无法发送通知");
        return;
      }
    }
    await _0x4c4ad7.sendNotify(scriptName, _0x2a6aa8);
    console.log("📢 通知发送成功");
  } catch (_0x20f3e1) {
    console.log("❌ 通知发送失败: " + _0x20f3e1.message);
  }
}
main().catch(console.error);