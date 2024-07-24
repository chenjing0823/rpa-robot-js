const import_libnut = require('../import_libnut');
const shared = require("../../shared");

// Define KeyboardAction class
class KeyboardAction {
  static KeyLookupMap = new Map([
    [shared.Key.A, "a"],
    [shared.Key.B, "b"],
    [shared.Key.C, "c"],
    [shared.Key.D, "d"],
    [shared.Key.E, "e"],
    [shared.Key.F, "f"],
    [shared.Key.G, "g"],
    [shared.Key.H, "h"],
    [shared.Key.I, "i"],
    [shared.Key.J, "j"],
    [shared.Key.K, "k"],
    [shared.Key.L, "l"],
    [shared.Key.M, "m"],
    [shared.Key.N, "n"],
    [shared.Key.O, "o"],
    [shared.Key.P, "p"],
    [shared.Key.Q, "q"],
    [shared.Key.R, "r"],
    [shared.Key.S, "s"],
    [shared.Key.T, "t"],
    [shared.Key.U, "u"],
    [shared.Key.V, "v"],
    [shared.Key.W, "w"],
    [shared.Key.X, "x"],
    [shared.Key.Y, "y"],
    [shared.Key.Z, "z"],
    [shared.Key.F1, "f1"],
    [shared.Key.F2, "f2"],
    [shared.Key.F3, "f3"],
    [shared.Key.F4, "f4"],
    [shared.Key.F5, "f5"],
    [shared.Key.F6, "f6"],
    [shared.Key.F7, "f7"],
    [shared.Key.F8, "f8"],
    [shared.Key.F9, "f9"],
    [shared.Key.F10, "f10"],
    [shared.Key.F11, "f11"],
    [shared.Key.F12, "f12"],
    [shared.Key.F13, "f13"],
    [shared.Key.F14, "f14"],
    [shared.Key.F15, "f15"],
    [shared.Key.F16, "f16"],
    [shared.Key.F17, "f17"],
    [shared.Key.F18, "f18"],
    [shared.Key.F19, "f19"],
    [shared.Key.F20, "f20"],
    [shared.Key.F21, "f21"],
    [shared.Key.F22, "f22"],
    [shared.Key.F23, "f23"],
    [shared.Key.F24, "f24"],
    [shared.Key.Num0, "0"],
    [shared.Key.Num1, "1"],
    [shared.Key.Num2, "2"],
    [shared.Key.Num3, "3"],
    [shared.Key.Num4, "4"],
    [shared.Key.Num5, "5"],
    [shared.Key.Num6, "6"],
    [shared.Key.Num7, "7"],
    [shared.Key.Num8, "8"],
    [shared.Key.Num9, "9"],
    [shared.Key.NumPad0, "numpad_0"],
    [shared.Key.NumPad1, "numpad_1"],
    [shared.Key.NumPad2, "numpad_2"],
    [shared.Key.NumPad3, "numpad_3"],
    [shared.Key.NumPad4, "numpad_4"],
    [shared.Key.NumPad5, "numpad_5"],
    [shared.Key.NumPad6, "numpad_6"],
    [shared.Key.NumPad7, "numpad_7"],
    [shared.Key.NumPad8, "numpad_8"],
    [shared.Key.NumPad9, "numpad_9"],
    [shared.Key.Decimal, "numpad_decimal"],
    [shared.Key.Space, "space"],
    [shared.Key.Escape, "escape"],
    [shared.Key.Tab, "tab"],
    [shared.Key.LeftAlt, "alt"],
    [shared.Key.LeftControl, "control"],
    [shared.Key.RightAlt, "right_alt"],
    [shared.Key.RightControl, "right_control"],
    [shared.Key.LeftWin, "win"],
    [shared.Key.RightWin, "right_win"],
    [shared.Key.LeftCmd, "cmd"],
    [shared.Key.RightCmd, "right_cmd"],
    [shared.Key.Menu, "menu"],
    [shared.Key.Fn, "fn"],
    [shared.Key.LeftShift, "shift"],
    [shared.Key.LeftSuper, "command"],
    [shared.Key.RightShift, "right_shift"],
    [shared.Key.RightSuper, "command"],
    [shared.Key.Grave, "`"],
    [shared.Key.Minus, "-"],
    [shared.Key.Equal, "="],
    [shared.Key.Backspace, "backspace"],
    [shared.Key.LeftBracket, "["],
    [shared.Key.RightBracket, "]"],
    [shared.Key.Backslash, "\\"],
    [shared.Key.Semicolon, ";"],
    [shared.Key.Quote, "'"],
    [shared.Key.Return, "enter"],
    [shared.Key.Comma, ","],
    [shared.Key.Period, "."],
    [shared.Key.Slash, "/"],
    [shared.Key.Left, "left"],
    [shared.Key.Up, "up"],
    [shared.Key.Right, "right"],
    [shared.Key.Down, "down"],
    [shared.Key.Print, "printscreen"],
    [shared.Key.Pause, null],
    [shared.Key.Insert, "insert"],
    [shared.Key.Delete, "delete"],
    [shared.Key.Home, "home"],
    [shared.Key.End, "end"],
    [shared.Key.PageUp, "pageup"],
    [shared.Key.PageDown, "pagedown"],
    [shared.Key.Add, "add"],
    [shared.Key.Subtract, "subtract"],
    [shared.Key.Multiply, "multiply"],
    [shared.Key.Divide, "divide"],
    [shared.Key.Enter, "enter"],
    [shared.Key.CapsLock, "caps_lock"],
    [shared.Key.ScrollLock, "scroll_lock"],
    [shared.Key.NumLock, "num_lock"],
    [shared.Key.AudioMute, "audio_mute"],
    [shared.Key.AudioVolDown, "audio_vol_down"],
    [shared.Key.AudioVolUp, "audio_vol_up"],
    [shared.Key.AudioPlay, "audio_play"],
    [shared.Key.AudioStop, "audio_stop"],
    [shared.Key.AudioPause, "audio_pause"],
    [shared.Key.AudioPrev, "audio_prev"],
    [shared.Key.AudioNext, "audio_next"],
    [shared.Key.AudioRewind, "audio_rewind"],
    [shared.Key.AudioForward, "audio_forward"],
    [shared.Key.AudioRepeat, "audio_repeat"],
    [shared.Key.AudioRandom, "audio_random"]
]);

