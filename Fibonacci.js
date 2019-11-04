/**
 * @author Samson Kibrom,
 * @author Daniel Comboni
 */
class Fibonacci {

    static getFibonacciNumberAtPos(pos) {

        const fibList = new Array();

        for (let i = 0; i < pos; i++) {

            if (i === 0) {
                fibList.push(1);
            }

            else if (i === 1) {
                fibList.push(1);
            }

            else {
                const lastElement = fibList[fibList.length - 1];
                const nextValue = lastElement + fibList[fibList.length - 2];
                fibList.push(nextValue);
            }

        }
        console.log('the fibonacci sequence', fibList);
        return fibList[fibList.length - 1];
    }

}

module.exports = {
    Fibonacci
}