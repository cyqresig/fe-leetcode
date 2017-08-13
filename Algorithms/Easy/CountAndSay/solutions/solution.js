/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var i, j, oldCasLen, oldCas, cas = '1', count = 1;
    if(n > 1) {
        for(i = 1; i < n; i++) {
            j = 0;
            oldCas = cas;
            oldCasLen = oldCas.length;
            cas = '';
            while(j < oldCasLen) {
                if (j + 1 < oldCasLen && oldCas[j] === oldCas[j + 1]) {
                    count++;
                }else if (oldCas[j] === '1') {
                    cas += count + '1';
                    count = 1;
                } else if (oldCas[j] !== '1') {
                    cas += count + oldCas[j];
                    count = 1;
                }
                j++;
            }
        }
    }
    return cas;
};