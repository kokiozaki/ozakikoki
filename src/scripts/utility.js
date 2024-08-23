/**
 * URLからクエリパラメータの値を取得します。
 * @param {string} name - クエリパラメータの名前。
 * @param {string} [url=window.location.href] - クエリパラメータを抽出するURL。
 * @returns {string|null} - クエリパラメータの値。見つからない場合はnull。
 */
export const getParam = (name, url) => {
  if (!url) url = window.location.href
  name = name.replace(/[[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * 特定のプロパティ値に基づいて配列内のオブジェクトを検索します。
 * @param {string} [id=""] - 検索するプロパティの値。
 * @param {Object[]} [data=[]] - 検索対象のオブジェクトの配列。
 * @returns {Object|null} - 検索されたオブジェクト。見つからない場合はnull。
 */
export const findData = (id = '', data = []) => {
  const d = data.find((element) => element.id === id)
  return d
}

/**
 * ISO 8601形式の日付文字列を指定された区切り文字を使用して'YYYY.MM.DD'形式にフォーマットします。
 * @param {string} dateString - フォーマットする日付文字列。
 * @param {string} delimiter - 使用する区切り文字。
 * @returns {string} フォーマットされた日付文字列。
 */
export const formatToJapaneseDate = (dateString, delimiter = '.') => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるので+1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${delimiter}${month}${delimiter}${day}`;
};

/**
 * ISO 8601形式の日付文字列を指定された区切り文字を使用して'DD/MM/YYYY'形式にフォーマットします。
 * @param {string} dateString - フォーマットする日付文字列。
 * @param {string} delimiter - 使用する区切り文字。
 * @returns {string} フォーマットされた日付文字列。
 */
export const formatToEuropeanDate = (dateString, delimiter = '/') => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるので+1
  const year = date.getFullYear();
  return `${day}${delimiter}${month}${delimiter}${year}`;
};


/**
 * スマホかどうかを判定する関数
 * @return {boolean} 767px以下の場合はtrue、それ以外はfalseを返す
 */
export const isMobile = () => {
  return window.innerWidth <= 767;
}


/**
 * 指定された値を最小値と最大値の範囲で正規化します。
 *
 * @param {number} value - 正規化する値
 * @param {number} minValue - 最小値
 * @param {number} maxValue - 最大値
 * @returns {number} - 正規化された値
 */
export const normalize = (value, minValue, maxValue) => {
  if (minValue === maxValue) {
    return 0
  }
  return (value - minValue) / (maxValue - minValue)
}

/**
 * 指定された数字を指定された桁数になるようにゼロパディングします。
 *
 * @param {number} number - ゼロパディングする数字
 * @param {number} length - 桁数
 * @returns {string} - ゼロパディングされた文字列
 */
export const zeroPadding = (number, length) => {
  let str = String(number)

  if (str.length >= length) {
    return str
  } else {
    const diff = length - str.length
    for (let i = 0; i < diff; i++) {
      str = '0' + str
    }
    return str
  }
}