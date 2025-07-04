/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  const e = {
    4105: function (e, t, r) {
      const n =
        (this && this.__awaiter) ||
        ((e, t, r, n) =>
          new (r || (r = Promise))((i, a) => {
            function s(e) {
              try {
                u(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              let t;

              if (e.done) {
                i(e.value);
              } else {
                ((t = e.value),
                t instanceof r
                  ? t
                  : new r((e) => {
                      e(t);
                    })).then(s, o);
              }
            }
            u((n = n.apply(e, t || [])).next());
          }));

      const i =
        (this && this.__generator) ||
        ((e, t) => {
          let r;
          let n;
          let i;
          let a;
          let s = {
            label: 0,
            sent() {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: [],
          };
          a = { next: o(0), throw: o(1), return: o(2) };

          if (typeof Symbol == "function") {
            a[Symbol.iterator] = function () {
              return this;
            };
          }

          return a;
          function o(a) {
            return (o) =>
              ((a) => {
                if (r) {
                  throw new TypeError("Generator is already executing.");
                }

                while (s) {
                  try {
                    r = 1;

                    if (
                      n &&
                      (i =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, a[1])).done
                    ) {
                      return i;
                    }

                    n = 0;

                    if (i) {
                      a = [2 & a[0], i.value];
                    }

                    switch (a[0]) {
                      case 0:
                      case 1: {
                        i = a;
                        break;
                      }
                      case 4: {
                        s.label++;
                        return { value: a[1], done: false };
                      }
                      case 5: {
                        s.label++;
                        n = a[1];
                        a = [0];
                        continue;
                      }
                      case 7: {
                        a = s.ops.pop();
                        s.trys.pop();
                        continue;
                      }
                      default: {
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (a[0] !== 6 && a[0] !== 2)
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          a[0] === 3 &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          s.label = a[1];
                          break;
                        }
                        if (a[0] === 6 && s.label < i[1]) {
                          s.label = i[1];
                          i = a;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2];
                          s.ops.push(a);
                          break;
                        }

                        if (i[2]) {
                          s.ops.pop();
                        }

                        s.trys.pop();
                        continue;
                      }
                    }

                    a = t.call(e, s);
                  } catch (e) {
                    a = [6, e];
                    n = 0;
                  } finally {
                    r = 0;
                    i = 0;
                  }
                }

                if (5 & a[0]) {
                  throw a[1];
                }
                return { value: a[0] ? a[1] : undefined, done: true };
              })([a, o]);
          }
        });

      Object.defineProperty(t, "__esModule", { value: true });
      t.Ad = undefined;
      t.AdsManager = undefined;
      const a = r(5916);
      let s = null;
      const o = (() => {
        function e(e, t, r, n) {
          this.isEnabled = e;
          this.publisherId = t;
          this.appId = r;
          this.tracker = n;
        }

        e.init = (t, r, n) => {
          const i = a.Tracker.instance();
          s = new e(t, r, n, i);
        };

        e.instance = () => {
          if (!s) {
            throw new Error("AdsManager is not initialized");
          }
          return s;
        };

        e.prototype.tryLoad = function () {
          const e = this;
          this.lastLoadTime = Date.now();

          return new Promise((t) => {
            try {
              getKaiAd({
                publisher: e.publisherId,
                app: e.appId,
                slot: "fullscreen",
                timeout: 12000 /* 12e3 */,
                onerror(e) {
                  t(null);
                  console.error(`KaiAd error: ${e}`);
                },
                onready(e) {
                  t(new u(e));
                  console.info("KaiAd ready");
                },
              });
            } catch (e) {
              t(null);
              console.error(`getKaiAd error: ${e}`);
            }
          });
        };

        e.prototype.tryDisplay = function () {
          return n(this, undefined, undefined, function () {
            let e;
            return i(this, function (t) {
              switch (t.label) {
                case 0: {
                  return this.canDisplayAd() ? [4, this.tryLoad()] : [3, 3];
                }
                case 1: {
                  return (e = t.sent()) ? [4, e.display()] : [3, 3];
                }
                case 2: {
                  t.sent();
                  this.tracker.adDisplayed();
                  t.label = 3;
                }
                case 3: {
                  return [2];
                }
              }
            });
          });
        };

        e.prototype.canDisplayAd = function () {
          return (
            this.isEnabled &&
            (!this.lastLoadTime ||
              Date.now() - this.lastLoadTime > 90000) /* 9e4 */
          );
        };

        return e;
      })();
      t.AdsManager = o;
      var u = (() => {
        function e(e) {
          this.ad = e;
        }

        e.prototype.display = function () {
          const e = this;
          return new Promise((t) => {
            e.ad.on("click", t);
            e.ad.on("close", t);
            e.ad.call("display");
          });
        };

        return e;
      })();
      t.Ad = u;
    },
    6079: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.getRelativeOffsetY = undefined;

      t.getRelativeOffsetY = (e, t) => {
        const r = t.currentStyle || window.getComputedStyle(t);
        let n = t.offsetTop + t.offsetHeight;

        if (r.marginBottom) {
          n += parseFloat(r.marginBottom);
        }

        return Math.max(0, n - e.offsetHeight);
      };
    },
    4176: function (e, t, r) {
      const n =
        (this && this.__createBinding) ||
        (Object.create
          ? (e, t, r, n = r) => {
              let i = Object.getOwnPropertyDescriptor(t, r);

              if (
                !i ||
                ("get" in i ? !t.__esModule : i.writable || i.configurable)
              ) {
                i = {
                  enumerable: true,
                  get() {
                    return t[r];
                  },
                };
              }

              Object.defineProperty(e, n, i);
            }
          : (e, t, r, n = r) => {
              e[n] = t[r];
            });
      const i =
        (this && this.__exportStar) ||
        ((e, t) => {
          for (const r in e) {
            if (
              r !== "default" &&
              !Object.prototype.hasOwnProperty.call(t, r)
            ) {
              n(t, e, r);
            }
          }
        });
      Object.defineProperty(t, "__esModule", { value: true });
      i(r(8795), t);
      i(r(2101), t);
      i(r(7109), t);
      i(r(2691), t);
      i(r(200), t);
      i(r(6079), t);
      i(r(4105), t);
      i(r(5916), t);
      i(r(5355), t);
      i(r(7227), t);
    },
    200: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.KaiOsDetector = undefined;
      const r = (() => {
        function e() {}

        e.getVersion = () => {
          return typeof navigator.getDeviceStorages == "function"
            ? 2
            : typeof navigator.b2g == "object"
            ? 3
            : null;
        };

        return e;
      })();
      t.KaiOsDetector = r;
    },
    2691: function (e, t) {
      const r =
        (this && this.__awaiter) ||
        ((e, t, r, n) =>
          new (r || (r = Promise))((i, a) => {
            function s(e) {
              try {
                u(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              let t;

              if (e.done) {
                i(e.value);
              } else {
                ((t = e.value),
                t instanceof r
                  ? t
                  : new r((e) => {
                      e(t);
                    })).then(s, o);
              }
            }
            u((n = n.apply(e, t || [])).next());
          }));

      const n =
        (this && this.__generator) ||
        ((e, t) => {
          let r;
          let n;
          let i;
          let a;
          let s = {
            label: 0,
            sent() {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: [],
          };
          a = { next: o(0), throw: o(1), return: o(2) };

          if (typeof Symbol == "function") {
            a[Symbol.iterator] = function () {
              return this;
            };
          }

          return a;
          function o(a) {
            return (o) =>
              ((a) => {
                if (r) {
                  throw new TypeError("Generator is already executing.");
                }

                while (s) {
                  try {
                    r = 1;

                    if (
                      n &&
                      (i =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, a[1])).done
                    ) {
                      return i;
                    }

                    n = 0;

                    if (i) {
                      a = [2 & a[0], i.value];
                    }

                    switch (a[0]) {
                      case 0:
                      case 1: {
                        i = a;
                        break;
                      }
                      case 4: {
                        s.label++;
                        return { value: a[1], done: false };
                      }
                      case 5: {
                        s.label++;
                        n = a[1];
                        a = [0];
                        continue;
                      }
                      case 7: {
                        a = s.ops.pop();
                        s.trys.pop();
                        continue;
                      }
                      default: {
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (a[0] !== 6 && a[0] !== 2)
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          a[0] === 3 &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          s.label = a[1];
                          break;
                        }
                        if (a[0] === 6 && s.label < i[1]) {
                          s.label = i[1];
                          i = a;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2];
                          s.ops.push(a);
                          break;
                        }

                        if (i[2]) {
                          s.ops.pop();
                        }

                        s.trys.pop();
                        continue;
                      }
                    }

                    a = t.call(e, s);
                  } catch (e) {
                    a = [6, e];
                    n = 0;
                  } finally {
                    r = 0;
                    i = 0;
                  }
                }

                if (5 & a[0]) {
                  throw a[1];
                }
                return { value: a[0] ? a[1] : undefined, done: true };
              })([a, o]);
          }
        });

      Object.defineProperty(t, "__esModule", { value: true });
      t.KeyType = undefined;
      t.Key = undefined;
      t.KeyboardListener = undefined;
      let i;
      let a;
      let s = null;
      const o = (() => {
        function e() {
          const e = this;
          this.listening = false;
          this.isBusy = false;

          this.onKeydown = (t) => {
            const r = u(t.key);

            if (r !== null) {
              t.preventDefault(), t.stopPropagation(), e.handle(r, a.down);
            }
          };

          this.onKeyup = (t) => {
            const r = u(t.key);

            if (r !== null) {
              t.preventDefault(), t.stopPropagation(), e.handle(r, a.up);
            }
          };
        }

        e.init = () => {
          e.instance();
        };

        e.instance = () => {
          if (!s) {
            new e().start();
          }

          return s;
        };

        e.prototype.subscribe = function (e) {
          if (this.handler) {
            throw new Error("Already subscribed");
          }
          this.handler = e;
        };

        e.prototype.unsubscribe = function () {
          this.handler = undefined;
        };

        e.prototype.pause = function (e) {
          return r(this, undefined, undefined, function () {
            return n(this, function (t) {
              switch (t.label) {
                case 0: {
                  this.stop();
                  t.label = 1;
                }
                case 1: {
                  t.trys.push([1, , 3, 4]);
                  return [4, e()];
                }
                case 2: {
                  t.sent();
                  return [3, 4];
                }
                case 3: {
                  this.start();
                  return [7];
                }
                case 4: {
                  return [2];
                }
              }
            });
          });
        };

        e.prototype.start = function () {
          if (this.listening) {
            throw new Error("Already listening");
          }
          window.addEventListener("keydown", this.onKeydown);
          window.addEventListener("keyup", this.onKeyup);
          this.listening = true;
        };

        e.prototype.stop = function () {
          if (!this.listening) {
            throw new Error("Not listening");
          }
          window.removeEventListener("keydown", this.onKeydown);
          window.removeEventListener("keydown", this.onKeyup);
          this.listening = false;
        };

        e.prototype.forward = function (e, t) {
          return r(this, undefined, undefined, function () {
            return n(this, function (r) {
              switch (r.label) {
                case 0: {
                  return this.handler ? [4, this.handler(e, t)] : [3, 2];
                }
                case 1: {
                  r.sent();
                  r.label = 2;
                }
                case 2: {
                  return [2];
                }
              }
            });
          });
        };

        e.prototype.handle = function (e, t) {
          const r = this;

          if (!this.isBusy) {
            (this.isBusy = true),
              e === null
                ? (this.isBusy = false)
                : this.forward(e, t).then(
                    () => {
                      r.isBusy = false;
                    },
                    (e) => {
                      r.isBusy = false;
                      console.error(e);
                    }
                  );
          }
        };

        return e;
      })();
      function u(e) {
        switch (e) {
          case "ArrowUp": {
            return i.up;
          }
          case "ArrowDown": {
            return i.down;
          }
          case "ArrowLeft": {
            return i.left;
          }
          case "ArrowRight": {
            return i.right;
          }
          case "SoftLeft":
          case "o": {
            return i.softLeft;
          }
          case "SoftRight":
          case "p": {
            return i.softRight;
          }
          case "Enter": {
            return i.enter;
          }
          case "Backspace": {
            return i.back;
          }
          case "1":
          case "q": {
            return i.num1;
          }
          case "2":
          case "w": {
            return i.num2;
          }
          case "3":
          case "e": {
            return i.num3;
          }
          case "4":
          case "a": {
            return i.num4;
          }
          case "5":
          case "s": {
            return i.num5;
          }
          case "6":
          case "d": {
            return i.num6;
          }
          case "7":
          case "z": {
            return i.num7;
          }
          case "8":
          case "x": {
            return i.num8;
          }
          case "9":
          case "c": {
            return i.num9;
          }
          case "*":
          case "v": {
            return i.star;
          }
          case "0":
          case "b": {
            return i.num0;
          }
          case "#":
          case "n": {
            return i.hash;
          }
        }
        return null;
      }
      t.KeyboardListener = o;

      ((e) => {
        e[(e.up = 1)] = "up";
        e[(e.down = 2)] = "down";
        e[(e.left = 3)] = "left";
        e[(e.right = 4)] = "right";
        e[(e.enter = 5)] = "enter";
        e[(e.back = 6)] = "back";
        e[(e.softLeft = 7)] = "softLeft";
        e[(e.softRight = 8)] = "softRight";
        e[(e.num1 = 9)] = "num1";
        e[(e.num2 = 10)] = "num2";
        e[(e.num3 = 11)] = "num3";
        e[(e.num4 = 12)] = "num4";
        e[(e.num5 = 13)] = "num5";
        e[(e.num6 = 14)] = "num6";
        e[(e.num7 = 15)] = "num7";
        e[(e.num8 = 16)] = "num8";
        e[(e.num9 = 17)] = "num9";
        e[(e.num0 = 18)] = "num0";
        e[(e.star = 19)] = "star";
        e[(e.hash = 20)] = "hash";
      })((i = t.Key || (t.Key = {})));

      ((e) => {
        e[(e.down = 1)] = "down";
        e[(e.up = 2)] = "up";
      })((a = t.KeyType || (t.KeyType = {})));
    },
    4963: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.CallableMenuItem = undefined;
      const r = (() => {
        function e(e, t, r) {
          this.iconUrl = e;
          this.label = t;
          this.handler = r;
        }

        e.create = (t, r, n) => new e(t, r, n);

        e.prototype.execute = function (e) {
          return Promise.resolve(this.handler(e));
        };

        return e;
      })();
      t.CallableMenuItem = r;
    },
    7227: function (e, t, r) {
      const n =
        (this && this.__createBinding) ||
        (Object.create
          ? (e, t, r, n = r) => {
              let i = Object.getOwnPropertyDescriptor(t, r);

              if (
                !i ||
                ("get" in i ? !t.__esModule : i.writable || i.configurable)
              ) {
                i = {
                  enumerable: true,
                  get() {
                    return t[r];
                  },
                };
              }

              Object.defineProperty(e, n, i);
            }
          : (e, t, r, n = r) => {
              e[n] = t[r];
            });
      const i =
        (this && this.__exportStar) ||
        ((e, t) => {
          for (const r in e) {
            if (
              r !== "default" &&
              !Object.prototype.hasOwnProperty.call(t, r)
            ) {
              n(t, e, r);
            }
          }
        });
      Object.defineProperty(t, "__esModule", { value: true });
      i(r(4963), t);
      i(r(6665), t);
      i(r(6665), t);
      i(r(8138), t);
      i(r(1875), t);
    },
    6665: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.Loading = undefined;
      const n = r(7109);
      const i = r(8795);
      const a = (() => {
        function e(e, t) {
          this.element = e;
          this.progress = t;
          this.onLeave = new n.SimpleEvent();
          this.isAlive = true;
        }

        e.create = (t, r) => {
          const n = document.createElement("div");
          n.className = "loading-container";
          const a = document.createElement("div");
          a.className = "loading-progress";
          a.innerHTML = '<span class="message">Loading...</span>';
          n.appendChild(a);
          const s = new e(n, a);

          t.then(
            (e) => {
              if (s.isAlive) {
                const t = r(e);
                s.embed(t);
              } else {
                console.warn("Loading destroyed");
              }
            },
            (e) => {
              (0, i.uglyLogger)(e);
              console.error(e);
              s.onLeave.forward();
            }
          );

          return s;
        };

        e.prototype.embed = function (e) {
          const t = this;
          this.element.removeChild(this.progress);
          this.route = e;

          this.route.onLeave.subscribe(() => {
            t.onLeave.forward();
          });

          this.element.appendChild(this.route.element);
        };

        e.prototype.destroy = function () {
          this.isAlive = false;

          if (this.route) {
            this.route.destroy();
          }
        };

        return e;
      })();
      t.Loading = a;
    },
    8138: function (e, t, r) {
      const n =
        (this && this.__awaiter) ||
        ((e, t, r, n) =>
          new (r || (r = Promise))((i, a) => {
            function s(e) {
              try {
                u(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              let t;

              if (e.done) {
                i(e.value);
              } else {
                ((t = e.value),
                t instanceof r
                  ? t
                  : new r((e) => {
                      e(t);
                    })).then(s, o);
              }
            }
            u((n = n.apply(e, t || [])).next());
          }));

      const i =
        (this && this.__generator) ||
        ((e, t) => {
          let r;
          let n;
          let i;
          let a;
          let s = {
            label: 0,
            sent() {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: [],
          };
          a = { next: o(0), throw: o(1), return: o(2) };

          if (typeof Symbol == "function") {
            a[Symbol.iterator] = function () {
              return this;
            };
          }

          return a;
          function o(a) {
            return (o) =>
              ((a) => {
                if (r) {
                  throw new TypeError("Generator is already executing.");
                }

                while (s) {
                  try {
                    r = 1;

                    if (
                      n &&
                      (i =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, a[1])).done
                    ) {
                      return i;
                    }

                    n = 0;

                    if (i) {
                      a = [2 & a[0], i.value];
                    }

                    switch (a[0]) {
                      case 0:
                      case 1: {
                        i = a;
                        break;
                      }
                      case 4: {
                        s.label++;
                        return { value: a[1], done: false };
                      }
                      case 5: {
                        s.label++;
                        n = a[1];
                        a = [0];
                        continue;
                      }
                      case 7: {
                        a = s.ops.pop();
                        s.trys.pop();
                        continue;
                      }
                      default: {
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (a[0] !== 6 && a[0] !== 2)
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          a[0] === 3 &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          s.label = a[1];
                          break;
                        }
                        if (a[0] === 6 && s.label < i[1]) {
                          s.label = i[1];
                          i = a;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2];
                          s.ops.push(a);
                          break;
                        }

                        if (i[2]) {
                          s.ops.pop();
                        }

                        s.trys.pop();
                        continue;
                      }
                    }

                    a = t.call(e, s);
                  } catch (e) {
                    a = [6, e];
                    n = 0;
                  } finally {
                    r = 0;
                    i = 0;
                  }
                }

                if (5 & a[0]) {
                  throw a[1];
                }
                return { value: a[0] ? a[1] : undefined, done: true };
              })([a, o]);
          }
        });

      Object.defineProperty(t, "__esModule", { value: true });
      t.Menu = undefined;
      const a = r(6079);
      const s = r(2691);
      const o = r(7109);
      const u = r(8795);

      const c = (() => {
        function e(e, t, r, a, c) {
          const l = this;
          this.element = e;
          this.list = t;
          this.items = r;
          this.keyboardListener = a;
          this.options = c;
          this.currentIndex = null;
          this.onLeave = new o.SimpleEvent();

          this.onKey = (e, t) =>
            n(l, undefined, undefined, function () {
              let r;
              return i(this, function (n) {
                switch (n.label) {
                  case 0: {
                    if (t !== s.KeyType.down) {
                      return [2];
                    }
                    if (this.currentIndex === null) {
                      return [3, 7];
                    }
                    switch (e) {
                      case s.Key.up: {
                        return [3, 1];
                      }
                      case s.Key.down: {
                        return [3, 2];
                      }
                      case s.Key.enter: {
                        return [3, 3];
                      }
                    }
                    return [3, 7];
                  }
                  case 1: {
                    this.select(this.currentIndex - 1);
                    return [2];
                  }
                  case 2: {
                    this.select(this.currentIndex + 1);
                    return [2];
                  }
                  case 3: {
                    n.trys.push([3, 5, , 6]);
                    return [4, this.items[this.currentIndex].item.execute(e)];
                  }
                  case 4: {
                    n.sent();
                    return [3, 6];
                  }
                  case 5: {
                    r = n.sent();
                    (0, u.uglyLogger)(r);
                    console.error(r);
                    return [3, 6];
                  }
                  case 6: {
                    return [2];
                  }
                  case 7: {
                    return e === s.Key.back
                      ? (this.options && this.options.onLeaveHandler
                          ? this.options.onLeaveHandler()
                          : this.onLeave.forward(),
                        [2])
                      : [2];
                  }
                }
              });
            });
        }

        e.create = (t, r, n) => {
          const i = document.createElement("div");
          i.className = "menu";
          i.innerHTML =
            '<div class="navbar">\n\t\t\t\t<h1>\n\t\t\t\t\t<strong></strong>\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t\t<ul class="items"></ul>';
          i.getElementsByTagName("strong")[0].innerText = t;
          const a = i.getElementsByClassName("items")[0];
          const o = r.map((e) => {
            const t = ((e) => {
              const t = document.createElement("li");
              t.className = "item";

              t.innerHTML = `<span class="icon"><img src="${e.iconUrl}" /></span>\n        <strong class="title">${e.label}</strong>`;

              t.getElementsByTagName("img")[0].setAttribute("alt", e.label);
              t.getElementsByTagName("strong")[0].innerText = e.label;
              return t;
            })(e);
            a.appendChild(t);
            return { element: t, item: e };
          });
          const u = s.KeyboardListener.instance();
          const c = new e(i, a, o, u, n);

          if (r.length > 0) {
            c.select(0);
          }

          u.subscribe(c.onKey);
          return c;
        };

        e.prototype.select = function (e) {
          if (this.currentIndex !== null) {
            this.items[this.currentIndex].element.classList.remove("selected");
          }

          if (e >= this.items.length) {
            e = 0;
          } else if (e < 0) {
            e = this.items.length - 1;
          }

          this.items[e].element.classList.add("selected");
          this.currentIndex = e;

          this.list.scrollTop = (0, a.getRelativeOffsetY)(
            this.list,
            this.items[e].element
          );
        };

        e.prototype.destroy = function () {
          this.keyboardListener.unsubscribe();
        };

        return e;
      })();

      t.Menu = c;
    },
    1875: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.Router = undefined;
      const r = (() => {
        function e(e, t, r) {
          const n = this;
          this.container = e;
          this.defaultRouteName = t;
          this.definitions = r;
          this.history = [];

          this.onLeave = () => {
            n.goBack();
          };
        }

        e.create = (t, r, n, i) => {
          const a = document.createElement("div");
          a.className = "router-container";
          t.appendChild(a);
          const s = new e(a, n, i);
          const o = (() => {
            const e = window.location.hash;
            return e ? e.substring(1) : null;
          })();

          if (o) {
            s.open(o);
          } else {
            s.open(r);
          }

          return s;
        };

        e.prototype.openDefault = function () {
          this.open(this.defaultRouteName);
        };

        e.prototype.goBack = function () {
          if (this.history.length >= 2) {
            this.history.pop();
            const e = this.history.pop();

            if (e) {
              this.open(e);
            }
          } else {
            this.history.length = 0;
            this.openDefault();
          }
        };

        e.prototype.open = function (e) {
          let t;
          const r = this.definitions.find((t) => t.name === e);
          if (!r) {
            throw new Error(`Route not found ${e}`);
          }

          if (this.currentRoute) {
            this.container.removeChild(this.currentRoute.element),
              this.currentRoute.onLeave.unsubscribe(this.onLeave),
              this.currentRoute.destroy();
          }

          this.currentRoute = r.factory(this);
          this.currentRoute.onLeave.subscribe(this.onLeave);
          this.container.appendChild(this.currentRoute.element);

          if (
            this.history.length < 1 ||
            this.history[this.history.length - 1] !== e
          ) {
            this.history.push(e);
          }

          t = e;
          location.replace(`${location.href.replace(/\#.*/, "")}#${t}`);
        };

        return e;
      })();
      t.Router = r;
    },
    7109: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.SimpleEvent = undefined;
      const r = (() => {
        function e() {
          this.listeners = [];
        }

        e.prototype.subscribe = function (e) {
          this.listeners.push(e);
        };

        e.prototype.unsubscribe = function (e) {
          const t = this.listeners.indexOf(e);
          if (!(t >= 0)) {
            throw new Error("Unknown listener");
          }
          this.listeners.splice(t, 1);
        };

        e.prototype.forward = function (e) {
          if (this.listeners.length > 0) {
            this.listeners.forEach((t) => t(e));
          }
        };

        e.prototype.count = function () {
          return this.listeners.length;
        };

        return e;
      })();
      t.SimpleEvent = r;
    },
    2101: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.splashRoute = undefined;
      const n = r(4105);
      const i = r(7109);
      t.splashRoute = () => ({
        name: "splash",

        factory(e) {
          return a.create(e);
        },
      });
      var a = (() => {
        function e(e) {
          this.element = e;
          this.onLeave = new i.SimpleEvent();
        }

        e.create = (t) => {
          const r = document.createElement("div");
          r.className = "splash";
          r.innerHTML = '<h4>N4NO<span class="domain">.com</span></h4>';
          const i = n.AdsManager.instance();
          const a = new e(r);

          i.tryDisplay().then(() => {
            t.openDefault();
          });

          return a;
        };

        e.prototype.destroy = () => {};
        return e;
      })();
    },
    5916: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.Tracker = undefined;
      let r = null;

      const n = (() => {
        function e(e, t, r) {
          this.isEnabled = e;
          this.appName = t;
          this.appVersion = r;
        }

        e.init = (t, n, i) => {
          r = new e(t, n, i);
        };

        e.instance = () => {
          if (!r) {
            throw new Error("Tracker is not initialized");
          }
          return r;
        };

        e.prototype.track = function (e) {
          if (this.isEnabled) {
            if (!(a = localStorage.getItem("__clientId"))) {
              (i = new Uint8Array(16)),
                window.crypto.getRandomValues(i),
                (a = Array.from(i, (e) =>
                  e < 10 ? `0${String(e)}` : e.toString(16)
                ).join("")),
                localStorage.setItem("__clientId", a);
            }

            const t = a;
            const r = `http://kaios.n4no.com/api/tracker.php?app=${this.appName}&v=${this.appVersion}&c=${t}&e=${e}&f=i`;
            const n = document.createElement("img");
            n.src = r;
            n.width = 1;
            n.height = 1;
            n.style.position = "absolute";
            n.style.left = "-99999px";
            n.style.right = "-99999px";
            n.width = 1;
            n.height = 1;
            document.body.appendChild(n);

            setTimeout(() => {
              try {
                document.body.removeChild(n);
              } catch (e) {
                console.warn(e);
              }
            }, 30000 /* 3e4 */);
          }
          var i;
          var a;
        };

        e.prototype.appStarted = function () {
          this.track("app-started");
        };

        e.prototype.adDisplayed = function () {
          this.track("ad-displayed");
        };

        return e;
      })();

      t.Tracker = n;
    },
    8795: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.uglyLogger = undefined;
      let r = null;
      t.uglyLogger = (e, t) => {
        if (!r) {
          ((r = document.createElement("div")).className = "ugly-logger"),
            document.body.appendChild(r);
        }

        let n = "";

        if (
          (n =
            e == null
              ? "[empty]"
              : e instanceof Error
              ? `${e.message} (${e.name}) ${e.stack}`
              : typeof e == "string"
              ? e
              : typeof e == "number"
              ? e.toString()
              : JSON.stringify(e)).length > 100
        ) {
          n = n.substring(0, 100);
        }

        const i = document.createElement("div");
        i.innerText = n;
        i.className = "ugly-logger-log";
        r.appendChild(i);

        setTimeout(() => {
          if (r != null) {
            r.removeChild(i);
          }
        }, t || 5000 /* 5e3 */);
      };
    },
    5355: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.resolveVersion = undefined;
      const n = r(200);
      t.resolveVersion = (e) => {
        let t = "0.";
        switch (n.KaiOsDetector.getVersion()) {
          case 3: {
            t = "3.";
            break;
          }
          case 2: {
            t = "2.";
          }
        }
        return `${t}${e}`;
      };
    },
    1772: (e, t, r) => {
      r.d(t, { Z: () => o });
      const n = r(8081);
      const i = r.n(n);
      const a = r(3645);
      const s = r.n(a)()(i());
      s.push([
        e.id,
        ".loading-container, .loading-progress {position: absolute; top: 0; right: 0; bottom: 0; left: 0;}\n.loading-progress {background: #EAEAEA; text-align: center;}\n.loading-progress .message {margin-top: 50vh; display: block; animation: blinker 1s linear infinite;}\n@keyframes blinker {\n    50% {\n        opacity: 0;\n    }\n}\n",
        "",
      ]);
      const o = s;
    },
    4005: (e, t, r) => {
      r.d(t, { Z: () => o });
      const n = r(8081);
      const i = r.n(n);
      const a = r(3645);
      const s = r.n(a)()(i());
      s.push([
        e.id,
        ".menu {position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: #EAEAEA;}\n.menu .navbar {position: absolute; left: 0; top: 0; right: 0; display: table; width: 100%; height: 34px;}\n.menu .navbar h1 {display: table-cell; vertical-align: middle; text-align: center; box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);}\n.menu .navbar h1 strong {color: #FFF; font-weight: 700; text-shadow: 1px 1px rgba(0, 0, 0, 0.2);}\n.menu ul.items {position: absolute; left: 0; top: 34px; right: 0; bottom: 0; overflow: auto; overflow-x: hidden; overflow-y: scroll;}\n.menu ul.items li.item {padding: 10px 10px 10px 7px; margin: 5px; background: #FFF; border-left: 3px solid #FFF; box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);}\n\n.menu ul.items li.item span.icon {display: inline-block; vertical-align: middle; width: 16px; height: 16px; margin-right: 5px; background-size: 16px 16px;}\n.menu ul.items li.item span.icon img {width: 100%; height: 100%;}\n.menu ul.items li.item strong.title {display: inline-block; vertical-align: middle; line-height: 1.2em;}\n",
        "",
      ]);
      const o = s;
    },
    9465: (e, t, r) => {
      r.d(t, { Z: () => o });
      const n = r(8081);
      const i = r.n(n);
      const a = r(3645);
      const s = r.n(a)()(i());
      s.push([
        e.id,
        "#root {position: absolute; left: 0; top: 0; width: 100vw; height: 100vh; z-index: 1;}\n",
        "",
      ]);
      const o = s;
    },
    1521: (e, t, r) => {
      r.d(t, { Z: () => o });
      const n = r(8081);
      const i = r.n(n);
      const a = r(3645);
      const s = r.n(a)()(i());
      s.push([
        e.id,
        ".splash {position: absolute; left: 0; top: 0; bottom: 0; right: 0; display: flex; justify-content: center; align-items: center; background: #C91B3E; background: linear-gradient(145deg, #C91B3E 0%, #BF1CC9 100%);}\n.splash h4 {position: relative; display: inline-block; color: #FFF; padding: 4px 10px; font-weight: bold; font-size: 35px; line-height: 1.2em; letter-spacing: -0.02em; box-shadow: 8px 8px rgba(0, 0, 0, 0.2);\n\tbackground: #430027; background: linear-gradient(145deg, #430027 0%, #1C0043 100%);}\n.splash h4 span.domain {font-size: 14px; line-height: 1.2em;}\n.splash h4::after {position: absolute; left: 30%; right: 0; bottom: -30px; content: ' '; display: block; width: 20%; height: 4px; background: #FFF;\n\tanimation: loading 1500ms infinite ease-in-out;}\n@keyframes loading {\n\t0% {left: 0; opacity: 0;} \n\t50% {opacity: 1;}\n\t100% {left: 80%; opacity: 0;}\n}\n",
        "",
      ]);
      const o = s;
    },
    1327: (e, t, r) => {
      r.d(t, { Z: () => o });
      const n = r(8081);
      const i = r.n(n);
      const a = r(3645);
      const s = r.n(a)()(i());
      s.push([
        e.id,
        ".ugly-logger {position: absolute; left: 0; bottom: 0; right: 0; z-index: 9999999;}\n.ugly-logger-log {margin: 0 5px 5px; padding: 8px; background: #fff3cd; color: #856404; border-left: 3px solid #856404; font-size: 14px; line-height: 1.1em; box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);}\n",
        "",
      ]);
      const o = s;
    },
    1238: (e, t, r) => {
      r.d(t, { Z: () => o });
      const n = r(8081);
      const i = r.n(n);
      const a = r(3645);
      const s = r.n(a)()(i());
      s.push([
        e.id,
        "\nhtml, body, h1 {font: 14px/1em 'Open Sans', Arial, Verdana, Tahoma, Serif; background: #000;}\nbody, ul, li, h1, h4, table, tr, td, th {margin: 0; padding: 0; list-style-type: none;}\nstrong, em {font-weight: normal; font-style: normal;}\n\n.emulator {position: absolute; top: 0; right: 0; left: 0; bottom: 0;}\n.emulator .frame-rate {position: absolute; z-index: 2; left: 0; top: 0; padding: 3px 5px; font-weight: bold; font-size: 12px; color: silver; background: #000;}\n.emulator .canvas {position: absolute; z-index: 1; left: 50%; top: 50%; transform: translate(-50%, -50%);}\n.emulator .hint {position: absolute; z-index: 2; right: 0; bottom: 0; background: #4f4f4f; color: #FFF; padding: 5px 8px; font-size: 14px;}\n\n.keyboard-info {position: absolute; z-index: 3; top: 0; right: 0; left: 0; bottom: 0; display: none; justify-content: center; align-items: center; background: rgba(0, 0, 0, 0.85);}\n.keyboard-info img {width: 70%; max-width: 400px; height: auto;}\n.keyboard-info.visible {display: flex;}\n\n.menu .navbar h1 {background: #212121; background: linear-gradient(145deg, #212121 0%, #4f4f4f 100%);}\n.menu ul.items li.item.selected {border-color: #df1006; background: #ffc6c3; background: linear-gradient(145deg, #ffc6c3 0%, #FFF 100%);}\n",
        "",
      ]);
      const o = s;
    },
    3645: (e) => {
      e.exports = (e) => {
        const t = [];

        t.toString = function () {
          return this.map((t) => {
            let r = "";
            const n = t[5] !== undefined;

            if (t[4]) {
              r += `@supports (${t[4]}) {`;
            }

            if (t[2]) {
              r += `@media ${t[2]} {`;
            }

            if (n) {
              r += `@layer${t[5].length > 0 ? " ".concat(t[5]) : ""} {`;
            }

            r += e(t);

            if (n) {
              r += "}";
            }

            if (t[2]) {
              r += "}";
            }

            if (t[4]) {
              r += "}";
            }

            return r;
          }).join("");
        };

        t.i = function (e, r, n, i, a) {
          if (typeof e == "string") {
            e = [[null, e, undefined]];
          }

          const s = {};
          if (n) {
            for (let o = 0; o < this.length; o++) {
              const u = this[o][0];

              if (u != null) {
                s[u] = true;
              }
            }
          }
          for (let c = 0; c < e.length; c++) {
            const l = [].concat(e[c]);

            if (!n || !s[l[0]]) {
              a !== undefined &&
                (l[5] === undefined ||
                  (l[1] = `@layer${l[5].length > 0 ? " ".concat(l[5]) : ""} {${
                    l[1]
                  }}`),
                (l[5] = a)),
                r &&
                  (l[2]
                    ? ((l[1] = `@media ${l[2]} {${l[1]}}`), (l[2] = r))
                    : (l[2] = r)),
                i &&
                  (l[4]
                    ? ((l[1] = `@supports (${l[4]}) {${l[1]}}`), (l[4] = i))
                    : (l[4] = `${i}`)),
                t.push(l);
            }
          }
        };

        return t;
      };
    },
    8081: (e) => {
      e.exports = (e) => e[1];
    },
    5733: (e, t, r) => {
      e.exports = (function e(t, r, n) {
        function i(s, o) {
          if (!r[s]) {
            if (!t[s]) {
              if (a) {
                return a(s, true);
              }
              const u = new Error(`Cannot find module '${s}'`);
              u.code = "MODULE_NOT_FOUND";
              throw u;
            }
            const c = (r[s] = { exports: {} });
            t[s][0].call(
              c.exports,
              (e) => i(t[s][1][e] || e),
              c,
              c.exports,
              e,
              t,
              r,
              n
            );
          }
          return r[s].exports;
        }
        var a = undefined;
        for (let s = 0; s < n.length; s++) {
          i(n[s]);
        }
        return i;
      })(
        {
          1: [
            (e, t, r) => {
              const n = e("./utils");
              const i = e("./support");
              const a =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

              r.encode = (e) => {
                for (
                  var t,
                    r,
                    i,
                    s,
                    o,
                    u,
                    c,
                    l = [],
                    h = 0,
                    f = e.length,
                    d = f,
                    p = n.getTypeOf(e) !== "string";
                  h < e.length;

                ) {
                  d = f - h;

                  i = p
                    ? ((t = e[h++]),
                      (r = h < f ? e[h++] : 0),
                      h < f ? e[h++] : 0)
                    : ((t = e.charCodeAt(h++)),
                      (r = h < f ? e.charCodeAt(h++) : 0),
                      h < f ? e.charCodeAt(h++) : 0);

                  s = t >> 2;
                  o = ((3 & t) << 4) | (r >> 4);
                  u = d > 1 ? ((15 & r) << 2) | (i >> 6) : 64;
                  c = d > 2 ? 63 & i : 64;

                  l.push(a.charAt(s) + a.charAt(o) + a.charAt(u) + a.charAt(c));
                }
                return l.join("");
              };

              r.decode = (e) => {
                let t;
                let r;
                let n;
                let s;
                let o;
                let u;
                let c = 0;
                let l = 0;
                const h = "data:";
                if (e.substr(0, h.length) === h) {
                  throw new Error(
                    "Invalid base64 input, it looks like a data url."
                  );
                }
                let f;
                let d =
                  (3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length) / 4;

                if (e.charAt(e.length - 1) === a.charAt(64)) {
                  d--;
                }

                if (e.charAt(e.length - 2) === a.charAt(64)) {
                  d--;
                }

                if (d % 1 != 0) {
                  throw new Error("Invalid base64 input, bad content length.");
                }

                for (
                  f = i.uint8array ? new Uint8Array(0 | d) : new Array(0 | d);
                  c < e.length;

                ) {
                  t =
                    (a.indexOf(e.charAt(c++)) << 2) |
                    ((s = a.indexOf(e.charAt(c++))) >> 4);

                  r = ((15 & s) << 4) | ((o = a.indexOf(e.charAt(c++))) >> 2);

                  n = ((3 & o) << 6) | (u = a.indexOf(e.charAt(c++)));
                  f[l++] = t;

                  if (o !== 64) {
                    f[l++] = r;
                  }

                  if (u !== 64) {
                    f[l++] = n;
                  }
                }
                return f;
              };
            },
            { "./support": 30, "./utils": 32 },
          ],
          2: [
            (e, t, r) => {
              const n = e("./external");
              const i = e("./stream/DataWorker");
              const a = e("./stream/Crc32Probe");
              const s = e("./stream/DataLengthProbe");
              function o(e, t, r, n, i) {
                this.compressedSize = e;
                this.uncompressedSize = t;
                this.crc32 = r;
                this.compression = n;
                this.compressedContent = i;
              }

              o.prototype = {
                getContentWorker() {
                  const e = new i(n.Promise.resolve(this.compressedContent))
                    .pipe(this.compression.uncompressWorker())
                    .pipe(new s("data_length"));
                  const t = this;

                  e.on("end", function () {
                    if (this.streamInfo.data_length !== t.uncompressedSize) {
                      throw new Error("Bug : uncompressed data size mismatch");
                    }
                  });

                  return e;
                },
                getCompressedWorker() {
                  return new i(n.Promise.resolve(this.compressedContent))
                    .withStreamInfo("compressedSize", this.compressedSize)
                    .withStreamInfo("uncompressedSize", this.uncompressedSize)
                    .withStreamInfo("crc32", this.crc32)
                    .withStreamInfo("compression", this.compression);
                },
              };

              o.createWorkerFrom = (e, t, r) =>
                e
                  .pipe(new a())
                  .pipe(new s("uncompressedSize"))
                  .pipe(t.compressWorker(r))
                  .pipe(new s("compressedSize"))
                  .withStreamInfo("compression", t);

              t.exports = o;
            },
            {
              "./external": 6,
              "./stream/Crc32Probe": 25,
              "./stream/DataLengthProbe": 26,
              "./stream/DataWorker": 27,
            },
          ],
          3: [
            (e, t, r) => {
              const n = e("./stream/GenericWorker");

              r.STORE = {
                magic: "\0\0",
                compressWorker() {
                  return new n("STORE compression");
                },
                uncompressWorker() {
                  return new n("STORE decompression");
                },
              };

              r.DEFLATE = e("./flate");
            },
            { "./flate": 7, "./stream/GenericWorker": 28 },
          ],
          4: [
            (e, t, r) => {
              const n = e("./utils");
              const i = (() => {
                for (var e, t = [], r = 0; r < 256; r++) {
                  e = r;
                  for (let n = 0; n < 8; n++) {
                    e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                  }
                  t[r] = e;
                }
                return t;
              })();
              t.exports = (e, t) =>
                e !== undefined && e.length
                  ? n.getTypeOf(e) !== "string"
                    ? ((e, t, r, n) => {
                        const a = i;
                        const s = 0 + r;
                        e ^= -1;
                        for (let o = 0; o < s; o++) {
                          e = (e >>> 8) ^ a[255 & (e ^ t[o])];
                        }
                        return -1 ^ e;
                      })(0 | t, e, e.length)
                    : ((e, t, r, n) => {
                        const a = i;
                        const s = 0 + r;
                        e ^= -1;
                        for (let o = 0; o < s; o++) {
                          e = (e >>> 8) ^ a[255 & (e ^ t.charCodeAt(o))];
                        }
                        return -1 ^ e;
                      })(0 | t, e, e.length)
                  : 0;
            },
            { "./utils": 32 },
          ],
          5: [
            (e, t, r) => {
              r.base64 = false;
              r.binary = false;
              r.dir = false;
              r.createFolders = true;
              r.date = null;
              r.compression = null;
              r.compressionOptions = null;
              r.comment = null;
              r.unixPermissions = null;
              r.dosPermissions = null;
            },
            {},
          ],
          6: [
            (e, t, r) => {
              let n;
              n = typeof Promise != "undefined" ? Promise : e("lie");
              t.exports = { Promise: n };
            },
            { lie: 37 },
          ],
          7: [
            (e, t, r) => {
              const n =
                typeof Uint8Array != "undefined" &&
                typeof Uint16Array != "undefined" &&
                typeof Uint32Array != "undefined";
              const i = e("pako");
              const a = e("./utils");
              const s = e("./stream/GenericWorker");
              const o = n ? "uint8array" : "array";
              function u(e, t) {
                s.call(this, `FlateWorker/${e}`);
                this._pako = null;
                this._pakoAction = e;
                this._pakoOptions = t;
                this.meta = {};
              }
              r.magic = "\b\0";
              a.inherits(u, s);

              u.prototype.processChunk = function (e) {
                this.meta = e.meta;

                if (this._pako === null) {
                  this._createPako();
                }

                this._pako.push(a.transformTo(o, e.data), false);
              };

              u.prototype.flush = function () {
                s.prototype.flush.call(this);

                if (this._pako === null) {
                  this._createPako();
                }

                this._pako.push([], true);
              };

              u.prototype.cleanUp = function () {
                s.prototype.cleanUp.call(this);
                this._pako = null;
              };

              u.prototype._createPako = function () {
                this._pako = new i[this._pakoAction]({
                  raw: true,
                  level: this._pakoOptions.level || -1,
                });
                const e = this;
                this._pako.onData = (t) => {
                  e.push({ data: t, meta: e.meta });
                };
              };

              r.compressWorker = (e) => new u("Deflate", e);

              r.uncompressWorker = () => new u("Inflate", {});
            },
            { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
          ],
          8: [
            (e, t, r) => {
              function n(e, t) {
                let r;
                let n = "";
                for (r = 0; r < t; r++) {
                  n += String.fromCharCode(255 & e);
                  e >>>= 8;
                }
                return n;
              }
              function i(e, t, r, i, s, l) {
                let h;
                let f;

                const { file, compression } = e;

                const m = l !== o.utf8encode;
                const g = a.transformTo("string", l(file.name));
                const v = a.transformTo("string", o.utf8encode(file.name));

                const { comment, dir, date } = file;

                const y = a.transformTo("string", l(comment));
                const _ = a.transformTo("string", o.utf8encode(comment));
                const w = v.length !== file.name.length;
                const k = _.length !== comment.length;
                let x = "";
                let S = "";
                let E = "";
                const A = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };

                if (!t || r) {
                  (A.crc32 = e.crc32),
                    (A.compressedSize = e.compressedSize),
                    (A.uncompressedSize = e.uncompressedSize);
                }

                let T = 0;

                if (t) {
                  T |= 8;
                }

                if (!m && (w || k)) {
                  T |= 2048;
                }

                let z = 0;
                let R = 0;

                if (dir) {
                  z |= 16;
                }

                if (s === "UNIX") {
                  (R = 798),
                    (z |= ((e, t) => {
                      let r = e;

                      if (!e) {
                        r = t ? 16893 : 33204;
                      }

                      return (65535 & r) << 16;
                    })(file.unixPermissions, dir));
                } else {
                  (R = 20), (z |= ((e) => 63 & (e || 0))(file.dosPermissions));
                }

                h = date.getUTCHours();
                h <<= 6;
                h |= date.getUTCMinutes();
                h <<= 5;
                h |= date.getUTCSeconds() / 2;
                f = date.getUTCFullYear() - 1980;
                f <<= 4;
                f |= date.getUTCMonth() + 1;
                f <<= 5;
                f |= date.getUTCDate();

                if (w) {
                  (S = n(1, 1) + n(u(g), 4) + v),
                    (x += `up${n(S.length, 2)}${S}`);
                }

                if (k) {
                  (E = n(1, 1) + n(u(y), 4) + _),
                    (x += `uc${n(E.length, 2)}${E}`);
                }

                let I = "";
                I += "\n\0";
                I += n(T, 2);
                I += compression.magic;
                I += n(h, 2);
                I += n(f, 2);
                I += n(A.crc32, 4);
                I += n(A.compressedSize, 4);
                I += n(A.uncompressedSize, 4);
                I += n(g.length, 2);
                I += n(x.length, 2);

                return {
                  fileRecord: c.LOCAL_FILE_HEADER + I + g + x,
                  dirRecord: `${
                    c.CENTRAL_FILE_HEADER + n(R, 2) + I + n(y.length, 2)
                  }\0\0\0\0${n(z, 4)}${n(i, 4)}${g}${x}${y}`,
                };
              }
              var a = e("../utils");
              const s = e("../stream/GenericWorker");
              var o = e("../utf8");
              var u = e("../crc32");
              var c = e("../signature");
              function l(e, t, r, n) {
                s.call(this, "ZipFileWorker");
                this.bytesWritten = 0;
                this.zipComment = t;
                this.zipPlatform = r;
                this.encodeFileName = n;
                this.streamFiles = e;
                this.accumulate = false;
                this.contentBuffer = [];
                this.dirRecords = [];
                this.currentSourceOffset = 0;
                this.entriesCount = 0;
                this.currentFile = null;
                this._sources = [];
              }
              a.inherits(l, s);

              l.prototype.push = function (e) {
                const t = e.meta.percent || 0;
                const r = this.entriesCount;
                const n = this._sources.length;

                if (this.accumulate) {
                  this.contentBuffer.push(e);
                } else {
                  (this.bytesWritten += e.data.length),
                    s.prototype.push.call(this, {
                      data: e.data,
                      meta: {
                        currentFile: this.currentFile,
                        percent: r ? (t + 100 * (r - n - 1)) / r : 100,
                      },
                    });
                }
              };

              l.prototype.openedSource = function (e) {
                this.currentSourceOffset = this.bytesWritten;
                this.currentFile = e.file.name;
                const t = this.streamFiles && !e.file.dir;
                if (t) {
                  const r = i(
                    e,
                    t,
                    false,
                    this.currentSourceOffset,
                    this.zipPlatform,
                    this.encodeFileName
                  );
                  this.push({ data: r.fileRecord, meta: { percent: 0 } });
                } else {
                  this.accumulate = true;
                }
              };

              l.prototype.closedSource = function (e) {
                this.accumulate = false;
                const t = this.streamFiles && !e.file.dir;
                const r = i(
                  e,
                  t,
                  true,
                  this.currentSourceOffset,
                  this.zipPlatform,
                  this.encodeFileName
                );
                this.dirRecords.push(r.dirRecord);

                if (t) {
                  this.push({
                    data: ((e) =>
                      c.DATA_DESCRIPTOR +
                      n(e.crc32, 4) +
                      n(e.compressedSize, 4) +
                      n(e.uncompressedSize, 4))(e),
                    meta: { percent: 100 },
                  });
                } else {
                  for (
                    this.push({ data: r.fileRecord, meta: { percent: 0 } });
                    this.contentBuffer.length;

                  ) {
                    this.push(this.contentBuffer.shift());
                  }
                }

                this.currentFile = null;
              };

              l.prototype.flush = function () {
                for (
                  var e = this.bytesWritten, t = 0;
                  t < this.dirRecords.length;
                  t++
                ) {
                  this.push({
                    data: this.dirRecords[t],
                    meta: { percent: 100 },
                  });
                }
                const r = this.bytesWritten - e;
                const i = ((e, t, r, i, s) => {
                  const o = a.transformTo("string", s(i));
                  return `${c.CENTRAL_DIRECTORY_END}\0\0\0\0${n(e, 2)}${n(
                    e,
                    2
                  )}${n(t, 4)}${n(r, 4)}${n(o.length, 2)}${o}`;
                })(
                  this.dirRecords.length,
                  r,
                  e,
                  this.zipComment,
                  this.encodeFileName
                );
                this.push({ data: i, meta: { percent: 100 } });
              };

              l.prototype.prepareNextSource = function () {
                this.previous = this._sources.shift();
                this.openedSource(this.previous.streamInfo);

                if (this.isPaused) {
                  this.previous.pause();
                } else {
                  this.previous.resume();
                }
              };

              l.prototype.registerPrevious = function (e) {
                this._sources.push(e);
                const t = this;

                e.on("data", (e) => {
                  t.processChunk(e);
                });

                e.on("end", () => {
                  t.closedSource(t.previous.streamInfo);

                  if (t._sources.length) {
                    t.prepareNextSource();
                  } else {
                    t.end();
                  }
                });

                e.on("error", (e) => {
                  t.error(e);
                });

                return this;
              };

              l.prototype.resume = function () {
                return (
                  !!s.prototype.resume.call(this) &&
                  (!this.previous && this._sources.length
                    ? (this.prepareNextSource(), true)
                    : this.previous ||
                      this._sources.length ||
                      this.generatedError
                    ? undefined
                    : (this.end(), true))
                );
              };

              l.prototype.error = function (e) {
                const t = this._sources;
                if (!s.prototype.error.call(this, e)) {
                  return false;
                }
                for (let r = 0; r < t.length; r++) {
                  try {
                    t[r].error(e);
                  } catch (e) {}
                }
                return true;
              };

              l.prototype.lock = function () {
                s.prototype.lock.call(this);
                for (let e = this._sources, t = 0; t < e.length; t++) {
                  e[t].lock();
                }
              };

              t.exports = l;
            },
            {
              "../crc32": 4,
              "../signature": 23,
              "../stream/GenericWorker": 28,
              "../utf8": 31,
              "../utils": 32,
            },
          ],
          9: [
            (e, t, r) => {
              const n = e("../compressions");
              const i = e("./ZipFileWorker");
              r.generateWorker = (e, t, r) => {
                const a = new i(t.streamFiles, r, t.platform, t.encodeFileName);
                let s = 0;
                try {
                  e.forEach((e, r) => {
                    s++;

                    const i = ((e, t) => {
                      const r = e || t;
                      const n_r = n[r];
                      if (!n_r) {
                        throw new Error(
                          `${r} is not a valid compression method !`
                        );
                      }
                      return n_r;
                    })(r.options.compression, t.compression);

                    const o =
                      r.options.compressionOptions ||
                      t.compressionOptions ||
                      {};

                    const { dir, date } = r;

                    r._compressWorker(i, o)
                      .withStreamInfo("file", {
                        name: e,
                        dir: dir,
                        date: date,
                        comment: r.comment || "",
                        unixPermissions: r.unixPermissions,
                        dosPermissions: r.dosPermissions,
                      })
                      .pipe(a);
                  });

                  a.entriesCount = s;
                } catch (e) {
                  a.error(e);
                }
                return a;
              };
            },
            { "../compressions": 3, "./ZipFileWorker": 8 },
          ],
          10: [
            (e, t, r) => {
              function n(...args) {
                if (!(this instanceof n)) {
                  return new n();
                }
                if (args.length) {
                  throw new Error(
                    "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."
                  );
                }
                this.files = Object.create(null);
                this.comment = null;
                this.root = "";

                this.clone = function () {
                  const e = new n();
                  for (const t in this) {
                    if (typeof this[t] != "function") {
                      e[t] = this[t];
                    }
                  }
                  return e;
                };
              }
              (n.prototype = e("./object")).loadAsync = e("./load");
              n.support = e("./support");
              n.defaults = e("./defaults");
              n.version = "3.10.1";

              n.loadAsync = (e, t) => new n().loadAsync(e, t);

              n.external = e("./external");
              t.exports = n;
            },
            {
              "./defaults": 5,
              "./external": 6,
              "./load": 11,
              "./object": 15,
              "./support": 30,
            },
          ],
          11: [
            (e, t, r) => {
              const n = e("./utils");
              const i = e("./external");
              const a = e("./utf8");
              const s = e("./zipEntries");
              const o = e("./stream/Crc32Probe");
              const u = e("./nodejsUtils");
              function c(e) {
                return new i.Promise((t, r) => {
                  const n = e.decompressed.getContentWorker().pipe(new o());
                  n.on("error", (e) => {
                    r(e);
                  })
                    .on("end", () => {
                      if (n.streamInfo.crc32 !== e.decompressed.crc32) {
                        r(new Error("Corrupted zip : CRC32 mismatch"));
                      } else {
                        t();
                      }
                    })
                    .resume();
                });
              }
              t.exports = function (e, t) {
                const r = this;

                t = n.extend(t || {}, {
                  base64: false,
                  checkCRC32: false,
                  optimizedBinaryString: false,
                  createFolders: false,
                  decodeFileName: a.utf8decode,
                });

                return u.isNode && u.isStream(e)
                  ? i.Promise.reject(
                      new Error(
                        "JSZip can't accept a stream when loading a zip file."
                      )
                    )
                  : n
                      .prepareContent(
                        "the loaded zip file",
                        e,
                        true,
                        t.optimizedBinaryString,
                        t.base64
                      )
                      .then((e) => {
                        const r = new s(t);
                        r.load(e);
                        return r;
                      })
                      .then((e) => {
                        const r = [i.Promise.resolve(e)];
                        const e_files = e.files;
                        if (t.checkCRC32) {
                          for (let a = 0; a < e_files.length; a++) {
                            r.push(c(e_files[a]));
                          }
                        }
                        return i.Promise.all(r);
                      })
                      .then((e) => {
                        for (
                          var i = e.shift(), a = i.files, s = 0;
                          s < a.length;
                          s++
                        ) {
                          const a_s = a[s];
                          const a_s_fileNameStr = a_s.fileNameStr;
                          const c = n.resolve(a_s.fileNameStr);

                          r.file(c, a_s.decompressed, {
                            binary: true,
                            optimizedBinaryString: true,
                            date: a_s.date,
                            dir: a_s.dir,
                            comment: a_s.fileCommentStr.length
                              ? a_s.fileCommentStr
                              : null,
                            unixPermissions: a_s.unixPermissions,
                            dosPermissions: a_s.dosPermissions,
                            createFolders: t.createFolders,
                          });

                          if (!a_s.dir) {
                            r.file(c).unsafeOriginalName = a_s_fileNameStr;
                          }
                        }

                        if (i.zipComment.length) {
                          r.comment = i.zipComment;
                        }

                        return r;
                      });
              };
            },
            {
              "./external": 6,
              "./nodejsUtils": 14,
              "./stream/Crc32Probe": 25,
              "./utf8": 31,
              "./utils": 32,
              "./zipEntries": 33,
            },
          ],
          12: [
            (e, t, r) => {
              const n = e("../utils");
              const i = e("../stream/GenericWorker");
              function a(e, t) {
                i.call(this, `Nodejs stream input adapter for ${e}`);
                this._upstreamEnded = false;
                this._bindStream(t);
              }
              n.inherits(a, i);

              a.prototype._bindStream = function (e) {
                const t = this;
                (this._stream = e).pause();

                e.on("data", (e) => {
                  t.push({ data: e, meta: { percent: 0 } });
                })
                  .on("error", function (e) {
                    if (t.isPaused) {
                      this.generatedError = e;
                    } else {
                      t.error(e);
                    }
                  })
                  .on("end", () => {
                    if (t.isPaused) {
                      t._upstreamEnded = true;
                    } else {
                      t.end();
                    }
                  });
              };

              a.prototype.pause = function () {
                return (
                  !!i.prototype.pause.call(this) && (this._stream.pause(), true)
                );
              };

              a.prototype.resume = function () {
                return (
                  !!i.prototype.resume.call(this) &&
                  (this._upstreamEnded ? this.end() : this._stream.resume(),
                  true)
                );
              };

              t.exports = a;
            },
            { "../stream/GenericWorker": 28, "../utils": 32 },
          ],
          13: [
            (e, t, r) => {
              const n = e("readable-stream").Readable;
              function i(e, t, r) {
                n.call(this, t);
                this._helper = e;
                const i = this;
                e.on("data", (e, t) => {
                  if (!i.push(e)) {
                    i._helper.pause();
                  }

                  if (r) {
                    r(t);
                  }
                })
                  .on("error", (e) => {
                    i.emit("error", e);
                  })
                  .on("end", () => {
                    i.push(null);
                  });
              }
              e("../utils").inherits(i, n);

              i.prototype._read = function () {
                this._helper.resume();
              };

              t.exports = i;
            },
            { "../utils": 32, "readable-stream": 16 },
          ],
          14: [
            (e, t, r) => {
              t.exports = {
                isNode: typeof Buffer != "undefined",
                newBufferFrom(e, t) {
                  if (Buffer.from && Buffer.from !== Uint8Array.from) {
                    return Buffer.from(e, t);
                  }
                  if (typeof e == "number") {
                    throw new Error('The "data" argument must not be a number');
                  }
                  return new Buffer(e, t);
                },
                allocBuffer(e) {
                  if (Buffer.alloc) {
                    return Buffer.alloc(e);
                  }
                  const t = new Buffer(e);
                  t.fill(0);
                  return t;
                },
                isBuffer(e) {
                  return Buffer.isBuffer(e);
                },
                isStream(e) {
                  return (
                    e &&
                    typeof e.on == "function" &&
                    typeof e.pause == "function" &&
                    typeof e.resume == "function"
                  );
                },
              };
            },
            {},
          ],
          15: [
            (e, t, r) => {
              function n(e, t, r) {
                let n;
                let i = a.getTypeOf(t);
                const o = a.extend(r || {}, u);
                o.date = o.date || new Date();

                if (o.compression !== null) {
                  o.compression = o.compression.toUpperCase();
                }

                if (typeof o.unixPermissions == "string") {
                  o.unixPermissions = parseInt(o.unixPermissions, 8);
                }

                if (o.unixPermissions && 16384 & o.unixPermissions) {
                  o.dir = true;
                }

                if (o.dosPermissions && 16 & o.dosPermissions) {
                  o.dir = true;
                }

                if (o.dir) {
                  e = m(e);
                }

                if (o.createFolders && (n = p(e))) {
                  g.call(this, n, true);
                }

                const h =
                  i === "string" && o.binary === false && o.base64 === false;

                if (!r || r.binary === undefined) {
                  o.binary = !h;
                }

                if (
                  (t instanceof c && t.uncompressedSize === 0) ||
                  o.dir ||
                  !t ||
                  t.length === 0
                ) {
                  (o.base64 = false),
                    (o.binary = true),
                    (t = ""),
                    (o.compression = "STORE"),
                    (i = "string");
                }

                let v;
                v =
                  t instanceof c || t instanceof s
                    ? t
                    : f.isNode && f.isStream(t)
                    ? new d(e, t)
                    : a.prepareContent(
                        e,
                        t,
                        o.binary,
                        o.optimizedBinaryString,
                        o.base64
                      );
                const b = new l(e, v, o);
                this.files[e] = b;
              }
              const i = e("./utf8");
              var a = e("./utils");
              var s = e("./stream/GenericWorker");
              const o = e("./stream/StreamHelper");
              var u = e("./defaults");
              var c = e("./compressedObject");
              var l = e("./zipObject");
              const h = e("./generate");
              var f = e("./nodejsUtils");
              var d = e("./nodejs/NodejsStreamInputAdapter");
              var p = (e) => {
                if (e.slice(-1) === "/") {
                  e = e.substring(0, e.length - 1);
                }

                const t = e.lastIndexOf("/");
                return t > 0 ? e.substring(0, t) : "";
              };
              var m = (e) => {
                if (e.slice(-1) !== "/") {
                  e += "/";
                }

                return e;
              };
              var g = function (e, t) {
                t = t !== undefined ? t : u.createFolders;
                e = m(e);

                if (!this.files[e]) {
                  n.call(this, e, null, { dir: true, createFolders: t });
                }

                return this.files[e];
              };
              function v(e) {
                return Object.prototype.toString.call(e) === "[object RegExp]";
              }
              const b = {
                load() {
                  throw new Error(
                    "This method has been removed in JSZip 3.0, please check the upgrade guide."
                  );
                },
                forEach(e) {
                  let t;
                  let r;
                  let n;
                  for (t in this.files) {
                    n = this.files[t];

                    if (
                      (r = t.slice(this.root.length, t.length)) &&
                      t.slice(0, this.root.length) === this.root
                    ) {
                      e(r, n);
                    }
                  }
                },
                filter(e) {
                  const t = [];

                  this.forEach((r, n) => {
                    if (e(r, n)) {
                      t.push(n);
                    }
                  });

                  return t;
                },
                file(e, t, r) {
                  if (arguments.length !== 1) {
                    e = this.root + e;
                    n.call(this, e, t, r);
                    return this;
                  }
                  if (v(e)) {
                    const i = e;
                    return this.filter((e, t) => !t.dir && i.test(e));
                  }
                  const a = this.files[this.root + e];
                  return a && !a.dir ? a : null;
                },
                folder(e) {
                  if (!e) {
                    return this;
                  }
                  if (v(e)) {
                    return this.filter((t, r) => r.dir && e.test(t));
                  }
                  const t = this.root + e;
                  const r = g.call(this, t);
                  const n = this.clone();
                  n.root = r.name;
                  return n;
                },
                remove(e) {
                  e = this.root + e;
                  let t = this.files[e];

                  if (!t) {
                    e.slice(-1) !== "/" && (e += "/"), (t = this.files[e]);
                  }

                  if (t && !t.dir) {
                    delete this.files[e];
                  } else {
                    for (
                      let r = this.filter(
                          (t, r) => r.name.slice(0, e.length) === e
                        ),
                        n = 0;
                      n < r.length;
                      n++
                    ) {
                      delete this.files[r[n].name];
                    }
                  }

                  return this;
                },
                generate() {
                  throw new Error(
                    "This method has been removed in JSZip 3.0, please check the upgrade guide."
                  );
                },
                generateInternalStream(e) {
                  let t;
                  let r = {};
                  try {
                    r = a.extend(e || {}, {
                      streamFiles: false,
                      compression: "STORE",
                      compressionOptions: null,
                      type: "",
                      platform: "DOS",
                      comment: null,
                      mimeType: "application/zip",
                      encodeFileName: i.utf8encode,
                    });

                    r.type = r.type.toLowerCase();
                    r.compression = r.compression.toUpperCase();

                    if (r.type === "binarystring") {
                      r.type = "string";
                    }

                    if (!r.type) {
                      throw new Error("No output type specified.");
                    }

                    a.checkSupport(r.type);

                    if (
                      r.platform === "darwin" ||
                      r.platform === "freebsd" ||
                      r.platform === "linux" ||
                      r.platform === "sunos"
                    ) {
                      r.platform = "UNIX";
                    }

                    if (r.platform === "win32") {
                      r.platform = "DOS";
                    }

                    const n = r.comment || this.comment || "";
                    t = h.generateWorker(this, r, n);
                  } catch (e) {
                    (t = new s("error")).error(e);
                  }
                  return new o(t, r.type || "string", r.mimeType);
                },
                generateAsync(e, t) {
                  return this.generateInternalStream(e).accumulate(t);
                },
                generateNodeStream(e, t) {
                  if (!(e = e || {}).type) {
                    e.type = "nodebuffer";
                  }

                  return this.generateInternalStream(e).toNodejsStream(t);
                },
              };
              t.exports = b;
            },
            {
              "./compressedObject": 2,
              "./defaults": 5,
              "./generate": 9,
              "./nodejs/NodejsStreamInputAdapter": 12,
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
              "./utils": 32,
              "./zipObject": 35,
            },
          ],
          16: [
            (e, t, r) => {
              t.exports = e("stream");
            },
            { stream: undefined },
          ],
          17: [
            (e, t, r) => {
              const n = e("./DataReader");
              function i(e) {
                n.call(this, e);
                for (let t = 0; t < this.data.length; t++) {
                  e[t] = 255 & e[t];
                }
              }
              e("../utils").inherits(i, n);

              i.prototype.byteAt = function (e) {
                return this.data[this.zero + e];
              };

              i.prototype.lastIndexOfSignature = function (e) {
                for (
                  let t = e.charCodeAt(0),
                    r = e.charCodeAt(1),
                    n = e.charCodeAt(2),
                    i = e.charCodeAt(3),
                    a = this.length - 4;
                  a >= 0;
                  --a
                ) {
                  if (
                    this.data[a] === t &&
                    this.data[a + 1] === r &&
                    this.data[a + 2] === n &&
                    this.data[a + 3] === i
                  ) {
                    return a - this.zero;
                  }
                }
                return -1;
              };

              i.prototype.readAndCheckSignature = function (e) {
                const t = e.charCodeAt(0);
                const r = e.charCodeAt(1);
                const n = e.charCodeAt(2);
                const i = e.charCodeAt(3);
                const a = this.readData(4);
                return t === a[0] && r === a[1] && n === a[2] && i === a[3];
              };

              i.prototype.readData = function (e) {
                this.checkOffset(e);

                if (e === 0) {
                  return [];
                }

                const t = this.data.slice(
                  this.zero + this.index,
                  this.zero + this.index + e
                );
                this.index += e;
                return t;
              };

              t.exports = i;
            },
            { "../utils": 32, "./DataReader": 18 },
          ],
          18: [
            (e, t, r) => {
              const n = e("../utils");
              function i(e) {
                this.data = e;
                this.length = e.length;
                this.index = 0;
                this.zero = 0;
              }

              i.prototype = {
                checkOffset(e) {
                  this.checkIndex(this.index + e);
                },
                checkIndex(e) {
                  if (this.length < this.zero + e || e < 0) {
                    throw new Error(
                      `End of data reached (data length = ${this.length}, asked index = ${e}). Corrupted zip ?`
                    );
                  }
                },
                setIndex(e) {
                  this.checkIndex(e);
                  this.index = e;
                },
                skip(e) {
                  this.setIndex(this.index + e);
                },
                byteAt() {},
                readInt(e) {
                  let t;
                  let r = 0;
                  this.checkOffset(e);

                  for (t = this.index + e - 1; t >= this.index; t--) {
                    r = (r << 8) + this.byteAt(t);
                  }

                  this.index += e;
                  return r;
                },
                readString(e) {
                  return n.transformTo("string", this.readData(e));
                },
                readData() {},
                lastIndexOfSignature() {},
                readAndCheckSignature() {},
                readDate() {
                  const e = this.readInt(4);
                  return new Date(
                    Date.UTC(
                      1980 + ((e >> 25) & 127),
                      ((e >> 21) & 15) - 1,
                      (e >> 16) & 31,
                      (e >> 11) & 31,
                      (e >> 5) & 63,
                      (31 & e) << 1
                    )
                  );
                },
              };

              t.exports = i;
            },
            { "../utils": 32 },
          ],
          19: [
            (e, t, r) => {
              const n = e("./Uint8ArrayReader");
              function i(e) {
                n.call(this, e);
              }
              e("../utils").inherits(i, n);

              i.prototype.readData = function (e) {
                this.checkOffset(e);
                const t = this.data.slice(
                  this.zero + this.index,
                  this.zero + this.index + e
                );
                this.index += e;
                return t;
              };

              t.exports = i;
            },
            { "../utils": 32, "./Uint8ArrayReader": 21 },
          ],
          20: [
            (e, t, r) => {
              const n = e("./DataReader");
              function i(e) {
                n.call(this, e);
              }
              e("../utils").inherits(i, n);

              i.prototype.byteAt = function (e) {
                return this.data.charCodeAt(this.zero + e);
              };

              i.prototype.lastIndexOfSignature = function (e) {
                return this.data.lastIndexOf(e) - this.zero;
              };

              i.prototype.readAndCheckSignature = function (e) {
                return e === this.readData(4);
              };

              i.prototype.readData = function (e) {
                this.checkOffset(e);
                const t = this.data.slice(
                  this.zero + this.index,
                  this.zero + this.index + e
                );
                this.index += e;
                return t;
              };

              t.exports = i;
            },
            { "../utils": 32, "./DataReader": 18 },
          ],
          21: [
            (e, t, r) => {
              const n = e("./ArrayReader");
              function i(e) {
                n.call(this, e);
              }
              e("../utils").inherits(i, n);

              i.prototype.readData = function (e) {
                this.checkOffset(e);

                if (e === 0) {
                  return new Uint8Array(0);
                }

                const t = this.data.subarray(
                  this.zero + this.index,
                  this.zero + this.index + e
                );
                this.index += e;
                return t;
              };

              t.exports = i;
            },
            { "../utils": 32, "./ArrayReader": 17 },
          ],
          22: [
            (e, t, r) => {
              const n = e("../utils");
              const i = e("../support");
              const a = e("./ArrayReader");
              const s = e("./StringReader");
              const o = e("./NodeBufferReader");
              const u = e("./Uint8ArrayReader");
              t.exports = (e) => {
                const t = n.getTypeOf(e);
                n.checkSupport(t);

                if (t !== "string" || i.uint8array) {
                  if (t === "nodebuffer") {
                    return new o(e);
                  }

                  if (i.uint8array) {
                    return new u(n.transformTo("uint8array", e));
                  }

                  return new a(n.transformTo("array", e));
                }

                return new s(e);
              };
            },
            {
              "../support": 30,
              "../utils": 32,
              "./ArrayReader": 17,
              "./NodeBufferReader": 19,
              "./StringReader": 20,
              "./Uint8ArrayReader": 21,
            },
          ],
          23: [
            (e, t, r) => {
              r.LOCAL_FILE_HEADER = "PK";
              r.CENTRAL_FILE_HEADER = "PK";
              r.CENTRAL_DIRECTORY_END = "PK";
              r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK";
              r.ZIP64_CENTRAL_DIRECTORY_END = "PK";
              r.DATA_DESCRIPTOR = "PK\b";
            },
            {},
          ],
          24: [
            (e, t, r) => {
              const n = e("./GenericWorker");
              const i = e("../utils");
              function a(e) {
                n.call(this, `ConvertWorker to ${e}`);
                this.destType = e;
              }
              i.inherits(a, n);

              a.prototype.processChunk = function (e) {
                this.push({
                  data: i.transformTo(this.destType, e.data),
                  meta: e.meta,
                });
              };

              t.exports = a;
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          25: [
            (e, t, r) => {
              const n = e("./GenericWorker");
              const i = e("../crc32");
              function a() {
                n.call(this, "Crc32Probe");
                this.withStreamInfo("crc32", 0);
              }
              e("../utils").inherits(a, n);

              a.prototype.processChunk = function (e) {
                this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0);

                this.push(e);
              };

              t.exports = a;
            },
            { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
          ],
          26: [
            (e, t, r) => {
              const n = e("../utils");
              const i = e("./GenericWorker");
              function a(e) {
                i.call(this, `DataLengthProbe for ${e}`);
                this.propName = e;
                this.withStreamInfo(e, 0);
              }
              n.inherits(a, i);

              a.prototype.processChunk = function (e) {
                if (e) {
                  const t = this.streamInfo[this.propName] || 0;
                  this.streamInfo[this.propName] = t + e.data.length;
                }
                i.prototype.processChunk.call(this, e);
              };

              t.exports = a;
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          27: [
            (e, t, r) => {
              const n = e("../utils");
              const i = e("./GenericWorker");

              class a {
                constructor(e) {
                  i.call(this, "DataWorker");
                  const t = this;
                  this.dataIsReady = false;
                  this.index = 0;
                  this.max = 0;
                  this.data = null;
                  this.type = "";
                  this._tickScheduled = false;

                  e.then(
                    (e) => {
                      t.dataIsReady = true;
                      t.data = e;
                      t.max = (e && e.length) || 0;
                      t.type = n.getTypeOf(e);

                      if (!t.isPaused) {
                        t._tickAndRepeat();
                      }
                    },
                    (e) => {
                      t.error(e);
                    }
                  );
                }

                cleanUp() {
                  i.prototype.cleanUp.call(this);
                  this.data = null;
                }

                resume() {
                  return (
                    !!i.prototype.resume.call(this) &&
                    (!this._tickScheduled &&
                      this.dataIsReady &&
                      ((this._tickScheduled = true),
                      n.delay(this._tickAndRepeat, [], this)),
                    true)
                  );
                }

                _tickAndRepeat() {
                  this._tickScheduled = false;

                  if (!this.isPaused && !this.isFinished) {
                    this._tick(),
                      this.isFinished ||
                        (n.delay(this._tickAndRepeat, [], this),
                        (this._tickScheduled = true));
                  }
                }

                _tick() {
                  if (this.isPaused || this.isFinished) {
                    return false;
                  }
                  let e = null;
                  const t = Math.min(this.max, this.index + 16384);
                  if (this.index >= this.max) {
                    return this.end();
                  }
                  switch (this.type) {
                    case "string": {
                      e = this.data.substring(this.index, t);
                      break;
                    }
                    case "uint8array": {
                      e = this.data.subarray(this.index, t);
                      break;
                    }
                    case "array":
                    case "nodebuffer": {
                      e = this.data.slice(this.index, t);
                    }
                  }
                  this.index = t;

                  return this.push({
                    data: e,
                    meta: {
                      percent: this.max ? (this.index / this.max) * 100 : 0,
                    },
                  });
                }

                static resolve(e, t) {
                  const r = p(f, t);
                  if (r.status === "error") {
                    return a.reject(e, r.value);
                  }
                  const r_value = r.value;
                  if (r_value) {
                    d(e, r_value);
                  } else {
                    e.state = o;
                    e.outcome = t;
                    for (let i = -1, s = e.queue.length; ++i < s; ) {
                      e.queue[i].callFulfilled(t);
                    }
                  }
                  return e;
                }

                static reject(e, t) {
                  e.state = s;
                  e.outcome = t;
                  for (let r = -1, n = e.queue.length; ++r < n; ) {
                    e.queue[r].callRejected(t);
                  }
                  return e;
                }
              }

              n.inherits(a, i);

              t.exports = a;
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          28: [
            (e, t, r) => {
              function n(e) {
                this.name = e || "default";
                this.streamInfo = {};
                this.generatedError = null;
                this.extraStreamInfo = {};
                this.isPaused = true;
                this.isFinished = false;
                this.isLocked = false;
                this._listeners = { data: [], end: [], error: [] };
                this.previous = null;
              }

              n.prototype = {
                push(e) {
                  this.emit("data", e);
                },
                end() {
                  if (this.isFinished) {
                    return false;
                  }
                  this.flush();
                  try {
                    this.emit("end");
                    this.cleanUp();
                    this.isFinished = true;
                  } catch (e) {
                    this.emit("error", e);
                  }
                  return true;
                },
                error(e) {
                  return (
                    !this.isFinished &&
                    (this.isPaused
                      ? (this.generatedError = e)
                      : ((this.isFinished = true),
                        this.emit("error", e),
                        this.previous && this.previous.error(e),
                        this.cleanUp()),
                    true)
                  );
                },
                on(e, t) {
                  this._listeners[e].push(t);
                  return this;
                },
                cleanUp() {
                  this.streamInfo = null;
                  this.generatedError = null;
                  this.extraStreamInfo = null;
                  this._listeners = [];
                },
                emit(e, t) {
                  if (this._listeners[e]) {
                    for (let r = 0; r < this._listeners[e].length; r++) {
                      this._listeners[e][r].call(this, t);
                    }
                  }
                },
                pipe(e) {
                  return e.registerPrevious(this);
                },
                registerPrevious(e) {
                  if (this.isLocked) {
                    throw new Error(
                      `The stream '${this}' has already been used.`
                    );
                  }
                  this.streamInfo = e.streamInfo;
                  this.mergeStreamInfo();
                  this.previous = e;
                  const t = this;

                  e.on("data", (e) => {
                    t.processChunk(e);
                  });

                  e.on("end", () => {
                    t.end();
                  });

                  e.on("error", (e) => {
                    t.error(e);
                  });

                  return this;
                },
                pause() {
                  return (
                    !this.isPaused &&
                    !this.isFinished &&
                    ((this.isPaused = true),
                    this.previous && this.previous.pause(),
                    true)
                  );
                },
                resume() {
                  if (!this.isPaused || this.isFinished) {
                    return false;
                  }
                  let e = (this.isPaused = false);

                  if (this.generatedError) {
                    this.error(this.generatedError), (e = true);
                  }

                  if (this.previous) {
                    this.previous.resume();
                  }

                  return !e;
                },
                flush() {},
                processChunk(e) {
                  this.push(e);
                },
                withStreamInfo(e, t) {
                  this.extraStreamInfo[e] = t;
                  this.mergeStreamInfo();
                  return this;
                },
                mergeStreamInfo() {
                  for (const e in this.extraStreamInfo) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.extraStreamInfo,
                        e
                      )
                    ) {
                      this.streamInfo[e] = this.extraStreamInfo[e];
                    }
                  }
                },
                lock() {
                  if (this.isLocked) {
                    throw new Error(
                      `The stream '${this}' has already been used.`
                    );
                  }
                  this.isLocked = true;

                  if (this.previous) {
                    this.previous.lock();
                  }
                },
                toString() {
                  const e = `Worker ${this.name}`;
                  return this.previous ? `${this.previous} -> ${e}` : e;
                },
              };

              t.exports = n;
            },
            {},
          ],
          29: [
            (e, t, r) => {
              const n = e("../utils");
              const i = e("./ConvertWorker");
              const a = e("./GenericWorker");
              const s = e("../base64");
              const o = e("../support");
              const u = e("../external");
              let c = null;
              if (o.nodestream) {
                try {
                  c = e("../nodejs/NodejsStreamOutputAdapter");
                } catch (e) {}
              }
              function l(e, t, r) {
                let s = t;
                switch (t) {
                  case "blob":
                  case "arraybuffer": {
                    s = "uint8array";
                    break;
                  }
                  case "base64": {
                    s = "string";
                  }
                }
                try {
                  this._internalType = s;
                  this._outputType = t;
                  this._mimeType = r;
                  n.checkSupport(s);
                  this._worker = e.pipe(new i(s));
                  e.lock();
                } catch (e) {
                  this._worker = new a("error");
                  this._worker.error(e);
                }
              }

              l.prototype = {
                accumulate(e) {
                  return ((e, t) =>
                    new u.Promise((r, i) => {
                      let a = [];

                      const { _internalType, _outputType, _mimeType } = e;

                      e.on("data", (e, r) => {
                        a.push(e);

                        if (t) {
                          t(r);
                        }
                      })
                        .on("error", (e) => {
                          a = [];
                          i(e);
                        })
                        .on("end", () => {
                          try {
                            var e = ((e, t, r) => {
                              switch (e) {
                                case "blob": {
                                  return n.newBlob(
                                    n.transformTo("arraybuffer", t),
                                    r
                                  );
                                }
                                case "base64": {
                                  return s.encode(t);
                                }
                                default: {
                                  return n.transformTo(e, t);
                                }
                              }
                            })(
                              _outputType,
                              ((e, t) => {
                                let r;
                                let n = 0;
                                let i = null;
                                let a = 0;
                                for (r = 0; r < t.length; r++) {
                                  a += t[r].length;
                                }
                                switch (e) {
                                  case "string": {
                                    return t.join("");
                                  }
                                  case "array": {
                                    return Array.prototype.concat.apply([], t);
                                  }
                                  case "uint8array": {
                                    i = new Uint8Array(a);

                                    for (r = 0; r < t.length; r++) {
                                      i.set(t[r], n);
                                      n += t[r].length;
                                    }

                                    return i;
                                  }
                                  case "nodebuffer": {
                                    return Buffer.concat(t);
                                  }
                                  default: {
                                    throw new Error(
                                      `concat : unsupported type '${e}'`
                                    );
                                  }
                                }
                              })(_internalType, a),
                              _mimeType
                            );
                            r(e);
                          } catch (e) {
                            i(e);
                          }
                          a = [];
                        })
                        .resume();
                    }))(this, e);
                },
                on(e, t) {
                  const r = this;

                  if (e === "data") {
                    this._worker.on(e, (e) => {
                      t.call(r, e.data, e.meta);
                    });
                  } else {
                    this._worker.on(e, function (...args) {
                      n.delay(t, args, r);
                    });
                  }

                  return this;
                },
                resume() {
                  n.delay(this._worker.resume, [], this._worker);
                  return this;
                },
                pause() {
                  this._worker.pause();
                  return this;
                },
                toNodejsStream(e) {
                  n.checkSupport("nodestream");

                  if (this._outputType !== "nodebuffer") {
                    throw new Error(
                      `${this._outputType} is not supported by this method`
                    );
                  }

                  return new c(
                    this,
                    { objectMode: this._outputType !== "nodebuffer" },
                    e
                  );
                },
              };

              t.exports = l;
            },
            {
              "../base64": 1,
              "../external": 6,
              "../nodejs/NodejsStreamOutputAdapter": 13,
              "../support": 30,
              "../utils": 32,
              "./ConvertWorker": 24,
              "./GenericWorker": 28,
            },
          ],
          30: [
            (e, t, r) => {
              r.base64 = true;
              r.array = true;
              r.string = true;

              r.arraybuffer =
                typeof ArrayBuffer != "undefined" &&
                typeof Uint8Array != "undefined";

              r.nodebuffer = typeof Buffer != "undefined";
              r.uint8array = typeof Uint8Array != "undefined";

              if (typeof ArrayBuffer == "undefined") {
                r.blob = false;
              } else {
                const n = new ArrayBuffer(0);
                try {
                  r.blob =
                    new Blob([n], { type: "application/zip" }).size === 0;
                } catch (e) {
                  try {
                    const i = new (self.BlobBuilder ||
                      self.WebKitBlobBuilder ||
                      self.MozBlobBuilder ||
                      self.MSBlobBuilder)();
                    i.append(n);
                    r.blob = i.getBlob("application/zip").size === 0;
                  } catch (e) {
                    r.blob = false;
                  }
                }
              }

              try {
                r.nodestream = !!e("readable-stream").Readable;
              } catch (e) {
                r.nodestream = false;
              }
            },
            { "readable-stream": 16 },
          ],
          31: [
            (e, t, r) => {
              const n = e("./utils");
              const i = e("./support");
              const a = e("./nodejsUtils");
              const s = e("./stream/GenericWorker");
              for (var o = new Array(256), u = 0; u < 256; u++) {
                o[u] =
                  u >= 252
                    ? 6
                    : u >= 248
                    ? 5
                    : u >= 240
                    ? 4
                    : u >= 224
                    ? 3
                    : u >= 192
                    ? 2
                    : 1;
              }
              function c() {
                s.call(this, "utf-8 decode");
                this.leftOver = null;
              }
              function l() {
                s.call(this, "utf-8 encode");
              }
              o[254] = 1;
              o[254] = 1;

              r.utf8encode = (e) =>
                i.nodebuffer
                  ? a.newBufferFrom(e, "utf-8")
                  : ((e) => {
                      let t;
                      let r;
                      let n;
                      let a;
                      let s;
                      const e_length = e.length;
                      let u = 0;
                      for (a = 0; a < e_length; a++) {
                        if (
                          55296 == (64512 & (r = e.charCodeAt(a))) &&
                          a + 1 < e_length &&
                          56320 == (64512 & (n = e.charCodeAt(a + 1)))
                        ) {
                          (r = 65536 + ((r - 55296) << 10) + (n - 56320)), a++;
                        }

                        u += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                      }
                      t = i.uint8array ? new Uint8Array(u) : new Array(u);

                      for (a = s = 0; s < u; a++) {
                        if (
                          55296 == (64512 & (r = e.charCodeAt(a))) &&
                          a + 1 < e_length &&
                          56320 == (64512 & (n = e.charCodeAt(a + 1)))
                        ) {
                          (r = 65536 + ((r - 55296) << 10) + (n - 56320)), a++;
                        }

                        if (r < 128) {
                          t[s++] = r;
                        } else {
                          r < 2048
                            ? (t[s++] = 192 | (r >>> 6))
                            : (r < 65536
                                ? (t[s++] = 224 | (r >>> 12))
                                : ((t[s++] = 240 | (r >>> 18)),
                                  (t[s++] = 128 | ((r >>> 12) & 63))),
                              (t[s++] = 128 | ((r >>> 6) & 63))),
                            (t[s++] = 128 | (63 & r));
                        }
                      }

                      return t;
                    })(e);

              r.utf8decode = (e) =>
                i.nodebuffer
                  ? n.transformTo("nodebuffer", e).toString("utf-8")
                  : ((e) => {
                      let t;
                      let r;
                      let i;
                      let a;
                      const e_length = e.length;
                      let u = new Array(2 * e_length);
                      for (t = r = 0; t < e_length; ) {
                        if ((i = e[t++]) < 128) {
                          u[r++] = i;
                        } else if (4 < (a = o[i])) {
                          u[r++] = 65533;
                          t += a - 1;
                        } else {
                          for (
                            i &= a === 2 ? 31 : a === 3 ? 15 : 7;
                            a > 1 && t < e_length;

                          ) {
                            i = (i << 6) | (63 & e[t++]);
                            a--;
                          }

                          if (a > 1) {
                            u[r++] = 65533;
                          } else if (i < 65536) {
                            u[r++] = i;
                          } else {
                            (i -= 65536),
                              (u[r++] = 55296 | ((i >> 10) & 1023)),
                              (u[r++] = 56320 | (1023 & i));
                          }
                        }
                      }

                      if (u.length !== r) {
                        if (u.subarray) {
                          u = u.subarray(0, r);
                        } else {
                          u.length = r;
                        }
                      }

                      return n.applyFromCharCode(u);
                    })(
                      (e = n.transformTo(
                        i.uint8array ? "uint8array" : "array",
                        e
                      ))
                    );

              n.inherits(c, s);

              c.prototype.processChunk = function (e) {
                let t = n.transformTo(
                  i.uint8array ? "uint8array" : "array",
                  e.data
                );
                if (this.leftOver && this.leftOver.length) {
                  if (i.uint8array) {
                    const a = t;

                    (t = new Uint8Array(a.length + this.leftOver.length)).set(
                      this.leftOver,
                      0
                    );

                    t.set(a, this.leftOver.length);
                  } else {
                    t = this.leftOver.concat(t);
                  }
                  this.leftOver = null;
                }
                const s = ((e, t) => {
                  let r;

                  if ((t = t || e.length) > e.length) {
                    t = e.length;
                  }

                  for (r = t - 1; r >= 0 && 128 == (192 & e[r]); ) {
                    r--;
                  }

                  return r < 0 || r === 0 ? t : r + o[e[r]] > t ? r : t;
                })(t);
                let u = t;

                if (s !== t.length) {
                  if (i.uint8array) {
                    (u = t.subarray(0, s)),
                      (this.leftOver = t.subarray(s, t.length));
                  } else {
                    (u = t.slice(0, s)), (this.leftOver = t.slice(s, t.length));
                  }
                }

                this.push({ data: r.utf8decode(u), meta: e.meta });
              };

              c.prototype.flush = function () {
                if (this.leftOver && this.leftOver.length) {
                  this.push({ data: r.utf8decode(this.leftOver), meta: {} }),
                    (this.leftOver = null);
                }
              };

              r.Utf8DecodeWorker = c;
              n.inherits(l, s);

              l.prototype.processChunk = function (e) {
                this.push({ data: r.utf8encode(e.data), meta: e.meta });
              };

              r.Utf8EncodeWorker = l;
            },
            {
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./support": 30,
              "./utils": 32,
            },
          ],
          32: [
            (e, t, r) => {
              const n = e("./support");
              const i = e("./base64");
              const a = e("./nodejsUtils");
              const s = e("./external");
              function o(e) {
                return e;
              }
              function u(e, t) {
                for (let r = 0; r < e.length; ++r) {
                  t[r] = 255 & e.charCodeAt(r);
                }
                return t;
              }
              e("setimmediate");

              r.newBlob = (e, t) => {
                r.checkSupport("blob");
                try {
                  return new Blob([e], { type: t });
                } catch (r) {
                  try {
                    const n = new (self.BlobBuilder ||
                      self.WebKitBlobBuilder ||
                      self.MozBlobBuilder ||
                      self.MSBlobBuilder)();
                    n.append(e);
                    return n.getBlob(t);
                  } catch (e) {
                    throw new Error("Bug : can't construct the Blob.");
                  }
                }
              };

              const c = {
                stringifyByChunk(e, t, r) {
                  const n = [];
                  let i = 0;
                  const e_length = e.length;
                  if (e_length <= r) {
                    return String.fromCharCode.apply(null, e);
                  }

                  while (i < e_length) {
                    if (t === "array" || t === "nodebuffer") {
                      n.push(
                        String.fromCharCode.apply(
                          null,
                          e.slice(i, Math.min(i + r, e_length))
                        )
                      );
                    } else {
                      n.push(
                        String.fromCharCode.apply(
                          null,
                          e.subarray(i, Math.min(i + r, e_length))
                        )
                      );
                    }

                    i += r;
                  }

                  return n.join("");
                },
                stringifyByChar(e) {
                  for (var t = "", r = 0; r < e.length; r++) {
                    t += String.fromCharCode(e[r]);
                  }
                  return t;
                },
                applyCanBeUsed: {
                  uint8array: (() => {
                    try {
                      return (
                        n.uint8array &&
                        String.fromCharCode.apply(null, new Uint8Array(1))
                          .length === 1
                      );
                    } catch (e) {
                      return false;
                    }
                  })(),
                  nodebuffer: (() => {
                    try {
                      return (
                        n.nodebuffer &&
                        String.fromCharCode.apply(null, a.allocBuffer(1))
                          .length === 1
                      );
                    } catch (e) {
                      return false;
                    }
                  })(),
                },
              };
              function l(e) {
                let t = 65536;
                const n = r.getTypeOf(e);
                let i = true;

                if (n === "uint8array") {
                  i = c.applyCanBeUsed.uint8array;
                } else if (n === "nodebuffer") {
                  i = c.applyCanBeUsed.nodebuffer;
                }

                if (i) {
                  while (t > 1) {
                    try {
                      return c.stringifyByChunk(e, n, t);
                    } catch (e) {
                      t = Math.floor(t / 2);
                    }
                  }
                }

                return c.stringifyByChar(e);
              }
              function h(e, t) {
                for (let r = 0; r < e.length; r++) {
                  t[r] = e[r];
                }
                return t;
              }
              r.applyFromCharCode = l;
              const f = {};

              f.string = {
                string: o,
                array(e) {
                  return u(e, new Array(e.length));
                },
                arraybuffer(e) {
                  return f.string.uint8array(e).buffer;
                },
                uint8array(e) {
                  return u(e, new Uint8Array(e.length));
                },
                nodebuffer(e) {
                  return u(e, a.allocBuffer(e.length));
                },
              };

              f.array = {
                string: l,
                array: o,
                arraybuffer(e) {
                  return new Uint8Array(e).buffer;
                },
                uint8array(e) {
                  return new Uint8Array(e);
                },
                nodebuffer(e) {
                  return a.newBufferFrom(e);
                },
              };

              f.arraybuffer = {
                string(e) {
                  return l(new Uint8Array(e));
                },
                array(e) {
                  return h(new Uint8Array(e), new Array(e.byteLength));
                },
                arraybuffer: o,
                uint8array(e) {
                  return new Uint8Array(e);
                },
                nodebuffer(e) {
                  return a.newBufferFrom(new Uint8Array(e));
                },
              };

              f.uint8array = {
                string: l,
                array(e) {
                  return h(e, new Array(e.length));
                },
                arraybuffer(e) {
                  return e.buffer;
                },
                uint8array: o,
                nodebuffer(e) {
                  return a.newBufferFrom(e);
                },
              };

              f.nodebuffer = {
                string: l,
                array(e) {
                  return h(e, new Array(e.length));
                },
                arraybuffer(e) {
                  return f.nodebuffer.uint8array(e).buffer;
                },
                uint8array(e) {
                  return h(e, new Uint8Array(e.length));
                },
                nodebuffer: o,
              };

              r.transformTo = (e, t) => {
                t = t || "";

                if (!e) {
                  return t;
                }

                r.checkSupport(e);
                const n = r.getTypeOf(t);
                return f[n][e](t);
              };

              r.resolve = (e) => {
                for (var t = e.split("/"), r = [], n = 0; n < t.length; n++) {
                  const t_n = t[n];

                  if (
                    t_n !== "." &&
                    (t_n !== "" || n === 0 || n === t.length - 1)
                  ) {
                    if (t_n === "..") {
                      r.pop();
                    } else {
                      r.push(t_n);
                    }
                  }
                }
                return r.join("/");
              };

              r.getTypeOf = (e) =>
                typeof e == "string"
                  ? "string"
                  : Object.prototype.toString.call(e) === "[object Array]"
                  ? "array"
                  : n.nodebuffer && a.isBuffer(e)
                  ? "nodebuffer"
                  : n.uint8array && e instanceof Uint8Array
                  ? "uint8array"
                  : n.arraybuffer && e instanceof ArrayBuffer
                  ? "arraybuffer"
                  : undefined;

              r.checkSupport = (e) => {
                if (!n[e.toLowerCase()]) {
                  throw new Error(`${e} is not supported by this platform`);
                }
              };

              r.MAX_VALUE_16BITS = 65535;
              r.MAX_VALUE_32BITS = -1;

              r.pretty = (e) => {
                let t;
                let r;
                let n = "";
                for (r = 0; r < (e || "").length; r++) {
                  n += `\\x${(t = e.charCodeAt(r)) < 16 ? "0" : ""}${t
                    .toString(16)
                    .toUpperCase()}`;
                }
                return n;
              };

              r.delay = (e, t, r) => {
                setImmediate(() => {
                  e.apply(r || null, t || []);
                });
              };

              r.inherits = (e, t) => {
                function r() {}
                r.prototype = t.prototype;
                e.prototype = new r();
              };

              r.extend = function (...args) {
                let e;
                let t;
                const r = {};
                for (e = 0; e < args.length; e++) {
                  for (t in args[e]) {
                    if (
                      Object.prototype.hasOwnProperty.call(args[e], t) &&
                      r[t] === undefined
                    ) {
                      r[t] = args[e][t];
                    }
                  }
                }
                return r;
              };

              r.prepareContent = (e, t, a, o, c) =>
                s.Promise.resolve(t)
                  .then((e) =>
                    n.blob &&
                    (e instanceof Blob ||
                      ["[object File]", "[object Blob]"].includes(
                        Object.prototype.toString.call(e)
                      )) &&
                    typeof FileReader != "undefined"
                      ? new s.Promise((t, r) => {
                          const n = new FileReader();

                          n.onload = (e) => {
                            t(e.target.result);
                          };

                          n.onerror = (e) => {
                            r(e.target.error);
                          };

                          n.readAsArrayBuffer(e);
                        })
                      : e
                  )
                  .then((t) => {
                    const l = r.getTypeOf(t);
                    return l
                      ? (l === "arraybuffer"
                          ? (t = r.transformTo("uint8array", t))
                          : l === "string" &&
                            (c
                              ? (t = i.decode(t))
                              : a &&
                                o !== true &&
                                (t = ((e) =>
                                  u(
                                    e,
                                    n.uint8array
                                      ? new Uint8Array(e.length)
                                      : new Array(e.length)
                                  ))(t))),
                        t)
                      : s.Promise.reject(
                          new Error(
                            `Can't read the data of '${e}'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`
                          )
                        );
                  });
            },
            {
              "./base64": 1,
              "./external": 6,
              "./nodejsUtils": 14,
              "./support": 30,
              setimmediate: 54,
            },
          ],
          33: [
            (e, t, r) => {
              const n = e("./reader/readerFor");
              const i = e("./utils");
              const a = e("./signature");
              const s = e("./zipEntry");
              const o = e("./support");
              function u(e) {
                this.files = [];
                this.loadOptions = e;
              }

              u.prototype = {
                checkSignature(e) {
                  if (!this.reader.readAndCheckSignature(e)) {
                    this.reader.index -= 4;
                    const t = this.reader.readString(4);
                    throw new Error(
                      `Corrupted zip or bug: unexpected signature (${i.pretty(
                        t
                      )}, expected ${i.pretty(e)})`
                    );
                  }
                },
                isSignature(e, t) {
                  const r = this.reader.index;
                  this.reader.setIndex(e);
                  const n = this.reader.readString(4) === t;
                  this.reader.setIndex(r);
                  return n;
                },
                readBlockEndOfCentral() {
                  this.diskNumber = this.reader.readInt(2);
                  this.diskWithCentralDirStart = this.reader.readInt(2);
                  this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
                  this.centralDirRecords = this.reader.readInt(2);
                  this.centralDirSize = this.reader.readInt(4);
                  this.centralDirOffset = this.reader.readInt(4);
                  this.zipCommentLength = this.reader.readInt(2);
                  const e = this.reader.readData(this.zipCommentLength);
                  const t = o.uint8array ? "uint8array" : "array";
                  const r = i.transformTo(t, e);
                  this.zipComment = this.loadOptions.decodeFileName(r);
                },
                readBlockZip64EndOfCentral() {
                  this.zip64EndOfCentralSize = this.reader.readInt(8);
                  this.reader.skip(4);
                  this.diskNumber = this.reader.readInt(4);
                  this.diskWithCentralDirStart = this.reader.readInt(4);
                  this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
                  this.centralDirRecords = this.reader.readInt(8);
                  this.centralDirSize = this.reader.readInt(8);
                  this.centralDirOffset = this.reader.readInt(8);
                  this.zip64ExtensibleData = {};
                  for (
                    let e, t, r, n = this.zip64EndOfCentralSize - 44;
                    n > 0;

                  ) {
                    e = this.reader.readInt(2);
                    t = this.reader.readInt(4);
                    r = this.reader.readData(t);

                    this.zip64ExtensibleData[e] = {
                      id: e,
                      length: t,
                      value: r,
                    };
                  }
                },
                readBlockZip64EndOfCentralLocator() {
                  this.diskWithZip64CentralDirStart = this.reader.readInt(4);
                  this.relativeOffsetEndOfZip64CentralDir =
                    this.reader.readInt(8);
                  this.disksCount = this.reader.readInt(4);

                  if (this.disksCount > 1) {
                    throw new Error("Multi-volumes zip are not supported");
                  }
                },
                readLocalFiles() {
                  let e;
                  let t;
                  for (e = 0; e < this.files.length; e++) {
                    t = this.files[e];
                    this.reader.setIndex(t.localHeaderOffset);
                    this.checkSignature(a.LOCAL_FILE_HEADER);
                    t.readLocalPart(this.reader);
                    t.handleUTF8();
                    t.processAttributes();
                  }
                },
                readCentralDir() {
                  let e;
                  for (
                    this.reader.setIndex(this.centralDirOffset);
                    this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);

                  ) {
                    (e = new s(
                      { zip64: this.zip64 },
                      this.loadOptions
                    )).readCentralPart(this.reader);

                    this.files.push(e);
                  }
                  if (
                    this.centralDirRecords !== this.files.length &&
                    this.centralDirRecords !== 0 &&
                    this.files.length === 0
                  ) {
                    throw new Error(
                      `Corrupted zip or bug: expected ${this.centralDirRecords} records in central dir, got ${this.files.length}`
                    );
                  }
                },
                readEndOfCentral() {
                  let e = this.reader.lastIndexOfSignature(
                    a.CENTRAL_DIRECTORY_END
                  );
                  if (e < 0) {
                    throw this.isSignature(0, a.LOCAL_FILE_HEADER)
                      ? new Error(
                          "Corrupted zip: can't find end of central directory"
                        )
                      : new Error(
                          "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                        );
                  }
                  this.reader.setIndex(e);
                  const t = e;
                  this.checkSignature(a.CENTRAL_DIRECTORY_END);
                  this.readBlockEndOfCentral();

                  if (
                    this.diskNumber === i.MAX_VALUE_16BITS ||
                    this.diskWithCentralDirStart === i.MAX_VALUE_16BITS ||
                    this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS ||
                    this.centralDirRecords === i.MAX_VALUE_16BITS ||
                    this.centralDirSize === i.MAX_VALUE_32BITS ||
                    this.centralDirOffset === i.MAX_VALUE_32BITS
                  ) {
                    this.zip64 = true;

                    if (
                      (e = this.reader.lastIndexOfSignature(
                        a.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                      )) < 0
                    ) {
                      throw new Error(
                        "Corrupted zip: can't find the ZIP64 end of central directory locator"
                      );
                    }

                    this.reader.setIndex(e);
                    this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                    this.readBlockZip64EndOfCentralLocator();

                    if (
                      !this.isSignature(
                        this.relativeOffsetEndOfZip64CentralDir,
                        a.ZIP64_CENTRAL_DIRECTORY_END
                      ) &&
                      ((this.relativeOffsetEndOfZip64CentralDir =
                        this.reader.lastIndexOfSignature(
                          a.ZIP64_CENTRAL_DIRECTORY_END
                        )),
                      this.relativeOffsetEndOfZip64CentralDir < 0)
                    ) {
                      throw new Error(
                        "Corrupted zip: can't find the ZIP64 end of central directory"
                      );
                    }

                    this.reader.setIndex(
                      this.relativeOffsetEndOfZip64CentralDir
                    );

                    this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END);
                    this.readBlockZip64EndOfCentral();
                  }

                  let r = this.centralDirOffset + this.centralDirSize;

                  if (this.zip64) {
                    (r += 20), (r += 12 + this.zip64EndOfCentralSize);
                  }

                  const n = t - r;
                  if (n > 0) {
                    if (!this.isSignature(t, a.CENTRAL_FILE_HEADER)) {
                      this.reader.zero = n;
                    }
                  } else if (n < 0) {
                    throw new Error(
                      `Corrupted zip: missing ${Math.abs(n)} bytes.`
                    );
                  }
                },
                prepareReader(e) {
                  this.reader = n(e);
                },
                load(e) {
                  this.prepareReader(e);
                  this.readEndOfCentral();
                  this.readCentralDir();
                  this.readLocalFiles();
                },
              };

              t.exports = u;
            },
            {
              "./reader/readerFor": 22,
              "./signature": 23,
              "./support": 30,
              "./utils": 32,
              "./zipEntry": 34,
            },
          ],
          34: [
            (e, t, r) => {
              const n = e("./reader/readerFor");
              const i = e("./utils");
              const a = e("./compressedObject");
              const s = e("./crc32");
              const o = e("./utf8");
              const u = e("./compressions");
              const c = e("./support");
              function l(e, t) {
                this.options = e;
                this.loadOptions = t;
              }

              l.prototype = {
                isEncrypted() {
                  return 1 == (1 & this.bitFlag);
                },
                useUTF8() {
                  return 2048 == (2048 & this.bitFlag);
                },
                readLocalPart(e) {
                  let t;
                  let r;
                  e.skip(22);
                  this.fileNameLength = e.readInt(2);
                  r = e.readInt(2);
                  this.fileName = e.readData(this.fileNameLength);
                  e.skip(r);

                  if (
                    -1 === this.compressedSize ||
                    -1 === this.uncompressedSize
                  ) {
                    throw new Error(
                      "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                    );
                  }

                  if (
                    null ===
                    (t = ((e) => {
                      for (const t in u) {
                        if (
                          Object.prototype.hasOwnProperty.call(u, t) &&
                          u[t].magic === e
                        ) {
                          return u[t];
                        }
                      }
                      return null;
                    })(this.compressionMethod))
                  ) {
                    throw new Error(
                      `Corrupted zip : compression ${i.pretty(
                        this.compressionMethod
                      )} unknown (inner file : ${i.transformTo(
                        "string",
                        this.fileName
                      )})`
                    );
                  }
                  this.decompressed = new a(
                    this.compressedSize,
                    this.uncompressedSize,
                    this.crc32,
                    t,
                    e.readData(this.compressedSize)
                  );
                },
                readCentralPart(e) {
                  this.versionMadeBy = e.readInt(2);
                  e.skip(2);
                  this.bitFlag = e.readInt(2);
                  this.compressionMethod = e.readString(2);
                  this.date = e.readDate();
                  this.crc32 = e.readInt(4);
                  this.compressedSize = e.readInt(4);
                  this.uncompressedSize = e.readInt(4);
                  const t = e.readInt(2);
                  this.extraFieldsLength = e.readInt(2);
                  this.fileCommentLength = e.readInt(2);
                  this.diskNumberStart = e.readInt(2);
                  this.internalFileAttributes = e.readInt(2);
                  this.externalFileAttributes = e.readInt(4);
                  this.localHeaderOffset = e.readInt(4);

                  if (this.isEncrypted()) {
                    throw new Error("Encrypted zip are not supported");
                  }

                  e.skip(t);
                  this.readExtraFields(e);
                  this.parseZIP64ExtraField(e);
                  this.fileComment = e.readData(this.fileCommentLength);
                },
                processAttributes() {
                  this.unixPermissions = null;
                  this.dosPermissions = null;
                  const e = this.versionMadeBy >> 8;
                  this.dir = !!(16 & this.externalFileAttributes);

                  if (e == 0) {
                    this.dosPermissions = 63 & this.externalFileAttributes;
                  }

                  if (e == 3) {
                    this.unixPermissions =
                      (this.externalFileAttributes >> 16) & 65535;
                  }

                  if (!this.dir && this.fileNameStr.slice(-1) === "/") {
                    this.dir = true;
                  }
                },
                parseZIP64ExtraField() {
                  if (this.extraFields[1]) {
                    const e = n(this.extraFields[1].value);

                    if (this.uncompressedSize === i.MAX_VALUE_32BITS) {
                      this.uncompressedSize = e.readInt(8);
                    }

                    if (this.compressedSize === i.MAX_VALUE_32BITS) {
                      this.compressedSize = e.readInt(8);
                    }

                    if (this.localHeaderOffset === i.MAX_VALUE_32BITS) {
                      this.localHeaderOffset = e.readInt(8);
                    }

                    if (this.diskNumberStart === i.MAX_VALUE_32BITS) {
                      this.diskNumberStart = e.readInt(4);
                    }
                  }
                },
                readExtraFields(e) {
                  let t;
                  let r;
                  let n;
                  const i = e.index + this.extraFieldsLength;
                  for (
                    this.extraFields || (this.extraFields = {});
                    e.index + 4 < i;

                  ) {
                    t = e.readInt(2);
                    r = e.readInt(2);
                    n = e.readData(r);
                    this.extraFields[t] = { id: t, length: r, value: n };
                  }
                  e.setIndex(i);
                },
                handleUTF8() {
                  const e = c.uint8array ? "uint8array" : "array";
                  if (this.useUTF8()) {
                    this.fileNameStr = o.utf8decode(this.fileName);
                    this.fileCommentStr = o.utf8decode(this.fileComment);
                  } else {
                    const t = this.findExtraFieldUnicodePath();
                    if (t !== null) {
                      this.fileNameStr = t;
                    } else {
                      const r = i.transformTo(e, this.fileName);
                      this.fileNameStr = this.loadOptions.decodeFileName(r);
                    }
                    const n = this.findExtraFieldUnicodeComment();
                    if (n !== null) {
                      this.fileCommentStr = n;
                    } else {
                      const a = i.transformTo(e, this.fileComment);
                      this.fileCommentStr = this.loadOptions.decodeFileName(a);
                    }
                  }
                },
                findExtraFieldUnicodePath() {
                  const e = this.extraFields[28789];
                  if (e) {
                    const t = n(e.value);
                    return t.readInt(1) !== 1 ||
                      s(this.fileName) !== t.readInt(4)
                      ? null
                      : o.utf8decode(t.readData(e.length - 5));
                  }
                  return null;
                },
                findExtraFieldUnicodeComment() {
                  const e = this.extraFields[25461];
                  if (e) {
                    const t = n(e.value);
                    return t.readInt(1) !== 1 ||
                      s(this.fileComment) !== t.readInt(4)
                      ? null
                      : o.utf8decode(t.readData(e.length - 5));
                  }
                  return null;
                },
              };

              t.exports = l;
            },
            {
              "./compressedObject": 2,
              "./compressions": 3,
              "./crc32": 4,
              "./reader/readerFor": 22,
              "./support": 30,
              "./utf8": 31,
              "./utils": 32,
            },
          ],
          35: [
            (e, t, r) => {
              function n(e, t, r) {
                this.name = e;
                this.dir = r.dir;
                this.date = r.date;
                this.comment = r.comment;
                this.unixPermissions = r.unixPermissions;
                this.dosPermissions = r.dosPermissions;
                this._data = t;
                this._dataBinary = r.binary;

                this.options = {
                  compression: r.compression,
                  compressionOptions: r.compressionOptions,
                };
              }
              const i = e("./stream/StreamHelper");
              const a = e("./stream/DataWorker");
              const s = e("./utf8");
              const o = e("./compressedObject");
              const u = e("./stream/GenericWorker");
              n.prototype = {
                internalStream(e) {
                  let t = null;
                  let r = "string";
                  try {
                    if (!e) {
                      throw new Error("No output type specified.");
                    }
                    const n =
                      "string" === (r = e.toLowerCase()) || r === "text";

                    if (r === "binarystring" || r === "text") {
                      r = "string";
                    }

                    t = this._decompressWorker();
                    const a = !this._dataBinary;

                    if (a && !n) {
                      t = t.pipe(new s.Utf8EncodeWorker());
                    }

                    if (!a && n) {
                      t = t.pipe(new s.Utf8DecodeWorker());
                    }
                  } catch (e) {
                    (t = new u("error")).error(e);
                  }
                  return new i(t, r, "");
                },
                async(e, t) {
                  return this.internalStream(e).accumulate(t);
                },
                nodeStream(e, t) {
                  return this.internalStream(e || "nodebuffer").toNodejsStream(
                    t
                  );
                },
                _compressWorker(e, t) {
                  if (
                    this._data instanceof o &&
                    this._data.compression.magic === e.magic
                  ) {
                    return this._data.getCompressedWorker();
                  }
                  let r = this._decompressWorker();

                  if (!this._dataBinary) {
                    r = r.pipe(new s.Utf8EncodeWorker());
                  }

                  return o.createWorkerFrom(r, e, t);
                },
                _decompressWorker() {
                  if (this._data instanceof o) {
                    return this._data.getContentWorker();
                  }

                  if (this._data instanceof u) {
                    return this._data;
                  }

                  return new a(this._data);
                },
              };
              for (
                let c = [
                    "asText",
                    "asBinary",
                    "asNodeBuffer",
                    "asUint8Array",
                    "asArrayBuffer",
                  ],
                  l = () => {
                    throw new Error(
                      "This method has been removed in JSZip 3.0, please check the upgrade guide."
                    );
                  },
                  h = 0;
                h < c.length;
                h++
              ) {
                n.prototype[c[h]] = l;
              }
              t.exports = n;
            },
            {
              "./compressedObject": 2,
              "./stream/DataWorker": 27,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
            },
          ],
          36: [
            function (e, t, n) {
              ((e) => {
                let r;
                let n;
                const i = e.MutationObserver || e.WebKitMutationObserver;
                if (i) {
                  let a = 0;
                  const s = new i(l);
                  const o = e.document.createTextNode("");
                  s.observe(o, { characterData: true });

                  r = () => {
                    o.data = a = ++a % 2;
                  };
                } else if (e.setImmediate || e.MessageChannel === undefined) {
                  r =
                    "document" in e &&
                    "onreadystatechange" in e.document.createElement("script")
                      ? () => {
                          let t = e.document.createElement("script");

                          t.onreadystatechange = () => {
                            l();
                            t.onreadystatechange = null;
                            t.parentNode.removeChild(t);
                            t = null;
                          };

                          e.document.documentElement.appendChild(t);
                        }
                      : () => {
                          setTimeout(l, 0);
                        };
                } else {
                  const u = new e.MessageChannel();
                  u.port1.onmessage = l;

                  r = () => {
                    u.port2.postMessage(0);
                  };
                }
                let c = [];
                function l() {
                  let e;
                  let t;
                  n = true;
                  for (let r = c.length; r; ) {
                    t = c;
                    c = [];

                    for (e = -1; ++e < r; ) {
                      t[e]();
                    }

                    r = c.length;
                  }
                  n = false;
                }
                t.exports = (e) => {
                  if (c.push(e) === 1 && !n) {
                    r();
                  }
                };
              }).call(
                this,
                r.g !== undefined
                  ? r.g
                  : typeof self != "undefined"
                  ? self
                  : typeof window != "undefined"
                  ? window
                  : {}
              );
            },
            {},
          ],
          37: [
            (e, t, r) => {
              const n = e("immediate");
              function i() {}
              const a = {};
              const s = ["REJECTED"];
              const o = ["FULFILLED"];
              const u = ["PENDING"];
              function c(e) {
                if (typeof e != "function") {
                  throw new TypeError("resolver must be a function");
                }
                this.state = u;
                this.queue = [];
                this.outcome = undefined;

                if (e !== i) {
                  d(this, e);
                }
              }
              function l(e, t, r) {
                this.promise = e;

                if (typeof t == "function") {
                  (this.onFulfilled = t),
                    (this.callFulfilled = this.otherCallFulfilled);
                }

                if (typeof r == "function") {
                  (this.onRejected = r),
                    (this.callRejected = this.otherCallRejected);
                }
              }
              function h(e, t, r) {
                n(() => {
                  let n;
                  try {
                    n = t(r);
                  } catch (n) {
                    return a.reject(e, n);
                  }

                  if (n === e) {
                    a.reject(
                      e,
                      new TypeError("Cannot resolve promise with itself")
                    );
                  } else {
                    a.resolve(e, n);
                  }
                });
              }
              function f(e) {
                const t = e && e.then;
                if (
                  e &&
                  (typeof e == "object" || typeof e == "function") &&
                  typeof t == "function"
                ) {
                  return function (...args) {
                    t.apply(e, args);
                  };
                }
              }
              function d(e, t) {
                let r = false;
                function n(t) {
                  if (!r) {
                    (r = true), a.reject(e, t);
                  }
                }
                function i(t) {
                  if (!r) {
                    (r = true), a.resolve(e, t);
                  }
                }
                const s = p(() => {
                  t(i, n);
                });

                if (s.status === "error") {
                  n(s.value);
                }
              }
              function p(e, t) {
                const r = {};
                try {
                  r.value = e(t);
                  r.status = "success";
                } catch (e) {
                  r.status = "error";
                  r.value = e;
                }
                return r;
              }

              (t.exports = c).prototype.finally = function (e) {
                if (typeof e != "function") {
                  return this;
                }
                const t = this.constructor;
                return this.then(
                  (r) => t.resolve(e()).then(() => r),
                  (r) =>
                    t.resolve(e()).then(() => {
                      throw r;
                    })
                );
              };

              c.prototype.catch = function (e) {
                return this.then(null, e);
              };

              c.prototype.then = function (e, t) {
                if (
                  (typeof e != "function" && this.state === o) ||
                  (typeof t != "function" && this.state === s)
                ) {
                  return this;
                }
                const r = new this.constructor(i);

                if (this.state !== u) {
                  h(r, this.state === o ? e : t, this.outcome);
                } else {
                  this.queue.push(new l(r, e, t));
                }

                return r;
              };

              l.prototype.callFulfilled = function (e) {
                a.resolve(this.promise, e);
              };

              l.prototype.otherCallFulfilled = function (e) {
                h(this.promise, this.onFulfilled, e);
              };

              l.prototype.callRejected = function (e) {
                a.reject(this.promise, e);
              };

              l.prototype.otherCallRejected = function (e) {
                h(this.promise, this.onRejected, e);
              };

              c.resolve = function (e) {
                return e instanceof this ? e : a.resolve(new this(i), e);
              };

              c.reject = function (e) {
                const t = new this(i);
                return a.reject(t, e);
              };

              c.all = function (e) {
                const t = this;
                if (Object.prototype.toString.call(e) !== "[object Array]") {
                  return this.reject(new TypeError("must be an array"));
                }
                const e_length = e.length;
                let n = false;
                if (!e_length) {
                  return this.resolve([]);
                }
                for (
                  var s = new Array(e_length), o = 0, u = -1, c = new this(i);
                  ++u < e_length;

                ) {
                  l(e[u], u);
                }
                return c;
                function l(e, i) {
                  t.resolve(e).then(
                    (e) => {
                      s[i] = e;

                      if (++o === e_length && !n) {
                        (n = true), a.resolve(c, s);
                      }
                    },
                    (e) => {
                      if (!n) {
                        (n = true), a.reject(c, e);
                      }
                    }
                  );
                }
              };

              c.race = function (e) {
                if (Object.prototype.toString.call(e) !== "[object Array]") {
                  return this.reject(new TypeError("must be an array"));
                }
                const e_length = e.length;
                let r = false;
                if (!e_length) {
                  return this.resolve([]);
                }
                for (var n, s = -1, o = new this(i); ++s < e_length; ) {
                  n = e[s];

                  this.resolve(n).then(
                    (e) => {
                      if (!r) {
                        (r = true), a.resolve(o, e);
                      }
                    },
                    (e) => {
                      if (!r) {
                        (r = true), a.reject(o, e);
                      }
                    }
                  );
                }
                return o;
              };
            },
            { immediate: 36 },
          ],
          38: [
            (e, t, r) => {
              const n = {};

              (0, e("./lib/utils/common").assign)(
                n,
                e("./lib/deflate"),
                e("./lib/inflate"),
                e("./lib/zlib/constants")
              );

              t.exports = n;
            },
            {
              "./lib/deflate": 39,
              "./lib/inflate": 40,
              "./lib/utils/common": 41,
              "./lib/zlib/constants": 44,
            },
          ],
          39: [
            (e, t, r) => {
              const n = e("./zlib/deflate");
              const i = e("./utils/common");
              const a = e("./utils/strings");
              const s = e("./zlib/messages");
              const o = e("./zlib/zstream");
              const u = Object.prototype.toString;
              function c(e) {
                if (!(this instanceof c)) {
                  return new c(e);
                }
                this.options = i.assign(
                  {
                    level: -1,
                    method: 8,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: 0,
                    to: "",
                  },
                  e || {}
                );
                const t = this.options;

                if (t.raw && t.windowBits > 0) {
                  t.windowBits = -t.windowBits;
                } else if (t.gzip && t.windowBits > 0 && t.windowBits < 16) {
                  t.windowBits += 16;
                }

                this.err = 0;
                this.msg = "";
                this.ended = false;
                this.chunks = [];
                this.strm = new o();
                this.strm.avail_out = 0;
                let r = n.deflateInit2(
                  this.strm,
                  t.level,
                  t.method,
                  t.windowBits,
                  t.memLevel,
                  t.strategy
                );
                if (r !== 0) {
                  throw new Error(s[r]);
                }

                if (t.header) {
                  n.deflateSetHeader(this.strm, t.header);
                }

                if (t.dictionary) {
                  let l;

                  l =
                    typeof t.dictionary == "string"
                      ? a.string2buf(t.dictionary)
                      : u.call(t.dictionary) === "[object ArrayBuffer]"
                      ? new Uint8Array(t.dictionary)
                      : t.dictionary;

                  if (0 !== (r = n.deflateSetDictionary(this.strm, l))) {
                    throw new Error(s[r]);
                  }

                  this._dict_set = true;
                }
              }
              function l(e, t) {
                const r = new c(t);
                r.push(e, true);

                if (r.err) {
                  throw r.msg || s[r.err];
                }

                return r.result;
              }

              c.prototype.push = function (e, t) {
                let r;
                let s;
                const o = this.strm;
                const c = this.options.chunkSize;
                if (this.ended) {
                  return false;
                }
                s = t === ~~t ? t : t === true ? 4 : 0;

                if (typeof e == "string") {
                  o.input = a.string2buf(e);
                } else if (u.call(e) === "[object ArrayBuffer]") {
                  o.input = new Uint8Array(e);
                } else {
                  o.input = e;
                }

                o.next_in = 0;
                o.avail_in = o.input.length;
                do {
                  if (o.avail_out === 0) {
                    (o.output = new i.Buf8(c)),
                      (o.next_out = 0),
                      (o.avail_out = c);
                  }

                  if (1 !== (r = n.deflate(o, s)) && r !== 0) {
                    this.onEnd(r);
                    return !(this.ended = true);
                  }

                  if (
                    o.avail_out === 0 ||
                    (o.avail_in === 0 && (s === 4 || s === 2))
                  ) {
                    if (this.options.to === "string") {
                      this.onData(
                        a.buf2binstring(i.shrinkBuf(o.output, o.next_out))
                      );
                    } else {
                      this.onData(i.shrinkBuf(o.output, o.next_out));
                    }
                  }
                } while ((o.avail_in > 0 || o.avail_out === 0) && r !== 1);
                return s === 4
                  ? ((r = n.deflateEnd(this.strm)),
                    this.onEnd(r),
                    (this.ended = true),
                    r === 0)
                  : s !== 2 || (this.onEnd(0), !(o.avail_out = 0));
              };

              c.prototype.onData = function (e) {
                this.chunks.push(e);
              };

              c.prototype.onEnd = function (e) {
                if (e === 0) {
                  if (this.options.to === "string") {
                    this.result = this.chunks.join("");
                  } else {
                    this.result = i.flattenChunks(this.chunks);
                  }
                }

                this.chunks = [];
                this.err = e;
                this.msg = this.strm.msg;
              };

              r.Deflate = c;
              r.deflate = l;

              r.deflateRaw = (e, t) => {
                t = t || {};
                t.raw = true;
                return l(e, t);
              };

              r.gzip = (e, t) => {
                t = t || {};
                t.gzip = true;
                return l(e, t);
              };
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/deflate": 46,
              "./zlib/messages": 51,
              "./zlib/zstream": 53,
            },
          ],
          40: [
            (e, t, r) => {
              const n = e("./zlib/inflate");
              const i = e("./utils/common");
              const a = e("./utils/strings");
              const s = e("./zlib/constants");
              const o = e("./zlib/messages");
              const u = e("./zlib/zstream");
              const c = e("./zlib/gzheader");
              const l = Object.prototype.toString;
              function h(e) {
                if (!(this instanceof h)) {
                  return new h(e);
                }
                this.options = i.assign(
                  { chunkSize: 16384, windowBits: 0, to: "" },
                  e || {}
                );
                const t = this.options;

                if (t.raw && t.windowBits >= 0 && t.windowBits < 16) {
                  (t.windowBits = -t.windowBits),
                    t.windowBits === 0 && (t.windowBits = -15);
                }

                if (
                  t.windowBits >= 0 &&
                  t.windowBits < 16 &&
                  (!e || !e.windowBits)
                ) {
                  t.windowBits += 32;
                }

                if (
                  t.windowBits > 15 &&
                  t.windowBits < 48 &&
                  0 == (15 & t.windowBits)
                ) {
                  t.windowBits |= 15;
                }

                this.err = 0;
                this.msg = "";
                this.ended = false;
                this.chunks = [];
                this.strm = new u();
                this.strm.avail_out = 0;
                const r = n.inflateInit2(this.strm, t.windowBits);
                if (r !== s.Z_OK) {
                  throw new Error(o[r]);
                }
                this.header = new c();
                n.inflateGetHeader(this.strm, this.header);
              }
              function f(e, t) {
                const r = new h(t);
                r.push(e, true);

                if (r.err) {
                  throw r.msg || o[r.err];
                }

                return r.result;
              }

              h.prototype.push = function (e, t) {
                let r;
                let o;
                let u;
                let c;
                let h;
                let f;
                const d = this.strm;
                const p = this.options.chunkSize;
                const m = this.options.dictionary;
                let g = false;
                if (this.ended) {
                  return false;
                }
                o = t === ~~t ? t : t === true ? s.Z_FINISH : s.Z_NO_FLUSH;

                if (typeof e == "string") {
                  d.input = a.binstring2buf(e);
                } else if (l.call(e) === "[object ArrayBuffer]") {
                  d.input = new Uint8Array(e);
                } else {
                  d.input = e;
                }

                d.next_in = 0;
                d.avail_in = d.input.length;
                do {
                  if (d.avail_out === 0) {
                    (d.output = new i.Buf8(p)),
                      (d.next_out = 0),
                      (d.avail_out = p);
                  }

                  if ((r = n.inflate(d, s.Z_NO_FLUSH)) === s.Z_NEED_DICT && m) {
                    (f =
                      typeof m == "string"
                        ? a.string2buf(m)
                        : l.call(m) === "[object ArrayBuffer]"
                        ? new Uint8Array(m)
                        : m),
                      (r = n.inflateSetDictionary(this.strm, f));
                  }

                  if (r === s.Z_BUF_ERROR && g === true) {
                    (r = s.Z_OK), (g = false);
                  }

                  if (r !== s.Z_STREAM_END && r !== s.Z_OK) {
                    this.onEnd(r);
                    return !(this.ended = true);
                  }

                  if (d.next_out) {
                    if (
                      d.avail_out === 0 ||
                      r === s.Z_STREAM_END ||
                      (d.avail_in === 0 &&
                        (o === s.Z_FINISH || o === s.Z_SYNC_FLUSH))
                    ) {
                      if (this.options.to === "string") {
                        (u = a.utf8border(d.output, d.next_out)),
                          (c = d.next_out - u),
                          (h = a.buf2string(d.output, u)),
                          (d.next_out = c),
                          (d.avail_out = p - c),
                          c && i.arraySet(d.output, d.output, u, c, 0),
                          this.onData(h);
                      } else {
                        this.onData(i.shrinkBuf(d.output, d.next_out));
                      }
                    }
                  }

                  if (d.avail_in === 0 && d.avail_out === 0) {
                    g = true;
                  }
                } while (
                  (d.avail_in > 0 || d.avail_out === 0) &&
                  r !== s.Z_STREAM_END
                );

                if (r === s.Z_STREAM_END) {
                  o = s.Z_FINISH;
                }

                return o === s.Z_FINISH
                  ? ((r = n.inflateEnd(this.strm)),
                    this.onEnd(r),
                    (this.ended = true),
                    r === s.Z_OK)
                  : o !== s.Z_SYNC_FLUSH ||
                      (this.onEnd(s.Z_OK), !(d.avail_out = 0));
              };

              h.prototype.onData = function (e) {
                this.chunks.push(e);
              };

              h.prototype.onEnd = function (e) {
                if (e === s.Z_OK) {
                  if (this.options.to === "string") {
                    this.result = this.chunks.join("");
                  } else {
                    this.result = i.flattenChunks(this.chunks);
                  }
                }

                this.chunks = [];
                this.err = e;
                this.msg = this.strm.msg;
              };

              r.Inflate = h;
              r.inflate = f;

              r.inflateRaw = (e, t) => {
                t = t || {};
                t.raw = true;
                return f(e, t);
              };

              r.ungzip = f;
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/constants": 44,
              "./zlib/gzheader": 47,
              "./zlib/inflate": 49,
              "./zlib/messages": 51,
              "./zlib/zstream": 53,
            },
          ],
          41: [
            (e, t, r) => {
              const n =
                typeof Uint8Array != "undefined" &&
                typeof Uint16Array != "undefined" &&
                typeof Int32Array != "undefined";

              r.assign = function (e) {
                for (
                  const t = Array.prototype.slice.call(arguments, 1);
                  t.length;

                ) {
                  const r = t.shift();
                  if (r) {
                    if (typeof r != "object") {
                      throw new TypeError(`${r}must be non-object`);
                    }
                    for (const n in r) {
                      if (r.hasOwnProperty(n)) {
                        e[n] = r[n];
                      }
                    }
                  }
                }
                return e;
              };

              r.shrinkBuf = (e, t) =>
                e.length === t
                  ? e
                  : e.subarray
                  ? e.subarray(0, t)
                  : ((e.length = t), e);

              const i = {
                arraySet(e, t, r, n, i) {
                  if (t.subarray && e.subarray) {
                    e.set(t.subarray(r, r + n), i);
                  } else {
                    for (let a = 0; a < n; a++) {
                      e[i + a] = t[r + a];
                    }
                  }
                },
                flattenChunks(e) {
                  let t;
                  let r;
                  let n;
                  let i;
                  let a;
                  let s;
                  t = 0;
                  n = 0;

                  for (r = e.length; t < r; t++) {
                    n += e[t].length;
                  }

                  s = new Uint8Array(n);
                  t = 0;
                  i = 0;

                  for (r = e.length; t < r; t++) {
                    a = e[t];
                    s.set(a, i);
                    i += a.length;
                  }

                  return s;
                },
              };

              const a = {
                arraySet(e, t, r, n, i) {
                  for (let a = 0; a < n; a++) {
                    e[i + a] = t[r + a];
                  }
                },
                flattenChunks(e) {
                  return Array.prototype.concat.apply([], e);
                },
              };

              r.setTyped = (e) => {
                if (e) {
                  (r.Buf8 = Uint8Array),
                    (r.Buf16 = Uint16Array),
                    (r.Buf32 = Int32Array),
                    r.assign(r, i);
                } else {
                  (r.Buf8 = Array),
                    (r.Buf16 = Array),
                    (r.Buf32 = Array),
                    r.assign(r, a);
                }
              };

              r.setTyped(n);
            },
            {},
          ],
          42: [
            (e, t, r) => {
              const n = e("./common");
              let i = true;
              let a = true;
              try {
                String.fromCharCode.apply(null, [0]);
              } catch (e) {
                i = false;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch (e) {
                a = false;
              }
              for (var s = new n.Buf8(256), o = 0; o < 256; o++) {
                s[o] =
                  o >= 252
                    ? 6
                    : o >= 248
                    ? 5
                    : o >= 240
                    ? 4
                    : o >= 224
                    ? 3
                    : o >= 192
                    ? 2
                    : 1;
              }
              function u(e, t) {
                if (t < 65537 && ((e.subarray && a) || (!e.subarray && i))) {
                  return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
                }
                for (var r = "", s = 0; s < t; s++) {
                  r += String.fromCharCode(e[s]);
                }
                return r;
              }
              s[254] = 1;
              s[254] = 1;

              r.string2buf = (e) => {
                let t;
                let r;
                let i;
                let a;
                let s;
                const e_length = e.length;
                let u = 0;
                for (a = 0; a < e_length; a++) {
                  if (
                    55296 == (64512 & (r = e.charCodeAt(a))) &&
                    a + 1 < e_length &&
                    56320 == (64512 & (i = e.charCodeAt(a + 1)))
                  ) {
                    (r = 65536 + ((r - 55296) << 10) + (i - 56320)), a++;
                  }

                  u += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                }
                t = new n.Buf8(u);

                for (a = s = 0; s < u; a++) {
                  if (
                    55296 == (64512 & (r = e.charCodeAt(a))) &&
                    a + 1 < e_length &&
                    56320 == (64512 & (i = e.charCodeAt(a + 1)))
                  ) {
                    (r = 65536 + ((r - 55296) << 10) + (i - 56320)), a++;
                  }

                  if (r < 128) {
                    t[s++] = r;
                  } else {
                    r < 2048
                      ? (t[s++] = 192 | (r >>> 6))
                      : (r < 65536
                          ? (t[s++] = 224 | (r >>> 12))
                          : ((t[s++] = 240 | (r >>> 18)),
                            (t[s++] = 128 | ((r >>> 12) & 63))),
                        (t[s++] = 128 | ((r >>> 6) & 63))),
                      (t[s++] = 128 | (63 & r));
                  }
                }

                return t;
              };

              r.buf2binstring = (e) => u(e, e.length);

              r.binstring2buf = (e) => {
                for (
                  var t = new n.Buf8(e.length), r = 0, i = t.length;
                  r < i;
                  r++
                ) {
                  t[r] = e.charCodeAt(r);
                }
                return t;
              };

              r.buf2string = (e, t) => {
                let r;
                let n;
                let i;
                let a;
                const o = t || e.length;
                const c = new Array(2 * o);
                for (r = n = 0; r < o; ) {
                  if ((i = e[r++]) < 128) {
                    c[n++] = i;
                  } else if (4 < (a = s[i])) {
                    c[n++] = 65533;
                    r += a - 1;
                  } else {
                    for (
                      i &= a === 2 ? 31 : a === 3 ? 15 : 7;
                      a > 1 && r < o;

                    ) {
                      i = (i << 6) | (63 & e[r++]);
                      a--;
                    }

                    if (a > 1) {
                      c[n++] = 65533;
                    } else if (i < 65536) {
                      c[n++] = i;
                    } else {
                      (i -= 65536),
                        (c[n++] = 55296 | ((i >> 10) & 1023)),
                        (c[n++] = 56320 | (1023 & i));
                    }
                  }
                }
                return u(c, n);
              };

              r.utf8border = (e, t) => {
                let r;

                if ((t = t || e.length) > e.length) {
                  t = e.length;
                }

                for (r = t - 1; r >= 0 && 128 == (192 & e[r]); ) {
                  r--;
                }

                return r < 0 || r === 0 ? t : r + s[e[r]] > t ? r : t;
              };
            },
            { "./common": 41 },
          ],
          43: [
            (e, t, r) => {
              t.exports = (e, t, r, n) => {
                for (
                  var i = (65535 & e) | 0, a = ((e >>> 16) & 65535) | 0, s = 0;
                  r !== 0;

                ) {
                  for (
                    r -= s = r > 2000 /* 2e3 */ ? 2000 /* 2e3 */ : r;
                    (a = (a + (i = (i + t[n++]) | 0)) | 0), --s;

                  ) {}
                  i %= 65521;
                  a %= 65521;
                }
                return i | (a << 16) | 0;
              };
            },
            {},
          ],
          44: [
            (e, t, r) => {
              t.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8,
              };
            },
            {},
          ],
          45: [
            (e, t, r) => {
              const n = (() => {
                for (var e, t = [], r = 0; r < 256; r++) {
                  e = r;
                  for (let n = 0; n < 8; n++) {
                    e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                  }
                  t[r] = e;
                }
                return t;
              })();
              t.exports = (e, t, r, i) => {
                const a = n;
                const s = i + r;
                e ^= -1;
                for (let o = i; o < s; o++) {
                  e = (e >>> 8) ^ a[255 & (e ^ t[o])];
                }
                return -1 ^ e;
              };
            },
            {},
          ],
          46: [
            (e, t, r) => {
              let n;
              const i = e("../utils/common");
              const a = e("./trees");
              const s = e("./adler32");
              const o = e("./crc32");
              const u = e("./messages");
              const c = -2;
              const l = 258;
              const h = 262;
              const f = 113;
              function d(e, t) {
                e.msg = u[t];
                return t;
              }
              function p(e) {
                return (e << 1) - (e > 4 ? 9 : 0);
              }
              function m(e) {
                for (let t = e.length; 0 <= --t; ) {
                  e[t] = 0;
                }
              }
              function g(e) {
                const e_state = e.state;
                let e_state_pending = e_state.pending;

                if (e_state_pending > e.avail_out) {
                  e_state_pending = e.avail_out;
                }

                if (e_state_pending !== 0) {
                  i.arraySet(
                    e.output,
                    e_state.pending_buf,
                    e_state.pending_out,
                    e_state_pending,
                    e.next_out
                  ),
                    (e.next_out += e_state_pending),
                    (e_state.pending_out += e_state_pending),
                    (e.total_out += e_state_pending),
                    (e.avail_out -= e_state_pending),
                    (e_state.pending -= e_state_pending),
                    e_state.pending === 0 && (e_state.pending_out = 0);
                }
              }
              function v(e, t) {
                a._tr_flush_block(
                  e,
                  e.block_start >= 0 ? e.block_start : -1,
                  e.strstart - e.block_start,
                  t
                );

                e.block_start = e.strstart;
                g(e.strm);
              }
              function b(e, t) {
                e.pending_buf[e.pending++] = t;
              }
              function y(e, t) {
                e.pending_buf[e.pending++] = (t >>> 8) & 255;
                e.pending_buf[e.pending++] = 255 & t;
              }
              function _(e, t) {
                let r;
                let n;

                let {
                  max_chain_length,
                  strstart,
                  prev_length,
                  nice_match,
                  window,
                  w_mask,
                  prev,
                } = e;

                const u =
                  e.strstart > e.w_size - h ? e.strstart - (e.w_size - h) : 0;
                const p = e.strstart + l;
                let m = window[strstart + prev_length - 1];
                let g = window[strstart + prev_length];

                if (e.prev_length >= e.good_match) {
                  max_chain_length >>= 2;
                }

                if (nice_match > e.lookahead) {
                  nice_match = e.lookahead;
                }

                do {
                  if (
                    window[(r = t) + prev_length] === g &&
                    window[r + prev_length - 1] === m &&
                    window[r] === window[strstart] &&
                    window[++r] === window[strstart + 1]
                  ) {
                    strstart += 2;
                    r++;
                    do {} while (
                      window[++strstart] === window[++r] &&
                      window[++strstart] === window[++r] &&
                      window[++strstart] === window[++r] &&
                      window[++strstart] === window[++r] &&
                      window[++strstart] === window[++r] &&
                      window[++strstart] === window[++r] &&
                      window[++strstart] === window[++r] &&
                      window[++strstart] === window[++r] &&
                      strstart < p
                    );
                    n = l - (p - strstart);
                    strstart = p - l;

                    if (prev_length < n) {
                      e.match_start = t;

                      if (nice_match <= (prev_length = n)) {
                        break;
                      }

                      m = window[strstart + prev_length - 1];
                      g = window[strstart + prev_length];
                    }
                  }
                } while ((t = prev[t & w_mask]) > u && 0 != --max_chain_length);
                return prev_length <= e.lookahead ? prev_length : e.lookahead;
              }
              function w(e) {
                let t;
                let r;
                let n;
                let a;
                let u;
                let c;
                let l;
                let f;
                let d;
                let p;
                const e_w_size = e.w_size;
                do {
                  a = e.window_size - e.lookahead - e.strstart;

                  if (e.strstart >= e_w_size + (e_w_size - h)) {
                    i.arraySet(e.window, e.window, e_w_size, e_w_size, 0);
                    e.match_start -= e_w_size;
                    e.strstart -= e_w_size;
                    e.block_start -= e_w_size;

                    for (
                      t = r = e.hash_size;
                      (n = e.head[--t]),
                        (e.head[t] = e_w_size <= n ? n - e_w_size : 0),
                        --r;

                    ) {}

                    for (
                      t = r = e_w_size;
                      (n = e.prev[--t]),
                        (e.prev[t] = e_w_size <= n ? n - e_w_size : 0),
                        --r;

                    ) {}
                    a += e_w_size;
                  }

                  if (e.strm.avail_in === 0) {
                    break;
                  }
                  c = e.strm;
                  l = e.window;
                  f = e.strstart + e.lookahead;
                  p = undefined;

                  if ((d = a) < (p = c.avail_in)) {
                    p = d;
                  }

                  r =
                    p === 0
                      ? 0
                      : ((c.avail_in -= p),
                        i.arraySet(l, c.input, c.next_in, p, f),
                        c.state.wrap === 1
                          ? (c.adler = s(c.adler, l, p, f))
                          : c.state.wrap === 2 &&
                            (c.adler = o(c.adler, l, p, f)),
                        (c.next_in += p),
                        (c.total_in += p),
                        p);

                  e.lookahead += r;

                  if (e.lookahead + e.insert >= 3) {
                    u = e.strstart - e.insert;
                    e.ins_h = e.window[u];

                    for (
                      e.ins_h =
                        ((e.ins_h << e.hash_shift) ^ e.window[u + 1]) &
                        e.hash_mask;
                      e.insert &&
                      ((e.ins_h =
                        ((e.ins_h << e.hash_shift) ^ e.window[u + 3 - 1]) &
                        e.hash_mask),
                      (e.prev[u & e.w_mask] = e.head[e.ins_h]),
                      (e.head[e.ins_h] = u),
                      u++,
                      e.insert--,
                      !(e.lookahead + e.insert < 3));

                    ) {}
                  }
                } while (e.lookahead < h && e.strm.avail_in !== 0);
              }
              function k(e, t) {
                for (let r, n; ; ) {
                  if (e.lookahead < h) {
                    w(e);

                    if (e.lookahead < h && t === 0) {
                      return 1;
                    }

                    if (e.lookahead === 0) {
                      break;
                    }
                  }
                  r = 0;

                  if (e.lookahead >= 3) {
                    (e.ins_h =
                      ((e.ins_h << e.hash_shift) ^
                        e.window[e.strstart + 3 - 1]) &
                      e.hash_mask),
                      (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                      (e.head[e.ins_h] = e.strstart);
                  }

                  if (r !== 0 && e.strstart - r <= e.w_size - h) {
                    e.match_length = _(e, r);
                  }

                  if (e.match_length >= 3) {
                    n = a._tr_tally(
                      e,
                      e.strstart - e.match_start,
                      e.match_length - 3
                    );

                    e.lookahead -= e.match_length;

                    if (
                      e.match_length <= e.max_lazy_match &&
                      e.lookahead >= 3
                    ) {
                      for (
                        e.match_length--;
                        e.strstart++,
                          (e.ins_h =
                            ((e.ins_h << e.hash_shift) ^
                              e.window[e.strstart + 3 - 1]) &
                            e.hash_mask),
                          (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                          (e.head[e.ins_h] = e.strstart),
                          0 != --e.match_length;

                      ) {}
                      e.strstart++;
                    } else {
                      e.strstart += e.match_length;
                      e.match_length = 0;
                      e.ins_h = e.window[e.strstart];

                      e.ins_h =
                        ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) &
                        e.hash_mask;
                    }
                  } else {
                    n = a._tr_tally(e, 0, e.window[e.strstart]);
                    e.lookahead--;
                    e.strstart++;
                  }

                  if (n && (v(e, false), e.strm.avail_out === 0)) {
                    return 1;
                  }
                }
                e.insert = e.strstart < 2 ? e.strstart : 2;

                return t === 4
                  ? (v(e, true), e.strm.avail_out === 0 ? 3 : 4)
                  : e.last_lit && (v(e, false), e.strm.avail_out === 0)
                  ? 1
                  : 2;
              }
              function x(e, t) {
                for (var r, n, i; ; ) {
                  if (e.lookahead < h) {
                    w(e);

                    if (e.lookahead < h && t === 0) {
                      return 1;
                    }

                    if (e.lookahead === 0) {
                      break;
                    }
                  }
                  r = 0;

                  if (e.lookahead >= 3) {
                    (e.ins_h =
                      ((e.ins_h << e.hash_shift) ^
                        e.window[e.strstart + 3 - 1]) &
                      e.hash_mask),
                      (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                      (e.head[e.ins_h] = e.strstart);
                  }

                  e.prev_length = e.match_length;
                  e.prev_match = e.match_start;
                  e.match_length = 2;

                  if (
                    r !== 0 &&
                    e.prev_length < e.max_lazy_match &&
                    e.strstart - r <= e.w_size - h
                  ) {
                    (e.match_length = _(e, r)),
                      e.match_length <= 5 &&
                        (e.strategy === 1 ||
                          (e.match_length === 3 &&
                            4096 < e.strstart - e.match_start)) &&
                        (e.match_length = 2);
                  }

                  if (e.prev_length >= 3 && e.match_length <= e.prev_length) {
                    i = e.strstart + e.lookahead - 3;

                    n = a._tr_tally(
                      e,
                      e.strstart - 1 - e.prev_match,
                      e.prev_length - 3
                    );

                    e.lookahead -= e.prev_length - 1;

                    for (
                      e.prev_length -= 2;
                      ++e.strstart <= i &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^
                            e.window[e.strstart + 3 - 1]) &
                          e.hash_mask),
                        (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart)),
                        0 != --e.prev_length;

                    ) {}

                    e.match_available = 0;
                    e.match_length = 2;
                    e.strstart++;

                    if (n && (v(e, false), e.strm.avail_out === 0)) {
                      return 1;
                    }
                  } else if (e.match_available) {
                    if ((n = a._tr_tally(e, 0, e.window[e.strstart - 1]))) {
                      v(e, false);
                    }

                    e.strstart++;
                    e.lookahead--;

                    if (e.strm.avail_out === 0) {
                      return 1;
                    }
                  } else {
                    e.match_available = 1;
                    e.strstart++;
                    e.lookahead--;
                  }
                }

                if (e.match_available) {
                  (n = a._tr_tally(e, 0, e.window[e.strstart - 1])),
                    (e.match_available = 0);
                }

                e.insert = e.strstart < 2 ? e.strstart : 2;

                return t === 4
                  ? (v(e, true), e.strm.avail_out === 0 ? 3 : 4)
                  : e.last_lit && (v(e, false), e.strm.avail_out === 0)
                  ? 1
                  : 2;
              }
              function S(e, t, r, n, i) {
                this.good_length = e;
                this.max_lazy = t;
                this.nice_length = r;
                this.max_chain = n;
                this.func = i;
              }
              function E() {
                this.strm = null;
                this.status = 0;
                this.pending_buf = null;
                this.pending_buf_size = 0;
                this.pending_out = 0;
                this.pending = 0;
                this.wrap = 0;
                this.gzhead = null;
                this.gzindex = 0;
                this.method = 8;
                this.last_flush = -1;
                this.w_size = 0;
                this.w_bits = 0;
                this.w_mask = 0;
                this.window = null;
                this.window_size = 0;
                this.prev = null;
                this.head = null;
                this.ins_h = 0;
                this.hash_size = 0;
                this.hash_bits = 0;
                this.hash_mask = 0;
                this.hash_shift = 0;
                this.block_start = 0;
                this.match_length = 0;
                this.prev_match = 0;
                this.match_available = 0;
                this.strstart = 0;
                this.match_start = 0;
                this.lookahead = 0;
                this.prev_length = 0;
                this.max_chain_length = 0;
                this.max_lazy_match = 0;
                this.level = 0;
                this.strategy = 0;
                this.good_match = 0;
                this.nice_match = 0;
                this.dyn_ltree = new i.Buf16(1146);
                this.dyn_dtree = new i.Buf16(122);
                this.bl_tree = new i.Buf16(78);
                m(this.dyn_ltree);
                m(this.dyn_dtree);
                m(this.bl_tree);
                this.l_desc = null;
                this.d_desc = null;
                this.bl_desc = null;
                this.bl_count = new i.Buf16(16);
                this.heap = new i.Buf16(573);
                m(this.heap);
                this.heap_len = 0;
                this.heap_max = 0;
                this.depth = new i.Buf16(573);
                m(this.depth);
                this.l_buf = 0;
                this.lit_bufsize = 0;
                this.last_lit = 0;
                this.d_buf = 0;
                this.opt_len = 0;
                this.static_len = 0;
                this.matches = 0;
                this.insert = 0;
                this.bi_buf = 0;
                this.bi_valid = 0;
              }
              function O(e) {
                let t;
                return e && e.state
                  ? ((e.total_in = e.total_out = 0),
                    (e.data_type = 2),
                    ((t = e.state).pending = 0),
                    (t.pending_out = 0),
                    t.wrap < 0 && (t.wrap = -t.wrap),
                    (t.status = t.wrap ? 42 : f),
                    (e.adler = t.wrap === 2 ? 0 : 1),
                    (t.last_flush = 0),
                    a._tr_init(t),
                    0)
                  : d(e, c);
              }
              function C(e) {
                const t = O(e);

                if (t === 0) {
                  ((e) => {
                    e.window_size = 2 * e.w_size;
                    m(e.head);
                    e.max_lazy_match = n[e.level].max_lazy;
                    e.good_match = n[e.level].good_length;
                    e.nice_match = n[e.level].nice_length;
                    e.max_chain_length = n[e.level].max_chain;
                    e.strstart = 0;
                    e.block_start = 0;
                    e.lookahead = 0;
                    e.insert = 0;
                    e.match_length = 2;
                    e.prev_length = 2;
                    e.match_available = 0;
                    e.ins_h = 0;
                  })(e.state);
                }

                return t;
              }
              function A(e, t, r, n, a, s) {
                if (!e) {
                  return c;
                }
                let o = 1;

                if (-1 === t) {
                  t = 6;
                }

                if (n < 0) {
                  (o = 0), (n = -n);
                } else if (n > 15) {
                  (o = 2), (n -= 16);
                }

                if (
                  a < 1 ||
                  a > 9 ||
                  r !== 8 ||
                  n < 8 ||
                  n > 15 ||
                  t < 0 ||
                  t > 9 ||
                  s < 0 ||
                  s > 4
                ) {
                  return d(e, c);
                }

                if (n === 8) {
                  n = 9;
                }

                const u = new E();
                (e.state = u).strm = e;
                u.wrap = o;
                u.gzhead = null;
                u.w_bits = n;
                u.w_size = 1 << u.w_bits;
                u.w_mask = u.w_size - 1;
                u.hash_bits = a + 7;
                u.hash_size = 1 << u.hash_bits;
                u.hash_mask = u.hash_size - 1;
                u.hash_shift = ~~((u.hash_bits + 3 - 1) / 3);
                u.window = new i.Buf8(2 * u.w_size);
                u.head = new i.Buf16(u.hash_size);
                u.prev = new i.Buf16(u.w_size);
                u.lit_bufsize = 1 << (a + 6);
                u.pending_buf_size = 4 * u.lit_bufsize;
                u.pending_buf = new i.Buf8(u.pending_buf_size);
                u.d_buf = 1 * u.lit_bufsize;
                u.l_buf = 3 * u.lit_bufsize;
                u.level = t;
                u.strategy = s;
                u.method = r;
                return C(e);
              }

              n = [
                new S(0, 0, 0, 0, (e, t) => {
                  let r = 65535;
                  for (
                    r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);
                    ;

                  ) {
                    if (e.lookahead <= 1) {
                      w(e);

                      if (e.lookahead === 0 && t === 0) {
                        return 1;
                      }

                      if (e.lookahead === 0) {
                        break;
                      }
                    }
                    e.strstart += e.lookahead;
                    e.lookahead = 0;
                    const n = e.block_start + r;
                    if (
                      (e.strstart === 0 || e.strstart >= n) &&
                      ((e.lookahead = e.strstart - n),
                      (e.strstart = n),
                      v(e, false),
                      e.strm.avail_out === 0)
                    ) {
                      return 1;
                    }
                    if (
                      e.strstart - e.block_start >= e.w_size - h &&
                      (v(e, false), e.strm.avail_out === 0)
                    ) {
                      return 1;
                    }
                  }
                  e.insert = 0;

                  return t === 4
                    ? (v(e, true), e.strm.avail_out === 0 ? 3 : 4)
                    : (e.strstart > e.block_start &&
                        (v(e, false), e.strm.avail_out),
                      1);
                }),
                new S(4, 4, 8, 4, k),
                new S(4, 5, 16, 8, k),
                new S(4, 6, 32, 32, k),
                new S(4, 4, 16, 16, x),
                new S(8, 16, 32, 32, x),
                new S(8, 16, 128, 128, x),
                new S(8, 32, 128, 256, x),
                new S(32, 128, 258, 1024, x),
                new S(32, 258, 258, 4096, x),
              ];

              r.deflateInit = (e, t) => A(e, t, 8, 15, 8, 0);

              r.deflateInit2 = A;
              r.deflateReset = C;
              r.deflateResetKeep = O;

              r.deflateSetHeader = (e, t) =>
                e && e.state
                  ? e.state.wrap !== 2
                    ? c
                    : ((e.state.gzhead = t), 0)
                  : c;

              r.deflate = (e, t) => {
                let r;
                let i;
                let s;
                let u;
                if (!e || !e.state || t > 5 || t < 0) {
                  return e ? d(e, c) : c;
                }
                i = e.state;

                if (
                  !e.output ||
                  (!e.input && e.avail_in !== 0) ||
                  (i.status === 666 && t !== 4)
                ) {
                  return d(e, e.avail_out === 0 ? -5 : c);
                }

                i.strm = e;
                r = i.last_flush;
                i.last_flush = t;

                if (i.status === 42) {
                  if (i.wrap === 2) {
                    e.adler = 0;
                    b(i, 31);
                    b(i, 139);
                    b(i, 8);

                    if (i.gzhead) {
                      b(
                        i,
                        (i.gzhead.text ? 1 : 0) +
                          (i.gzhead.hcrc ? 2 : 0) +
                          (i.gzhead.extra ? 4 : 0) +
                          (i.gzhead.name ? 8 : 0) +
                          (i.gzhead.comment ? 16 : 0)
                      ),
                        b(i, 255 & i.gzhead.time),
                        b(i, (i.gzhead.time >> 8) & 255),
                        b(i, (i.gzhead.time >> 16) & 255),
                        b(i, (i.gzhead.time >> 24) & 255),
                        b(
                          i,
                          i.level === 9
                            ? 2
                            : i.strategy >= 2 || i.level < 2
                            ? 4
                            : 0
                        ),
                        b(i, 255 & i.gzhead.os),
                        i.gzhead.extra &&
                          i.gzhead.extra.length &&
                          (b(i, 255 & i.gzhead.extra.length),
                          b(i, (i.gzhead.extra.length >> 8) & 255)),
                        i.gzhead.hcrc &&
                          (e.adler = o(e.adler, i.pending_buf, i.pending, 0)),
                        (i.gzindex = 0),
                        (i.status = 69);
                    } else {
                      b(i, 0),
                        b(i, 0),
                        b(i, 0),
                        b(i, 0),
                        b(i, 0),
                        b(
                          i,
                          i.level === 9
                            ? 2
                            : i.strategy >= 2 || i.level < 2
                            ? 4
                            : 0
                        ),
                        b(i, 3),
                        (i.status = f);
                    }
                  } else {
                    let h = (8 + ((i.w_bits - 8) << 4)) << 8;

                    h |=
                      (i.strategy >= 2 || i.level < 2
                        ? 0
                        : i.level < 6
                        ? 1
                        : i.level === 6
                        ? 2
                        : 3) << 6;

                    if (i.strstart !== 0) {
                      h |= 32;
                    }

                    h += 31 - (h % 31);
                    i.status = f;
                    y(i, h);

                    if (i.strstart !== 0) {
                      y(i, e.adler >>> 16), y(i, 65535 & e.adler);
                    }

                    e.adler = 1;
                  }
                }

                if (i.status === 69) {
                  if (i.gzhead.extra) {
                    for (
                      s = i.pending;
                      i.gzindex < (65535 & i.gzhead.extra.length) &&
                      (i.pending !== i.pending_buf_size ||
                        (i.gzhead.hcrc &&
                          i.pending > s &&
                          (e.adler = o(
                            e.adler,
                            i.pending_buf,
                            i.pending - s,
                            s
                          )),
                        g(e),
                        (s = i.pending),
                        i.pending !== i.pending_buf_size));

                    ) {
                      b(i, 255 & i.gzhead.extra[i.gzindex]);
                      i.gzindex++;
                    }

                    if (i.gzhead.hcrc && i.pending > s) {
                      e.adler = o(e.adler, i.pending_buf, i.pending - s, s);
                    }

                    if (i.gzindex === i.gzhead.extra.length) {
                      (i.gzindex = 0), (i.status = 73);
                    }
                  } else {
                    i.status = 73;
                  }
                }
                if (i.status === 73) {
                  if (i.gzhead.name) {
                    s = i.pending;
                    do {
                      if (
                        i.pending === i.pending_buf_size &&
                        (i.gzhead.hcrc &&
                          i.pending > s &&
                          (e.adler = o(
                            e.adler,
                            i.pending_buf,
                            i.pending - s,
                            s
                          )),
                        g(e),
                        (s = i.pending),
                        i.pending === i.pending_buf_size)
                      ) {
                        u = 1;
                        break;
                      }

                      u =
                        i.gzindex < i.gzhead.name.length
                          ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                          : 0;

                      b(i, u);
                    } while (u !== 0);

                    if (i.gzhead.hcrc && i.pending > s) {
                      e.adler = o(e.adler, i.pending_buf, i.pending - s, s);
                    }

                    if (u === 0) {
                      (i.gzindex = 0), (i.status = 91);
                    }
                  } else {
                    i.status = 91;
                  }
                }
                if (i.status === 91) {
                  if (i.gzhead.comment) {
                    s = i.pending;
                    do {
                      if (
                        i.pending === i.pending_buf_size &&
                        (i.gzhead.hcrc &&
                          i.pending > s &&
                          (e.adler = o(
                            e.adler,
                            i.pending_buf,
                            i.pending - s,
                            s
                          )),
                        g(e),
                        (s = i.pending),
                        i.pending === i.pending_buf_size)
                      ) {
                        u = 1;
                        break;
                      }

                      u =
                        i.gzindex < i.gzhead.comment.length
                          ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                          : 0;

                      b(i, u);
                    } while (u !== 0);

                    if (i.gzhead.hcrc && i.pending > s) {
                      e.adler = o(e.adler, i.pending_buf, i.pending - s, s);
                    }

                    if (u === 0) {
                      i.status = 103;
                    }
                  } else {
                    i.status = 103;
                  }
                }

                if (i.status === 103) {
                  if (i.gzhead.hcrc) {
                    i.pending + 2 > i.pending_buf_size && g(e),
                      i.pending + 2 <= i.pending_buf_size &&
                        (b(i, 255 & e.adler),
                        b(i, (e.adler >> 8) & 255),
                        (e.adler = 0),
                        (i.status = f));
                  } else {
                    i.status = f;
                  }
                }

                if (i.pending !== 0) {
                  g(e);

                  if (e.avail_out === 0) {
                    i.last_flush = -1;
                    return 0;
                  }
                } else if (e.avail_in === 0 && p(t) <= p(r) && t !== 4) {
                  return d(e, -5);
                }

                if (i.status === 666 && e.avail_in !== 0) {
                  return d(e, -5);
                }
                if (
                  e.avail_in !== 0 ||
                  i.lookahead !== 0 ||
                  (t !== 0 && i.status !== 666)
                ) {
                  const _ =
                    i.strategy === 2
                      ? ((e, t) => {
                          for (let r; ; ) {
                            if (
                              e.lookahead === 0 &&
                              (w(e), e.lookahead === 0)
                            ) {
                              if (t === 0) {
                                return 1;
                              }
                              break;
                            }
                            e.match_length = 0;
                            r = a._tr_tally(e, 0, e.window[e.strstart]);
                            e.lookahead--;
                            e.strstart++;

                            if (r && (v(e, false), e.strm.avail_out === 0)) {
                              return 1;
                            }
                          }
                          e.insert = 0;

                          return t === 4
                            ? (v(e, true), e.strm.avail_out === 0 ? 3 : 4)
                            : e.last_lit &&
                              (v(e, false), e.strm.avail_out === 0)
                            ? 1
                            : 2;
                        })(i, t)
                      : i.strategy === 3
                      ? ((e, t) => {
                          for (let r, n, i, s, o = e.window; ; ) {
                            if (e.lookahead <= l) {
                              w(e);

                              if (e.lookahead <= l && t === 0) {
                                return 1;
                              }

                              if (e.lookahead === 0) {
                                break;
                              }
                            }
                            e.match_length = 0;

                            if (
                              e.lookahead >= 3 &&
                              e.strstart > 0 &&
                              (n = o[(i = e.strstart - 1)]) === o[++i] &&
                              n === o[++i] &&
                              n === o[++i]
                            ) {
                              s = e.strstart + l;
                              do {} while (
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                i < s
                              );
                              e.match_length = l - (s - i);

                              if (e.match_length > e.lookahead) {
                                e.match_length = e.lookahead;
                              }
                            }

                            if (e.match_length >= 3) {
                              (r = a._tr_tally(e, 1, e.match_length - 3)),
                                (e.lookahead -= e.match_length),
                                (e.strstart += e.match_length),
                                (e.match_length = 0);
                            } else {
                              (r = a._tr_tally(e, 0, e.window[e.strstart])),
                                e.lookahead--,
                                e.strstart++;
                            }

                            if (r && (v(e, false), e.strm.avail_out === 0)) {
                              return 1;
                            }
                          }
                          e.insert = 0;

                          return t === 4
                            ? (v(e, true), e.strm.avail_out === 0 ? 3 : 4)
                            : e.last_lit &&
                              (v(e, false), e.strm.avail_out === 0)
                            ? 1
                            : 2;
                        })(i, t)
                      : n[i.level].func(i, t);

                  if (_ === 3 || _ === 4) {
                    i.status = 666;
                  }

                  if (_ === 1 || _ === 3) {
                    if (e.avail_out === 0) {
                      i.last_flush = -1;
                    }

                    return 0;
                  }

                  if (
                    _ === 2 &&
                    (t === 1
                      ? a._tr_align(i)
                      : t !== 5 &&
                        (a._tr_stored_block(i, 0, 0, false),
                        t === 3 &&
                          (m(i.head),
                          i.lookahead === 0 &&
                            ((i.strstart = 0),
                            (i.block_start = 0),
                            (i.insert = 0)))),
                    g(e),
                    e.avail_out === 0)
                  ) {
                    i.last_flush = -1;
                    return 0;
                  }
                }
                return t !== 4
                  ? 0
                  : i.wrap <= 0
                  ? 1
                  : (i.wrap === 2
                      ? (b(i, 255 & e.adler),
                        b(i, (e.adler >> 8) & 255),
                        b(i, (e.adler >> 16) & 255),
                        b(i, (e.adler >> 24) & 255),
                        b(i, 255 & e.total_in),
                        b(i, (e.total_in >> 8) & 255),
                        b(i, (e.total_in >> 16) & 255),
                        b(i, (e.total_in >> 24) & 255))
                      : (y(i, e.adler >>> 16), y(i, 65535 & e.adler)),
                    g(e),
                    i.wrap > 0 && (i.wrap = -i.wrap),
                    i.pending !== 0 ? 0 : 1);
              };

              r.deflateEnd = (e) => {
                let t;
                return e && e.state
                  ? 42 !== (t = e.state.status) &&
                    t !== 69 &&
                    t !== 73 &&
                    t !== 91 &&
                    t !== 103 &&
                    t !== f &&
                    t !== 666
                    ? d(e, c)
                    : ((e.state = null), t === f ? d(e, -3) : 0)
                  : c;
              };

              r.deflateSetDictionary = (e, t) => {
                let r;
                let n;
                let a;
                let o;
                let u;
                let l;
                let h;
                let f;
                let t_length = t.length;
                if (!e || !e.state) {
                  return c;
                }
                if (
                  2 === (o = (r = e.state).wrap) ||
                  (o === 1 && r.status !== 42) ||
                  r.lookahead
                ) {
                  return c;
                }

                if (o === 1) {
                  e.adler = s(e.adler, t, t_length, 0);
                }

                r.wrap = 0;

                if (t_length >= r.w_size) {
                  o === 0 &&
                    (m(r.head),
                    (r.strstart = 0),
                    (r.block_start = 0),
                    (r.insert = 0)),
                    (f = new i.Buf8(r.w_size)),
                    i.arraySet(f, t, t_length - r.w_size, r.w_size, 0),
                    (t = f),
                    (t_length = r.w_size);
                }

                u = e.avail_in;
                l = e.next_in;
                h = e.input;
                e.avail_in = t_length;
                e.next_in = 0;
                e.input = t;
                w(r);

                while (r.lookahead >= 3) {
                  n = r.strstart;

                  for (
                    a = r.lookahead - 2;
                    (r.ins_h =
                      ((r.ins_h << r.hash_shift) ^ r.window[n + 3 - 1]) &
                      r.hash_mask),
                      (r.prev[n & r.w_mask] = r.head[r.ins_h]),
                      (r.head[r.ins_h] = n),
                      n++,
                      --a;

                  ) {}

                  r.strstart = n;
                  r.lookahead = 2;
                  w(r);
                }

                r.strstart += r.lookahead;
                r.block_start = r.strstart;
                r.insert = r.lookahead;
                r.lookahead = 0;
                r.match_length = 2;
                r.prev_length = 2;
                r.match_available = 0;
                e.next_in = l;
                e.input = h;
                e.avail_in = u;
                r.wrap = o;
                return 0;
              };

              r.deflateInfo = "pako deflate (from Nodeca project)";
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./messages": 51,
              "./trees": 52,
            },
          ],
          47: [
            (e, t, r) => {
              t.exports = function () {
                this.text = 0;
                this.time = 0;
                this.xflags = 0;
                this.os = 0;
                this.extra = null;
                this.extra_len = 0;
                this.name = "";
                this.comment = "";
                this.hcrc = 0;
                this.done = false;
              };
            },
            {},
          ],
          48: [
            (e, t, r) => {
              t.exports = (e, t) => {
                let r;
                let n;
                let i;
                let a;
                let s;
                let o;
                let u;
                let c;
                let l;
                let h;
                let f;
                let d;
                let p;
                let m;
                let g;
                let v;
                let b;
                let y;
                let _;
                let w;
                let k;
                let x;
                let S;
                let E;
                let O;
                r = e.state;
                n = e.next_in;
                E = e.input;
                i = n + (e.avail_in - 5);
                a = e.next_out;
                O = e.output;
                s = a - (t - e.avail_out);
                o = a + (e.avail_out - 257);
                u = r.dmax;
                c = r.wsize;
                l = r.whave;
                h = r.wnext;
                f = r.window;
                d = r.hold;
                p = r.bits;
                m = r.lencode;
                g = r.distcode;
                v = (1 << r.lenbits) - 1;
                b = (1 << r.distbits) - 1;
                e: do {
                  if (p < 15) {
                    (d += E[n++] << p), (p += 8), (d += E[n++] << p), (p += 8);
                  }

                  y = m[d & v];
                  t: while (true) {
                    d >>>= _ = y >>> 24;
                    p -= _;

                    if (0 == (_ = (y >>> 16) & 255)) {
                      O[a++] = 65535 & y;
                    } else {
                      if (!(16 & _)) {
                        if (0 == (64 & _)) {
                          y = m[(65535 & y) + (d & ((1 << _) - 1))];
                          continue t;
                        }
                        if (32 & _) {
                          r.mode = 12;
                          break e;
                        }
                        e.msg = "invalid literal/length code";
                        r.mode = 30;
                        break e;
                      }
                      w = 65535 & y;

                      if ((_ &= 15)) {
                        p < _ && ((d += E[n++] << p), (p += 8)),
                          (w += d & ((1 << _) - 1)),
                          (d >>>= _),
                          (p -= _);
                      }

                      if (p < 15) {
                        (d += E[n++] << p),
                          (p += 8),
                          (d += E[n++] << p),
                          (p += 8);
                      }

                      y = g[d & b];
                      r: while (true) {
                        d >>>= _ = y >>> 24;
                        p -= _;

                        if (!(16 & (_ = (y >>> 16) & 255))) {
                          if (0 == (64 & _)) {
                            y = g[(65535 & y) + (d & ((1 << _) - 1))];
                            continue r;
                          }
                          e.msg = "invalid distance code";
                          r.mode = 30;
                          break e;
                        }

                        k = 65535 & y;

                        if (p < (_ &= 15)) {
                          (d += E[n++] << p),
                            (p += 8) < _ && ((d += E[n++] << p), (p += 8));
                        }

                        if (u < (k += d & ((1 << _) - 1))) {
                          e.msg = "invalid distance too far back";
                          r.mode = 30;
                          break e;
                        }

                        d >>>= _;
                        p -= _;

                        if ((_ = a - s) < k) {
                          if (l < (_ = k - _) && r.sane) {
                            e.msg = "invalid distance too far back";
                            r.mode = 30;
                            break e;
                          }
                          S = f;

                          if ((x = 0) === h) {
                            x += c - _;

                            if (_ < w) {
                              for (w -= _; (O[a++] = f[x++]), --_; ) {}
                              x = a - k;
                              S = O;
                            }
                          } else if (h < _) {
                            x += c + h - _;

                            if ((_ -= h) < w) {
                              for (w -= _; (O[a++] = f[x++]), --_; ) {}
                              x = 0;

                              if (h < w) {
                                for (w -= _ = h; (O[a++] = f[x++]), --_; ) {}
                                x = a - k;
                                S = O;
                              }
                            }
                          } else {
                            x += h - _;

                            if (_ < w) {
                              for (w -= _; (O[a++] = f[x++]), --_; ) {}
                              x = a - k;
                              S = O;
                            }
                          }

                          while (w > 2) {
                            O[a++] = S[x++];
                            O[a++] = S[x++];
                            O[a++] = S[x++];
                            w -= 3;
                          }

                          if (w) {
                            (O[a++] = S[x++]), w > 1 && (O[a++] = S[x++]);
                          }
                        } else {
                          for (
                            x = a - k;
                            (O[a++] = O[x++]),
                              (O[a++] = O[x++]),
                              (O[a++] = O[x++]),
                              2 < (w -= 3);

                          ) {}

                          if (w) {
                            (O[a++] = O[x++]), w > 1 && (O[a++] = O[x++]);
                          }
                        }

                        break;
                      }
                    }

                    break;
                  }
                } while (n < i && a < o);
                n -= w = p >> 3;
                d &= (1 << (p -= w << 3)) - 1;
                e.next_in = n;
                e.next_out = a;
                e.avail_in = n < i ? i - n + 5 : 5 - (n - i);
                e.avail_out = a < o ? o - a + 257 : 257 - (a - o);
                r.hold = d;
                r.bits = p;
              };
            },
            {},
          ],
          49: [
            (e, t, r) => {
              const n = e("../utils/common");
              const i = e("./adler32");
              const a = e("./crc32");
              const s = e("./inffast");
              const o = e("./inftrees");
              const u = -2;
              function c(e) {
                return (
                  ((e >>> 24) & 255) +
                  ((e >>> 8) & 65280) +
                  ((65280 & e) << 8) +
                  ((255 & e) << 24)
                );
              }
              function l() {
                this.mode = 0;
                this.last = false;
                this.wrap = 0;
                this.havedict = false;
                this.flags = 0;
                this.dmax = 0;
                this.check = 0;
                this.total = 0;
                this.head = null;
                this.wbits = 0;
                this.wsize = 0;
                this.whave = 0;
                this.wnext = 0;
                this.window = null;
                this.hold = 0;
                this.bits = 0;
                this.length = 0;
                this.offset = 0;
                this.extra = 0;
                this.lencode = null;
                this.distcode = null;
                this.lenbits = 0;
                this.distbits = 0;
                this.ncode = 0;
                this.nlen = 0;
                this.ndist = 0;
                this.have = 0;
                this.next = null;
                this.lens = new n.Buf16(320);
                this.work = new n.Buf16(288);
                this.lendyn = null;
                this.distdyn = null;
                this.sane = 0;
                this.back = 0;
                this.was = 0;
              }
              function h(e) {
                let t;
                return e && e.state
                  ? ((t = e.state),
                    (e.total_in = e.total_out = t.total = 0),
                    (e.msg = ""),
                    t.wrap && (e.adler = 1 & t.wrap),
                    (t.mode = 1),
                    (t.last = 0),
                    (t.havedict = 0),
                    (t.dmax = 32768),
                    (t.head = null),
                    (t.hold = 0),
                    (t.bits = 0),
                    (t.lencode = t.lendyn = new n.Buf32(852)),
                    (t.distcode = t.distdyn = new n.Buf32(592)),
                    (t.sane = 1),
                    (t.back = -1),
                    0)
                  : u;
              }
              function f(e) {
                let t;
                return e && e.state
                  ? (((t = e.state).wsize = 0),
                    (t.whave = 0),
                    (t.wnext = 0),
                    h(e))
                  : u;
              }
              function d(e, t) {
                let r;
                let n;
                return e && e.state
                  ? ((n = e.state),
                    t < 0
                      ? ((r = 0), (t = -t))
                      : ((r = 1 + (t >> 4)), t < 48 && (t &= 15)),
                    t && (t < 8 || t > 15)
                      ? u
                      : (n.window !== null &&
                          n.wbits !== t &&
                          (n.window = null),
                        (n.wrap = r),
                        (n.wbits = t),
                        f(e)))
                  : u;
              }
              function p(e, t) {
                let r;
                let n;
                return e
                  ? ((n = new l()),
                    ((e.state = n).window = null),
                    0 !== (r = d(e, t)) && (e.state = null),
                    r)
                  : u;
              }
              let m;
              let g;
              let v = true;
              function b(e) {
                if (v) {
                  let t;
                  m = new n.Buf32(512);
                  g = new n.Buf32(32);

                  for (t = 0; t < 144; ) {
                    e.lens[t++] = 8;
                  }

                  while (t < 256) {
                    e.lens[t++] = 9;
                  }

                  while (t < 280) {
                    e.lens[t++] = 7;
                  }

                  while (t < 288) {
                    e.lens[t++] = 8;
                  }

                  o(1, e.lens, 0, 288, m, 0, e.work, { bits: 9 });

                  for (t = 0; t < 32; ) {
                    e.lens[t++] = 5;
                  }

                  o(2, e.lens, 0, 32, g, 0, e.work, { bits: 5 });
                  v = false;
                }
                e.lencode = m;
                e.lenbits = 9;
                e.distcode = g;
                e.distbits = 5;
              }
              function y(e, t, r, i) {
                let a;
                const e_state = e.state;

                if (e_state.window === null) {
                  (e_state.wsize = 1 << e_state.wbits),
                    (e_state.wnext = 0),
                    (e_state.whave = 0),
                    (e_state.window = new n.Buf8(e_state.wsize));
                }

                if (i >= e_state.wsize) {
                  n.arraySet(
                    e_state.window,
                    t,
                    r - e_state.wsize,
                    e_state.wsize,
                    0
                  ),
                    (e_state.wnext = 0),
                    (e_state.whave = e_state.wsize);
                } else {
                  i < (a = e_state.wsize - e_state.wnext) && (a = i),
                    n.arraySet(e_state.window, t, r - i, a, e_state.wnext),
                    (i -= a)
                      ? (n.arraySet(e_state.window, t, r - i, i, 0),
                        (e_state.wnext = i),
                        (e_state.whave = e_state.wsize))
                      : ((e_state.wnext += a),
                        e_state.wnext === e_state.wsize && (e_state.wnext = 0),
                        e_state.whave < e_state.wsize && (e_state.whave += a));
                }

                return 0;
              }
              r.inflateReset = f;
              r.inflateReset2 = d;
              r.inflateResetKeep = h;

              r.inflateInit = (e) => p(e, 15);

              r.inflateInit2 = p;

              r.inflate = (e, t) => {
                let r;
                let l;
                let h;
                let f;
                let d;
                let p;
                let m;
                let g;
                let v;
                let _;
                let w;
                let k;
                let x;
                let S;
                let E;
                let O;
                let C;
                let A;
                let T;
                let z;
                let R;
                let I;
                let B;
                let F;
                let N = 0;
                const D = new n.Buf8(4);
                const L = [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ];
                if (
                  !e ||
                  !e.state ||
                  !e.output ||
                  (!e.input && e.avail_in !== 0)
                ) {
                  return u;
                }

                if ((r = e.state).mode === 12) {
                  r.mode = 13;
                }

                d = e.next_out;
                h = e.output;
                m = e.avail_out;
                f = e.next_in;
                l = e.input;
                p = e.avail_in;
                g = r.hold;
                v = r.bits;
                _ = p;
                w = m;
                I = 0;
                e: while (true) {
                  switch (r.mode) {
                    case 1: {
                      if (r.wrap === 0) {
                        r.mode = 13;
                        break;
                      }

                      while (v < 16) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }

                      if (2 & r.wrap && g === 35615) {
                        D[(r.check = 0)] = 255 & g;
                        D[1] = (g >>> 8) & 255;
                        r.check = a(r.check, D, 2, 0);
                        v = 0;
                        g = 0;
                        r.mode = 2;
                        break;
                      }
                      r.flags = 0;

                      if (r.head) {
                        r.head.done = false;
                      }

                      if (!(1 & r.wrap) || (((255 & g) << 8) + (g >> 8)) % 31) {
                        e.msg = "incorrect header check";
                        r.mode = 30;
                        break;
                      }

                      if (8 != (15 & g)) {
                        e.msg = "unknown compression method";
                        r.mode = 30;
                        break;
                      }
                      v -= 4;
                      R = 8 + (15 & (g >>>= 4));

                      if (r.wbits === 0) {
                        r.wbits = R;
                      } else if (R > r.wbits) {
                        e.msg = "invalid window size";
                        r.mode = 30;
                        break;
                      }

                      r.dmax = 1 << R;
                      e.adler = 1;
                      r.check = 1;
                      r.mode = 512 & g ? 10 : 12;
                      v = 0;
                      g = 0;
                      break;
                    }
                    case 2: {
                      while (v < 16) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }

                      r.flags = g;

                      if (8 != (255 & r.flags)) {
                        e.msg = "unknown compression method";
                        r.mode = 30;
                        break;
                      }

                      if (57344 & r.flags) {
                        e.msg = "unknown header flags set";
                        r.mode = 30;
                        break;
                      }

                      if (r.head) {
                        r.head.text = (g >> 8) & 1;
                      }

                      if (512 & r.flags) {
                        (D[0] = 255 & g),
                          (D[1] = (g >>> 8) & 255),
                          (r.check = a(r.check, D, 2, 0));
                      }

                      v = 0;
                      g = 0;
                      r.mode = 3;
                    }
                    case 3: {
                      while (v < 32) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }

                      if (r.head) {
                        r.head.time = g;
                      }

                      if (512 & r.flags) {
                        (D[0] = 255 & g),
                          (D[1] = (g >>> 8) & 255),
                          (D[2] = (g >>> 16) & 255),
                          (D[3] = (g >>> 24) & 255),
                          (r.check = a(r.check, D, 4, 0));
                      }

                      v = 0;
                      g = 0;
                      r.mode = 4;
                    }
                    case 4: {
                      while (v < 16) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }

                      if (r.head) {
                        (r.head.xflags = 255 & g), (r.head.os = g >> 8);
                      }

                      if (512 & r.flags) {
                        (D[0] = 255 & g),
                          (D[1] = (g >>> 8) & 255),
                          (r.check = a(r.check, D, 2, 0));
                      }

                      v = 0;
                      g = 0;
                      r.mode = 5;
                    }
                    case 5: {
                      if (1024 & r.flags) {
                        while (v < 16) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g += l[f++] << v;
                          v += 8;
                        }

                        r.length = g;

                        if (r.head) {
                          r.head.extra_len = g;
                        }

                        if (512 & r.flags) {
                          (D[0] = 255 & g),
                            (D[1] = (g >>> 8) & 255),
                            (r.check = a(r.check, D, 2, 0));
                        }

                        v = 0;
                        g = 0;
                      } else {
                        if (r.head) {
                          r.head.extra = null;
                        }
                      }
                      r.mode = 6;
                    }
                    case 6: {
                      if (
                        1024 & r.flags &&
                        (p < (k = r.length) && (k = p),
                        k &&
                          (r.head &&
                            ((R = r.head.extra_len - r.length),
                            r.head.extra ||
                              (r.head.extra = new Array(r.head.extra_len)),
                            n.arraySet(r.head.extra, l, f, k, R)),
                          512 & r.flags && (r.check = a(r.check, l, k, f)),
                          (p -= k),
                          (f += k),
                          (r.length -= k)),
                        r.length)
                      ) {
                        break e;
                      }
                      r.length = 0;
                      r.mode = 7;
                    }
                    case 7: {
                      if (2048 & r.flags) {
                        if (p === 0) {
                          break e;
                        }
                        for (
                          k = 0;
                          (R = l[f + k++]),
                            r.head &&
                              R &&
                              r.length < 65536 &&
                              (r.head.name += String.fromCharCode(R)),
                            R && k < p;

                        ) {}

                        if (512 & r.flags) {
                          r.check = a(r.check, l, k, f);
                        }

                        p -= k;
                        f += k;

                        if (R) {
                          break e;
                        }
                      } else {
                        if (r.head) {
                          r.head.name = null;
                        }
                      }
                      r.length = 0;
                      r.mode = 8;
                    }
                    case 8: {
                      if (4096 & r.flags) {
                        if (p === 0) {
                          break e;
                        }
                        for (
                          k = 0;
                          (R = l[f + k++]),
                            r.head &&
                              R &&
                              r.length < 65536 &&
                              (r.head.comment += String.fromCharCode(R)),
                            R && k < p;

                        ) {}

                        if (512 & r.flags) {
                          r.check = a(r.check, l, k, f);
                        }

                        p -= k;
                        f += k;

                        if (R) {
                          break e;
                        }
                      } else {
                        if (r.head) {
                          r.head.comment = null;
                        }
                      }
                      r.mode = 9;
                    }
                    case 9: {
                      if (512 & r.flags) {
                        while (v < 16) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g += l[f++] << v;
                          v += 8;
                        }

                        if (g !== (65535 & r.check)) {
                          e.msg = "header crc mismatch";
                          r.mode = 30;
                          break;
                        }
                        v = 0;
                        g = 0;
                      }

                      if (r.head) {
                        (r.head.hcrc = (r.flags >> 9) & 1),
                          (r.head.done = true);
                      }

                      e.adler = 0;
                      r.check = 0;
                      r.mode = 12;
                      break;
                    }
                    case 10: {
                      while (v < 32) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }

                      e.adler = r.check = c(g);
                      v = 0;
                      g = 0;
                      r.mode = 11;
                    }
                    case 11: {
                      if (r.havedict === 0) {
                        e.next_out = d;
                        e.avail_out = m;
                        e.next_in = f;
                        e.avail_in = p;
                        r.hold = g;
                        r.bits = v;
                        return 2;
                      }
                      e.adler = 1;
                      r.check = 1;
                      r.mode = 12;
                    }
                    case 12: {
                      if (t === 5 || t === 6) {
                        break e;
                      }
                    }
                    case 13: {
                      if (r.last) {
                        g >>>= 7 & v;
                        v -= 7 & v;
                        r.mode = 27;
                        break;
                      }

                      while (v < 3) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }

                      r.last = 1 & g;
                      v -= 1;

                      switch (3 & (g >>>= 1)) {
                        case 0: {
                          r.mode = 14;
                          break;
                        }
                        case 1: {
                          b(r);
                          r.mode = 20;

                          if (t !== 6) {
                            break;
                          }

                          g >>>= 2;
                          v -= 2;
                          break e;
                        }
                        case 2: {
                          r.mode = 17;
                          break;
                        }
                        case 3: {
                          e.msg = "invalid block type";
                          r.mode = 30;
                        }
                      }

                      g >>>= 2;
                      v -= 2;
                      break;
                    }
                    case 14: {
                      g >>>= 7 & v;

                      for (v -= 7 & v; v < 32; ) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }

                      if ((65535 & g) != ((g >>> 16) ^ 65535)) {
                        e.msg = "invalid stored block lengths";
                        r.mode = 30;
                        break;
                      }
                      r.length = 65535 & g;
                      v = 0;
                      g = 0;
                      r.mode = 15;

                      if (t === 6) {
                        break e;
                      }
                    }
                    case 15: {
                      r.mode = 16;
                    }
                    case 16: {
                      if ((k = r.length)) {
                        if (p < k) {
                          k = p;
                        }

                        if (m < k) {
                          k = m;
                        }

                        if (k === 0) {
                          break e;
                        }

                        n.arraySet(h, l, f, k, d);
                        p -= k;
                        f += k;
                        m -= k;
                        d += k;
                        r.length -= k;
                        break;
                      }
                      r.mode = 12;
                      break;
                    }
                    case 17: {
                      while (v < 14) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }

                      r.nlen = 257 + (31 & g);
                      g >>>= 5;
                      v -= 5;
                      r.ndist = 1 + (31 & g);
                      g >>>= 5;
                      v -= 5;
                      r.ncode = 4 + (15 & g);
                      g >>>= 4;
                      v -= 4;

                      if (r.nlen > 286 || r.ndist > 30) {
                        e.msg = "too many length or distance symbols";
                        r.mode = 30;
                        break;
                      }

                      r.have = 0;
                      r.mode = 18;
                    }
                    case 18: {
                      while (r.have < r.ncode) {
                        while (v < 3) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g += l[f++] << v;
                          v += 8;
                        }

                        r.lens[L[r.have++]] = 7 & g;
                        g >>>= 3;
                        v -= 3;
                      }

                      while (r.have < 19) {
                        r.lens[L[r.have++]] = 0;
                      }

                      r.lencode = r.lendyn;
                      r.lenbits = 7;
                      B = { bits: r.lenbits };
                      I = o(0, r.lens, 0, 19, r.lencode, 0, r.work, B);
                      r.lenbits = B.bits;

                      if (I) {
                        e.msg = "invalid code lengths set";
                        r.mode = 30;
                        break;
                      }

                      r.have = 0;
                      r.mode = 19;
                    }
                    case 19: {
                      while (r.have < r.nlen + r.ndist) {
                        while (
                          ((O =
                            ((N = r.lencode[g & ((1 << r.lenbits) - 1)]) >>>
                              16) &
                            255),
                          (C = 65535 & N),
                          !((E = N >>> 24) <= v))
                        ) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g += l[f++] << v;
                          v += 8;
                        }

                        if (C < 16) {
                          g >>>= E;
                          v -= E;
                          r.lens[r.have++] = C;
                        } else {
                          if (C === 16) {
                            for (F = E + 2; v < F; ) {
                              if (p === 0) {
                                break e;
                              }
                              p--;
                              g += l[f++] << v;
                              v += 8;
                            }
                            g >>>= E;
                            v -= E;

                            if (r.have === 0) {
                              e.msg = "invalid bit length repeat";
                              r.mode = 30;
                              break;
                            }

                            R = r.lens[r.have - 1];
                            k = 3 + (3 & g);
                            g >>>= 2;
                            v -= 2;
                          } else if (C === 17) {
                            for (F = E + 3; v < F; ) {
                              if (p === 0) {
                                break e;
                              }
                              p--;
                              g += l[f++] << v;
                              v += 8;
                            }
                            v -= E;
                            R = 0;
                            k = 3 + (7 & (g >>>= E));
                            g >>>= 3;
                            v -= 3;
                          } else {
                            for (F = E + 7; v < F; ) {
                              if (p === 0) {
                                break e;
                              }
                              p--;
                              g += l[f++] << v;
                              v += 8;
                            }
                            v -= E;
                            R = 0;
                            k = 11 + (127 & (g >>>= E));
                            g >>>= 7;
                            v -= 7;
                          }
                          if (r.have + k > r.nlen + r.ndist) {
                            e.msg = "invalid bit length repeat";
                            r.mode = 30;
                            break;
                          }

                          while (k--) {
                            r.lens[r.have++] = R;
                          }
                        }
                      }

                      if (r.mode === 30) {
                        break;
                      }
                      if (r.lens[256] === 0) {
                        e.msg = "invalid code -- missing end-of-block";
                        r.mode = 30;
                        break;
                      }
                      r.lenbits = 9;
                      B = { bits: r.lenbits };

                      I = o(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, B);

                      r.lenbits = B.bits;

                      if (I) {
                        e.msg = "invalid literal/lengths set";
                        r.mode = 30;
                        break;
                      }

                      r.distbits = 6;
                      r.distcode = r.distdyn;
                      B = { bits: r.distbits };

                      I = o(
                        2,
                        r.lens,
                        r.nlen,
                        r.ndist,
                        r.distcode,
                        0,
                        r.work,
                        B
                      );

                      r.distbits = B.bits;

                      if (I) {
                        e.msg = "invalid distances set";
                        r.mode = 30;
                        break;
                      }

                      r.mode = 20;

                      if (t === 6) {
                        break e;
                      }
                    }
                    case 20: {
                      r.mode = 21;
                    }
                    case 21: {
                      if (p >= 6 && m >= 258) {
                        e.next_out = d;
                        e.avail_out = m;
                        e.next_in = f;
                        e.avail_in = p;
                        r.hold = g;
                        r.bits = v;
                        s(e, w);
                        d = e.next_out;
                        h = e.output;
                        m = e.avail_out;
                        f = e.next_in;
                        l = e.input;
                        p = e.avail_in;
                        g = r.hold;
                        v = r.bits;

                        if (r.mode === 12) {
                          r.back = -1;
                        }

                        break;
                      }
                      for (
                        r.back = 0;
                        (O =
                          ((N = r.lencode[g & ((1 << r.lenbits) - 1)]) >>> 16) &
                          255),
                          (C = 65535 & N),
                          !((E = N >>> 24) <= v);

                      ) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }
                      if (O && 0 == (240 & O)) {
                        A = E;
                        T = O;

                        for (
                          z = C;
                          (O =
                            ((N =
                              r.lencode[
                                z + ((g & ((1 << (A + T)) - 1)) >> A)
                              ]) >>>
                              16) &
                            255),
                            (C = 65535 & N),
                            !(A + (E = N >>> 24) <= v);

                        ) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g += l[f++] << v;
                          v += 8;
                        }

                        g >>>= A;
                        v -= A;
                        r.back += A;
                      }
                      g >>>= E;
                      v -= E;
                      r.back += E;
                      r.length = C;

                      if (O === 0) {
                        r.mode = 26;
                        break;
                      }

                      if (32 & O) {
                        r.back = -1;
                        r.mode = 12;
                        break;
                      }
                      if (64 & O) {
                        e.msg = "invalid literal/length code";
                        r.mode = 30;
                        break;
                      }
                      r.extra = 15 & O;
                      r.mode = 22;
                    }
                    case 22: {
                      if (r.extra) {
                        for (F = r.extra; v < F; ) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g += l[f++] << v;
                          v += 8;
                        }
                        r.length += g & ((1 << r.extra) - 1);
                        g >>>= r.extra;
                        v -= r.extra;
                        r.back += r.extra;
                      }
                      r.was = r.length;
                      r.mode = 23;
                    }
                    case 23: {
                      while (
                        ((O =
                          ((N = r.distcode[g & ((1 << r.distbits) - 1)]) >>>
                            16) &
                          255),
                        (C = 65535 & N),
                        !((E = N >>> 24) <= v))
                      ) {
                        if (p === 0) {
                          break e;
                        }
                        p--;
                        g += l[f++] << v;
                        v += 8;
                      }

                      if (0 == (240 & O)) {
                        A = E;
                        T = O;

                        for (
                          z = C;
                          (O =
                            ((N =
                              r.distcode[
                                z + ((g & ((1 << (A + T)) - 1)) >> A)
                              ]) >>>
                              16) &
                            255),
                            (C = 65535 & N),
                            !(A + (E = N >>> 24) <= v);

                        ) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g += l[f++] << v;
                          v += 8;
                        }

                        g >>>= A;
                        v -= A;
                        r.back += A;
                      }
                      g >>>= E;
                      v -= E;
                      r.back += E;

                      if (64 & O) {
                        e.msg = "invalid distance code";
                        r.mode = 30;
                        break;
                      }

                      r.offset = C;
                      r.extra = 15 & O;
                      r.mode = 24;
                    }
                    case 24: {
                      if (r.extra) {
                        for (F = r.extra; v < F; ) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g += l[f++] << v;
                          v += 8;
                        }
                        r.offset += g & ((1 << r.extra) - 1);
                        g >>>= r.extra;
                        v -= r.extra;
                        r.back += r.extra;
                      }
                      if (r.offset > r.dmax) {
                        e.msg = "invalid distance too far back";
                        r.mode = 30;
                        break;
                      }
                      r.mode = 25;
                    }
                    case 25: {
                      if (m === 0) {
                        break e;
                      }
                      k = w - m;

                      if (r.offset > k) {
                        if ((k = r.offset - k) > r.whave && r.sane) {
                          e.msg = "invalid distance too far back";
                          r.mode = 30;
                          break;
                        }

                        x =
                          k > r.wnext
                            ? ((k -= r.wnext), r.wsize - k)
                            : r.wnext - k;

                        if (k > r.length) {
                          k = r.length;
                        }

                        S = r.window;
                      } else {
                        S = h;
                        x = d - r.offset;
                        k = r.length;
                      }

                      if (m < k) {
                        k = m;
                      }

                      m -= k;

                      for (r.length -= k; (h[d++] = S[x++]), --k; ) {}

                      if (r.length === 0) {
                        r.mode = 21;
                      }

                      break;
                    }
                    case 26: {
                      if (m === 0) {
                        break e;
                      }
                      h[d++] = r.length;
                      m--;
                      r.mode = 21;
                      break;
                    }
                    case 27: {
                      if (r.wrap) {
                        while (v < 32) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g |= l[f++] << v;
                          v += 8;
                        }

                        w -= m;
                        e.total_out += w;
                        r.total += w;

                        if (w) {
                          e.adler = r.check = r.flags
                            ? a(r.check, h, w, d - w)
                            : i(r.check, h, w, d - w);
                        }

                        w = m;

                        if ((r.flags ? g : c(g)) !== r.check) {
                          e.msg = "incorrect data check";
                          r.mode = 30;
                          break;
                        }

                        v = 0;
                        g = 0;
                      }
                      r.mode = 28;
                    }
                    case 28: {
                      if (r.wrap && r.flags) {
                        while (v < 32) {
                          if (p === 0) {
                            break e;
                          }
                          p--;
                          g += l[f++] << v;
                          v += 8;
                        }

                        if (g !== (4294967295 & r.total)) {
                          e.msg = "incorrect length check";
                          r.mode = 30;
                          break;
                        }
                        v = 0;
                        g = 0;
                      }
                      r.mode = 29;
                    }
                    case 29: {
                      I = 1;
                      break e;
                    }
                    case 30: {
                      I = -3;
                      break e;
                    }
                    case 31: {
                      return -4;
                    }
                    default: {
                      return u;
                    }
                  }
                }
                e.next_out = d;
                e.avail_out = m;
                e.next_in = f;
                e.avail_in = p;
                r.hold = g;
                r.bits = v;

                return (r.wsize ||
                  (w !== e.avail_out &&
                    r.mode < 30 &&
                    (r.mode < 27 || t !== 4))) &&
                  y(e, e.output, e.next_out, w - e.avail_out)
                  ? ((r.mode = 31), -4)
                  : ((_ -= e.avail_in),
                    (w -= e.avail_out),
                    (e.total_in += _),
                    (e.total_out += w),
                    (r.total += w),
                    r.wrap &&
                      w &&
                      (e.adler = r.check =
                        r.flags
                          ? a(r.check, h, w, e.next_out - w)
                          : i(r.check, h, w, e.next_out - w)),
                    (e.data_type =
                      r.bits +
                      (r.last ? 64 : 0) +
                      (r.mode === 12 ? 128 : 0) +
                      (r.mode === 20 || r.mode === 15 ? 256 : 0)),
                    ((_ == 0 && w === 0) || t === 4) && I === 0 && (I = -5),
                    I);
              };

              r.inflateEnd = (e) => {
                if (!e || !e.state) {
                  return u;
                }
                const e_state = e.state;

                if (e_state.window) {
                  e_state.window = null;
                }

                e.state = null;
                return 0;
              };

              r.inflateGetHeader = (e, t) => {
                let r;
                return e && e.state
                  ? 0 == (2 & (r = e.state).wrap)
                    ? u
                    : (((r.head = t).done = false), 0)
                  : u;
              };

              r.inflateSetDictionary = (e, t) => {
                let r;
                const t_length = t.length;
                return e && e.state
                  ? (r = e.state).wrap !== 0 && r.mode !== 11
                    ? u
                    : r.mode === 11 && i(1, t, t_length, 0) !== r.check
                    ? -3
                    : y(e, t, t_length, t_length)
                    ? ((r.mode = 31), -4)
                    : ((r.havedict = 1), 0)
                  : u;
              };

              r.inflateInfo = "pako inflate (from Nodeca project)";
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./inffast": 48,
              "./inftrees": 50,
            },
          ],
          50: [
            (e, t, r) => {
              const n = e("../utils/common");
              const i = [
                3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
                51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
              ];
              const a = [
                16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
                19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
              ];
              const s = [
                1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
                385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
                16385, 24577, 0, 0,
              ];
              const o = [
                16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
                23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
              ];
              t.exports = (e, t, r, u, c, l, h, f) => {
                let d;
                let p;
                let m;
                let g;
                let v;
                let b;
                let y;
                let _;
                let w;
                const f_bits = f.bits;
                let x = 0;
                let S = 0;
                let E = 0;
                let O = 0;
                let C = 0;
                let A = 0;
                let T = 0;
                let z = 0;
                let R = 0;
                let I = 0;
                let B = null;
                let F = 0;
                const N = new n.Buf16(16);
                const D = new n.Buf16(16);
                let L = null;
                let P = 0;
                for (x = 0; x <= 15; x++) {
                  N[x] = 0;
                }
                for (S = 0; S < u; S++) {
                  N[t[r + S]]++;
                }
                C = f_bits;

                for (O = 15; O >= 1 && N[O] === 0; O--) {}

                if (O < C) {
                  C = O;
                }

                if (O === 0) {
                  c[l++] = 20971520;
                  c[l++] = 20971520;
                  f.bits = 1;
                  return 0;
                }

                for (E = 1; E < O && N[E] === 0; E++) {}

                if (C < E) {
                  C = E;
                }

                for (x = z = 1; x <= 15; x++) {
                  z <<= 1;

                  if ((z -= N[x]) < 0) {
                    return -1;
                  }
                }

                if (z > 0 && (e === 0 || O !== 1)) {
                  return -1;
                }
                D[1] = 0;

                for (x = 1; x < 15; x++) {
                  D[x + 1] = D[x] + N[x];
                }

                for (S = 0; S < u; S++) {
                  if (t[r + S] !== 0) {
                    h[D[t[r + S]]++] = S;
                  }
                }

                b =
                  e === 0
                    ? ((B = L = h), 19)
                    : e === 1
                    ? ((B = i), (F -= 257), (L = a), (P -= 257), 256)
                    : ((B = s), (L = o), -1);

                x = E;
                v = l;
                T = 0;
                S = 0;
                I = 0;
                m = -1;
                g = (R = 1 << (A = C)) - 1;

                if ((e === 1 && R > 852) || (e === 2 && R > 592)) {
                  return 1;
                }

                while (true) {
                  y = x - T;

                  w =
                    h[S] < b
                      ? ((_ = 0), h[S])
                      : h[S] > b
                      ? ((_ = L[P + h[S]]), B[F + h[S]])
                      : ((_ = 96), 0);

                  d = 1 << (x - T);

                  for (
                    E = p = 1 << A;
                    (c[v + (I >> T) + (p -= d)] =
                      (y << 24) | (_ << 16) | w | 0),
                      p !== 0;

                  ) {}

                  for (d = 1 << (x - 1); I & d; ) {
                    d >>= 1;
                  }

                  if (d !== 0) {
                    (I &= d - 1), (I += d);
                  } else {
                    I = 0;
                  }

                  S++;

                  if (0 == --N[x]) {
                    if (x === O) {
                      break;
                    }
                    x = t[r + h[S]];
                  }

                  if (C < x && (I & g) !== m) {
                    if (T === 0) {
                      T = C;
                    }

                    v += E;

                    for (
                      z = 1 << (A = x - T);
                      A + T < O && !((z -= N[A + T]) <= 0);

                    ) {
                      A++;
                      z <<= 1;
                    }

                    R += 1 << A;

                    if ((e === 1 && R > 852) || (e === 2 && R > 592)) {
                      return 1;
                    }

                    c[(m = I & g)] = (C << 24) | (A << 16) | (v - l) | 0;
                  }
                }

                if (I !== 0) {
                  c[v + I] = ((x - T) << 24) | (64 << 16) | 0;
                }

                f.bits = C;
                return 0;
              };
            },
            { "../utils/common": 41 },
          ],
          51: [
            (e, t, r) => {
              t.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version",
              };
            },
            {},
          ],
          52: [
            (e, t, r) => {
              const n = e("../utils/common");
              function i(e) {
                for (let t = e.length; 0 <= --t; ) {
                  e[t] = 0;
                }
              }
              const a = 256;
              const s = 286;
              const o = 30;
              const u = 15;
              const c = [
                0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                4, 4, 4, 5, 5, 5, 5, 0,
              ];
              const l = [
                0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                9, 10, 10, 11, 11, 12, 12, 13, 13,
              ];
              const h = [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
              ];
              const f = [
                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                15,
              ];
              const d = new Array(576);
              i(d);
              const p = new Array(60);
              i(p);
              const m = new Array(512);
              i(m);
              const g = new Array(256);
              i(g);
              const v = new Array(29);
              i(v);
              let b;
              let y;
              let _;
              const w = new Array(o);
              function k(e, t, r, n, i) {
                this.static_tree = e;
                this.extra_bits = t;
                this.extra_base = r;
                this.elems = n;
                this.max_length = i;
                this.has_stree = e && e.length;
              }
              function x(e, t) {
                this.dyn_tree = e;
                this.max_code = 0;
                this.stat_desc = t;
              }
              function S(e) {
                return e < 256 ? m[e] : m[256 + (e >>> 7)];
              }
              function E(e, t) {
                e.pending_buf[e.pending++] = 255 & t;
                e.pending_buf[e.pending++] = (t >>> 8) & 255;
              }
              function O(e, t, r) {
                if (e.bi_valid > 16 - r) {
                  (e.bi_buf |= (t << e.bi_valid) & 65535),
                    E(e, e.bi_buf),
                    (e.bi_buf = t >> (16 - e.bi_valid)),
                    (e.bi_valid += r - 16);
                } else {
                  (e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += r);
                }
              }
              function C(e, t, r) {
                O(e, r[2 * t], r[2 * t + 1]);
              }
              function A(e, t) {
                for (
                  var r = 0;
                  (r |= 1 & e), (e >>>= 1), (r <<= 1), 0 < --t;

                ) {}
                return r >>> 1;
              }
              function T(e, t, r) {
                let n;
                let i;
                const a = new Array(16);
                let s = 0;
                for (n = 1; n <= u; n++) {
                  a[n] = s = (s + r[n - 1]) << 1;
                }
                for (i = 0; i <= t; i++) {
                  const o = e[2 * i + 1];

                  if (o !== 0) {
                    e[2 * i] = A(a[o]++, o);
                  }
                }
              }
              function z(e) {
                let t;
                for (t = 0; t < s; t++) {
                  e.dyn_ltree[2 * t] = 0;
                }
                for (t = 0; t < o; t++) {
                  e.dyn_dtree[2 * t] = 0;
                }
                for (t = 0; t < 19; t++) {
                  e.bl_tree[2 * t] = 0;
                }
                e.dyn_ltree[512] = 1;
                e.opt_len = 0;
                e.static_len = 0;
                e.last_lit = 0;
                e.matches = 0;
              }
              function R(e) {
                if (e.bi_valid > 8) {
                  E(e, e.bi_buf);
                } else if (e.bi_valid > 0) {
                  e.pending_buf[e.pending++] = e.bi_buf;
                }

                e.bi_buf = 0;
                e.bi_valid = 0;
              }
              function I(e, t, r, n) {
                const i = 2 * t;
                const a = 2 * r;
                return e[i] < e[a] || (e[i] === e[a] && n[t] <= n[r]);
              }
              function B(e, t, r) {
                for (
                  var n = e.heap[r], i = r << 1;
                  i <= e.heap_len &&
                  (i < e.heap_len &&
                    I(t, e.heap[i + 1], e.heap[i], e.depth) &&
                    i++,
                  !I(t, n, e.heap[i], e.depth));

                ) {
                  e.heap[r] = e.heap[i];
                  r = i;
                  i <<= 1;
                }
                e.heap[r] = n;
              }
              function F(e, t, r) {
                let n;
                let i;
                let s;
                let o;
                let u = 0;
                if (e.last_lit !== 0) {
                  while (
                    ((n =
                      (e.pending_buf[e.d_buf + 2 * u] << 8) |
                      e.pending_buf[e.d_buf + 2 * u + 1]),
                    (i = e.pending_buf[e.l_buf + u]),
                    u++,
                    n === 0
                      ? C(e, i, t)
                      : (C(e, (s = g[i]) + a + 1, t),
                        0 !== (o = c[s]) && O(e, (i -= v[s]), o),
                        C(e, (s = S(--n)), r),
                        0 !== (o = l[s]) && O(e, (n -= w[s]), o)),
                    u < e.last_lit)
                  ) {}
                }
                C(e, 256, t);
              }
              function N(e, t) {
                let r;
                let n;
                let i;
                const t_dyn_tree = t.dyn_tree;
                const s = t.stat_desc.static_tree;
                const o = t.stat_desc.has_stree;
                const c = t.stat_desc.elems;
                let l = -1;
                e.heap_len = 0;
                e.heap_max = 573;

                for (r = 0; r < c; r++) {
                  if (t_dyn_tree[2 * r] !== 0) {
                    (e.heap[++e.heap_len] = l = r), (e.depth[r] = 0);
                  } else {
                    t_dyn_tree[2 * r + 1] = 0;
                  }
                }

                while (e.heap_len < 2) {
                  t_dyn_tree[
                    2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)
                  ] = 1;
                  e.depth[i] = 0;
                  e.opt_len--;

                  if (o) {
                    e.static_len -= s[2 * i + 1];
                  }
                }

                t.max_code = l;

                for (r = e.heap_len >> 1; r >= 1; r--) {
                  B(e, t_dyn_tree, r);
                }

                for (
                  i = c;
                  (r = e.heap[1]),
                    (e.heap[1] = e.heap[e.heap_len--]),
                    B(e, t_dyn_tree, 1),
                    (n = e.heap[1]),
                    (e.heap[--e.heap_max] = r),
                    (e.heap[--e.heap_max] = n),
                    (t_dyn_tree[2 * i] = t_dyn_tree[2 * r] + t_dyn_tree[2 * n]),
                    (e.depth[i] =
                      (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1),
                    (t_dyn_tree[2 * r + 1] = t_dyn_tree[2 * n + 1] = i),
                    (e.heap[1] = i++),
                    B(e, t_dyn_tree, 1),
                    e.heap_len >= 2;

                ) {}
                e.heap[--e.heap_max] = e.heap[1];

                ((e, t) => {
                  let r;
                  let n;
                  let i;
                  let a;

                  const { dyn_tree, max_code } = t;

                  const h = t.stat_desc.static_tree;
                  const f = t.stat_desc.has_stree;
                  const d = t.stat_desc.extra_bits;
                  const p = t.stat_desc.extra_base;
                  const m = t.stat_desc.max_length;
                  let g = 0;
                  for (a = 0; a <= u; a++) {
                    e.bl_count[a] = 0;
                  }
                  dyn_tree[2 * e.heap[e.heap_max] + 1] = 0;

                  for (r = e.heap_max + 1; r < 573; r++) {
                    if (
                      m <
                      (a =
                        dyn_tree[2 * dyn_tree[2 * (n = e.heap[r]) + 1] + 1] + 1)
                    ) {
                      (a = m), g++;
                    }

                    dyn_tree[2 * n + 1] = a;

                    if (max_code >= n) {
                      e.bl_count[a]++,
                        (s = 0),
                        p <= n && (s = d[n - p]),
                        (o = dyn_tree[2 * n]),
                        (e.opt_len += o * (a + s)),
                        f && (e.static_len += o * (h[2 * n + 1] + s));
                    }
                  }

                  if (g !== 0) {
                    do {
                      for (a = m - 1; e.bl_count[a] === 0; ) {
                        a--;
                      }
                      e.bl_count[a]--;
                      e.bl_count[a + 1] += 2;
                      e.bl_count[m]--;
                      g -= 2;
                    } while (g > 0);
                    for (a = m; a !== 0; a--) {
                      for (n = e.bl_count[a]; n !== 0; ) {
                        if (max_code >= (i = e.heap[--r])) {
                          dyn_tree[2 * i + 1] !== a &&
                            ((e.opt_len +=
                              (a - dyn_tree[2 * i + 1]) * dyn_tree[2 * i]),
                            (dyn_tree[2 * i + 1] = a)),
                            n--;
                        }
                      }
                    }
                  }
                })(e, t);

                T(t_dyn_tree, l, e.bl_count);
              }
              function D(e, t, r) {
                let n;
                let i;
                let a = -1;
                let [, s] = t;
                let o = 0;
                let u = 7;
                let c = 4;

                if (s === 0) {
                  (u = 138), (c = 3);
                }

                t[2 * (r + 1) + 1] = 65535;

                for (n = 0; n <= r; n++) {
                  i = s;
                  s = t[2 * (n + 1) + 1];

                  if (++o >= u || i !== s) {
                    o < c
                      ? (e.bl_tree[2 * i] += o)
                      : i !== 0
                      ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[32]++)
                      : o <= 10
                      ? e.bl_tree[34]++
                      : e.bl_tree[36]++,
                      (a = i),
                      (c =
                        (o = 0) === s
                          ? ((u = 138), 3)
                          : i === s
                          ? ((u = 6), 3)
                          : ((u = 7), 4));
                  }
                }
              }
              function L(e, t, r) {
                let n;
                let i;
                let a = -1;
                let [, s] = t;
                let o = 0;
                let u = 7;
                let c = 4;

                if (s === 0) {
                  (u = 138), (c = 3);
                }

                for (n = 0; n <= r; n++) {
                  i = s;
                  s = t[2 * (n + 1) + 1];

                  if (!(++o < u && i === s)) {
                    if (o < c) {
                      while ((C(e, i, e.bl_tree), 0 != --o)) {}
                    } else {
                      if (i !== 0) {
                        i !== a && (C(e, i, e.bl_tree), o--),
                          C(e, 16, e.bl_tree),
                          O(e, o - 3, 2);
                      } else if (o <= 10) {
                        C(e, 17, e.bl_tree), O(e, o - 3, 3);
                      } else {
                        C(e, 18, e.bl_tree), O(e, o - 11, 7);
                      }
                    }
                    a = i;

                    c =
                      (o = 0) === s
                        ? ((u = 138), 3)
                        : i === s
                        ? ((u = 6), 3)
                        : ((u = 7), 4);
                  }
                }
              }
              i(w);
              function U(e, t, r, i) {
                O(e, 0 + (i ? 1 : 0), 3);

                ((e, t, r, i) => {
                  R(e);
                  E(e, r);
                  E(e, ~r);
                  n.arraySet(e.pending_buf, e.window, t, r, e.pending);
                  e.pending += r;
                })(e, t, r);
              }

              r._tr_init = (e) => {
                if (!P) {
                  (() => {
                    let e;
                    let t;
                    let r;
                    let n;
                    let i;
                    const a = new Array(16);
                    for (n = r = 0; n < 28; n++) {
                      v[n] = r;

                      for (e = 0; e < 1 << c[n]; e++) {
                        g[r++] = n;
                      }
                    }
                    g[r - 1] = n;

                    for (n = i = 0; n < 16; n++) {
                      w[n] = i;

                      for (e = 0; e < 1 << l[n]; e++) {
                        m[i++] = n;
                      }
                    }

                    for (i >>= 7; n < o; n++) {
                      w[n] = i << 7;

                      for (e = 0; e < 1 << (l[n] - 7); e++) {
                        m[256 + i++] = n;
                      }
                    }
                    for (t = 0; t <= u; t++) {
                      a[t] = 0;
                    }
                    for (e = 0; e <= 143; ) {
                      d[2 * e + 1] = 8;
                      e++;
                      a[8]++;
                    }

                    while (e <= 255) {
                      d[2 * e + 1] = 9;
                      e++;
                      a[9]++;
                    }

                    while (e <= 279) {
                      d[2 * e + 1] = 7;
                      e++;
                      a[7]++;
                    }

                    while (e <= 287) {
                      d[2 * e + 1] = 8;
                      e++;
                      a[8]++;
                    }

                    T(d, 287, a);

                    for (e = 0; e < o; e++) {
                      p[2 * e + 1] = 5;
                      p[2 * e] = A(e, 5);
                    }

                    b = new k(d, c, 257, s, u);
                    y = new k(p, l, 0, o, u);
                    _ = new k(new Array(0), h, 0, 19, 7);
                  })(),
                    (P = true);
                }

                e.l_desc = new x(e.dyn_ltree, b);
                e.d_desc = new x(e.dyn_dtree, y);
                e.bl_desc = new x(e.bl_tree, _);
                e.bi_buf = 0;
                e.bi_valid = 0;
                z(e);
              };

              r._tr_stored_block = U;

              r._tr_flush_block = (e, t, r, n) => {
                let i;
                let s;
                let o = 0;

                if (e.level > 0) {
                  e.strm.data_type === 2 &&
                    (e.strm.data_type = ((e) => {
                      let t;
                      let r = 4093624447;
                      for (t = 0; t <= 31; t++, r >>>= 1) {
                        if (1 & r && e.dyn_ltree[2 * t] !== 0) {
                          return 0;
                        }
                      }
                      if (
                        e.dyn_ltree[18] !== 0 ||
                        e.dyn_ltree[20] !== 0 ||
                        e.dyn_ltree[26] !== 0
                      ) {
                        return 1;
                      }
                      for (t = 32; t < a; t++) {
                        if (e.dyn_ltree[2 * t] !== 0) {
                          return 1;
                        }
                      }
                      return 0;
                    })(e)),
                    N(e, e.l_desc),
                    N(e, e.d_desc),
                    (o = ((e) => {
                      let t;
                      D(e, e.dyn_ltree, e.l_desc.max_code);
                      D(e, e.dyn_dtree, e.d_desc.max_code);
                      N(e, e.bl_desc);

                      for (
                        t = 18;
                        t >= 3 && e.bl_tree[2 * f[t] + 1] === 0;
                        t--
                      ) {}

                      e.opt_len += 3 * (t + 1) + 5 + 5 + 4;
                      return t;
                    })(e)),
                    (i = (e.opt_len + 3 + 7) >>> 3),
                    (s = (e.static_len + 3 + 7) >>> 3) <= i && (i = s);
                } else {
                  i = s = r + 5;
                }

                if (r + 4 <= i && -1 !== t) {
                  U(e, t, r, n);
                } else if (e.strategy === 4 || s === i) {
                  O(e, 2 + (n ? 1 : 0), 3), F(e, d, p);
                } else {
                  O(e, 4 + (n ? 1 : 0), 3),
                    ((e, t, r, n) => {
                      let i;
                      O(e, t - 257, 5);
                      O(e, r - 1, 5);
                      O(e, n - 4, 4);

                      for (i = 0; i < n; i++) {
                        O(e, e.bl_tree[2 * f[i] + 1], 3);
                      }

                      L(e, e.dyn_ltree, t - 1);
                      L(e, e.dyn_dtree, r - 1);
                    })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1),
                    F(e, e.dyn_ltree, e.dyn_dtree);
                }

                z(e);

                if (n) {
                  R(e);
                }
              };

              r._tr_tally = (e, t, r) => {
                e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255;
                e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t;
                e.pending_buf[e.l_buf + e.last_lit] = 255 & r;
                e.last_lit++;

                if (t === 0) {
                  e.dyn_ltree[2 * r]++;
                } else {
                  e.matches++,
                    t--,
                    e.dyn_ltree[2 * (g[r] + a + 1)]++,
                    e.dyn_dtree[2 * S(t)]++;
                }

                return e.last_lit === e.lit_bufsize - 1;
              };

              r._tr_align = (e) => {
                O(e, 2, 3);
                C(e, 256, d);

                ((e) => {
                  if (e.bi_valid === 16) {
                    E(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0);
                  } else if (e.bi_valid >= 8) {
                    (e.pending_buf[e.pending++] = 255 & e.bi_buf),
                      (e.bi_buf >>= 8),
                      (e.bi_valid -= 8);
                  }
                })(e);
              };
            },
            { "../utils/common": 41 },
          ],
          53: [
            (e, t, r) => {
              t.exports = function () {
                this.input = null;
                this.next_in = 0;
                this.avail_in = 0;
                this.total_in = 0;
                this.output = null;
                this.next_out = 0;
                this.avail_out = 0;
                this.total_out = 0;
                this.msg = "";
                this.state = null;
                this.data_type = 2;
                this.adler = 0;
              };
            },
            {},
          ],
          54: [
            function (e, t, n) {
              (function (e) {
                !((e, t) => {
                  if (!e.setImmediate) {
                    let r;
                    let n;
                    let i;
                    var a;
                    let s = 1;
                    var o = {};
                    var u = false;
                    const e_document = e.document;
                    let l = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    l = l && l.setTimeout ? l : e;

                    r =
                      Object.prototype.toString.call(e.process) ===
                      "[object process]"
                        ? (e) => {
                            process.nextTick(() => {
                              f(e);
                            });
                          }
                        : (() => {
                            if (e.postMessage && !e.importScripts) {
                              let t = true;
                              const e_onmessage = e.onmessage;

                              e.onmessage = () => {
                                t = false;
                              };

                              e.postMessage("", "*");
                              e.onmessage = e_onmessage;
                              return t;
                            }
                          })()
                        ? ((a = `setImmediate$${Math.random()}$`),
                          e.addEventListener
                            ? e.addEventListener("message", d, false)
                            : e.attachEvent("onmessage", d),
                          (t) => {
                            e.postMessage(a + t, "*");
                          })
                        : e.MessageChannel
                        ? (((i = new MessageChannel()).port1.onmessage = (
                            e
                          ) => {
                            f(e.data);
                          }),
                          (e) => {
                            i.port2.postMessage(e);
                          })
                        : e_document &&
                          "onreadystatechange" in
                            e_document.createElement("script")
                        ? ((n = e_document.documentElement),
                          (e) => {
                            let t = e_document.createElement("script");

                            t.onreadystatechange = () => {
                              f(e);
                              t.onreadystatechange = null;
                              n.removeChild(t);
                              t = null;
                            };

                            n.appendChild(t);
                          })
                        : (e) => {
                            setTimeout(f, 0, e);
                          };

                    l.setImmediate = function (e) {
                      if (typeof e != "function") {
                        e = new Function(`${e}`);
                      }

                      for (
                        var t = new Array(arguments.length - 1), n = 0;
                        n < t.length;
                        n++
                      ) {
                        t[n] = arguments[n + 1];
                      }
                      const i = { callback: e, args: t };
                      o[s] = i;
                      r(s);
                      return s++;
                    };

                    l.clearImmediate = h;
                  }
                  function h(e) {
                    delete o[e];
                  }
                  function f(e) {
                    if (u) {
                      setTimeout(f, 0, e);
                    } else {
                      const o_e = o[e];
                      if (o_e) {
                        u = true;
                        try {
                          !((e) => {
                            const { callback, args } = e;

                            switch (args.length) {
                              case 0: {
                                callback();
                                break;
                              }
                              case 1: {
                                callback(args[0]);
                                break;
                              }
                              case 2: {
                                callback(args[0], args[1]);
                                break;
                              }
                              case 3: {
                                callback(args[0], args[1], args[2]);
                                break;
                              }
                              default: {
                                callback(...args);
                              }
                            }
                          })(o_e);
                        } finally {
                          h(e);
                          u = false;
                        }
                      }
                    }
                  }
                  function d(t) {
                    if (
                      t.source === e &&
                      typeof t.data == "string" &&
                      t.data.indexOf(a) === 0
                    ) {
                      f(+t.data.slice(a.length));
                    }
                  }
                })(
                  typeof self == "undefined"
                    ? e === undefined
                      ? this
                      : e
                    : self
                );
              }).call(
                this,
                r.g !== undefined
                  ? r.g
                  : typeof self != "undefined"
                  ? self
                  : typeof window != "undefined"
                  ? window
                  : {}
              );
            },
            {},
          ],
        },
        {},
        [10]
      )(10);
    },
    473: (e) => {
      class t {
        constructor(e, t) {
          this._elements = new Array(e || 50);
          this._first = 0;
          this._last = 0;
          this._size = 0;
          this._evictedCb = t;
        }

        capacity() {
          return this._elements.length;
        }

        isEmpty() {
          return this.size() === 0;
        }

        isFull() {
          return this.size() === this.capacity();
        }

        peek() {
          if (this.isEmpty()) {
            throw new Error("RingBuffer is empty");
          }
          return this._elements[this._first];
        }

        peekN(e) {
          if (e > this._size) {
            throw new Error("Not enough elements in RingBuffer");
          }
          const t = Math.min(this._first + e, this.capacity());
          const r = this._elements.slice(this._first, t);
          if (t < this.capacity()) {
            return r;
          }
          const n = this._elements.slice(0, e - r.length);
          return r.concat(n);
        }

        deq() {
          const e = this.peek();
          this._size--;
          this._first = (this._first + 1) % this.capacity();
          return e;
        }

        deqN(e) {
          const t = this.peekN(e);
          this._size -= e;
          this._first = (this._first + e) % this.capacity();
          return t;
        }

        enq(e) {
          this._end = (this._first + this.size()) % this.capacity();
          const t = this.isFull();

          if (t && this._evictedCb) {
            this._evictedCb(this._elements[this._end]);
          }

          this._elements[this._end] = e;

          if (t) {
            this._first = (this._first + 1) % this.capacity();
          } else {
            this._size++;
          }

          return this.size();
        }

        size() {
          return this._size;
        }

        static convertNesKey(e) {
          switch (e) {
            case i.Key.up: {
              return n.BUTTON_UP;
            }
            case i.Key.down: {
              return n.BUTTON_DOWN;
            }
            case i.Key.left: {
              return n.BUTTON_LEFT;
            }
            case i.Key.right: {
              return n.BUTTON_RIGHT;
            }
            case i.Key.softLeft: {
              return n.BUTTON_SELECT;
            }
            case i.Key.softRight: {
              return n.BUTTON_START;
            }
            case i.Key.enter:
            case i.Key.num8: {
              return n.BUTTON_A;
            }
            case i.Key.num9: {
              return n.BUTTON_B;
            }
          }
          return null;
        }

        static archiveRoute() {
          const e = this;
          const t = o.FilesReaderFactory.create();
          return {
            name: "archive",
            factory(r) {
              return l.Loading.create(
                (function () {
                  return n(this, undefined, undefined, function () {
                    let e;
                    let r;
                    let n;
                    return i(this, (i) => {
                      switch (i.label) {
                        case 0: {
                          if (!(e = s.OptionsStorage.tryGetArchive())) {
                            throw new Error("Not selected any archive");
                          }
                          return [4, t.readFile(e)];
                        }
                        case 1: {
                          r = i.sent();
                          return [4, new c().loadAsync(r)];
                        }
                        case 2: {
                          n = i.sent();

                          return [
                            2,
                            {
                              items: Object.keys(n.files)
                                .filter((e) => e && !e.endsWith("/"))
                                .map((e) => ({
                                  path: e,
                                  fileName: a.RomFilesUtils.getFileName(e),
                                }))
                                .filter((e) =>
                                  a.RomFilesUtils.isFileSupported(e.fileName)
                                )
                                .map((e) => ({
                                  path: e.path,
                                  fileName: e.fileName,
                                  zip: n.files[e.path],
                                }))
                                .sort((e, t) =>
                                  e.fileName.localeCompare(t.fileName)
                                ),
                              archiveInfo: e,
                            },
                          ];
                        }
                      }
                    });
                  });
                })(),
                (t) => {
                  const s = a.RomFilesUtils.getFileName(t.archiveInfo.path);
                  return l.Menu.create(
                    s,
                    t.items.map((t) =>
                      l.CallableMenuItem.create(
                        "./icons/file.svg",
                        t.fileName,
                        () =>
                          n(e, undefined, undefined, function () {
                            let e;
                            return i(this, (n) => {
                              switch (n.label) {
                                case 0: {
                                  return [4, t.zip.async("binarystring")];
                                }
                                case 1: {
                                  e = n.sent();
                                  (0, u.openEmulatorRoute)(r, e);
                                  return [2];
                                }
                              }
                            });
                          })
                      )
                    )
                  );
                }
              );
            },
          };
        }

        static openArchiveRoute(e, t) {
          s.OptionsStorage.setArchive(t);
          e.open("archive");
        }

        static browseRoute() {
          const e = s.FilesReaderFactory.create();
          return {
            name: "browse",
            factory(t) {
              return c.Loading.create(e.getAllFiles(), (r) =>
                (function (e, t, r) {
                  const s = this;
                  function l(e, s) {
                    return n(this, undefined, undefined, function () {
                      let n;
                      let c;
                      return i(this, (i) => {
                        switch (i.label) {
                          case 0: {
                            return e
                              ? ((0, u.openArchiveRoute)(t, s), [2])
                              : [4, r.readFile(s)];
                          }
                          case 1: {
                            n = i.sent();
                            c = a.RomFilesUtils.bufferToBinaryString(n);
                            (0, o.openEmulatorRoute)(t, c);
                            return [2];
                          }
                        }
                      });
                    });
                  }
                  return c.Menu.create(
                    "Browse",
                    e
                      .map((e) => {
                        const t = a.RomFilesUtils.getFileName(e.path);
                        return {
                          info: e,
                          isArchive: a.RomFilesUtils.isArchiveFile(t),
                          fileName: t,
                        };
                      })
                      .filter((e) =>
                        a.RomFilesUtils.isFileSupported(e.fileName)
                      )
                      .sort((e, t) => e.fileName.localeCompare(t.fileName))
                      .map((e) => {
                        const t = e.isArchive
                          ? "./icons/folder.svg"
                          : "./icons/file.svg";
                        return c.CallableMenuItem.create(t, e.fileName, () =>
                          n(s, undefined, undefined, function () {
                            return i(this, (t) => {
                              switch (t.label) {
                                case 0: {
                                  return [4, l(e.isArchive, e.info)];
                                }
                                case 1: {
                                  t.sent();
                                  return [2];
                                }
                              }
                            });
                          })
                        );
                      })
                  );
                })(r, t, e)
              );
            },
          };
        }

        static choiceRouteFactory(e) {
          return {
            name: e.name,
            factory(t) {
              const r = e.getSelectedIndex();
              return n.Menu.create(
                e.title,
                e.values.map((i, a) => {
                  const s =
                    r === a
                      ? "./icons/radio-checked.svg"
                      : "./icons/radio-unchecked.svg";
                  return n.CallableMenuItem.create(s, i, () => {
                    e.onSelect(a, t);
                  });
                })
              );
            },
          };
        }

        static emulatorRoute() {
          return {
            name: "emulator",
            factory() {
              const e = {
                isSoundEnabled: o.OptionsStorage.isSoundEnabled(),
                skippingFrames: o.OptionsStorage.skippingFrames(),
                isFpsVisible: o.OptionsStorage.isFpsVisible(),
              };
              return h.create(a.KeyboardListener.instance(), e);
            },
          };
        }

        static openEmulatorRoute(e, t) {
          o.OptionsStorage.setRom(t);
          e.open("emulator");
        }

        static optionsRoute() {
          return {
            name: "options",
            factory(e) {
              const t = i.OptionsStorage.isSoundEnabled();
              const r = i.OptionsStorage.skippingFrames();
              const n = i.OptionsStorage.isFpsVisible();
              return a.Menu.create("Options", [
                a.CallableMenuItem.create(
                  "./icons/gear.svg",
                  `Sound: ${t ? "Enabled" : "Disabled"}`,
                  () => {
                    e.open("soundOption");
                  }
                ),
                a.CallableMenuItem.create(
                  "./icons/gear.svg",
                  `Skipping frames: ${r || "Disabled"}`,
                  () => {
                    e.open("skippingFramesOption");
                  }
                ),
                a.CallableMenuItem.create(
                  "./icons/gear.svg",
                  `FPS: ${n ? "Enabled" : "Disabled"}`,
                  () => {
                    e.open("fpsOption");
                  }
                ),
              ]);
            },
          };
        }

        static soundOptionRoute() {
          return (0, n.choiceRouteFactory)({
            name: "soundOption",
            title: "Sound",
            values: ["Enabled", "Disabled (recommended)"],
            getSelectedIndex() {
              return i.OptionsStorage.isSoundEnabled() ? 0 : 1;
            },
            onSelect(e, t) {
              i.OptionsStorage.setIsSoundEnabled(e === 0);
              t.goBack();
            },
          });
        }

        static skippingFramesOptionRoute() {
          const e = [40, 30, 0];
          return (0, n.choiceRouteFactory)({
            name: "skippingFramesOption",
            title: "Skipping frames",
            values: ["40 (recommended)", "30", "Disabled"],
            getSelectedIndex() {
              return e.indexOf(i.OptionsStorage.skippingFrames());
            },
            onSelect(t, r) {
              i.OptionsStorage.setSkippingFrames(e[t]);
              r.goBack();
            },
          });
        }

        static fpsOptionRoute() {
          return (0, n.choiceRouteFactory)({
            name: "fpsOption",
            title: "FPS",
            values: ["Enabled", "Disabled"],
            getSelectedIndex() {
              return i.OptionsStorage.isFpsVisible() ? 0 : 1;
            },
            onSelect(e, t) {
              i.OptionsStorage.setIsFpsVisible(e === 0);
              t.goBack();
            },
          });
        }

        static rootRoute() {
          return {
            name: "root",
            factory(e) {
              const t = [
                n.CallableMenuItem.create(
                  "icons/folder.svg",
                  "Browse my ROMs",
                  () => {
                    e.open("browse");
                  }
                ),
                n.CallableMenuItem.create(
                  "icons/web.svg",
                  "Search ROMs",
                  () => {
                    window.open(
                      "https://www.google.com/search?q=nes+roms+download"
                    );
                  }
                ),
                n.CallableMenuItem.create("icons/gear.svg", "Options", () => {
                  e.open("options");
                }),
                n.CallableMenuItem.create(
                  "icons/star.svg",
                  "More N4NO apps",
                  () => {
                    window.open("http://kaios.n4no.com/");
                  }
                ),
                n.CallableMenuItem.create("icons/back.svg", "Close", () => {
                  window.close();
                }),
              ];

              if (a.OptionsStorage.tryRom()) {
                t.unshift(
                  n.CallableMenuItem.create(
                    "icons/play.svg",
                    "Open last ROM",
                    () => {
                      e.open("emulator");
                    }
                  )
                );
              }

              return n.Menu.create(`NES Emulator ${i.ENV.version}`, t, {
                onLeaveHandler() {
                  window.close();
                },
              });
            },
          };
        }

        static readFile(e) {
          return new Promise((t, r) => {
            const n = new FileReader();

            n.readAsArrayBuffer(e);
          });
        }
      }

      e.exports = t;
    },
    182: (e, t, r) => {
      r.r(t);

      r.d(t, { default: () => v });

      const n = r(3379);
      const i = r.n(n);
      const a = r(7795);
      const s = r.n(a);
      const o = r(569);
      const u = r.n(o);
      const c = r(3565);
      const l = r.n(c);
      const h = r(9216);
      const f = r.n(h);
      const d = r(4589);
      const p = r.n(d);
      const m = r(1772);
      const g = {};
      g.styleTagTransform = p();
      g.setAttributes = l();
      g.insert = u().bind(null, "head");
      g.domAPI = s();
      g.insertStyleElement = f();
      i()(m.Z, g);
      const v = m.Z && m.Z.locals ? m.Z.locals : undefined;
    },
    315: (e, t, r) => {
      r.r(t);

      r.d(t, { default: () => v });

      const n = r(3379);
      const i = r.n(n);
      const a = r(7795);
      const s = r.n(a);
      const o = r(569);
      const u = r.n(o);
      const c = r(3565);
      const l = r.n(c);
      const h = r(9216);
      const f = r.n(h);
      const d = r(4589);
      const p = r.n(d);
      const m = r(4005);
      const g = {};
      g.styleTagTransform = p();
      g.setAttributes = l();
      g.insert = u().bind(null, "head");
      g.domAPI = s();
      g.insertStyleElement = f();
      i()(m.Z, g);
      const v = m.Z && m.Z.locals ? m.Z.locals : undefined;
    },
    6081: (e, t, r) => {
      r.r(t);

      r.d(t, { default: () => v });

      const n = r(3379);
      const i = r.n(n);
      const a = r(7795);
      const s = r.n(a);
      const o = r(569);
      const u = r.n(o);
      const c = r(3565);
      const l = r.n(c);
      const h = r(9216);
      const f = r.n(h);
      const d = r(4589);
      const p = r.n(d);
      const m = r(9465);
      const g = {};
      g.styleTagTransform = p();
      g.setAttributes = l();
      g.insert = u().bind(null, "head");
      g.domAPI = s();
      g.insertStyleElement = f();
      i()(m.Z, g);
      const v = m.Z && m.Z.locals ? m.Z.locals : undefined;
    },
    6409: (e, t, r) => {
      r.r(t);

      r.d(t, { default: () => v });

      const n = r(3379);
      const i = r.n(n);
      const a = r(7795);
      const s = r.n(a);
      const o = r(569);
      const u = r.n(o);
      const c = r(3565);
      const l = r.n(c);
      const h = r(9216);
      const f = r.n(h);
      const d = r(4589);
      const p = r.n(d);
      const m = r(1521);
      const g = {};
      g.styleTagTransform = p();
      g.setAttributes = l();
      g.insert = u().bind(null, "head");
      g.domAPI = s();
      g.insertStyleElement = f();
      i()(m.Z, g);
      const v = m.Z && m.Z.locals ? m.Z.locals : undefined;
    },
    4085: (e, t, r) => {
      r.r(t);

      r.d(t, { default: () => v });

      const n = r(3379);
      const i = r.n(n);
      const a = r(7795);
      const s = r.n(a);
      const o = r(569);
      const u = r.n(o);
      const c = r(3565);
      const l = r.n(c);
      const h = r(9216);
      const f = r.n(h);
      const d = r(4589);
      const p = r.n(d);
      const m = r(1327);
      const g = {};
      g.styleTagTransform = p();
      g.setAttributes = l();
      g.insert = u().bind(null, "head");
      g.domAPI = s();
      g.insertStyleElement = f();
      i()(m.Z, g);
      const v = m.Z && m.Z.locals ? m.Z.locals : undefined;
    },
    5356: (e, t, r) => {
      r.r(t);

      r.d(t, { default: () => v });

      const n = r(3379);
      const i = r.n(n);
      const a = r(7795);
      const s = r.n(a);
      const o = r(569);
      const u = r.n(o);
      const c = r(3565);
      const l = r.n(c);
      const h = r(9216);
      const f = r.n(h);
      const d = r(4589);
      const p = r.n(d);
      const m = r(1238);
      const g = {};
      g.styleTagTransform = p();
      g.setAttributes = l();
      g.insert = u().bind(null, "head");
      g.domAPI = s();
      g.insertStyleElement = f();
      i()(m.Z, g);
      const v = m.Z && m.Z.locals ? m.Z.locals : undefined;
    },
    3379: (e) => {
      const t = [];
      function r(e) {
        for (var r = -1, n = 0; n < t.length; n++) {
          if (t[n].identifier === e) {
            r = n;
            break;
          }
        }
        return r;
      }

      class n {
        constructor(e, n) {
          for (var a = {}, s = [], o = 0; o < e.length; o++) {
            const e_o = e[o];
            const c = n.base ? e_o[0] + n.base : e_o[0];
            const l = a[c] || 0;
            const h = `${c} ${l}`;
            a[c] = l + 1;
            const f = r(h);
            const d = {
              css: e_o[1],
              media: e_o[2],
              sourceMap: e_o[3],
              supports: e_o[4],
              layer: e_o[5],
            };
            if (-1 !== f) {
              t[f].references++;
              t[f].updater(d);
            } else {
              const p = i(d, n);
              n.byIndex = o;
              t.splice(o, 0, { identifier: h, updater: p, references: 1 });
            }
            s.push(h);
          }
          return s;
        }

        static onload() {
          t(n.result);
        }

        static onerror() {
          r(`Failed to read file. ${n.error}`);
        }

        static onload() {
          if (n.status === 200) {
            t(n.response);
          } else {
            r(n.statusText);
          }
        }

        static onerror() {
          r(n.statusText);
        }
      }

      function i(e, t) {
        const r = t.domAPI(t);
        r.update(e);

        return (t) => {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap &&
              t.supports === e.supports &&
              t.layer === e.layer
            ) {
              return;
            }
            r.update((e = t));
          } else {
            r.remove();
          }
        };
      }
      e.exports = (e, i) => {
        let a = n((e = e || []), (i = i || {}));
        return (e) => {
          e = e || [];
          for (let s = 0; s < a.length; s++) {
            const o = r(a[s]);
            t[o].references--;
          }
          const u = n(e, i);
          for (let c = 0; c < a.length; c++) {
            const l = r(a[c]);

            if (t[l].references === 0) {
              t[l].updater(), t.splice(l, 1);
            }
          }
          a = u;
        };
      };
    },
    569: (e) => {
      const t = {};
      e.exports = (e, r) => {
        const n = ((e) => {
          if (t[e] === undefined) {
            let r = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            ) {
              try {
                r = r.contentDocument.head;
              } catch (e) {
                r = null;
              }
            }
            t[e] = r;
          }
          return t[e];
        })(e);
        if (!n) {
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        }
        n.appendChild(r);
      };
    },
    9216: (e) => {
      e.exports = (e) => {
        const t = document.createElement("style");
        e.setAttributes(t, e.attributes);
        e.insert(t, e.options);
        return t;
      };
    },
    3565: (e, t, r) => {
      e.exports = (e) => {
        const r_nc = r.nc;

        if (r_nc) {
          e.setAttribute("nonce", r_nc);
        }
      };
    },
    7795: (e) => {
      e.exports = (e) => {
        const t = e.insertStyleElement(e);
        return {
          update(r) {
            !((e, t, r) => {
              let n = "";

              if (r.supports) {
                n += `@supports (${r.supports}) {`;
              }

              if (r.media) {
                n += `@media ${r.media} {`;
              }

              const i = r.layer !== undefined;

              if (i) {
                n += `@layer${r.layer.length > 0 ? " ".concat(r.layer) : ""} {`;
              }

              n += r.css;

              if (i) {
                n += "}";
              }

              if (r.media) {
                n += "}";
              }

              if (r.supports) {
                n += "}";
              }

              const r_sourceMap = r.sourceMap;

              if (r_sourceMap && typeof btoa != "undefined") {
                n += `\n/*# sourceMappingURL=data:application/json;base64,${btoa(
                  unescape(encodeURIComponent(JSON.stringify(a)))
                )} */`;
              }

              t.styleTagTransform(n, e, t.options);
            })(t, e, r);
          },
          remove() {
            !((e) => {
              if (e.parentNode === null) {
                return false;
              }
              e.parentNode.removeChild(e);
            })(t);
          },
        };
      };
    },
    4589: (e) => {
      e.exports = (e, t) => {
        if (t.styleSheet) {
          t.styleSheet.cssText = e;
        } else {
          while (t.firstChild) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(e));
        }
      };
    },
    2392: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.ENV = undefined;
      t.ENV = { prod: true, version: "0.1" };
    },
    4064: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.convertNesKey = undefined;
      t.NesKey = undefined;
      let n;
      const i = r(4176);

      !((e) => {
        e[(e.BUTTON_A = 0)] = "BUTTON_A";
        e[(e.BUTTON_B = 1)] = "BUTTON_B";
        e[(e.BUTTON_SELECT = 2)] = "BUTTON_SELECT";
        e[(e.BUTTON_START = 3)] = "BUTTON_START";
        e[(e.BUTTON_UP = 4)] = "BUTTON_UP";
        e[(e.BUTTON_DOWN = 5)] = "BUTTON_DOWN";
        e[(e.BUTTON_LEFT = 6)] = "BUTTON_LEFT";
        e[(e.BUTTON_RIGHT = 7)] = "BUTTON_RIGHT";
      })((n = t.NesKey || (t.NesKey = {})));
    },
    9805: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.RomFilesUtils = undefined;
      const r = (() => {
        function e() {}

        e.getFileName = (e) => {
          const t = e.lastIndexOf("/");
          return t >= 0 ? e.substring(t + 1) : e;
        };

        e.bufferToBinaryString = (e) =>
          new Uint8Array(e).reduce((e, t) => e + String.fromCharCode(t), "");

        e.isFileSupported = (e) => {
          const t = e.toLowerCase();
          return (
            t.endsWith(".rom") ||
            t.endsWith(".nes") ||
            t.endsWith(".zip") ||
            !t.includes(".")
          );
        };

        e.isArchiveFile = (e) => e.toLowerCase().endsWith(".zip");

        return e;
      })();
      t.RomFilesUtils = r;
    },
    4635: function (e, t, r) {
      const n =
        (this && this.__awaiter) ||
        ((e, t, r, n) =>
          new (r || (r = Promise))((i, a) => {
            function s(e) {
              try {
                u(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              let t;

              if (e.done) {
                i(e.value);
              } else {
                ((t = e.value),
                t instanceof r
                  ? t
                  : new r((e) => {
                      e(t);
                    })).then(s, o);
              }
            }
            u((n = n.apply(e, t || [])).next());
          }));

      const i =
        (this && this.__generator) ||
        ((e, t) => {
          let r;
          let n;
          let i;
          let a;
          let s = {
            label: 0,
            sent() {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: [],
          };
          a = { next: o(0), throw: o(1), return: o(2) };

          if (typeof Symbol == "function") {
            a[Symbol.iterator] = function () {
              return this;
            };
          }

          return a;
          function o(a) {
            return (o) =>
              ((a) => {
                if (r) {
                  throw new TypeError("Generator is already executing.");
                }

                while (s) {
                  try {
                    r = 1;

                    if (
                      n &&
                      (i =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, a[1])).done
                    ) {
                      return i;
                    }

                    n = 0;

                    if (i) {
                      a = [2 & a[0], i.value];
                    }

                    switch (a[0]) {
                      case 0:
                      case 1: {
                        i = a;
                        break;
                      }
                      case 4: {
                        s.label++;
                        return { value: a[1], done: false };
                      }
                      case 5: {
                        s.label++;
                        n = a[1];
                        a = [0];
                        continue;
                      }
                      case 7: {
                        a = s.ops.pop();
                        s.trys.pop();
                        continue;
                      }
                      default: {
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (a[0] !== 6 && a[0] !== 2)
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          a[0] === 3 &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          s.label = a[1];
                          break;
                        }
                        if (a[0] === 6 && s.label < i[1]) {
                          s.label = i[1];
                          i = a;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2];
                          s.ops.push(a);
                          break;
                        }

                        if (i[2]) {
                          s.ops.pop();
                        }

                        s.trys.pop();
                        continue;
                      }
                    }

                    a = t.call(e, s);
                  } catch (e) {
                    a = [6, e];
                    n = 0;
                  } finally {
                    r = 0;
                    i = 0;
                  }
                }

                if (5 & a[0]) {
                  throw a[1];
                }
                return { value: a[0] ? a[1] : undefined, done: true };
              })([a, o]);
          }
        });

      Object.defineProperty(t, "__esModule", { value: true });
      t.openArchiveRoute = undefined;
      t.archiveRoute = undefined;
      const a = r(9805);
      const s = r(36);
      const o = r(4585);
      const u = r(9922);
      const c = r(5733);
      const l = r(4176);
    },
    506: function (e, t, r) {
      const n =
        (this && this.__awaiter) ||
        ((e, t, r, n) =>
          new (r || (r = Promise))((i, a) => {
            function s(e) {
              try {
                u(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              let t;

              if (e.done) {
                i(e.value);
              } else {
                ((t = e.value),
                t instanceof r
                  ? t
                  : new r((e) => {
                      e(t);
                    })).then(s, o);
              }
            }
            u((n = n.apply(e, t || [])).next());
          }));

      const i =
        (this && this.__generator) ||
        ((e, t) => {
          let r;
          let n;
          let i;
          let a;
          let s = {
            label: 0,
            sent() {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: [],
          };
          a = { next: o(0), throw: o(1), return: o(2) };

          if (typeof Symbol == "function") {
            a[Symbol.iterator] = function () {
              return this;
            };
          }

          return a;
          function o(a) {
            return (o) =>
              ((a) => {
                if (r) {
                  throw new TypeError("Generator is already executing.");
                }

                while (s) {
                  try {
                    r = 1;

                    if (
                      n &&
                      (i =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, a[1])).done
                    ) {
                      return i;
                    }

                    n = 0;

                    if (i) {
                      a = [2 & a[0], i.value];
                    }

                    switch (a[0]) {
                      case 0:
                      case 1: {
                        i = a;
                        break;
                      }
                      case 4: {
                        s.label++;
                        return { value: a[1], done: false };
                      }
                      case 5: {
                        s.label++;
                        n = a[1];
                        a = [0];
                        continue;
                      }
                      case 7: {
                        a = s.ops.pop();
                        s.trys.pop();
                        continue;
                      }
                      default: {
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (a[0] !== 6 && a[0] !== 2)
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          a[0] === 3 &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          s.label = a[1];
                          break;
                        }
                        if (a[0] === 6 && s.label < i[1]) {
                          s.label = i[1];
                          i = a;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2];
                          s.ops.push(a);
                          break;
                        }

                        if (i[2]) {
                          s.ops.pop();
                        }

                        s.trys.pop();
                        continue;
                      }
                    }

                    a = t.call(e, s);
                  } catch (e) {
                    a = [6, e];
                    n = 0;
                  } finally {
                    r = 0;
                    i = 0;
                  }
                }

                if (5 & a[0]) {
                  throw a[1];
                }
                return { value: a[0] ? a[1] : undefined, done: true };
              })([a, o]);
          }
        });

      Object.defineProperty(t, "__esModule", { value: true });
      t.browseRoute = undefined;
      const a = r(9805);
      const s = r(4585);
      const o = r(9922);
      const u = r(4635);
      const c = r(4176);
    },
    8153: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.choiceRouteFactory = undefined;
      const n = r(4176);
    },
    9922: function (e, t, r) {
      const n =
        (this && this.__awaiter) ||
        ((e, t, r, n) =>
          new (r || (r = Promise))((i, a) => {
            function s(e) {
              try {
                u(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              let t;

              if (e.done) {
                i(e.value);
              } else {
                ((t = e.value),
                t instanceof r
                  ? t
                  : new r((e) => {
                      e(t);
                    })).then(s, o);
              }
            }
            u((n = n.apply(e, t || [])).next());
          }));

      const i =
        (this && this.__generator) ||
        ((e, t) => {
          let r;
          let n;
          let i;
          let a;
          let s = {
            label: 0,
            sent() {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: [],
          };
          a = { next: o(0), throw: o(1), return: o(2) };

          if (typeof Symbol == "function") {
            a[Symbol.iterator] = function () {
              return this;
            };
          }

          return a;
          function o(a) {
            return (o) =>
              ((a) => {
                if (r) {
                  throw new TypeError("Generator is already executing.");
                }

                while (s) {
                  try {
                    r = 1;

                    if (
                      n &&
                      (i =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, a[1])).done
                    ) {
                      return i;
                    }

                    n = 0;

                    if (i) {
                      a = [2 & a[0], i.value];
                    }

                    switch (a[0]) {
                      case 0:
                      case 1: {
                        i = a;
                        break;
                      }
                      case 4: {
                        s.label++;
                        return { value: a[1], done: false };
                      }
                      case 5: {
                        s.label++;
                        n = a[1];
                        a = [0];
                        continue;
                      }
                      case 7: {
                        a = s.ops.pop();
                        s.trys.pop();
                        continue;
                      }
                      default: {
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (a[0] !== 6 && a[0] !== 2)
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          a[0] === 3 &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          s.label = a[1];
                          break;
                        }
                        if (a[0] === 6 && s.label < i[1]) {
                          s.label = i[1];
                          i = a;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2];
                          s.ops.push(a);
                          break;
                        }

                        if (i[2]) {
                          s.ops.pop();
                        }

                        s.trys.pop();
                        continue;
                      }
                    }

                    a = t.call(e, s);
                  } catch (e) {
                    a = [6, e];
                    n = 0;
                  } finally {
                    r = 0;
                    i = 0;
                  }
                }

                if (5 & a[0]) {
                  throw a[1];
                }
                return { value: a[0] ? a[1] : undefined, done: true };
              })([a, o]);
          }
        });

      Object.defineProperty(t, "__esModule", { value: true });
      t.EmulatorRoute = undefined;
      t.openEmulatorRoute = undefined;
      t.emulatorRoute = undefined;
      const a = r(4176);
      const s = r(4064);
      const o = r(36);
      const u = r(473);

      const c = 256;
      const l = 240;

      const h = (() => {
        function e(e, t, r, h, f, d, p, m, g, v) {
          const b = this;
          this.element = e;
          this.frameRate = t;
          this.canvas = r;
          this.context = h;
          this.keyboardInfoController = f;
          this.keyboardListener = d;
          this.worker = p;
          this.audioContext = m;
          this.scriptNode = g;
          this.options = v;
          this.lastFrameSecond = 0;
          this.frameCount = 0;
          this.soundBuffer = new u(16384);
          this.onLeave = new a.SimpleEvent();

          this.mount = () => {
            const e = b.canvas.parentElement;
            const t = Math.min(e.clientWidth / c, e.clientHeight / l);
            b.canvas.width = c;
            b.canvas.height = l;
            b.canvas.style.width = `${c * t}px`;
            b.canvas.style.height = `${l * t}px`;
            b.canvasData = b.context.getImageData(0, 0, c, l);
          };

          this.onWorkerMessage = (e) => {
            const e_data = e.data;
            switch (e_data.name) {
              case "ready": {
                const r = o.OptionsStorage.tryRom();
                b.worker.postMessage({
                  name: "load",
                  rom: r,
                  options: b.options,
                });
                break;
              }
              case "load-error": {
                (0, a.uglyLogger)(e_data.error);
                b.onLeave.forward();
                break;
              }
              case "frame": {
                if (!b.canvasData) {
                  break;
                }
                if (b.options.isFpsVisible) {
                  const n = Math.floor(Date.now() / 1000 /* 1e3 */);

                  if (b.lastFrameSecond !== n) {
                    (b.frameRate.innerText = b.frameCount.toString()),
                      (b.lastFrameSecond = n),
                      (b.frameCount = 0);
                  }
                }
                const e_data_buffer = e_data.buffer;
                b.canvasData.data.set(e_data_buffer);
                b.context.putImageData(b.canvasData, 0, 0);
                b.frameCount++;
                break;
              }
              case "sound": {
                if (b.soundBuffer.size() / 2 >= 8192) {
                  b.soundBuffer.deqN(4096);
                }

                for (
                  let s = e_data.samplesL, u = e_data.samplesR, c = 0;
                  c < s.length;
                  c++
                ) {
                  b.soundBuffer.enq(s[c]);
                  b.soundBuffer.enq(u[c]);
                }
              }
            }
          };

          this.audioCallback = (e) => {
            let t;
            const r = e.outputBuffer.getChannelData(0);
            const n = e.outputBuffer.getChannelData(1);
            const r_length = r.length;
            try {
              t = b.soundBuffer.deqN(2 * r_length);
            } catch (e) {
              b.soundBuffer.size();
              for (let a = 0; a < r_length; a++) {
                r[a] = 0;
                n[a] = 0;
              }
              return;
            }
            for (let s = 0; s < r_length; s++) {
              r[s] = t[2 * s];
              n[s] = t[2 * s + 1];
            }
          };

          this.onKey = (e, t) =>
            n(b, undefined, undefined, function () {
              let r;
              let n;
              return i(this, function (i) {
                if (t === a.KeyType.down) {
                  if (this.keyboardInfoController.isVisible) {
                    this.keyboardInfoController.hide();
                    return [2];
                  }
                  if (e === a.Key.back) {
                    this.onLeave.forward();
                    return [2];
                  }
                  if (e === a.Key.hash) {
                    this.keyboardInfoController.show();
                    return [2];
                  }
                }

                if (null !== (r = (0, s.convertNesKey)(e))) {
                  (n = t === a.KeyType.down ? "keydown" : "keyup"),
                    this.worker.postMessage({ name: n, key: r });
                }

                return [2];
              });
            });
        }

        e.create = (t, r) => {
          const n = document.createElement("div");
          n.className = "emulator";
          n.innerHTML =
            '<div class="frame-rate"></div>\n            <canvas class="canvas"></canvas>\n            <div class="hint">#</div>\n            <div class="keyboard-info"><img src="./nes-keyboard.png" /></div>';
          const i = n.getElementsByClassName("frame-rate")[0];
          const a = n.getElementsByClassName("canvas")[0];
          const s = a.getContext("2d");
          const o = n.getElementsByClassName("hint")[0];
          const u = n.getElementsByClassName("keyboard-info")[0];
          const c = new f(u);
          setTimeout(() => {
            if (n.parentElement) {
              o.style.display = "none";
            }
          }, 4000 /* 4e3 */);
          const l = new Worker("worker.js");
          let h = undefined;
          let d = undefined;

          if (r.isSoundEnabled) {
            (d = (h = new AudioContext({
              sampleRate: 48000 /* 48e3 */,
            })).createScriptProcessor(1024, 0, 2)).connect(h.destination);
          }

          const p = new e(n, i, a, s, c, t, l, h, d, r);
          t.subscribe(p.onKey);
          l.onmessage = p.onWorkerMessage;

          if (h && d) {
            (d.onaudioprocess = p.audioCallback), d.connect(h.destination);
          }

          setTimeout(p.mount);
          return p;
        };

        e.prototype.destroy = function () {
          if (this.audioContext && this.scriptNode) {
            this.scriptNode.disconnect(this.audioContext.destination),
              this.audioContext.close().catch(console.error);
          }

          this.worker.postMessage({ name: "destroy" });
          this.keyboardListener.unsubscribe();
        };

        return e;
      })();

      t.EmulatorRoute = h;
      var f = (() => {
        function e(e) {
          this.element = e;
          this.isVisible = false;
        }

        e.prototype.show = function () {
          this.element.classList.add("visible");
          this.isVisible = true;
        };

        e.prototype.hide = function () {
          this.element.classList.remove("visible");
          this.isVisible = false;
        };

        return e;
      })();
    },
    4194: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.fpsOptionRoute = undefined;
      t.skippingFramesOptionRoute = undefined;
      t.soundOptionRoute = undefined;
      t.optionsRoute = undefined;
      const n = r(8153);
      const i = r(36);
      const a = r(4176);
    },
    4072: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.rootRoute = undefined;
      const n = r(4176);
      const i = r(2392);
      const a = r(36);
    },
    4585: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.FilesReaderFactory = undefined;
      const n = r(1469);
      const i = r(9978);
      const a = r(4176);
      const s = (() => {
        function e() {}

        e.create = () =>
          a.KaiOsDetector.getVersion() === 3
            ? new n.KaiOs3FilesReader()
            : new i.TestFilesReader();

        return e;
      })();
      t.FilesReaderFactory = s;
    },
    1469: function (e, t, r) {
      const n =
        (this && this.__awaiter) ||
        ((e, t, r, n) =>
          new (r || (r = Promise))((i, a) => {
            function s(e) {
              try {
                u(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              let t;

              if (e.done) {
                i(e.value);
              } else {
                ((t = e.value),
                t instanceof r
                  ? t
                  : new r((e) => {
                      e(t);
                    })).then(s, o);
              }
            }
            u((n = n.apply(e, t || [])).next());
          }));

      const i =
        (this && this.__generator) ||
        ((e, t) => {
          let r;
          let n;
          let i;
          let a;
          let s = {
            label: 0,
            sent() {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: [],
          };
          a = { next: o(0), throw: o(1), return: o(2) };

          if (typeof Symbol == "function") {
            a[Symbol.iterator] = function () {
              return this;
            };
          }

          return a;
          function o(a) {
            return (o) =>
              ((a) => {
                if (r) {
                  throw new TypeError("Generator is already executing.");
                }

                while (s) {
                  try {
                    r = 1;

                    if (
                      n &&
                      (i =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, a[1])).done
                    ) {
                      return i;
                    }

                    n = 0;

                    if (i) {
                      a = [2 & a[0], i.value];
                    }

                    switch (a[0]) {
                      case 0:
                      case 1: {
                        i = a;
                        break;
                      }
                      case 4: {
                        s.label++;
                        return { value: a[1], done: false };
                      }
                      case 5: {
                        s.label++;
                        n = a[1];
                        a = [0];
                        continue;
                      }
                      case 7: {
                        a = s.ops.pop();
                        s.trys.pop();
                        continue;
                      }
                      default: {
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (a[0] !== 6 && a[0] !== 2)
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          a[0] === 3 &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          s.label = a[1];
                          break;
                        }
                        if (a[0] === 6 && s.label < i[1]) {
                          s.label = i[1];
                          i = a;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2];
                          s.ops.push(a);
                          break;
                        }

                        if (i[2]) {
                          s.ops.pop();
                        }

                        s.trys.pop();
                        continue;
                      }
                    }

                    a = t.call(e, s);
                  } catch (e) {
                    a = [6, e];
                    n = 0;
                  } finally {
                    r = 0;
                    i = 0;
                  }
                }

                if (5 & a[0]) {
                  throw a[1];
                }
                return { value: a[0] ? a[1] : undefined, done: true };
              })([a, o]);
          }
        });

      Object.defineProperty(t, "__esModule", { value: true });
      t.KaiOs3FilesReader = undefined;
      const a = r(2148);

      const s = (() => {
        function e() {}

        e.prototype.getAllFiles = function () {
          return n(this, undefined, undefined, function () {
            let e;
            let t;
            let r;
            let n;
            let a;
            let s;
            let u;
            let c;
            let l;
            return i(this, (i) => {
              switch (i.label) {
                case 0: {
                  e = [];
                  t = o();
                  r = 0;
                  n = t;
                  i.label = 1;
                }
                case 1: {
                  if (!(r < n.length)) {
                    return [3, 9];
                  }
                  a = n[r];
                  i.label = 2;
                }
                case 2: {
                  i.trys.push([2, 7, , 8]);
                  s = a.enumerate();
                  u = s.values();
                  c = undefined;
                  i.label = 3;
                }
                case 3: {
                  return [4, u.next()];
                }
                case 4: {
                  if ((c = i.sent()) && c.value) {
                    e.push({ path: c.value.name, storage: a.storageName });
                  }

                  i.label = 5;
                }
                case 5: {
                  if (c && !c.done) {
                    return [3, 3];
                  }
                  i.label = 6;
                }
                case 6: {
                  return [3, 8];
                }
                case 7: {
                  l = i.sent();
                  console.error(l);
                  return [3, 8];
                }
                case 8: {
                  r++;
                  return [3, 1];
                }
                case 9: {
                  return [2, e];
                }
              }
            });
          });
        };

        e.prototype.readFile = function (e) {
          return n(this, undefined, undefined, function () {
            let t;
            let r;
            let n;
            let s;
            let u;
            return i(this, (i) => {
              switch (i.label) {
                case 0: {
                  t = o();

                  if (!(r = t.find((t) => t.storageName === e.storage))) {
                    throw new Error(`Cannot find storage: ${e.storage}`);
                  }

                  n = r.enumerate();
                  s = n.values();
                  i.label = 1;
                }
                case 1: {
                  return [4, s.next()];
                }
                case 2: {
                  return (u = i.sent()) && u.value && u.value.name === e.path
                    ? [4, (0, a.readFile)(u.value)]
                    : [3, 4];
                }
                case 3: {
                  return [2, i.sent()];
                }
                case 4: {
                  if (u && !u.done) {
                    return [3, 1];
                  }
                  i.label = 5;
                }
                case 5: {
                  throw new Error(`Cannot find file: ${e.path}`);
                }
              }
            });
          });
        };

        return e;
      })();

      function o() {
        return navigator.b2g.getDeviceStorages("sdcard");
      }
      t.KaiOs3FilesReader = s;
    },
    36: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.OptionsStorage = undefined;
      const r = (() => {
        function e() {}

        e.isSoundEnabled = () => {
          const localStorage_isSoundEnabled = localStorage.isSoundEnabled;
          return (
            localStorage_isSoundEnabled !== undefined &&
            localStorage_isSoundEnabled === "1"
          );
        };

        e.setIsSoundEnabled = (e) => {
          localStorage.isSoundEnabled = e ? "1" : "0";
        };

        e.skippingFrames = () => {
          const localStorage_frameLimit = localStorage.frameLimit;
          return localStorage_frameLimit === undefined
            ? 40
            : parseInt(localStorage_frameLimit);
        };

        e.setSkippingFrames = (e) => {
          localStorage.frameLimit = e.toString();
        };

        e.isFpsVisible = () => {
          const localStorage_isFpsVisible = localStorage.isFpsVisible;
          return (
            localStorage_isFpsVisible !== undefined &&
            localStorage_isFpsVisible === "1"
          );
        };

        e.setIsFpsVisible = (e) => {
          localStorage.isFpsVisible = e ? "1" : "0";
        };

        e.setRom = (e) => {
          localStorage.rom = e;
        };

        e.tryRom = () => localStorage.rom || null;

        e.setArchive = (e) => {
          localStorage.archive = JSON.stringify(e);
        };

        e.tryGetArchive = () => {
          const localStorage_archive = localStorage.archive;
          return localStorage_archive ? JSON.parse(localStorage_archive) : null;
        };

        return e;
      })();
      t.OptionsStorage = r;
    },
    2148: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.readFile = undefined;
    },
    9978: function (e, t) {
      const r =
        (this && this.__awaiter) ||
        ((e, t, r, n) =>
          new (r || (r = Promise))((i, a) => {
            function s(e) {
              try {
                u(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              let t;

              if (e.done) {
                i(e.value);
              } else {
                ((t = e.value),
                t instanceof r
                  ? t
                  : new r((e) => {
                      e(t);
                    })).then(s, o);
              }
            }
            u((n = n.apply(e, t || [])).next());
          }));

      const n =
        (this && this.__generator) ||
        ((e, t) => {
          let r;
          let n;
          let i;
          let a;
          let s = {
            label: 0,
            sent() {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: [],
          };
          a = { next: o(0), throw: o(1), return: o(2) };

          if (typeof Symbol == "function") {
            a[Symbol.iterator] = function () {
              return this;
            };
          }

          return a;
          function o(a) {
            return (o) =>
              ((a) => {
                if (r) {
                  throw new TypeError("Generator is already executing.");
                }

                while (s) {
                  try {
                    r = 1;

                    if (
                      n &&
                      (i =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, a[1])).done
                    ) {
                      return i;
                    }

                    n = 0;

                    if (i) {
                      a = [2 & a[0], i.value];
                    }

                    switch (a[0]) {
                      case 0:
                      case 1: {
                        i = a;
                        break;
                      }
                      case 4: {
                        s.label++;
                        return { value: a[1], done: false };
                      }
                      case 5: {
                        s.label++;
                        n = a[1];
                        a = [0];
                        continue;
                      }
                      case 7: {
                        a = s.ops.pop();
                        s.trys.pop();
                        continue;
                      }
                      default: {
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (a[0] !== 6 && a[0] !== 2)
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          a[0] === 3 &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          s.label = a[1];
                          break;
                        }
                        if (a[0] === 6 && s.label < i[1]) {
                          s.label = i[1];
                          i = a;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2];
                          s.ops.push(a);
                          break;
                        }

                        if (i[2]) {
                          s.ops.pop();
                        }

                        s.trys.pop();
                        continue;
                      }
                    }

                    a = t.call(e, s);
                  } catch (e) {
                    a = [6, e];
                    n = 0;
                  } finally {
                    r = 0;
                    i = 0;
                  }
                }

                if (5 & a[0]) {
                  throw a[1];
                }
                return { value: a[0] ? a[1] : undefined, done: true };
              })([a, o]);
          }
        });

      Object.defineProperty(t, "__esModule", { value: true });
      t.TestFilesReader = undefined;
      const i = (() => {
        class e {
          getAllFiles() {
            return r(this, undefined, undefined, function () {
              return n(this, (e) => [
                2,
                new Promise((e, t) => {
                  setTimeout(() => {
                    e([
                      { path: "./roms/contra.nes" },
                      { path: "./roms/mario.nes" },
                      { path: "./roms/damaged.nes" },
                      { path: "./roms/tetris-plus.zip" },
                      { path: "./roms/wrongFileName.nes" },
                    ]);
                  }, 1000 /* 1e3 */);
                }),
              ]);
            });
          }

          readFile(e) {
            return new Promise((t, r) => {
              const n = new XMLHttpRequest();
              n.open("GET", `${e.path}?_=${Date.now()}`);
              n.responseType = "arraybuffer";

              n.send();
            });
          }
        }

        return e;
      })();
      t.TestFilesReader = i;
    },
  };

  var t = {};
  function r(n) {
    const t_n = t[n];
    if (t_n !== undefined) {
      return t_n.exports;
    }
    const a = (t[n] = { id: n, exports: {} });
    e[n].call(a.exports, a, a.exports, r);
    return a.exports;
  }

  r.n = (e) => {
    const t = e && e.__esModule ? () => e.default : () => e;
    r.d(t, { a: t });
    return t;
  };

  r.d = (e, t) => {
    for (const n in t) {
      if (r.o(t, n) && !r.o(e, n)) {
        Object.defineProperty(e, n, { enumerable: true, get: t[n] });
      }
    }
  };

  r.g = (function () {
    if (typeof globalThis == "object") {
      return globalThis;
    }
    try {
      return this || new Function("return this")();
    } catch (e) {
      if (typeof window == "object") {
        return window;
      }
    }
  })();

  r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);

  r.r = (e) => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    }

    Object.defineProperty(e, "__esModule", { value: true });
  };

  r.nc = undefined;

  (() => {
    const e = r(506);
    const t = r(4176);
    const n = r(9922);
    const i = r(4194);
    const a = r(4072);
    const s = r(4635);
    const o = r(2392);
    r(6081);
    r(182);
    r(315);
    r(6409);
    r(4085);
    r(5356);

    window.addEventListener("DOMContentLoaded", () => {
      const r = (0, t.resolveVersion)(o.ENV.version);
      t.Tracker.init(o.ENV.prod, "nes-emulator", r);
      t.Tracker.instance().appStarted();

      t.AdsManager.init(
        o.ENV.prod,
        "749441b3-ac5b-431c-9e2a-3ed390123441",
        "n4no.com.nesEmulator"
      );

      t.KeyboardListener.init();
      const u = document.getElementById("root");
      t.Router.create(u, "splash", "root", [
        (0, t.splashRoute)(),
        (0, a.rootRoute)(),
        (0, n.emulatorRoute)(),
        (0, e.browseRoute)(),
        (0, s.archiveRoute)(),
        (0, i.optionsRoute)(),
        (0, i.soundOptionRoute)(),
        (0, i.skippingFramesOptionRoute)(),
        (0, i.fpsOptionRoute)(),
      ]);
    });
  })();
})();