  static keyLookup(key) {
    return this.KeyLookupMap.get(key);
  }

  static mapModifierKeys(...keys) {
    return keys
      .map((modifier) => KeyboardAction.keyLookup(modifier))
      .filter((modifierKey) => modifierKey != null && modifierKey.length > 1);
  }

  static async key(key, event, ...modifiers) {
    try {
      const nativeKey = KeyboardAction.keyLookup(key);
      const modifierKeys = this.mapModifierKeys(...modifiers);
      if (nativeKey != null) {
        await import_libnut.libnut.keyToggle(nativeKey, event, modifierKeys);
      }
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  constructor() {}

  async type(input) {
    try {
      await import_libnut.libnut.typeString(input);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async click(...keys) {
    try {
      keys.reverse();
      const [key, ...modifiers] = keys;
      const nativeKey = KeyboardAction.keyLookup(key);
      const modifierKeys = KeyboardAction.mapModifierKeys(...modifiers);
      if (nativeKey != null) {
        await import_libnut.libnut.keyTap(nativeKey, modifierKeys);
      }
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async pressKey(...keys) {
    try {
      keys.reverse();
      const [key, ...modifiers] = keys;
      await KeyboardAction.key(key, "down", ...modifiers);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async releaseKey(...keys) {
    try {
      keys.reverse();
      const [key, ...modifiers] = keys;
      await KeyboardAction.key(key, "up", ...modifiers);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  setKeyboardDelay(delay) {
    import_libnut.libnut.setKeyboardDelay(delay);
  }
}

// Export KeyboardAction as default
exports.default = KeyboardAction;
