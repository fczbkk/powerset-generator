type powerSetGeneratorOptions = {
  maxResults?: number
}

export default function * powerSetGenerator (
  input: Array<unknown> = [],
  {maxResults = Number.POSITIVE_INFINITY}: powerSetGeneratorOptions = {}
): IterableIterator<Array<unknown>> {
  let resultCounter = 0
  let offsets = generateOffsets(1)

  while ((offsets.length <= input.length) && (resultCounter < maxResults)) {
    resultCounter += 1
    const result = offsets.map((offset) => input[offset])
    yield result
    offsets = bumpOffsets(offsets, input.length - 1)
  }
}

function bumpOffsets (offsets: number[] = [], maxValue: number = 0): number[] {
  const size = offsets.length
  if (size === 0) {
    return []
  }
  const result = [...offsets]
  result[size - 1] += 1
  for (let index = size - 1; index >= 0; index--) {
    if (result[index] > maxValue) {
      if (index === 0) {
        return generateOffsets(size + 1)
      } else {
        result[index - 1]++
        result[index] = result[index - 1] + 1
      }
    }
  }

  if (result[size - 1] > maxValue) {
    return generateOffsets(size + 1)
  }

  return result
}

/**
 * Generates array of size N, filled with numbers sequence starting from 0.
 */
function generateOffsets (size: number = 1): Array<number> {
  // I know there are smarter solutions using `Array.fill`. But this is supposed to work in IE.
  return Array.apply(null, Array(size)).map((value, index) => index)
}
