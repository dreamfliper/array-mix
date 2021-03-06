import test from "ava"
import "./arrayMix"
import "./arrayDiff"
import "./arrayPartition"

test("array-mix", t => {
	const array1 = [3, 4, 5]
	const array2 = [4, 5, 6]
	t.deepEqual(array1.mix((x, y) => x + y, array2), [7, 9, 11])
	t.deepEqual(array1, [3, 4, 5])
	t.deepEqual(array2, [4, 5, 6])
})

test("array-mix-many", t => {
	const callBack = (a, c, g) => a - c + g
	const array1 = [3, 4, 5]
	const array2 = [3, 6, 7]
	const array3 = [2, 3, 7]
	t.deepEqual(array1.mix(callBack, array2, array3), [2, 1, 5])
	t.deepEqual(array1, [3, 4, 5])
	t.deepEqual(array2, [3, 6, 7])
	t.deepEqual(array3, [2, 3, 7])
})

test("array-diff", t => {
	const arr1 = [1, 2, 6, 7]
	const arr2 = [6, 7, 8, 9]
	t.deepEqual(arr1.diff(arr2), [1, 2])
	t.deepEqual(arr1, [1, 2, 6, 7])
	t.deepEqual(arr2, [6, 7, 8, 9])
})

test("array-partition", t => {
	const array = [2, 3, 4, 5, 6]
	const [even, odd] = array.partition(x => x % 2 === 0)
	t.deepEqual(even, [2, 4, 6])
	t.deepEqual(odd, [3, 5])
	t.deepEqual(array, [2, 3, 4, 5, 6])
})
