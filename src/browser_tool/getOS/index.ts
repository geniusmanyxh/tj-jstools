//获取客户端操作系统类型
function detectOS() {
  const sUserAgent = navigator.userAgent;
  const isWin =
    navigator.platform == "Win32" || navigator.platform == "Windows";
  const isMac =
    navigator.platform == "Mac68K" ||
    navigator.platform == "MacPPC" ||
    navigator.platform == "Macintosh" ||
    navigator.platform == "MacIntel";
  if (isMac) return "Mac";
  const isUnix = navigator.platform == "X11" && !isWin && !isMac;
  if (isUnix) return "Unix";
  const isLinux = String(navigator.platform).indexOf("Linux") > -1;
  if (isLinux) return "Linux";
  if (isWin) {
    const isWin2K =
      sUserAgent.indexOf("Windows NT 5.0") > -1 ||
      sUserAgent.indexOf("Windows 2000") > -1;
    if (isWin2K) return "Win2000";
    const isWinXP =
      sUserAgent.indexOf("Windows NT 5.1") > -1 ||
      sUserAgent.indexOf("Windows XP") > -1;
    if (isWinXP) return "WinXP";
    const isWin2003 =
      sUserAgent.indexOf("Windows NT 5.2") > -1 ||
      sUserAgent.indexOf("Windows 2003") > -1;
    if (isWin2003) return "Win2003";
    const WinVista =
      sUserAgent.indexOf("Windows NT 6.0") > -1 ||
      sUserAgent.indexOf("Windows Vista") > -1;
    if (WinVista) return "WinVista";
    const Win7 =
      sUserAgent.indexOf("Windows NT 6.1") > -1 ||
      sUserAgent.indexOf("Windows 7") > -1;
    if (Win7) return "Win7";
    const isWin10 =
      sUserAgent.indexOf("Windows NT 10") > -1 ||
      sUserAgent.indexOf("Windows 10") > -1;
    if (isWin10) return "Win10";
  }
  return "Other";
}
